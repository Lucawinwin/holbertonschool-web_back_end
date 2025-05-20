/**
 * Displays a message by printing it to STDOUT
 * @param {string} message - The message to be displayed
 */
function displayMessage(message) {
  process.stdout.write(message + '\n');
}

module.exports = displayMessage;
