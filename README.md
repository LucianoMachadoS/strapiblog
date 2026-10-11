# 🚀 Blog Strapi — versão de deploy (AWS)

Versão de **produção** do [blog-strapi](https://github.com/LucianoMachadoS/blog-strapi), preparada para rodar em um servidor na **AWS**.

![Strapi](https://img.shields.io/badge/Strapi_5-4945FF?style=flat&logo=strapi&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonwebservices&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white)

## Por que este repositório tem a pasta `dist/`

O build do painel administrativo do Strapi consome mais memória do que o servidor da AWS tinha disponível, e o processo falhava no servidor. A solução foi:

1. Rodar `npm run build` na minha máquina
2. Versionar a pasta `dist/` já compilada neste repositório
3. No servidor, apenas instalar as dependências e iniciar com um `server.js` que aponta para o `dist/`

```js
const { createStrapi } = require("@strapi/strapi");
const app = createStrapi({ distDir: "./dist" });
app.start();
```

Assim o servidor só executa o Strapi, sem precisar compilar nada.

## 🚀 Como subir no servidor

```bash
git clone https://github.com/LucianoMachadoS/strapiblog.git
cd strapiblog
npm install --omit=dev
# configure o .env (banco PostgreSQL e Cloudinary)
node server.js
```

## 📚 O que aprendi

Deploy de uma aplicação Node em servidor Linux na AWS, limites de memória em instâncias pequenas e separação entre build e execução.

---
Projeto desenvolvido no curso *JavaScript e TypeScript do básico ao avançado* (Luiz Otávio Miranda, Udemy).
Feito por [Luciano Machado](https://github.com/LucianoMachadoS) · [LinkedIn](https://www.linkedin.com/in/luciano-machado-9253a1265/)
