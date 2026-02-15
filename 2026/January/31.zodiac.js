const zodiacSigns = [
  { range: 'March 21 - April 19', sign: 'Aries' },
  { range: 'April 20 - May 20', sign: 'Taurus' },
  { range: 'May 21 - June 20', sign: 'Gemini' },
  { range: 'June 21 - July 22', sign: 'Cancer' },
  { range: 'July 23 - August 22', sign: 'Leo' },
  {
    range: 'August 23 - September 22',
    sign: 'Virgo',
  },
  {
    range: 'September 23 - October 22',
    sign: 'Libra',
  },
  {
    range: 'October 23 - November 21',
    sign: 'Scorpio',
  },
  {
    range: 'November 22 - December 21',
    sign: 'Sagittarius',
  },
  {
    range: 'December 22 - January 19',
    sign: 'Capricorn',
  },
  {
    range: 'January 20 - February 18',
    sign: 'Aquarius',
  },
  {
    range: 'February 19 - March 20',
    sign: 'Pisces',
  },
];
function getSign(dateStr) {
  let finalSign = '';
  for (const signData of zodiacSigns) {
    const [startStr, endStr] = signData.range.split(' - ');
    const startDate = new Date(`${dateStr.slice(0, 4)}-${startStr}`);
    const endDate = new Date(`${dateStr.slice(0, 4)}-${endStr}`);
    const date = new Date(dateStr);
    if (endDate < startDate) {
      endDate.setFullYear(endDate.getFullYear() + 1);
    }
    if (date >= startDate && date <= endDate) {
      finalSign = signData.sign;
      break;
    }
  }
  return finalSign;
}

console.log(getSign('2026-01-31')); //should return "Aquarius".
console.log(getSign('2001-06-10')); //should return "Gemini".
console.log(getSign('1985-09-07')); //should return "Virgo".
console.log(getSign('2023-03-19')); //should return "Pisces".
console.log(getSign('2045-11-05')); //should return "Scorpio".
console.log(getSign('1985-12-06')); //should return "Sagittarius".
console.log(getSign('2025-12-30')); //should return "Capricorn".
console.log(getSign('2018-10-08')); //should return "Libra".
console.log(getSign('1958-05-04')); //should return "Taurus".
