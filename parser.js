// parser.js
import { parse } from 'csv-parser';
import fs from 'fs';
import { join } from 'path';

const filePath = join(__dirname, '../data/data.csv');

function parseCsvFile() {
  return new Promise((resolve, reject) => {
    const csvData = [];
    fs.createReadStream(filePath)
     .pipe(parse({ delimiter: ',' }))
     .on('data', (row) => csvData.push(row))
     .on('end', () => resolve(csvData))
     .on('error', (error) => reject(error));
  });
}

export default parseCsvFile;