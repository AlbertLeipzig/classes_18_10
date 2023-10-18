console.clear();
// Constructor

/* const name = "Albert"

const _name = new String("Albert")

const price = new Number()

const error = new Error() */

/* const datum = new Date();

const months = [
  'Januar',
  'Februar',
  'März',
  'April',
  'Mai',
  'Juni',
  'Juli',
  'August',
  'September',
  'Oktober',
  'November',
  'Dezember',
];

const year = datum.getFullYear();
const month = months[datum.getMonth()];
const weekDay = datum.getDay();
const dayNumber = datum.getDate();

const sentence = `heute ist der ${dayNumber}. ${month} ${year}`;

console.log(sentence); */

const date = new Date();
// Results below assume UTC timezone - your results may vary



// Specify default date formatting for language (locale)
console.log(new Intl.DateTimeFormat('de-DE').format(date));

const name = "Emil"

const newName = name.toLocaleString()

// Expected output: "12/20/2020"

// Specify default date formatting for language with a fallback language (in this case Indonesian)
/* console.log(new Intl.DateTimeFormat(['ban', 'id']).format(date)); */
// Expected output: "20/12/2020"

// Specify date and time format using "style" options (i.e. full, long, medium, short)
/* console.log(
  new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long', timeZone: 'Australia/Sydney' }).format(date),
); */
// Expected output: "Sunday, 20 December 2020 at 14:23:16 GMT+11"
