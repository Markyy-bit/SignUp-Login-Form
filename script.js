const wrapper = document.querySelector('.wrapper');
const showLogin = document.getElementById('showL');
const showSignup = document.getElementById('showS');

showLogin.addEventListener('click', () => {
    wrapper.classList.add('active');
});

showSignup.addEventListener('click', () => {
    wrapper.classList.remove('active');
});