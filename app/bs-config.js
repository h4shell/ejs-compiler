module.exports = {
  proxy: "http://localhost:3000",
  files: ["views/**/*.*", "public/**/*.*"],
  port: 3001,
  open: false, // Disabilita l'apertura automatica del browser
};
