function count() {
    let start = Number(document.getElementById('start').value)
    let end = Number(document.getElementById('end').value)
    let increment = Number(document.getElementById('increment').value)
    let count = start
    let result = document.getElementById('result')

    /* ----------- Validações ---------------- */
    if (start == "" || end == "") {
        result.innerHTML = "Impossível contar"
    } else {
        result.innerHTML = `Contando: <br>`
        if (increment <= 0 || increment > end || increment == "") {
            alert('Passo invalido! Considerando PASSO 1 !')
            increment = 1
        }
        /* ------------- Contagem ---------------- */
        // crescente
        if (start < end) {
            for (count; count <= end; count += increment) {
                result.innerHTML += `${count} \u{1F449}`
            }
        // decrescente
        } else {
            for (count; count >= end; count -= increment) {
                result.innerHTML += `${count} \u{1F449}`
            }
        }
        result.innerHTML += `\u{1F3C1}`
    }
}