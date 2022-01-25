const tblRow = document.getElementsByClassName('tbl-row');

for(let i = 0; i < tblRow.length; i++) {
    tblRow[i].addEventListener('mouseenter', () => {
        tblRow[i].getElementsByClassName('my-card')[0].classList.add('card-background');
    });

    tblRow[i].addEventListener('mouseout', () => {
        tblRow[i].getElementsByClassName('my-card')[0].classList.remove('card-backgorund');
    })

    tblRow[i].addEventListener('click', () => {
        tblRow[i].classList.add('selected-click');
;    })
}

const mobileBtn = document.getElementById('mobile-cta');
const nav = document.querySelector('nav');
const mobileBtnExit = document.getElementById('mobile-exit');

// when someone clicks button, do whats inside arrow function

mobileBtn.addEventListener('click', () => {
    nav.classList.add('mobile-menu-disp');
});

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('mobile-menu-disp');
})

