// Return the liquid salary minus the 30% tax
const liquidSal = new Function('hour,hourValor', 'return (hour * hourValor)*0.7');

console.log("Salário líquido igual a: " + liquidSal(180, 60).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))