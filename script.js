

// function to get form input value
function formValidation () {
    const formE = document.querySelector('form');
    formE.addEventListener('submit', (event) => {
        event.preventDefault();
        inputValue = document.querySelector('input').value
    })
};

