import GameState from './GameState';

export default class Board {
  constructor(fields) {
    this.fields = fields;
    this.random = null;
    this.hit = false;
    this.interval = null;
    this.gameState = new GameState();

    this.onClick = this.onClick.bind(this);

    this.fields.forEach((item) => {
      item.addEventListener('click', this.onClick);
    });
  }

  setsRandomNumber() {
    let randomNumber = Math.floor(Math.random() * (this.fields.length - 1));
    while (randomNumber === this.random) {
      randomNumber = Math.floor(Math.random() * (this.fields.length - 1));
    }
    this.random = randomNumber;
    return randomNumber;
  }

  deleteActiveClass() {
    const item = this.fields.filter((el) => el.classList.contains('field_active'))[0];
    if (item) item.classList.remove('field_active');
  }

  addActiveClass() {
    const item = this.fields[this.setsRandomNumber()];
    item.classList.add('field_active');
  }

  moveGoblin() {
    this.interval = setInterval(() => {
      if (!this.hit) {
        this.miss();
      }
      if (this.hit) {
        this.hit = false;
      }
      this.deleteActiveClass();
      this.addActiveClass();
    }, 1000);
  }

  clearsInterval() {
    this.hit = true;
    clearInterval(this.interval);
  }

  showScore() {
    document.querySelector('.score_number').textContent = this.gameState.score;
  }

  showMiss() {
    if (this.gameState.miss === 5) {
      this.gameOver();
    }
    document.querySelector('.miss_number').textContent = this.gameState.miss;
  }

  onClick(e) {
    if (e.target.className === 'field field_active') {
      this.gameState.score += 1;
      this.showScore();
      this.clearsInterval();
      this.deleteActiveClass();
      this.moveGoblin();
    }
  }

  miss() {
    this.gameState.miss += 1;
    this.showMiss();
  }

  gameOver() {
    this.clearsInterval();
    alert('Вы проиграли');
  }
}
