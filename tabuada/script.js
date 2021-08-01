function multiply() {
    let number = Number(document.getElementById('txtNumber').value)
    let table = document.getElementById('selectTable')

    if (number == "") {
        alert("Número não digitado")
    } else {
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