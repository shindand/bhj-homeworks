
const moleDead = document.getElementById("dead");
const moleLost = document.getElementById("lost");

const stopGame = (finish) => {
    alert(finish);
    moleDead.textContent = 0;
    moleLost.textContent = 0;
}

for (let index = 1; index < 10; index++) {
  getHole = (index) => document.getElementById(`hole${index}`);
}

for (let index = 1; index < 10; index++) {
  getHole(index).onclick = function () {
    if (getHole(index).className == "hole hole_has-mole") {
      moleDead.textContent++;
      if (moleDead.textContent == 1) {
        let finish = "Стоп игра. Вы победили!!! 😍";
        stopGame(finish);
      }
    } else {
      moleLost.textContent--;
      if (moleLost.textContent == -5) {
        let finish = "Стоп игра. Вы продули!😡";
        stopGame(finish);
      }
    }
  }
}
