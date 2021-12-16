import { copySync } from "fs-extra";
import path, { join } from "path";

const __dirname = path.resolve();

(function main() {
  const filter = (s) => s.split(".").pop() !== ".js";

  const defaultPath = join(__dirname, `src/client/views`);
  const defaultDistPath = join(__dirname, `dist/views`);

  try {
    copySync(defaultPath, defaultDistPath, filter);
  } catch (err) {
    console.log(
      "%c Unable to copy files",
      "color: lightCoral; font-weight: bold"
    );
  }
})();
