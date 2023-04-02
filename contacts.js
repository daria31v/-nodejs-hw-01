const fs = require('fs');
const path = require('path');

const contactsPath = path.resolve("./db");

// TODO: задокументувати кожну функцію
function listContacts() {
    // ...твій код
  }
  
  function getContactById(contactId) {
    // ...твій код
  }
  
  function removeContact(contactId) {
    // ...твій код
  }
  
  function addContact(name, email, phone) {
    // ...твій код
  }






module.exports = {
    listContacts, getContactById, removeContact, addContact
}


// Додай функції для роботи з колекцією контактів. 
// У функціях використовуй модуль fs та його методи readFile()
//  і writeFile()