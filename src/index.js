export const paintCards = () => {
    const colorCard = document.querySelectorAll('li:nth-child(odd)');
    for (let li of colorCard) {
        li.style.backgroundColor = 'red';
    }
};

export const findElement = () => {

    let elementLi = document.querySelector('li');
    while (elementLi) {
        if (elementLi.matches('.likedItem')) {
            elementLi.style.backgroundColor = 'blue';
            break
        } else {
            elementLi = elementLi.nextElementSibling;
        }
    }
};