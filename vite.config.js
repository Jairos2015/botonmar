// vite.config.js
module.exports = {
  /*
  build: {
    minify: false // Deshabilita la minificación
  }
  */
  // ...
  build: {
    minify: {
      terserOptions: {
        format: {
          comments: true, // Conserva los comentarios
          beautify: true // Formatea el código
        }
      }
    }
  }
}
