function load() {
    var time = new Date() 
    var hora = time.getHours() + ' horas e ' + time.getMinutes() + ' minutos'  
    var img = document.getElementById('img')
    document.querySelector('section p').innerHTML = `Agora são ${hora}`
    
    if (hora >= 0 && hora < 12) {
        img.src = 'images/morning.jpg'
        document.body.style.background = "rgb(255 194 84)"
    } else if (hora >= 12 && hora < 18) {
        img.src = 'images/evening.jpg'
        document.body.style.background = "#fb702eb0"
    } else {
        img.src='images/night.jpg'
        document.body.style.background = "rgb(2 3 31)"
    }
}





