let table = document.getElementById('selectTable')
let click = ""

function multiply() {
    let number = Number(document.getElementById('txtNumber').value)
    if (number == "") {
        alert("Número não digitado")
    } else {
        click++ // Para contabilizar se afunção foi executada
        let counter = 1
        table.innerHTML = ""

        for (counter; counter <= 10; counter++) {
            var item = document.createElement('option')
            item.value = `tab${counter}` // Cria o atrubuto value dentro do option, com o nome: tab1...tab10 
            item.text = `${number} x ${counter} = ${number * counter}`
            table.appendChild(item)
        }
    }
}

function toClean() {
    if (click >= 1) {
        table.innerHTML = "<option> Campo limpo! Digite um novo número </option>"
    }
}
