
let usernameBox = document.getElementById("usernameBox")
let emailBox = document.getElementById("emailBox")
let passwordBox = document.getElementById("passwordBox")
let verifypassBox = document.getElementById("verifyBox")
let maleRadio = document.getElementById("maleBox")
let femaleRadio = document.getElementById("femaleBox")
let submitBtn = document.getElementById("submitBox")
let signInBtn = document.getElementById("signInButton")

let username, password, verifpass, gender

function getData(){
    username = usernameBox.value
    email = emailBox.value
    password = passwordBox.value
    verifpass = verifypassBox.value
    if(maleRadio.checked){
        gender = "Male"
    }else if(femaleRadio.checked){
        gender = "Female"
    }else{
        gender = null
    }
}


function dataValidation(){
    //username validation
    if(username.length < 7 || username.length > 14){
        alert("Username must be 7 - 14 characters")
        username.focus()
        return false
    }

    //email validation

    if(email.includes("@") == false){
        alert("Email must includes '@'")
        return false
    }
    
    if(email.indexOf("@") + 1 == email.indexOf(".") || email.indexOf("@") - 1 == email.indexOf(".")){
        alert("'.', '@' must not near each other")
        return false
    }
   
    if(email.indexOf("@") != email.lastIndexOf("@")){
        alert("Email must includes one '@'")
        return false
    }

    if(email.startsWith("@") || email.endsWith("@")){
        alert("'@' must not be in the first or last character")
        return false
    }

    //password validation

    if(password.length < 7){
        alert("Password must more than 8 characters")
        return false
    }

    if(password != verifpass){
        alert("Password and Verify Password must be same")
        return false
    }

    //gender validation

    if(gender == null){
        alert("Gender must be choosed")
        return false
    }

    return true
}



function showInputtedData(){
    getData()


    if(dataValidation() == true){
    
    alert("Registration Success")
    }
    else{
        alert("Registration failed")
    }
   
}


signInBtn.addEventListener("click", 
    function(event){
        event.preventDefault()
    showInputtedData()
    window.location.replace("../Html/index.html")
    }
)

