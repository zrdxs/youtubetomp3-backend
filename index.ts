import express from "express";
import cors from "cors";
import routes from "./Routes";
import path from 'path'

const server = express();

server.use(cors({
  origin: '*'
}));

server.use(express.json());
server.use(routes);
server.get('/teste', (req, res) => {
    res.send('Backend Funcionado' + path.join(__dirname,))
})

const port: number = 3333;

server.listen(port, () => {
  console.log("Backend is Running");
});
