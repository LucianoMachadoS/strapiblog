const { createStrapi } = require("@strapi/strapi");

const app = createStrapi({
  distDir: "./dist", // Importante: Strapi 5 usa 'dist' por padrão
});

app.start();
