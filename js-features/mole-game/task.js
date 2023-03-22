
const moleDead = document.getElementById("dead");
const moleLost = document.getElementById("lost");

const stopGame = () => {
    return moleDead.textContent = moleLost.textContent = 0;
}

for (let index = 1; index < 10; index++) {
  getHole = (index) => document.getElementById(`hole${index}`);
}

for (let index = 1; index < 10; index++) {
  getHole(index).onclick = function () {
    if (getHole(index).className == "hole hole_has-mole") {
      moleDead.textContent++;
      if (moleDead.textContent == 10) {
        alert("Стоп игра. Вы победили!!! 😍");
        stopGame();
      }
    } else {
      moleLost.textContent--;
      if (moleLost.textContent == -5) {
        alert("Стоп игра. Вы продули!😡");
        stopGame();
      }
    }
  }
}
