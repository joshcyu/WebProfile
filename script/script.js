const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('remove');
    }
  })
});


const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));


firstButton();

function displayProject() {
  const showElement = document.querySelector('.js-show-button');
  const projectCon = document.querySelector('.js-project-container1');

  if (showElement.innerHTML === 'Thesis Capstone (Video and Website Link)') {
    showElement.innerHTML = 'Hide';
    projectCon.classList.remove('removeContainer');
  }
  else {
    showElement.innerHTML = 'Thesis Capstone (Video and Website Link)';
    projectCon.classList.add('removeContainer');
  }
}

function displayProject1() {
  const projectCon1 = document.querySelector('.js-project-container2');
  const showElem1 = document.querySelector('.js-show-button1');

  if (showElem1.innerHTML === 'Development Documentation') {
    showElem1.innerHTML = 'Hide';
    projectCon1.classList.remove('removeContainer');
  } else {
    showElem1.innerHTML = 'Development Documentation';
    projectCon1.classList.add('removeContainer');
  }
}

function displaySkills() {
  const skillsElement = document.querySelector('.showSkill');
  const buttonElement = document.querySelector('.js-view');

  console.log(buttonElement.innerHTML);
  if (buttonElement.innerHTML === 'View Skills <i class="fa-solid fa-gear"></i>') {
    skillsElement.classList.remove('newskill');
    buttonElement.innerHTML = 'Hide Skills <i class="fa-solid fa-gear"></i>';
  } else {
    buttonElement.innerHTML = 'View Skills <i class="fa-solid fa-gear"></i>';
    skillsElement.classList.add('newskill');
  }
}


function firstButton() {
  const bodyElement = document.querySelector('.js-body');
  const buttonElement = document.querySelector('.js-dark');
  const anchorElement = document.querySelector('.js-a');
  const anchorElement1 = document.querySelector('.js-b');
  const anchorElement2 = document.querySelector('.js-c');
  const anchorElement3 = document.querySelector('.js-d');
  const anchorElement4 = document.querySelector('.js-e');
  const headerElement = document.querySelector('.js-header');
  const sectionElement = document.querySelector('.js-section');
  const partitionElement = document.querySelector('.js-partition');
  const picElement = document.querySelector('.js-pic');
  const container = document.querySelector('.js-dark-container');
  const facebook = document.querySelector('.js-fb');
  const insta = document.querySelector('.js-ig');
  const footer = document.querySelector('.js-footer');
  const viewSlider = document.querySelector('.js-change-color');
  const viewSlider1 = document.querySelector('.js-change-color1')


  let darkModeButton = JSON.parse(localStorage.getItem('buttonElement.innerHTML'));
  document.querySelector('.js-dark').innerHTML = darkModeButton;

  console.log(document.querySelector('.js-dark').innerHTML);
  

  if (buttonElement.innerHTML === '<i class="fa-solid fa-moon"></i>'){
    buttonElement.innerHTML = '<i class="fa-solid fa-sun"></i>';
    buttonElement.classList.remove('isPressed');
    bodyElement.classList.remove('isPressed');
    anchorElement.classList.remove('isPressed');
    anchorElement1.classList.remove('isPressed');
    anchorElement2.classList.remove('isPressed');
    anchorElement3.classList.remove('isPressed');
    anchorElement4.classList.remove('isPressed');
    headerElement.classList.remove('isPressed');
    sectionElement.classList.remove('isPressed');
    partitionElement.classList.remove('isPressedDarker');
    picElement.classList.remove('isPressed');
    container.classList.remove('isPressed');
    facebook.classList.remove('iconsPressed');
    insta.classList.remove('iconsPressed');
    footer.classList.remove('isPressedDarker');
  
    localStorage.setItem('buttonElement.innerHTML', JSON.stringify(buttonElement.innerHTML));

  } else {
    buttonElement.innerHTML = '<i class="fa-solid fa-moon"></i>';
    buttonElement.classList.add('isPressed');
    bodyElement.classList.add('isPressed');
    anchorElement.classList.add('isPressed');
    anchorElement1.classList.add('isPressed');
    anchorElement2.classList.add('isPressed');
    anchorElement3.classList.add('isPressed');
    anchorElement4.classList.add('isPressed');
    headerElement.classList.add('isPressed');
    sectionElement.classList.add('isPressed');
    partitionElement.classList.add('isPressedDarker');
    picElement.classList.add('isPressed');
    container.classList.add('isPressed');
    facebook.classList.add('iconsPressed');
    insta.classList.add('iconsPressed');
    footer.classList.add('isPressedDarker');
    localStorage.setItem('buttonElement.innerHTML', JSON.stringify(buttonElement.innerHTML));
  }

}