$(document).ready(function(){
    
    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');

    hamberger.addEventListener('click', function(){
        mobileNav.classList.add('open');
    });

    times.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    });


});

const btn1 = document.getElementById('sgc');
const btn2 = document.getElementById('ragam');

const content_1 = document.getElementById('sgc-content');
const content_2 = document.getElementById('ragam-content');

btn1.addEventListener('click', () => {
    btn1.classList.add('clicked');
    btn2.classList.remove('clicked');
    content_1.classList.remove('hidden');
    content_2.classList.add('hidden');
});

btn2.addEventListener('click', () => {
    btn2.classList.add('clicked');
    btn1.classList.remove('clicked');
    content_2.classList.remove('hidden');
    content_1.classList.add('hidden');
});