import fs from 'fs';
import path from 'path';

const dataDirectory = path.join('files');

/**The file where the data is stored. */
const fileName = path.join('files', 'items.json');

/**
 * Create the file where data is stored if it does not exist yet.
 */
export function createDatabase() {
  //create Directory if it does not exist
  if (!fs.existsSync(fileName)) {
    fs.mkdirSync(dataDirectory);
  }

  //create file if it does not existr
  if (!fs.existsSync(fileName)) {
    fs.writeFileSync(fileName, JSON.stringify({}));
  }
}
