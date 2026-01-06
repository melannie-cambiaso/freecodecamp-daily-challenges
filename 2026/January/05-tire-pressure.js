function tireStatus(pressuresPSI, rangeBar) {
  const pressureStatus = [];
  const PSI = 14.5038;
  for (const pressure of pressuresPSI) {
    const min = rangeBar[0] * PSI;
    const max = rangeBar[1] * PSI;
    if (pressure < min) {
      pressureStatus.push('Low');
    } else if (pressure > max) {
      pressureStatus.push('High');
    } else {
      pressureStatus.push('Good');
    }
  }
  return pressureStatus;
}
