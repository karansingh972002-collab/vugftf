const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const PORT = Number(process.env.PORT || 5500);
const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, "data");
const JSON_LIMIT = 1024 * 1024;

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml; charset=utf-8",
  ".webp": "image/webp",
  ".ico": "image/x-icon"
};

function ensureDataFile(name) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  const file = path.join(DATA_DIR, `${name}.json`);
  if (!fs.existsSync(file)) fs.writeFileSync(file, "[]\n", "utf8");
  return file;
}

function readJson(name) {
  const file = ensureDataFile(name);
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    return [];
  }
}

function writeJson(name, value) {
  fs.writeFileSync(ensureDataFile(name), `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function sendJson(res, status, body) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  res.end(JSON.stringify(body));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > JSON_LIMIT) {
        reject(new Error("Request body too large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
    req.on("error", reject);
  });
}

function staticPath(urlPath) {
  const requested = urlPath === "/" ? "/index.html" : decodeURIComponent(urlPath);
  const filePath = path.normalize(path.join(ROOT, requested));
  if (!filePath.startsWith(ROOT)) return null;
  if (fs.existsSync(filePath)) return filePath;

  const htmlPath = `${filePath}.html`;
  if (!path.extname(filePath) && fs.existsSync(htmlPath)) return htmlPath;

  if (!path.extname(filePath)) return path.join(ROOT, "index.html");
  return filePath;
}

async function handleApi(req, res, pathname) {
  if (pathname === "/api/health" && req.method === "GET") {
    sendJson(res, 200, { ok: true, app: "Kairo Kart", port: PORT });
    return true;
  }

  if (pathname === "/api/orders" && req.method === "GET") {
    sendJson(res, 200, readJson("orders"));
    return true;
  }

  if (pathname === "/api/orders" && req.method === "POST") {
    const order = await readBody(req);
    const orders = readJson("orders");
    orders.push({ ...order, savedAt: new Date().toISOString() });
    writeJson("orders", orders);
    sendJson(res, 201, { ok: true, order });
    return true;
  }

  if (pathname === "/api/orders" && req.method === "DELETE") {
    writeJson("orders", []);
    sendJson(res, 200, { ok: true });
    return true;
  }

  if (pathname === "/api/messages" && req.method === "POST") {
    const message = await readBody(req);
    const messages = readJson("messages");
    messages.push({ ...message, savedAt: new Date().toISOString() });
    writeJson("messages", messages);
    sendJson(res, 201, { ok: true });
    return true;
  }

  if (pathname === "/api/subscribers" && req.method === "POST") {
    const subscriber = await readBody(req);
    const subscribers = readJson("subscribers");
    if (subscriber.email && !subscribers.some((entry) => entry.email === subscriber.email)) {
      subscribers.push({ email: subscriber.email, savedAt: new Date().toISOString() });
    }
    writeJson("subscribers", subscribers);
    sendJson(res, 201, { ok: true });
    return true;
  }

  return false;
}

const server = http.createServer(async (req, res) => {
  try {
    const { pathname } = new URL(req.url, `http://${req.headers.host}`);

    if (pathname.startsWith("/api/")) {
      const handled = await handleApi(req, res, pathname);
      if (!handled) sendJson(res, 404, { error: "API route not found" });
      return;
    }

    const filePath = staticPath(pathname);
    if (!filePath || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      "Content-Type": mimeTypes[ext] || "application/octet-stream",
      "Cache-Control": ext === ".html" ? "no-store" : "public, max-age=3600"
    });
    fs.createReadStream(filePath).pipe(res);
  } catch (error) {
    sendJson(res, 500, { error: error.message || "Server error" });
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Kairo Kart running at http://localhost:${PORT}`);
});
