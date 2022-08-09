import { Command } from "commander";
import contacts from "./contacts.js";
const program = new Command();
program
    .option("-a, --action <type>", "choose action")
    .option("-i, --id <type>", "user id")
    .option("-n, --name <type>", "user name")
    .option("-e, --email <type>", "user email")
    .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();


async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case "list":
            const list = await contacts.listContacts();
            console.log(action, list);
            break;

        case "get":
            const result = await contacts.getContactById(id);
            console.log(action, result);
            break;

        case "add":

            const updateList = await contacts.addContact({ name, email, phone });
            console.log(action, updateList);
            break;

        case "remove":
            const deconsteItem = await contacts.removeContact(id);
            console.log(action, deconsteItem);
            break;

        default:
            console.warn("\x1B[31m Unknown action type!");
    }
}

invokeAction(argv);