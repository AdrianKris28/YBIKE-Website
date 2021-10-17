// validasi reserve

var namereserve = document.forms['form']['name']
var phone = document.forms['form']['phone']
var address = document.forms['form']['address']
var color = document.forms['form']['color']
var quantity = document.forms['form']['quantity']

var name_error = document.getElementById('errorname')
var phone_error = document.getElementById('errorphone')
var address_error = document.getElementById('erroraddress')
var color_error = document.getElementById('errorcolor')
var quantity_error = document.getElementById('quantityerror')
var reserveBtn = document.getElementById('reservebtn')

namereserve.addEventListener('textInput', nameVerify)
phone.addEventListener('textInput', phoneVerify)
address.addEventListener('textInput', addressVerify)
quantity.addEventListener('numberInput', quantityVerify)

function validated(){
    if(namereserve.value.length <=2){
        name_error.style.display = "block";
        namereserve.style.border = "4px solid red"
        alert('Name must be more than 3 characters')
        namereserve.focus()
        return false
    }

    if(phone.value.length < 10 || phone.value.length > 13){
        phone_error.style.display = "block"
        phone.style.border = "4px solid red"
        alert('Phone number must between 11 and 13 digits')
        phone.focus()
        return false
    }

    if(address.value.includes("Jl.") == false){
        address_error.style.display = "block"
        address.style.border = "4px solid red"
        alert('Address must start with "Jl."')
        address.focus()
        return false
    }

   if(quantity.value == null || quantity.value < 1){
       quantity_error.style.display = "block"
       quantity.style.border = "4px solid red"
       alert('Quantity must be at least 1')
       quantity.focus()
       return false
   }
}


function nameVerify(){
    if(namereserve.value.length > 2){
        namereserve.style.border = "1px solid black"
        name_error.style.display  = "none"
        return true
    }
}

function phoneVerify(){
    if(phone.value.length > 10 && phone.value.length < 14){
        phone.style.border = "1px solid black"
        phone_error.style.display = "none"
        return true
    }
}

function addressVerify(){
    if(address.value.includes("Jl.") == true){
        address.style.border = "1px solid black"
        address_error.style.display = "none"
        return true
    }
}

function quantityVerify(){
    if(quantity.value >= 1){
        quantity.style.border = "1px solid black"
        quantity_error.style.display = "none"
        return true
    }
}

function successAlert(){
    if(nameVerify() == true && phoneVerify() == true && addressVerify() == true && quantityVerify() == true){
        alert("Reservation Success")
        // console.log("regis success")
        window.location.replace("../Html/reserve.html")
        return true
    }
    else{
        return validated()
    }
}


reserveBtn.addEventListener("click", 
    function(event){
        event.preventDefault()
        successAlert()
    }
)

    


