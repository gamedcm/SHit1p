document.addEventListener('DOMContentLoaded', () => {
  const cluesInput = document.getElementById('clues');
  const killsInput = document.getElementById('kills');
  const revivesInput = document.getElementById('revives');
  const missesInput = document.getElementById('misses');
  const scoreDisplay = document.getElementById('score');
  const endingDisplay = document.getElementById('ending');

  function calculateEnding() {
    const clues = parseInt(cluesInput.value) || 0;
    const kills = parseInt(killsInput.value) || 0;
    const revives = parseInt(revivesInput.value) || 0;
    const misses = parseInt(missesInput.value) || 0;

    // スコア計算式
    const score = clues - (kills * 2) - (revives * 4) - (misses * 3);
    scoreDisplay.textContent = score;

    // 分岐判定
    if (kills >= 60) {
      endingDisplay.textContent = "放棄エンド (バッド) [撃破数60以上]";
      endingDisplay.style.color = "#ff5252";
    } else if (score >= 20) {
      endingDisplay.textContent = "正義エンド (グッド)";
      endingDisplay.style.color = "#69f0ae";
    } else if (score >= 0) {
      endingDisplay.textContent = "永遠エンド (ノーマル)";
      endingDisplay.style.color = "#ffd740";
    } else {
      endingDisplay.textContent = "放棄エンド (バッド)";
      endingDisplay.style.color = "#ff5252";
    }
  }

  [cluesInput, killsInput, revivesInput, missesInput].forEach(input => {
    input.addEventListener('input', calculateEnding);
  });

  calculateEnding();
});
