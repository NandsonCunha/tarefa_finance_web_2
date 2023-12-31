import path from "path";
import express,{Request,Response} from 'express'
import { banksData } from '../src/helpers/BankData' 
import { Bank } from "./models/Bank";  
import routersBank from '../src/routers/BankRouter'
import dotenv from 'dotenv'
import cors from 'cors'
import { sequelize } from "./database/mysql";
dotenv.config()
const server = express()
const corsOptions = {
  origin: 'http://localhost:3000', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
  credentials: true, 
  optionsSuccessStatus: 200
};
server.use(cors(corsOptions))
server.use(express.urlencoded({extended:true}))
server.use(routersBank)
server.use((req:Request,res:Response)=>{
     res.json({error:'pagina não encontrada'}).status(404)
})
async function checkIfBanksExist() {
     const count = await Bank.count();
     return count > 0;
   }
   
   async function createBanks() {
     const banksExist = await checkIfBanksExist();
   
     if (!banksExist) {
       await Bank.bulkCreate(banksData);
       console.log('Dados inseridos com sucesso!');
     }
   }

createBanks();
server.listen(process.env.PORT)