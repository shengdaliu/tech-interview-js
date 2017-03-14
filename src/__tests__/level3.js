import * as fs from "fs";
import { level3 } from "../answers";

it("level3", () => {
  const data = JSON.parse(fs.readFileSync("./src/level3.json", "utf8"));
  expect(level3(data)).toMatchSnapshot();
});
