import http from "http";
import { parse } from "url";

const PORT = 3000;

let yafet = [
    {
        id: 1,
        title: "My first post",
        content: "This is my blog...",
        author: "Yafet",
        createdAt: "2026-03-20"
    }
];

function getRequestBody(req) {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', chunk => body += chunk.toString());
        req.on('end', () => {
            try {
                resolve(JSON.parse(body || '{}'));
            } catch (err) {
                reject(err);
            }
        });
    });
}

const server = http.createServer(async (req, res) => {
    const url = parse(req.url, true);
    const method = req.method;

    // GET ALL POSTS
    if (method === "GET" && url.pathname === "/yafet") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(yafet));
        return;
    }

    // GET SINGLE POST
    if (method === "GET" && url.pathname.startsWith("/yafet/")) {
        const id = parseInt(url.pathname.split("/")[2]);
        const post = yafet.find(t => t.id === id);

        if (post) {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(post));
        } else {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Post not found" }));
        }
        return;
    }

    // CREATE POST
    if (method === "POST" && url.pathname === "/yafet") {
        try {
            const body = await getRequestBody(req);
            const newPost = {
                id: yafet.length + 1,
                title: body.title,
                content: body.content,
                author: body.author,
                createdAt: new Date().toISOString()
            };

            yafet.push(newPost);

            res.writeHead(201, { "Content-Type": "application/json" });
            res.end(JSON.stringify(newPost));
        } catch {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Invalid JSON" }));
        }
        return;
    }

    // UPDATE POST
    if (method === "PUT" && url.pathname.startsWith("/yafet/")) {
        try {
            const id = parseInt(url.pathname.split("/")[2]);
            const body = await getRequestBody(req);

            const post = yafet.find(t => t.id === id);

            if (post) {
                post.title = body.title ?? post.title;
                post.content = body.content ?? post.content;
                post.author = body.author ?? post.author;

                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify(post));
            } else {
                res.writeHead(404, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "Post not found" }));
            }
        } catch {
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Invalid JSON" }));
        }
        return;
    }

    // DELETE POST
    if (method === "DELETE" && url.pathname.startsWith("/yafet/")) {
        const id = parseInt(url.pathname.split("/")[2]);
        const index = yafet.findIndex(t => t.id === id);

        if (index !== -1) {
            const deleted = yafet.splice(index, 1);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(deleted[0]));
        } else {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Post not found" }));
        }
        return;
    }

    // NOT FOUND
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});