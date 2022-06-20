
const form = document.getElementById('form');
const email=document.getElementById('email');
const username=document.getElementById('username');
const password = document.getElementById('password');
const password2=document.getElementById('password2');

//event Listeners
form.addEventListener("submit",function(event){
    event.preventDefault();

    checkRequried([username,email,password,password2]);
    checkLength(username,3,15);
    checkLength(password,6,20);
    checkEmail(email);
    checkPasswordMatch(password,password2);
    
})

// Error Message
function showError(input,message){

    const formControl= input.parentElement;
    formControl.className="form-control error";
    const small=formControl.querySelector("small");
    small.innerHTML=message;
}

//Success Message
function showSuccess(input){

    const formControl=input.parentElement;
    formControl.className="form-control success";
}

//Validate Email 
function checkEmail(input) 
    {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(re.test(input.value.trim())){
            showSuccess(input);
        }else{
            showError(input,"Email is not valid");
        }
    }

// check input is empty
function checkRequried(inputArr){

    inputArr.forEach(function(input){
        console.log(input);
        if(input.value.trim()==='')
         showError(input,`${getFieldName(input)} is required`);
        else
        showSuccess(input);
    })
}

// get field name
function getFieldName(input){
   return input.id.charAt(0).toUpperCase(0)+input.id.slice(1);
}

//check Length

function checkLength(input,min,max){

    if(input.value.length < min){
        showError(input,`${getFieldName(input)} must be atleast ${min} characters long.`);
    }else if(input.value.length > max){
        showError(input,`${getFieldName(input)} cannot be greater ${max} characters.`);
    }else{
        showSuccess(input);
    }
}

//check password match

function checkPasswordMatch(input1,input2){
    if(input1.value!= input2.value)
    showError(input2,"Password doesn't match");
    
}

