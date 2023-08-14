const http = require("http");
const fs = require("fs");
const path = require("path");

//Сервер
http
  .createServer((req, res) => {
    const commonFilePath = path.join(__dirname, "../", "build", req.url);
    const filePath = req.url.endsWith("/")
      ? path.join(commonFilePath, "./index.html")
      : commonFilePath;

    fs.readFile(filePath, (err, file) => {
      if (err) {
        res.statusCode = 500;
        res.write(JSON.stringify(err));
        return res.end();
      }

      res.write(file);
      res.end();
    });
  })
  .listen(8000); // Слушаем 8000 порт
process.on("SIGINT", () => {
  console.log("Bye bye!");
  process.exit();
});
