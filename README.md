<h1 align="center">📚 Book Review App ✨</h1>

<div align="center">
    <a href="https://jedev1.itch.io/book-review" target="_blank"> 
        <img src="https://i.ibb.co/PvmND5Sk/CONFIRA-O-PROJETO-AQUI-1.png" alt="Preview do app" /> 
    </a> 
</div>

<p align="center">
  <b>Um aplicativo mobile para resenhas de livros, feito com foco em praticidade, experiência do usuário e integração com banco de dados moderno.</b>
</p>

---

## 🚀 Tecnologias utilizadas

- ⚛️ **React Native + Expo** → Aplicativo mobile multiplataforma  
- ⚙️ **Node.js + Express** → Backend robusto e escalável  
- 🗄 **MongoDB** → Banco de dados NoSQL para armazenar usuários e resenhas  
- 🔐 **JWT** → Autenticação segura e moderna  
- 🎨 **Interface intuitiva** → Foco em experiência do usuário  

<div align="right">
  <img src="https://img.shields.io/badge/React_Native-0C1552?style=for-the-badge&logo=react&logoColor=%2361DAFB" height="40" alt="react logo" />
  <img width="12" />
  <img src="https://img.shields.io/badge/Expo-000000?style=for-the-badge&logo=expo&logoColor=white" height="30" alt="expo logo" />
  <img width="12" />
  <img src="https://img.shields.io/badge/node.js-13700A?style=for-the-badge&logo=node.js&logoColor=white" height="40" alt="nodejs logo" />
  <img width="12" />
  <img src="https://img.shields.io/badge/MongoDB-13700A?style=for-the-badge&logo=mongodb&logoColor=white" height="40" alt="mongodb logo" />
</div>

---

## ⚙️ Configuração do ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```bash
PORT=3000
MONGO_URI=...
JWT_SECRET=...
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
API_URL=...
```

# ▶️ Como rodar o projeto
### 🔹 Backend (API)

Rode:
```bash
npm install
npm run dev
```

A API estará disponível em: http://localhost:3000

### 🔹 Mobile (Expo)

Na pasta `mobile/`, rode:
```bash
npm install
npx expo start
```

O app abrirá no emulador ou no celular via Expo Go 📱

# 📂 Estrutura do projeto
├── backend/ # API (Node.js + Express + MongoDB) </br>
├── mobile/ # Aplicativo Expo (React Native) </br>
├── preview-book-review.png </br>
├── .env.example # Exemplo de variáveis de ambiente </br>
└── README.md <- Aqui está você 😁 </br>

# ✅ Funcionalidades
- 📖 Criar, visualizar e editar resenhas de livros
- ⭐ Salvar livros favoritos e acompanhar leituras
- 🔐 Login seguro com JWT
- 🗄 Persistência de dados em MongoDB
- 📦 Integração completa entre mobile e backend

# 📜 Licença
Este projeto é open-source sob a licença MIT. </br>
Sinta-se à vontade para usar, modificar e contribuir! 🚀

# 🐱‍💻 Autor
Feito com 💙 por João Enrique
<div align="right"> 
    <a href="https://www.linkedin.com/in/joao-enrique-dev/" target="_blank"> 
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin logo" /> 
    </a> 
    <a href="https://www.youtube.com/@joaocodedev" target="_blank"> 
        <img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="youtube logo" /> 
    </a> 
    <a href="https://jedev1.itch.io/" target="_blank"> 
        <img src="https://img.shields.io/badge/Itch.io-FA5C5C?style=for-the-badge&logo=itchdotio&logoColor=white" alt="itch logo" /> 
    </a> 
    <a href="https://www.instagram.com/joao__dev/" target="_blank"> 
        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="instagram logo" /> 
    </a> 
    <a href="https://www.tiktok.com/@joao__code" target="_blank"> 
        <img src="https://img.shields.io/badge/TikTok-000000?style=for-the-badge&logo=tiktok&logoColor=white" alt="tiktok logo" /> 
    </a> 
</div>
