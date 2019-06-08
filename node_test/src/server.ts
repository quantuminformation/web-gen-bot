import express from "express";
import fs from "fs";

const files = fs.readdirSync("./src/resources/exampleHTMLs");

import { Request, Response } from "express";
const app = express();
const port = 3000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/getExampleList", (req: Request, res: Response) => res.send(files));

app.get("/getExampleContents", (req: Request, res: Response) => {
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
    res.setHeader("Content-Type", "application/json");
    let fullContent: string[] = [];
    results.forEach((content: string) => {
      fullContent.push(content);
    });
    res.end(JSON.stringify(fullContent));
  });

  //  res.send();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
