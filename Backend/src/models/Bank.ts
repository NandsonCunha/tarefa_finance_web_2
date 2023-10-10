import {Model,DataTypes} from 'sequelize'        
import {sequelize} from '../database/mysql'    
interface BankInstance extends Model{   
    id:number,
    name:string,
    anual_interest_rate:number,
    max_installments:number
}
export const Bank = sequelize.define<BankInstance>("Bank",{
    id:{                           
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true
    },
    name:{			  
        type:DataTypes.STRING
    },
    anual_interest_rate:{                  
        type:DataTypes.FLOAT,
        allowNull:false
    },
    max_installments:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},{
    tableName:'bank',      
    timestamps:false     
})


Bank.sync().then(()=>console.log('Tabela Banco criado com sucesso')).catch((error)=> console.log('Houve error',error))