// Celsius to Fahrenheit and vice versa

function convertDegree(degree) {
    const isCelcius = degree.toUpperCase().includes('C');
    const isFahrenheit = degree.toUpperCase().includes('F');

    if(!isCelcius && !isFahrenheit) {
        throw new Error('Grau inválido')
    }

    // Primary flow Celsius -> Fahrenheit
    let formatedDegree = Number(degree.toUpperCase().replace("C", ""));
    let calcDegree = celsiusToFah => (celsiusToFah * 9/5) + 32
    let degreUnit = 'ºF'

    // Secondary flow Fahrenheit -> Celsius
    if(isFahrenheit) {
        formatedDegree = Number(degree.toUpperCase().replace("F", ""));
        calcDegree = FahToCelsius => (FahToCelsius - 32) * 5/9
        degreUnit = 'ºC'
    }

    return calcDegree(formatedDegree) + degreUnit
}

try {
    console.log(convertDegree('10C'))
    console.log(convertDegree('50F'))
} catch (error) {
    console.log(error.message)
}