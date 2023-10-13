import { Bank } from "../models/Bank";
import { BRL } from "../helpers/BrMoney";
import {factorr,monthlyInterestRatee,monthlyPaymentt} from '../helpers/CalcFinancing'
export const findAllDataBanksService = async () => {
    const dataBanks = await Bank.findAll({attributes:{exclude:['anual_interest_rate']}})
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

export const performFinancingSimulation = async (valueFinancing:number, name:string, qtdInstallments:number) => {
    if(valueFinancing && name && qtdInstallments){
        const nameBank = await Bank.findOne({where:{name}})
        if(nameBank && (Number.isInteger(qtdInstallments))) {
            if (qtdInstallments > nameBank.max_installments) {
                return new Error('O número de parcelas escolhido excede o limite do banco.');
            }         

            const monthPaymet = monthlyPaymentt(monthlyInterestRatee(nameBank.anual_interest_rate),valueFinancing,factorr(monthlyInterestRatee(nameBank.anual_interest_rate),qtdInstallments))
            return {
                monthlyPayment: BRL(monthPaymet),
                totalAmount: BRL(monthPaymet * qtdInstallments),
                bankName: nameBank.name,
                qtdInstallments:qtdInstallments
            };
        }
    }
    return new Error('Informe os dados corretamente');
}
