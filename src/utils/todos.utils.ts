import fs from 'fs';
import { TypeTodos } from '@entries/todo.entries';
import { v6 as uuidv6 } from 'uuid';

export function getNewId() {
  return uuidv6();
}

export function getDate() {
  return new Date().toISOString();
}

export function mustBeInArray(array: TypeTodos, id: string) {
  return new Promise((resolve, reject) => {
    const row = array.find((r) => r.id == id);
    if (!row) {
      reject({
        message: 'ID is not good',
        status: 404,
      });
    }
    resolve(row);
  });
}

export function writeJSONFile(filename: string, content: TypeTodos) {
  fs.writeFileSync(filename, JSON.stringify(content), 'utf8');
}
