// type Name = string;

// type Id = string | number

// function printId(id: Id){
//     console.log(`Your id is ${id}`)
// }

// printId(123);
// printId('abc123');


type ID = string | number;

type User = {
    id: ID;
    firstName: string;
    lastName?: string | undefined;
    skills: string[];
}

// function CreateUser(firstName: string, lastName?: string): User {
//     return {
//         id: crypto.randomUUID(),
//         firstName,
//         lastName,
//         skills: []
//     }

   
// }

// const u1= CreateUser('john', 'Altaf')
// console.log(u1.skills.map(skill => skill.toUpperCase()))