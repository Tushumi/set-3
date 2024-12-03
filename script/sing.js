export function sing(){
    const currentBottleElements = document.querySelectorAll('.current-value-of-bottle');
    const subtractedBottleElement = document.querySelector('.subtracted-value-of-bottle');
    const singButton = document.querySelector('.sing-btn');
    const lyrics = document.querySelector('.lyrics');

   
    let bottles = 90;

    singButton.addEventListener('click', ()=>{
      if(bottles > 0){
      
        let currentBottlesText = 'bottles';
        if(bottles - 1 === 0){
          currentBottlesText = 'bottle'
        }

        let nextBottleText = 'bottles';
        if(bottles - 1 === 1){
          nextBottleText = 'bottle';
        }else if(bottles - 1 === 0){
          nextBottleText = 'no more bottle'
        }


       
        if(bottles - 1 > 0){
          lyrics.innerHTML = `${bottles} ${currentBottlesText} of the beer on the walls, ${bottles} ${currentBottlesText} of beer, <br>
          take one down and pass it around,  ${bottles - 1} ${nextBottleText} of beer on the wall`;
        }else{
          lyrics.innerHTML = `${bottles} ${currentBottlesText} of the beer on the walls, ${bottles} ${currentBottlesText} of beer, <br>
          take one down and pass it around,  no more bottle of beer on the wall`;
        }

        bottles--

      }
      else{
        lyrics.innerHTML =  `no more bottle of beer in the wall, no more battle of the beer, </br> 
                                    Go to store and buy some more, 99 bottles of the beer `;
        singButton.disabled = true;
        singButton.innerText = 'Finished';
      }
    });
}