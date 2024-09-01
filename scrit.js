// 1. Create a signup form and display form data in your web
// page on submission.

function displayFormData(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    document.getElementById('resultName').innerText = name;
    document.getElementById('resultEmail').innerText = email;
    document.getElementById('resultPassword').innerText = password;
    
    document.getElementById('resultContainer').style.display = 'block';
};