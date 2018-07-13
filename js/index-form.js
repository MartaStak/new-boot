document.querySelector('.send-form button[type=button]')
    .addEventListener('click', sendForm);
    
function sendForm(e) {
    const form = document.querySelector('.send-form');
    if (form.checkValidity()) { 
        e.preventDefault();
        fetch('form', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                name: document.querySelector('.send-form input[name=name]').value,
                email: document.querySelector('.send-form input[name=email]').value,
            })
        })
        .then( response => {
            form.reset();
        } )
    }
}
