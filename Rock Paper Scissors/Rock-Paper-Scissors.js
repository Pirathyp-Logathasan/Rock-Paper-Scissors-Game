let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

 /* Oversikt over spillerens resultater: wins, losses og ties */

document.querySelector('.js-score')
.innerHTML = `
<table>
      <tr>
        <th>Result</th>
        <th>Count</th>
      </tr>

      <tr>
        <td>Wins</td>
        <td>${score.wins}</td>
      </tr>

      <tr>
        <td>Losses</td>
        <td>${score.losses}</td>
      </tr>

       <tr>
        <td>Ties</td>
        <td>${score.ties}</td>
      </tr>

      <tr class = "total-games">
        <th>Total games</th>
        <td>${score.wins + score.losses + score.ties}</td>
      </tr>
    </table>
    `;

function playGame(playerMove){
  pickComputerMove();

       let result = '';

       if(playerMove==='scissors'){
        if (computerMove === 'rock'){
      result = '❌ You lost. Better luck next time ❌';
      }else if (computerMove === 'paper'){
      result = '🎉 Congratulations! You won 🎉';

      }
      else if (computerMove === 'scissors'){
      result ='🤝 It’s a tie 🤝';
      }
       }

       else if(playerMove === 'paper'){
        pickComputerMove();
         result = '';
        if (computerMove === 'rock'){
        result = '🎉 Congratulations! You won 🎉';
        }else if (computerMove === 'paper'){
        result = '🤝 It’s a tie 🤝';
        }
        else if (computerMove === 'scissors'){
        result = '❌ You lost. Better luck next time ❌';
        }
       }

       else if(playerMove === 'rock'){
        pickComputerMove();
          result = '';
        if (computerMove === 'rock'){
        result = '🤝 It’s a tie 🤝';
        }else if (computerMove === 'paper'){
        result = '❌ You lost. Better luck next time ❌';
        }
        else if (computerMove === 'scissors'){
        result = '🎉 Congratulations! You won 🎉';
        }
       }

       if(result === '🎉 Congratulations! You won 🎉') {
        score.wins = score.wins + 1;
       }
       else if (result === '❌ You lost. Better luck next time ❌'){
        score.losses+=1;
       }
       else if (result === '🤝 It’s a tie 🤝'){
        score.ties+=1;
       }

      /* Denne syntaksen gjør at vi kan lagre scoren i localStorage. 
      Fordelen er at verdien beholdes selv etter at siden oppdateres, 
      siden vanlige variabler nullstilles ved refresh. 
      Når du lagrer i localStorage, må du angi et nøkkelnavn og en verdi. 
      I dette tilfellet lagres scoren slik: ('message', score);*/

       // Må konvertere til JSON fordi localStorage kun kan lagre strenger, ikke tall.
       localStorage.setItem('score',JSON.stringify(score));
     
       updateScoreElement();
       document.querySelector('.js-result').innerHTML = result;


       document.querySelector('.js-moves').innerHTML = `You
      <img src="images/${playerMove}-emoji.png" alt="" class="move-icon">
      <img src="images/${computerMove}-emoji.png" alt="" class="move-icon">
      computer`;

}

function updateScoreElement(){
  document.querySelector('.js-score')
      .innerHTML = `
<table>
      <tr>
        <th>Result</th>
        <th>Count</th>
      </tr>

      <tr>
        <td>Wins</td>
        <td>${score.wins}</td>
      </tr>

      <tr>
        <td>Losses</td>
        <td>${score.losses}</td>
      </tr>

       <tr>
        <td>Ties</td>
        <td>${score.ties}</td>
      </tr>

      <tr class = "total-games">
        <th>Total games</th>
        <td>${score.wins + score.losses + score.ties}</td>
      </tr>
    </table>
    `;
}

  let computerMove = '';
  function pickComputerMove(){
    // Math.random() genererer et tilfeldig desimaltall mellom 0 (inkludert) og 1 (ekskludert).
    const randomNumber = Math.random();
    
        if(randomNumber>=0 && randomNumber<1/3){
          computerMove = 'rock';
        }else if (randomNumber>=1/3 && randomNumber<2/3) {
          computerMove = 'paper';
        }
        else if (randomNumber>=2/3 && randomNumber<1){
          computerMove ='scissors';
        }
        
  }

