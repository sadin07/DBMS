const container = document.getElementById('container');
const registerBtn = document.getElementById('register');

console.log("Hello")

function handleSubmit(){
   registerBtn.addEventListener('click', () => {
    container.classList.add("active");
 });
}
 
