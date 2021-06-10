import DBService from '../IndexedDBService'

const CONTACT_FIELDS = [
  '++id',
  'first_name',
  'last_name',
  'phone_number',
  'email',
  'category_id',
]

const CONTACT = {
  ID: 'id',
  FIRST_NAME: CONTACT_FIELDS[1],
  LAST_NAME: CONTACT_FIELDS[1],
  PHONE_NUMBER: CONTACT_FIELDS[3],
  EMAIL: CONTACT_FIELDS[4],
  CATEGORY: CONTACT_FIELDS[5],
}

const CONTACT_MODEL = {
  states: CONTACT_FIELDS.join(','),
}

const DB_NAME = 'contacts'

export default class ContactsService extends DBService {
  constructor() {
    super(DB_NAME, CONTACT_MODEL)
  }

  async saveContact(contact) {
    const contactValue = {
      first_name: contact.first_name,
      last_name: contact.last_name,
      phone_number: contact.phone_number,
      email: contact.email,
      category_id: contact.category,
    }
    await this.save(contactValue)
  }

  async getContactByCategory(category) {
    return await this.getBy(CONTACT.CATEGORY, category)
  }

  async getAllContacts() {
    return await this.getAll(CONTACT.FIRST_NAME)
  }

  async getById(id) {
    return await this.getBy(CONTACT.ID, id)
  }
}
