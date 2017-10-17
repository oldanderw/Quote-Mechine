var myJson = Json;
var x = 0;
var lenght = 5;
var quote = myJson.allQuotes[0].quote;
var author = myJson.allQuotes[0].author;
var signin = new SignIn();
document.getElementById("mybtn").addEventListener("click", AddtoGen);


//display first
document.getElementById('quote').innerHTML='"' + quote + '"';
document.getElementById('author').innerHTML="-" + author;
console.log("Quote number 0 is being display.");
setInterval(generateQuote, 7000);

function generateQuote() {

    x = ~~(Math.random() * lenght)
    console.log("Quote number " + x + " is being display.");
    if (x < 0 || x > lenght) {
        console.error("Quote number " + x + " does not exist." );
    }
    quote = myJson.allQuotes[x].quote;
    author = myJson.allQuotes[x].author;
    document.getElementById('quote').innerHTML='"' + quote + '"';
    document.getElementById('author').innerHTML="-" + author;
  };


function Add(){
    var newQuote = prompt("what is the quote you would like to add?");
    var newAuthor = prompt("who was this by?");
    myJson.allQuotes[lenght]= {
        quote : newQuote,
        author  : newAuthor
    };
    lenght++
}

function AddtoGen() {
    var login = 1;
  while(login){
  var user = prompt("what is your username?");
  if(user == signin.admin){
        var pass = prompt("what is your password?");
        pass == signin.password ? Add()  : alert("the user name or password was incorrect.")
        if (pass == signin.password){
            break;
       }
    } else if (user == ""){
      console.log("Login procces cancaled");
      break;

    }
  };
}


function SignIn(){
    this.admin = "Admin";
    this.password = "root";

}
