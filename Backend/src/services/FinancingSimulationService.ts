import { Bank } from "../models/Bank";


export const findAllDataBanksService = async () => {
    const dataBanks = await Bank.findAll()
    if(!dataBanks){
        return new Error('Não Há Dados')
    }
    return dataBanks
}

export const findOneDataBankService = async (id:string | number) => {
        if(id){
            const findData = await Bank.findByPk(id) 
            return findData ? findData : new Error('Error ao buscar id')
        }
        else{
            return new Error('Id não especificado')
        }
} 

export const performFinancingSimulation = () => {

}