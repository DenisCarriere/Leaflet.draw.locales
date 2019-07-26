import * as fs from "fs";
import * as path from "path";
import { languages } from "../";

// Check if language exist in README.md
test("README", () => {
    for (const language of languages) {
        expect(fs.readFileSync(path.join(__dirname, "..", "README.md"), "utf8")).toMatch(language);
    }
});
