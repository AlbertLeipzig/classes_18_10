console.clear();
import rawUsersData from './usersData.json' assert { type: 'json' };

const capitalizeWord = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

const cleanName = (name) => {
  if (typeof name !== 'string') {
    return undefined;
  }

  const trimmedName = name.trim();

  const capitalizedName = capitalizeWord(trimmedName);

  return capitalizedName;
};

const formatAddress = (_address) => {
  /* "address": "6271 Del Sol Point" */
  const addressArray = _address.split(' ');
  /* "addressArray": ["Del", "Sol", "Point"] */

  const address = {
    number: parseInt(addressArray[0]),
    street: addressArray.slice(1).join(' '),
  };
  return address;
};

const formatIpAddress = (ipString) => {
  return parseInt(ipString.split('.').join(''));
};

const cleanSingleUser = (user) => {
  return {
    id: user.id,
    firstName: cleanName(user.firstName),
    lastName: cleanName(user.lastName),
    email: user.email,
    addres: formatAddress(user.address),
    job: user.job,
    ipAddress: formatIpAddress(user['ip-address']),
  };
};

const cleanUsersData = rawUsersData
  .map((user) => cleanSingleUser(user))
  .sort((a, b) => (a.lastName > b.lastName ? 1 : -1));


const userCard = (user) => {
  return `
    <div id=${user.id}>
        <h3>${user.firstName} ${user.lastName}</h3>
        <p>${user.email}</p>
        <address>${user.addres.street} ${user.addres.number}</address>
    </div>
    `;
};

const ui = cleanUsersData.map(user => userCard(user))

console.log(ui);
