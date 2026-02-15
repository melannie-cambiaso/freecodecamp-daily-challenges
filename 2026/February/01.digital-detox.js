function digitalDetox(logs) {
  const HOUR = 3600000;
  const FOUR_HOURS = 4 * HOUR;
  
  // Group by day for the "max 2 per day" rule
  let dayGroups = {};
  let allTimestamps = [];
  
  for (const log of logs) {
    const date = new Date(log);
    const currentDate = date.toDateString();
    const timestamp = date.getTime();
    
    allTimestamps.push(timestamp);
    
    if (!dayGroups[currentDate]) {
      dayGroups[currentDate] = 0;
    }
    dayGroups[currentDate]++;
  }
  
  for (const day in dayGroups) {
    if (dayGroups[day] > 2) {
      return false;
    }
  }
  
  allTimestamps.sort((a, b) => a - b);
  for (let i = 0; i < allTimestamps.length - 1; i++) {
    const timeDiff = allTimestamps[i + 1] - allTimestamps[i];
    if (timeDiff < FOUR_HOURS) {
      return false;
    }
  }
  
  return true;
}

console.log(
  digitalDetox([
    '2026-02-01 08:00:00',
    '2026-02-01 12:30:00',
  ])
); // should return true
console.log(
  digitalDetox([
    '2026-02-01 04:00:00',
    '2026-02-01 07:30:00',
  ])
); // should return false
console.log(
  digitalDetox([
    '2026-01-31 08:21:30',
    '2026-01-31 14:30:00',
    '2026-02-01 08:00:00',
    '2026-02-01 12:30:00',
  ])
); // should return true
console.log(
  digitalDetox([
    '2026-01-31 10:40:21',
    '2026-01-31 15:19:41',
    '2026-01-31 21:49:50',
    '2026-02-01 09:30:00',
  ])
); // should return false
console.log(
  digitalDetox([
    '2026-02-05 10:00:00',
    '2026-02-01 09:00:00',
    '2026-02-03 22:15:00',
    '2026-02-02 12:10:00',
    '2026-02-02 07:15:00',
    '2026-02-04 09:45:00',
    '2026-02-01 16:50:00',
    '2026-02-03 09:30:00',
  ])
); // should return true
console.log(
  digitalDetox([
    '2026-02-05 10:00:00',
    '2026-02-01 09:00:00',
    '2026-02-03 22:15:00',
    '2026-02-02 12:10:00',
    '2026-02-02 07:15:00',
    '2026-02-04 01:45:00',
    '2026-02-01 16:50:00',
    '2026-02-03 09:30:00',
  ])
); // should return false
