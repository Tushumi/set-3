import { sing } from "./sing.js";
import { fibonacci } from "./fibonacci.js";
import { fizzBuzz } from "./fizzBuzz.js"; 

sing();
fibonacci();
fizzBuzz();


const choicesBtns = document.querySelectorAll('.choices-section .challenge-btn');
const sections = document.querySelectorAll('section');
const backBtn = document.querySelector('button.back-button')


choicesBtns.forEach(button => {
  const choicesBtnValue = button.getAttribute('data-value'); 
  button.addEventListener('click', ()=>{
    
    sections.forEach(section => {
    
      if(section.classList.contains(choicesBtnValue)){
        section.style.display = ' block';   
        backBtn.style.display = 'block'   
      }
     
      else{
        section.style.display = 'none';
      }
    })
  })
});


backBtn.addEventListener('click', ()=>{
  sections.forEach(section => {
    const choicesSection = section.classList[0] === 'choices-section';
    if(choicesSection){
      section.style.display = 'block';
    }
    else{
      section.style.display = 'none'
    }

    backBtn.style.display = 'none';
    
  })
});
