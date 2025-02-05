function sumScores(scores) {
  return scores.reduce((total, score) => total + score, 0);
}

const studentScores = [10, 20, 30];

console.log(`ผลรวมคะแนน: ${sumScores(studentScores)}`);
