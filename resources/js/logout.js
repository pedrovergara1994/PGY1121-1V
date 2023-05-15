const existeUsuario = () => {
    let user = localStorage.getItem('user');
    console.log(user);
    return user !== null && user !== undefined ? true : false;
}


const cleanStore = () => {
    localStorage.removeItem('user');
    window.location.href= 'index.html';
}
const user = localStorage.getItem('user');
const existe = user !== null && user !== undefined ? true : false;
window.document.getElementById('login').hidden = existe; 
window.document.getElementById('logout').hidden = !existe; 