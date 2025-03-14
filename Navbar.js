document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');
    const nav = document.querySelector('.mobile-nav');
    const navLink = document.querySelector('.nav-link');


    btn.addEventListener('click', () => {
        if (nav.style.left === '-1000%' || nav.style.left === '') {
            nav.style.left = '0';
            document.body.style.overflowY = 'hidden'
            console.log('its working')
        } else {
            nav.style.left = '-1000%';
            console.log('its not working')
        }
    });

    navLink.addEventListener('click', () => {

        if (nav.style.left === '0' || nav.style.left === '') {
            nav.style.left = '-1000%';
            console.log('link is working')
        } else { 
            nav.style.left = '0';
            console.log('link is not working');
        }
    })
})