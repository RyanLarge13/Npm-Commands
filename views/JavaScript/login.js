const submit = document.getElementById('login');
const baseUrl = 'http://localhost:8080/';

const setToken = () => {
    console.log('hey')
    fetch(baseUrl + 'login').then((res) => {
        console.log('At least i fucking made it this god damn far jesus christ all fuck')
        res.json().then((content) => {
            const token = content.Authorization.split(' ')[1];
            localStorage.setItem('token', token);
        })
    }).catch((err) => {
        console.log(err)
      })
}

submit.addEventListener('submit', setToken);