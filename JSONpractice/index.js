//serializing javascript object to Json string
const user = {name:'John Doe',age:30}
const jsonString = JSON.stringify(user);
console.log(jsonString);
//parsing JSON string to javaSript object
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);