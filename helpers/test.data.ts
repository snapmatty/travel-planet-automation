import { faker } from "@faker-js/faker";

function generatePassword() {
  return faker.internet.password();
}
const password = generatePassword();

const newUser = {
  email: faker.internet.email(),
  password: password,
};

const baseURL = "https://www.travel-planet.pl";

export { newUser, baseURL };
