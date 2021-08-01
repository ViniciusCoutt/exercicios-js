function clicar() {

    var nasc = Number(document.getElementById('nasc').value)
    var time = new Date() 
    var ano = time.getFullYear()
    var res = document.querySelector('div#result')
    idade = ano - nasc

    if (nasc == 0 || nasc > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        var formgender = document.getElementsByName('radsex') 
        
        if (formgender[0].checked) {
            gender = "homem"
            if ( idade >=0 && idade < 10) {
                img.setAttribute('src', 'images/pic-kid-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'images/pic-young-m.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'images/pic-adult-m.png')
            } else  {
                img.setAttribute('src', 'images/pic-old-m.png')
            }

        } else if (formgender[1].checked) {
            gender = "mulher"
            if ( idade >=0 && idade < 10) {
                img.setAttribute('src', 'images/pic-kid-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'images/pic-young-f.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'images/pic-adult-f.png')
            } else  {
                img.setAttribute('src', 'images/pic-old-f.png')
            }
        }
    }

    res.innerHTML = `Você é ${gender} com ${idade} anos`
    res.appendChild(img)
        
}
