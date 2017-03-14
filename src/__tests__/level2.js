import * as fs from "fs";
import { level2 } from "../answers";

it("level2", () => {
  const data = JSON.parse(fs.readFileSync("./src/level2.json", "utf8"));
  expect(level2(data)).toMatchSnapshot();
});
