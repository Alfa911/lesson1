import fs from 'fs/promises';
import {nanoid} from 'nanoid';

const path = new URL('db/contacts.json', import.meta.url).pathname;

const listContacts = async () => {
    const list = await fs.readFile(path, 'utf8');
    return JSON.parse(list);

}
const getContactById = async (id) => {
    const list = await listContacts();
    const indx = list.findIndex(item => item.id === id);
    if (indx === -1) {
        return null;
    }
    return list[indx];
};
const removeContact = async (id) => {

    const list = await listContacts();
    const indx = list.findIndex(item => item.id === id);
    if (indx === -1) {
        return null;
    }
    const [result] = list.splice(indx, 1);
    await updateContacts(list);
    return result;
};
const addContact = async (data) => {
    const newData = {
        ...data,
        id: nanoid()
    };
    const list = await listContacts();
    list.push(newData);
    await updateContacts(list);
    return list;
};
const updateContacts = async (data) => {
    return await fs.writeFile(path, JSON.stringify(data));
};

export default {
    listContacts,
    getContactById,
    removeContact,
    addContact
};