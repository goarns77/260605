//환경 변수
const dotenv = require("dotenv");
dotenv.config();
// == require("dotenv").config();

//의존성
const express = require("express");
const PORT = process.env.PORT_01 ?? 3000;

//서버 세팅
const app = express();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

