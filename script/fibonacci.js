export function fibonacci(){
  const inputNumber = document.querySelector('.fibonacci-section  .input-number');
  const generateBtn = document.querySelector('.fibonacci-section  .generate-btn');
  const clearBtn = document.querySelector('.fibonacci-section  .clear-btn');
  const resultContainer = document.querySelector('.fibonacci-section .result-container');


  const fibosequence = [0, 1]; 

 
  generateBtn.addEventListener('click', ()=>{
    
    function fibonacci(num){
      while(num > 2){
        const [nextToLast, last] = fibosequence.slice(-2); 
        fibosequence.push(nextToLast + last); 

        num -= 1; 
      }
    }

     fibonacci(inputNumber.value); 

     resultContainer.innerText = fibosequence; 
  });



  clearBtn.addEventListener('click', ()=>{
    fibosequence.length = 0; 
    fibosequence.push(0, 1)
    resultContainer.innerText = ''; 
    inputNumber.value = '' 
  });
  


}

