let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874"
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
}

let myData = {...data}
myData.name = "Rizki Ramadhan";
myData.email = "rizukirimu@gmail.com";
myData.hobbies = ['Coding', 'Film', 'Gaming'];

const {street, city} = myData.address;

console.log(myData);
console.log(street);
console.log(city);