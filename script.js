
let API_keys = '3869021086b53413c374a899138b0dfa';


let inputValue;

// function to get form input value
function formValidation () {
    const formE = document.querySelector('form');
    formE.addEventListener('submit', (event) => {
        event.preventDefault();
        inputValue = document.querySelector('input').value
        console.log(inputValue)

        // maybe the inputValue need to be process (toLowerCase ?)
    })
};

// async function to fetch API

async function getAPI (location) {
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_keys}&units=metric`, 
        {mode: 'cors'});
        const data = await response.json()
        console.table(data);
        return data
        
    } catch (error) {
        console.log(error)
    }
};

getAPI('Euzet')


// function who convert celsius into fahrenheit

function convertCelsiusToFahrenheit (celsius) {
    let fahrenheit = ((celsius) * (9/5) + 32)
    return Math.round((fahrenheit + Number.EPSILON) * 100) / 100
};


console.log(convertCelsiusToFahrenheit(40))









formValidation();