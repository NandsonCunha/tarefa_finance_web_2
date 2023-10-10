import path from "path";
import express,{Request,Response} from 'express'
import { banksData } from '../src/helpers/BankData' 
import { Bank } from "./models/Bank";  

import dotenv from 'dotenv'
import { sequelize } from "./database/mysql";
dotenv.config()
const server = express()

server.use(express.urlencoded({extended:true}))
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