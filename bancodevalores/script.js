let table = document.getElementById('selectTable')
let res = document.getElementById('result')
let array = []
let arr = []
function add() {
    let number = Number(document.getElementById('txtNumber').value)
    var check = array.indexOf(number)

    if (number == "" || number < 1 || number > 100 || check != -1) {
        alert("Valor inválido ou já encontrado")
    } else {
        res.innerText = ""
        array.push(number)
        var item = document.createElement('option')
        item.text = `Valor ${number} adicionado`
        table.appendChild(item)
    }
    document.getElementById('txtNumber').value = ''
}

function showData() {
    if (array != "") {
        //Maior e menor valor
        var biggerNumber = Math.max(...array)
        var lowestNumber = Math.min(...array)
        // Soma de todos so valores
        var sum = array.reduce(function (accumulator, currentV) {
            return accumulator + currentV;
        })
        // Média dos valores
        var avg = array.reduce(function (accumulator, currentV, i) {
            return (accumulator + currentV) / (i + 1);
        })
        let dataValues = [
            `Ao todo temos ${array.length} números cadastrados`,
            `O maior valor informado foi: ${biggerNumber}`,
            `O menor valor informado foi: ${lowestNumber}`,
            `A soma de todos os valores é: ${sum}`,
            `A média dos valores digitados é: ${avg}`
        ]
        for (let c = 0; c <= 4; c++) {
            var data = document.createElement('p')
            data.innerText = dataValues[c]
            res.appendChild(data)
        }
    } else {
        alert("Adicione os valores!")
    }
}
