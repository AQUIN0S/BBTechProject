import * as express from "express";
import * as bodyParser from "body-parser";
import { getAllTutors, getTutor, createTutor } from "./util/tutor";
import { Request, Response } from "express";
import { readFileSync } from "fs";

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get(["/", "/api/tutor"], (_, res) => {
  res.send(getAllTutors());
});

app.get("/api/tutor/:id", (req: Request, res: Response) => {
  const tutor = getTutor(Number(req.params.id));

  if (tutor) {
    res.send(tutor);
  } else {
    res.status(400).send("Sorry, that tutor does not exist!");
  }
});

app.post("/api/tutor", (req: Request, res: Response) => {
  const createdTutor = createTutor(req.body);

  if (createdTutor) {
    res.send(createdTutor);
  } else {
    res.status(400).send(readFileSync("./templates/400.html"));
  }
});

app.use((_req, res, _next) => {
  res.status(404).send("Sorry, that page does not exist!");
});

app.listen(port, () => {
  console.log("Now listening at http://localhost:" + port);
});
