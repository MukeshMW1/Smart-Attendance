let email = "AI@gmail.com";
let passwor = "AIT";


const login = () => {
    let email_id = document.querySelector('input[type="email"]');
    let password_id = document.querySelector('input[type="password"]');

    if (email_id && password_id) {
        let email_value = email_id.value;
        let password_value = password_id.value;


        //check if entered values are correct or not


        if (email_value === email && password_value === passwor) {
            window.location.href = "next.html"
        }

        else {
            alert("Invalid email and password, please try again")
        }

    }
    else {
        console.error("Input fields not found");
    }




    console.log(email, passwor)


}






let psw = document.getElementById('psw');

let showpsw = document.querySelector('.psword .img1 ');
let hidepsw = document.querySelector('.psword .img2 ');



const password = () => {
    console.log("this is ")

    psw.type = psw.type === 'password' ? 'text' : 'password';
    showpsw.style.display = psw.type === 'password' ? 'inline' : 'none'
    hidepsw.style.display = psw.type === 'password' ? 'none' : 'inline'

}


showpsw.addEventListener("click", password);
hidepsw.addEventListener("click", password);