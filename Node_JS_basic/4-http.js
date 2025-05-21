const http = require('http'); // Import du module HTTP

// Création du serveur
const app = http.createServer((req, res) => {
  res.statusCode = 200; // Code de réponse OK
  res.setHeader('Content-Type', 'text/plain'); // Type de contenu
  res.end('Hello Holberton School!'); 
});

// Le serveur écoute sur le port 1245
app.listen(1245);

// Export du serveur (obligatoire pour le checker)
module.exports = app;
