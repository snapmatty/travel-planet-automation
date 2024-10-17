import { faker } from "@faker-js/faker";

function generatePassword() {
  return faker.internet.password();
}
const password = generatePassword();

const newUser = {
  email: faker.internet.email(),
  password: password,
};

const desiredDestination = "Egypt";

const travelStartDate = "04-11-2024";
const travelEndDate = "24-11-2024";

export { newUser, desiredDestination, travelStartDate, travelEndDate };
