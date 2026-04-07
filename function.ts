// const user  = {
//     id: 1 ,
//     name: 'jahin',
//     age: 25,
//     verified: false
// }

// function printUser(input: typeof user){ #type infer means type of user is automatically inferred by typescript and we can use that type in our function parameter  
//     console.log(input.name,6)
// }

//   ALADA KORE BOLTE HOCCHE NA THATS CALLED TYPE OF INTERFERENCE
// const number = ['1','5','3','2','4'];
// const doubles = number.map(num => num * 2);
// console.log(doubles)


function validateFrom(formData: {
    email: string;
    age:number;
    isAdmin:boolean;
}){
    const {email, age, isAdmin} = formData;
    return email.includes('@') && age > 18 ;
}