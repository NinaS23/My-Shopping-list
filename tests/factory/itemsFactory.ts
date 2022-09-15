import {faker} from "@faker-js/faker";


export function createItem(random: boolean) {
    if (random === true) {
        return {
            title: faker.random.word(),
            url:  "http://jest@jest.com",
            description: faker.random.words(4),
            amount: 7
        }
    } else {
        return {
            title: "rosa santana",
            url: "http://rosa@rosa.com",
            description: "rosalinda",
            amount: 6
        }
    }

}

export function fakerId(){
    return {
      id:faker.random.numeric(2)
    }
}