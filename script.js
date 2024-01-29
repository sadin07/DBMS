const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const hello = document.querySelector('.hello-student')

console.log(hello)
console.log("Hello")

function handleSubmit(event){
    event.preventDefault()
    hello.style.display = "none"

   console.log("sadin thapa")
    container.classList.add("active");

}
 
