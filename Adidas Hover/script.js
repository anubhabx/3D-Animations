let container = document.querySelector('.container');
let card = document.querySelector('.card');
let title = document.querySelector('.title');
let sneaker = document.querySelector('.sneaker img');
let purchase = document.querySelector('.purchase button');
let description = document.querySelector('.description');
let sizes = document.querySelector('.sizes');
let sizeBtn = document.querySelectorAll('.sizes button');

container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    title.style.transform = 'translateZ(150px)';
    sneaker.style.transform = 'translateZ(200px) rotateZ(45deg)';
    description.style.transform = 'translateZ(125px)';
    sizes.style.transform = 'translateZ(100px)';
    purchase.style.transform = 'translateZ(75px)';
});

container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = 'translateZ(0px)';
    sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
    description.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
});

sizeBtn.forEach((Element) => {
    Element.addEventListener('click', (e) => {
        sizeBtn.forEach((btn) => {
            if (btn !== Element) {
                btn.classList.remove('active');
            }
        });
        Element.classList.add('active');
    });
});
