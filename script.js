let url = 'https://66e8219eb17821a9d9db8120.mockapi.io/tableOfUser'

async function getMessage() {
    try {
        const {data} = await axios.get(url)
        get(data);
    } catch (error) {
        console.log(error);
    }
}
getMessage()

let mes = document.querySelector(".mes")

function get(data) {
    mes.innerHTML =""
    data.forEach((e) => {
        let pass = document.createElement("p")
        pass.innerHTML = e.pass
        let nameOfUser = document.createElement("h5")
        nameOfUser.innerHTML = e.nameOfUser
        nameOfUser.classList.add("add")
        let message = document.createElement("h4")
        message.innerHTML = e.message;
        message.classList.add("messege")
        let divs = document.querySelector("div")
        mes.append(message)
    });
}


// addUser

async function postmessege(user) {
    try {
        await axios.post(url,user)
        getMessage()
    } catch (error) {
        console.error(error);
        
    }
}
let inpText = document.querySelector(".inpText")
let btnShare = document.querySelector(".btnShare")
let formadd = document.querySelector(".formadd")

formadd.onsubmit = (event) =>{
    event.preventDefault()
    let user = {
        message : formadd["inpText"].value,
    }
    postmessege(user)
    formadd.reset()
}

// Registration

let inpEmail = document.querySelector(".inpEmail")
let inpPass = document.querySelector(".inpPass")
let btnRegister = document.querySelector(".btnRegister")
let btnLogin = document.querySelector(".btnLogin")
let dialogChat = document.querySelector(".dialogChat")


btnRegister.onclick = () =>{
    let users = {
        nameOfUser: inpEmail.value,
        pass : inpPass.value,
    }
    postmessege(users)
    dialogChat.showModal()
}