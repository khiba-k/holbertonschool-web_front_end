class studentHogwarts {
  #privateScore = 0;
  #name = null;

  #changeScoreBy(points) {
    this.#privateScore += points;
  }

  setName(newName) {
    this.#name = newName;
    return this;
  }

  rewardStudent() {
    this.#changeScoreBy(1);
    return this;
  }

  penalizeStudent() {
    this.#changeScoreBy(-1);
    return this;
  }

  getScore() {
    return `${this.#name}: ${this.#privateScore}`;
  }
}

const harry = new studentHogwarts();
harry
  .setName("Harry")
  .rewardStudent()
  .rewardStudent()
  .rewardStudent()
  .rewardStudent();

console.log(harry.getScore());

const draco = new studentHogwarts();
draco
  .setName("Draco")
  .rewardStudent()
  .penalizeStudent()
  .penalizeStudent()
  .penalizeStudent();

console.log(draco.getScore());
