import http from "http";

const PORT = 8888;

const server = http.createServer((request, response) => {
  if (request.url === "/" && request.method === "GET") {
    response.writeHead(200, { "content-type": "application/json" });
    response.write("Welcome to our very first API!");
    response.end();
  } else if (request.url === "/api/v1/welcome") {
    response.writeHead(200); // Write response header
    response.write("Welcome again!"); // Write response body
    response.end(); // Ending the response
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
