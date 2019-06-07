import express from "express";
import fs from "fs";

const files = fs.readdirSync("./src/resources/exampleHTMLs");

import { Request, Response } from "express";
const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => res.send(files));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
