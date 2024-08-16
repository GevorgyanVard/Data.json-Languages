const itemContainer = document.querySelector('.items');
const sec2info = document.querySelector('.info');
const sec3info = document.querySelector('.sec3Container');
const sec4info = document.querySelector('.sec4container');
const sec5info = document.querySelector('.sec5container');
const sec6info = document.querySelector('.sec6container');
const sec7info = document.querySelector('.sec7container');
const footerContainer = document.querySelector('.footerContainer');
const footerContact = document.querySelector('.footerContact');
const readMoreSec2 = document.querySelector('.sec2 .readMore');
const readMoreSec3 = document.querySelector('.sec3 .readMore3');
const getStarted = document.querySelector('.getStarted');
const getStarted1 = document.querySelector('.getStarted1');
let currentLanguage = 'en';

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const menuWindow = document.getElementById('menuWindow');
    const languageLinks = document.querySelectorAll('.language-selector a');

    menuIcon.addEventListener('click', () => {
        menuWindow.style.display = (menuWindow.style.display === 'none' || menuWindow.style.display === '') ? 'block' : 'none';
    });

    document.addEventListener('click', (event) => {
        if (!menuIcon.contains(event.target) && !menuWindow.contains(event.target)) {
            menuWindow.style.display = 'none';
        }
    });

    languageLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            currentLanguage = link.getAttribute('data-lang');
            showInfo();
        });
    });
});
async function showInfo() {
    const response = await fetch("data.json");
    const data = await response.json();

    const firstSection = data.firstAbout;
    const secondSection = data.secondAbout;
    const thirdSection = data.thirdAbout;
    const forthSection = data.clients;
    const fifthSection = data.testimonials;
    const sixthSection = data.sixthAbout;
    const footer = data.footer;
    const footerCont = data.footerContact;
    const seventhSection = data.follow;
    const readMoreData = data.read;
    const getStartedData = data.start;

    readMoreSec2.innerHTML = readMoreData[0].title[currentLanguage];



    sec2info.innerHTML = "";
    sec3info.innerHTML = "";
    sec4info.innerHTML = "";
    sec5info.innerHTML = "";
    sec6info.innerHTML = "";
    sec7info.innerHTML = "";
    footerContainer.innerHTML = "";
    footerContact.innerHTML = "";
    itemContainer.innerHTML = '';

    let firstSectionHTML = '';
    firstSection.forEach(e => {
        firstSectionHTML += `
            <div class="item">
               <i class="${e.icon}"></i>
               <h1>${e.title[currentLanguage]}</h1>
               <p>${e.description[currentLanguage]}</p>
            </div>
        `;
    });
    itemContainer.innerHTML = firstSectionHTML;

    let secondSectionHTML = '';
    secondSectionHTML += `<h1>${secondSection[0].title[currentLanguage]}</h1>`;

    secondSection.forEach((e, index) => {
        if (index > 0) {
            secondSectionHTML += `
                <div class="infoSec">
                   <i class="${e.icon}"></i>
                   <p>${e.description[currentLanguage]}</p>
                </div>
            `;
        }
    });

    sec2info.innerHTML = secondSectionHTML;

    let thirdSectionHTML = '';

    thirdSectionHTML += `
        <div class="main3DIv">
            <h1>${thirdSection[0].mainTitle[currentLanguage]}</h1>
            <p>${thirdSection[0].mainDescription[currentLanguage]}</p>
        </div>
    `

    thirdSection.forEach((e, index) => {
        if (index > 0) {
            thirdSectionHTML += `
                <div class="infoThird">
                   <h1>${e.title[currentLanguage]}</h1>
                   <p>${e.description[currentLanguage]}</p>
                </div>
            `;
        }
    });

    readMoreSec3.innerHTML = readMoreData[0].title[currentLanguage];

    sec3info.innerHTML = thirdSectionHTML;

    let fothSectionHTML = '';

    forthSection.forEach((e) => {
        fothSectionHTML += `
                <div class="infoForth">
                   <h1>${e.title[currentLanguage]}</h1>
                   <p>${e.description[currentLanguage]}</p>
                </div>
            `;
    });

    sec4info.innerHTML = fothSectionHTML;

    let fifthSectionHTML = '';

    fifthSectionHTML += `<h1>${fifthSection[0].mainTitle[currentLanguage]}</h1>`;

    fifthSection.forEach((e, index) => {
        if (index > 0) {
            fifthSectionHTML += `
                <div class="infoFifth">
                <div class="imgCont">
                <img src="${e.img}"/>
                </div>
                <div class="text">
                   <p>${e.about[currentLanguage]}</p>
                   <p class="name">${e.name[currentLanguage]}</p>
                </div>
                </div>
            `;
        }
    });

    sec5info.innerHTML = fifthSectionHTML;

    let sixthSectionHTML = '';

    sixthSection.forEach((e) => {
        sixthSectionHTML += `
                <div class="infoSixth">
                    <h1>${e.title[currentLanguage]}</h1>
                    <p>${e.description[currentLanguage]}</p>
                </div>
            `;
    });

    sec6info.innerHTML = sixthSectionHTML;

    getStarted.innerHTML = getStartedData[0].title[currentLanguage];



    let seventhSectionHTML = '';

    seventhSection.forEach((e) => {
        seventhSectionHTML += `
                <div class="infoSeven">
                    <h1>${e.title[currentLanguage]}</h1>
                    <p>${e.description[currentLanguage]}</p>
                </div>
            `;
    });

    sec7info.innerHTML = seventhSectionHTML;

    let footerSectionHTML = '';

    footer.forEach((e) => {
        footerSectionHTML += `
                <div class="infoFooter">
                    <h1>${e.title[currentLanguage]}</h1>
                    <p>${e.description[currentLanguage]}</p>
                </div>
            `;
    });

    getStarted1.innerHTML = getStartedData[0].title[currentLanguage];

    footerContainer.innerHTML = footerSectionHTML;

    let footerContactSectionHTML = '';

    footerCont.forEach((e) => {
        footerContactSectionHTML += `
                <div class="infoContact">
                <div class="contacts">
                <h1>${e.location[currentLanguage]}:</h1>
                <p>45 Pirrama Rd, Pyrmont NSW 2022</p>
                </div>
                <div class="contacts">
                <h1>${e.contacts[currentLanguage]}:</h1>
                <p>@infobakery.com (123) 123-1234</p>
                </div>
                <div class="contacts">
                <h1>${e.follow[currentLanguage]}:</h1>
                <p>Facebook Instagram</p>
                </div>
                </div>
            `;
    });


    footerContact.innerHTML = footerContactSectionHTML;
}

showInfo();

document.addEventListener('scroll', function () {
    const container = document.querySelector('.container');
    const img = container.querySelector('img');
    const info = container.querySelector('.info');
    const readMore = container.querySelector('.readMore');
    const readMore3 = document.querySelector('.readMore3');
    const sec3Container = document.querySelector('.sec3Container');
    const main3DIv = document.querySelector('.main3DIv')
    const sec4container = document.querySelector('.sec4container')
    const sec5container = document.querySelector('.sec5container')
    const sec6 = document.querySelector('.sec6')
    const sec7 = document.querySelector('.sec7')
    const sec6Img = sec6.querySelector('img')
    const sec7Img = sec7.querySelector('img')
    const sec6container = sec6.querySelector('.sec6container')
    const sec7Cont = sec7.querySelector('.sec7Cont')
    const getStarted = sec6.querySelector('.getStarted')
    const imgContainer4 = document.querySelector('.imgContainer')
    const title4 = sec4container.querySelector('h1')
    const title5 = sec5container.querySelector('h1')
    const testimonials = sec5container.querySelectorAll('.infoFifth')
    const images = imgContainer4.querySelectorAll('img')
    const footerContainer = document.querySelector('.footerContainer')
    const footerContact = document.querySelector('.footerContact')
    const infoContact = footerContact.querySelector('.infoContact')
    const getStarted1 = document.querySelector('.getStarted1')
    const footerh1 = footerContainer.querySelector('h1')
    const footerp = footerContainer.querySelector('p')

    console.log(scrollY);


    if (scrollY > 280) {
        img.style.animationName = 'Img';
        info.style.animationName = 'sec3bacground';
        readMore.style.animationName = 'readmore';
    } else {
        img.style.animationName = '';
        info.style.animationName = '';
        readMore.style.animationName = '';
    }

    if (scrollY > 1060) {
        sec3Container.style.animationName = 'sec3';
        main3DIv.style.animationName = "title3";
        readMore3.style.animationName = 'readmore';

    } else {
        sec3Container.style.animationName = '';
        main3DIv.style.animationName = '';
        readMore3.style.animationName = '';

    }

    if (scrollY > 2100) {
        title4.style.animationName = "title4";
        for (let i = 0; i < images.length; i++) {
            images[i].style.animationName = "ClientImages";

        }

    } else {
        title4.style.animationName = '';
        for (let i = 0; i < images.length; i++) {
            images[i].style.animationName = '';

        }
    }

    if (scrollY > 2970) {
        title5.style.animationName = "title5";
        for (let i = 0; i < testimonials.length; i++) {
            testimonials[i].style.animationName = 'sec3';

        }
    } else {
        title5.style.animationName = '';
        for (let i = 0; i < testimonials.length; i++) {
            testimonials[i].style.animationName = '';

        }
    }

    if (scrollY > 3900) {
        sec6Img.style.animationName = "imgToRight";
        sec6container.style.animationName = "sec6info";
        getStarted.style.animationName = "sec6info";

    } else {
        sec6Img.style.animationName = '';
        sec6container.style.animationName = '';
        getStarted.style.animationName = '';
    }

    if (scrollY > 4520) {
        sec7Img.style.animationName = "Img";
        sec7Cont.style.animationName = "Img";
    } else {
        sec7Img.style.animationName = '';
        sec7Cont.style.animationName = '';
    }

    if (scrollY > 5020) {
        footerh1.style.animationName = "Img";
        footerp.style.animationName = "Img";
        getStarted1.style.animationName = "sec6info";
        infoContact.style.animationName = "sec3";
    } else {
        footerh1.style.animationName = '';
        footerp.style.animationName = '';
        getStarted1.style.animationName = '';
        infoContact.style.animationName = '';
    }

});