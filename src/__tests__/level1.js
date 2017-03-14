import * as fs from "fs";
import { level1 } from "../answers";

it("level1", () => {
  const data = JSON.parse(fs.readFileSync("./src/level1.json", "utf8"));
  expect(level1(data)).toMatchSnapshot();
});
