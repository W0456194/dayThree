var personalInfo = {
    name: 'suvi',
    age: '50',
    email: 'suvi@gmail.com',
    isMajor: true,
    address: {
        Street:'Nehru street',
        Area:'Radha Nagar',
        Pincode: "678327",    
    }
};
//for loop
// **** for loop over object is not possible **** //
// **** for will give you TypeError: items is not iterable **** //

//for in loop
for (const key in personalInfo) {

    console.log(`${key}: ${personalInfo[key]}`);
}
//foreach loop
const keys = Object.keys(personalInfo);
keys.forEach((key, index) => {
    console.log(`${key}: ${personalInfo[key]}`);
}); 
//for of loop
// const value = Object.values(personalInfo);
// for (const value of personalInfo){
//     console.log(value);
// }
// **** for of loop over object is not possible **** //
// **** for..of will give you TypeError: items is not iterable **** //

