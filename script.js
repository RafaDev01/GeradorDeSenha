//direcionando elementos
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@";
let novaSenha = "";

//sizePassword = o valor de slider element
sizePassword.innerHTML = sliderElement.value;


//id slider oninput chama a function -> tamanho da senha em html
slider.oninput = function(){
  sizePassword.innerHTML = this.value;
}

function generatePassword(){
  
  let pass = "";
  //n = passa o tamanho da variavel charset 
  for(let i=0, n = charset.length; i < sliderElement.value; ++i){
    //atribui ao pass o charAt(M.floor para arredondar e random para gerar um numero aleatório * n para cobrir todo o tamanho do charset)
    pass += charset.charAt(Math.floor(Math.random() * n));
  }
  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novaSenha = pass;

}

function copyPassword(){
  alert("Senha copiada com sucesso!");
  navigator.clipboard.writeText(novaSenha);
}