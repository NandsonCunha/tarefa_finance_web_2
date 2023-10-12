export function factorr (monthlyInterestRate:number,qtdIntallments:number){
    return Math.pow(1 + monthlyInterestRate, qtdIntallments)
}
export function monthlyInterestRatee(anul_rate:number){
        return anul_rate/12/100
}
export function monthlyPaymentt(monthlyInterestRatee:number,valueFinancing:number,factor:number){
   return (valueFinancing * monthlyInterestRatee * factor) / (factor - 1)
}