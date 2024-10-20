// AI generated code (Some AI extension)

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  play() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
}

class HumanPlayer extends Player {
  constructor(name) {
    super(name);
  }

  play() {
    let choice;
    while (true) {
      choice = prompt(`${this.name}, enter your choice (rock, paper, or scissors): `).toLowerCase();
      if (['rock', 'paper', 'scissors'].includes(choice)) {
        break;
      }
      console.log('Invalid choice. Please try again.');
    }
    return choice;
  }
}

class ComputerPlayer extends Player {
  constructor(name) {
    super(name);
  }
}

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  determineWinner(player1Choice, player2Choice) {
    if (player1Choice === player2Choice) {
      return 'tie';
    }

    if ((player1Choice === 'rock' && player2Choice === 'scissors') ||
        (player1Choice === 'scissors' && player2Choice === 'paper') ||
        (player1Choice === 'paper' && player2Choice === 'rock')) {
      return this.player1;
    }

    return this.player2;
  }

  playRound() {
    const player1Choice = this.player1.play();
    const player2Choice = this.player2.play();

    console.log(`${this.player1.name} chose ${player1Choice}`);
    console.log(`${this.player2.name} chose ${player2Choice}`);

    const winner = this.determineWinner(player1Choice, player2Choice);

    if (winner === 'tie') {
      console.log('It\'s a tie!');
    } else {
      console.log(`${winner.name} wins this round!`);
      winner.score++;
    }

    console.log(`Score - ${this.player1.name}: ${this.player1.score}, ${this.player2.name}: ${this.player2.score}`);
  }

  playGame() {
    while (true) {
      this.playRound();
      const playAgain = prompt('Do you want to play again? (yes/no): ').toLowerCase();
      if (playAgain !== 'yes') {
        break;
      }
    }
  }
}

const player1 = new HumanPlayer('Player 1');
const player2 = new ComputerPlayer('Computer');
const game = new Game(player1, player2);
game.playGame();