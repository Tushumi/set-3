 export  function fizzBuzz(){
  const pressBtn = document.querySelector('.fizz-buzz-section .press-me-btn');
  const resetBtn = document.querySelector('.fizz-buzz-section .reset-btn');
  const resultContainer = document.querySelector('.fizz-buzz-section .result-container');

 
  let i = 1;

  pressBtn.addEventListener('click', ()=>{
   
    if(i <= 100){    
      if( i % 3 === 0 && i % 5 === 0){
        resultContainer.innerText = 'FizzBuzz';
      }else if(i % 5 === 0){
        resultContainer.innerText = 'Buzz';
      }else if(i % 3 === 0){
        resultContainer.innerText = 'Fizz';
      }

    i++;
    console.log(i)
    }else{
  
      resultContainer.innerText += 'FizzBuzz Complete! Reset to try again.';
      pressBtn.disabled = true;
    }
  });


  resetBtn.addEventListener('click', ()=>{
    i = 0;
    console.log(i)
    resultContainer.innerText = 'Press the button to start'
  });

}