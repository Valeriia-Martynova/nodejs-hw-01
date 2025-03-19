import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contactsList = await readContacts();
  const newContacts = Array(number).fill(null).map(createFakeContact);
  await writeContacts([...contactsList, ...newContacts]);
};

generateContacts(5);
