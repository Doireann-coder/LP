/*Global Variables*/
const allSections = document.querySelectorAll('section');
const navig = document.querySelector('ul');
navig.setAttribute('style', 'font-size: 3em;');

/**
 * End Global Variables
 * Start Helper Function
 * 
 */
// select the first (main) heading of the page*/

const lookit = document.createElement('span');
lookit.textContent = " Landy Land";
const mainHeading = document.querySelector('h1');
mainHeading.appendChild(lookit);



//* Navigation Bar Function*/
let options = () => {
    for (let i = 0; i < allSections.length; i++) {
        const oneSection = allSections[i];
        const content = oneSection.getAttribute('data-nav');
        const items = document.createElement('li');
        const link = document.createElement('a');
        link.setAttribute('href', `#${oneSection.id}`);
        link.textContent = content;
        items.appendChild(link);
        navig.appendChild(items);
        link.style.color = "#fff";
        link.style.textDecoration = "none";
        link.style.paddingRight = "1vw";
        link.style.fontFamily = "'Oxygen', Sans-Serif";
    }
}

/* Navigation bar function called*/
options();


/* Add class 'active' to section when near top of viewport*/
let activeSection = () => {
    for (const section of allSections) {
        const view = section.getBoundingClientRect();
        if (view.top >= 0 && view.left >= 0) {
            section.classList.add("your-active-class");
            console.log("a bit of added class")
        } else {
            section.classList.remove("your-active-class")
            console.log("a little less classy");
        }
    }
}
/*event listener added here*/
document.addEventListener('scroll', function() {
    activeSection();
})


/*Selected section from Navigation bar is scrolled into view*/
let clickTheMenu = () => {
    const links = navig.querySelectorAll('a');
    for (let k = 0; k < links.length; k++) {
        const link = links[k];
        const toSection = allSections[k];
        const sectionId = toSection.id;
        link.addEventListener('click', function() {
            toSection.scrollIntoView({
                behavior: "smooth",
                block: "end"
            });
            console.log(link.textContent + " was clicked");
        })
    }
}

/*function for scroll into view is called here */
clickTheMenu();


/*to hide Navigation bar is user stops scrolling*/
let timer = null;

window.addEventListener('scroll', function() {
    if (timer !== null) {
        clearTimeout(timer);
        navig.style.display = "block";
    }
    timer = setTimeout(function() {
        navig.style.display = "none";
    }, 2000);
});
/*Navigation bar reappears when user starts scrolling again*/
window.onscroll = function() {
    navig.style.display = "block";
}
