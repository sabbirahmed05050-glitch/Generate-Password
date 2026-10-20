const passwordbox = document.getElementById("password");
const length =12;

const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase ="abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbole ="!@#$%^&*()_+`~{}[]><?/=-";

const allChars = upperCase + lowerCase + number + symbole ;

function creatPassWord (){
    let password ="";

    password +=upperCase[Math.floor(Math.random()*upperCase.length)];
    password +=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password +=number[Math.floor(Math.random()*number.length)];
    password +=symbole[Math.floor(Math.random()*symbole.length)];

     while (length > password.length){
        password+= allChars[Math.floor(Math.random() * allChars.length)]
     }
     passwordbox.value = password;

}

function copyPassword(){
    passwordbox.select();
    document.execCommand("copy"); 
}