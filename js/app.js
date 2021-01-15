/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const allSections = document.querySelectorAll('section');   
const navig = document.querySelector('ul'); 
navig.setAttribute('style', 'background: rgb(136,203,171); border-bottom: 1px solid #cc1; font-family: Sans-Serif; font-size: 3em; color: white;');




/**
 * End Global Variables
 * Start Helper Function
 * 
*/








// select the first (main) heading of the page

const lookit = document.createElement('span');
lookit.textContent = " landy land";
const mainHeading = document.querySelector('h1');
mainHeading.appendChild(lookit);
// add the <span> element as the last child element of the main heading

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function options(){ 
  for(let i=0; i<allSections.length; i++){  
  const oneSection = allSections[i];  
  const content = oneSection.getAttribute('data-nav'); 
  const items = document.createElement('li');     
  const link = document.createElement('a');   
  link.setAttribute('href', `#${oneSection.id}`);   
  link.textContent = content; 
  items.appendChild(link); 
  navig.appendChild(items);  

}}; 
  
   
   
  options();
  

// Add class 'active' to section when near top of viewport
function activeSection(){
for(const section of allSections){
const view = section.getBoundingClientRect();
  if(view.top>=0 && view.left>=0){
    
  section.classList.add("your-active-class");
  document.querySelector(".your-active-class").style.backgroundColor = 'blue';
  console.log("a bit of added class")
}else{section.classList.remove("your-active-class")
console.log("a little less classy");}
    }
};

document.addEventListener('scroll', function(){
  activeSection();
})


// Scroll to anchor ID using scrollTO event
function clickTheMenu(){ 
const links = navig.querySelectorAll('a'); 

  for(let k=0; k<links.length; k++){
    const link = links[k];
    const toSection = allSections[k];
    const sectionId = toSection.id;
    
     link.addEventListener('click', function () {
        toSection.scrollIntoView();
        console.log(link.textContent + " was clicked");
      })}}; 

          clickTheMenu();

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


    