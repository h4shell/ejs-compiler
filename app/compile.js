const ejs = require("ejs");
const fs = require("fs");
const path = require("path");
const fsExtra = require("fs-extra");

async function compileEJS(data = {}) {
  // Copia i file statici
  await fsExtra.copy(
    path.join(__dirname, "public"),
    path.join(__dirname, "build")
  );

  // Leggi il template EJS
  const templatePath = path.join(__dirname, "views", "index.ejs");
  const template = fs.readFileSync(templatePath, "utf-8");

  // Renderizza il template
  const html = await ejs.render(template, data, {
    filename: templatePath, // Specifica il file di origine per le inclusioni
  });

  // Scrivi l'output in un file HTML
  const outputPath = path.join(__dirname, "build", "index.html");
  fs.writeFileSync(outputPath, html);
  return outputPath;
}

// Esegui la funzione
compileEJS()
  .then((outputPath) => {
    console.log(`File HTML generato: ${outputPath}`);
  })
  .catch((err) => {
    console.error(err);
  });
