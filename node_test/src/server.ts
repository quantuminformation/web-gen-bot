import express from "express";
import fs from "fs";

const files = fs.readdirSync("./src/resources/exampleHTMLs");

import { Request, Response } from "express";
const server = express();
const port = 3000;

server.get("/getExampleList", (req: Request, res: Response) => res.send(files));

server.get("/getExampleContents", (req: Request, res: Response) => {
  const promises = files.map(function(_path) {
    return new Promise((resolve, reject) => {
      console.log(__dirname);
      fs.readFile(
        `${__dirname}/resources/exampleHTMLs/${_path}`,
        "utf8",
        function(err, data) {
          if (err) {
            console.log(err);
            resolve(""); //following the same code flow
          } else {
            resolve(data);
          }
        }
      );
    });
  });

  Promise.all(promises).then(function(results) {
    res.writeHead(200, { "Content-Type": "text/json" });
    results.forEach(function(content) {
      res.write(content);
    });
    res.end();
  });

  //  res.send();
});

server.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
