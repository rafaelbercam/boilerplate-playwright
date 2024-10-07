import { faker } from '@faker-js/faker';

export class UserFactory {
  static createUser() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = `${firstName.toLocaleLowerCase()}.${lastName.toLocaleLowerCase()}@bmail.com`
    const name = `${firstName} ${lastName}`
    const password = faker.internet.password({length: 12}) // Gera uma senha com 12 caracteres

    return { email, name, password };
  }
}