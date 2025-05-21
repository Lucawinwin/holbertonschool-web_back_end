#!/usr/bin/node

const fs = require('fs').promises;

/**
 * Counts students in a CSV data file and prints statistics.
 * @param {string} path - Path to the CSV file.
 * @returns {Promise} A promise that resolves when counting is complete.
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
        // Split the data into lines
        const lines = data
          .trim()
          .split('\n')
          .filter(line => line.trim() !== ''); // Remove empty lines
        
        // Extract the header and remove it from lines
        const header = lines[0].split(',');
        const studentLines = lines.slice(1);
        
        if (studentLines.length === 0) {
          console.log('Number of students: 0');
          return resolve();
        }
        
        console.log(`Number of students: ${studentLines.length}`);
        
        // Organize students by field
        const fieldIndex = header.indexOf('field');
        const firstNameIndex = header.indexOf('firstname');
        
        if (fieldIndex === -1 || firstNameIndex === -1) {
          reject(new Error('Invalid CSV format'));
          return;
        }
        
        const studentsByField = {};
        
        studentLines.forEach((line) => {
          const studentData = line.split(',');
          const field = studentData[fieldIndex];
          const firstName = studentData[firstNameIndex];
          
          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          
          studentsByField[field].push(firstName);
        });
        
        // Print statistics for each field
        Object.keys(studentsByField).forEach((field) => {
          const students = studentsByField[field];
          console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        });
        
        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}
