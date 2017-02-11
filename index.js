const emailList = require('./email_log.json');
const emails = emailList.emails;
 let unique = {};
let uniqueEmails = emails.filter((element, index, array)=> {

    unique[element.email] = 0;

    if(unique.hasOwnProperty(element.email)){
        return false;
    } else {
        return true;
    }
});

let numberSent = emails.forEach((element, array, index) => {
    if(unique.hasOwnProperty(element.email)){
        unique[element.email]++;
    }
});

console.log(unique);

