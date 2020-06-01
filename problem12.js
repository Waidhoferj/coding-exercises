function trackSteps(stepsLeft, stepOptions = [1, 2], count = [0]) {
  for (let option of stepOptions) {
    let stepsAfterOption = stepsLeft - option;
    if (stepsAfterOption < 0) continue;
    if (stepsAfterOption === 0) count[0]++;
    trackSteps(stepsAfterOption, stepOptions, count);
  }
  return count[0];
}

module.exports = { trackSteps };
