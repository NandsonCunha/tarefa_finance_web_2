import express,{Request,Response} from 'express'
import *  as ServicesBank from '../services/FinancingSimulationService'

export const findAllDataBankController = async (request:Request,response:Response) =>{
        const dataBank =  await ServicesBank.findAllDataBanksService()
        if(dataBank instanceof Error){
            response.json({error:dataBank.message}).status(404)
        }
        else{
            response.json({data:dataBank}).status(200)
        }
}


export const findOneDataBankController = async (request:Request,response:Response) =>{
        const bank = await ServicesBank.findOneDataBankService(request.body.id)
        if(bank instanceof Error){
            response.json({error:bank.message}).status(400)
        }
        else{
            response.json({bank:bank}).status(200)
            }
        }

export const financingSimulationController = (request:Request,response:Response) =>{
    
}