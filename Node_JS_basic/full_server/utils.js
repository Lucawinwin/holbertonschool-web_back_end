const fs = require('fs');
const path = require('path');

/**
 * Reads a CSV database file asynchronously and returns a mapping of fields to first names.
 * @param {string} filePath - Path to the CSV database file.
 * @returns {Promise<Object>} - A Promise that resolves to an object mapping fields to arrays of first names.
 */
function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(filePath), 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const lines = data.trim().split('\n');
      const header = lines.shift().split(',');

      const fieldIndex = header.indexOf('field');
      const firstNameIndex = header.indexOf('firstname');

      if (fieldIndex === -1 || firstNameIndex === -1) {
        reject(new Error('Invalid file format'));
        return;
      }

      const result = {};

      lines.forEach(line => {
        const row = line.split(',');
        const field = row[fi]()

