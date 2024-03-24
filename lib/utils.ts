import { writeFile } from "fs";

export default function backup(messages: string[]) {
    const jsonMessages = JSON.stringify(messages);
    writeFile('./backup/notes.json', jsonMessages, (err) => {
        if (err) {
            alert('Error writing JSON file: ' + err.message);
        } else {
            alert('Backup completed successfully!');
        }
    });
}
