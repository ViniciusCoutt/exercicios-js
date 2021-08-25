let balance = {
    incomes: [],
    expenses: [],
}

function sumArrayValues(array) {
    let total = 0;
    for(let value of array) {
         total += value
    } 
    return total
}

function calcBalance() {
    const incomeSum = sumArrayValues(balance.incomes)
    const expenseSum = sumArrayValues(balance.expenses)
    const balanceResult = incomeSum - expenseSum
    let result = "negativo"

    if (balanceResult > 0) {
        result = "positivo"
    } else if (balanceResult == 0){
        result = "zerado"
    }

    console.log(`Seu saldo está ${result}! Valor: ${balanceResult}`)
}

balance.incomes.push(100, 100)
balance.expenses.push(100, 100)
calcBalance()