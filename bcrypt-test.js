const bcrypt = require("bcrypt");
const readline= require("readline");

var pass="password123";
const saltRounds = 10;

var myDbHash = "$2a$10$pv6OslzBoTReBvt1DR/Lu.d2QWG.ARvBfKY9hI2ZBUlMRPugWjFrG";

//-- ask for the password
var askPass = function() {
   rl.question('Enter password:', function(answer) {
     if (bcrypt.compareSync(answer, myDbHash)) {
        console.log("SUCCESS!");
     } else {
        console.log("FAIL! R U HACKER?!");
     }

    rl.close();
   });
}

//-- create the hash
bcrypt.hash(pass, saltRounds).then(
   function(hash) {
      //console.log(hash);
      askPass();
   }
)


for (let i=0; i<10; i++) {
   console.log("doing something else...");
}

//-- readline io function
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
