const fs = require("fs");

// Écrire dans un fichier
fs.writeFileSync("welcome.txt", "Hello Node");

// Lire et afficher le fichier
fs.readFile("welcome.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Erreur de lecture du fichier", err);
    return;
  }
  console.log(data);
});
