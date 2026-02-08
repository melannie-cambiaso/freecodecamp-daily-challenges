const zodiacSigns = [
  { dates: 'March 21 - April 19', sign: 'Aries' },
  { dates: 'April 20 - May 20', sign: 'Taurus' },
  { dates: 'May 21 - June 20', sign: 'Gemini' },
  { dates: 'June 21 - July 22', sign: 'Cancer' },
  { dates: 'July 23 - August 22', sign: 'Leo' },
  {
    dates: 'August 23 - September 22',
    sign: 'Virgo',
  },
  {
    dates: 'September 23 - October 22',
    sign: 'Libra',
  },
  {
    dates: 'October 23 - November 21',
    sign: 'Scorpio',
  },
  {
    dates: 'November 22 - December 21',
    sign: 'Sagittarius',
  },
  {
    dates: 'December 22 - January 19',
    sign: 'Capricorn',
  },
  {
    dates: 'January 20 - February 18',
    sign: 'Aquarius',
  },
  {
    dates: 'February 19 - March 20',
    sign: 'Pisces',
  },
];

function getSign(dateStr) {
  let sign = '';
  const currentDate = new Date(dateStr);

  for (const zodiac of zodiacSigns) {
    const [start, end] =
      zodiac.dates.split(' - ');
    const startDate = new Date(start);
    const endDate = new Date(end);
    startDate.setFullYear(
      currentDate.getFullYear()
    );
    endDate.setFullYear(
      currentDate.getFullYear()
    );

    // Handle Capricorn case where end date is in the next year
    if (endDate < startDate) {
      endDate.setFullYear(
        currentDate.getFullYear() + 1
      );
    }

    if (
      currentDate >= startDate &&
      currentDate <= endDate
    ) {
      sign = zodiac.sign;
      break;
    }
  }
  return sign;
}

console.log(getSign('2026-01-31')); // should return "Aquarius"
console.log(getSign('2001-06-10')); // should return "Gemini"
console.log(getSign('1985-09-07')); // should return "Virgo"
console.log(getSign('2023-03-19')); // should return "Pisces"
console.log(getSign('2045-11-05')); // should return "Scorpio"
console.log(getSign('1985-12-06')); // should return "Sagittarius"
console.log(getSign('2025-12-30')); // should return "Capricorn"
console.log(getSign('2018-10-08')); // should return "Libra"
console.log(getSign('1958-05-04')); // should return "Taurus"
