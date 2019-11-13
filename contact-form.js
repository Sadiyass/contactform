function validateform(){  
    var firstName=document.myform.name.value;
    var lastName=document.myform.surname.value;
    var subject=document.myform.subject.value;
    var message=document.myform.message.value;
    var fullName= (firstName +" "+ lastName);
     
    if(firstName.length<3){  
        alert("First name must be at least 3 characters long.");  
        return false;  
        }else if(surame.length<3){  
            alert("Last name must be at least 3 characters long.");  
        return false;  
        }else if(subject.length<3){  
            alert("Subject must be at least 3 characters long.");  
        return false;
        }else if(message.length<3){  
            alert("Message must be at least 3 words long.");  
        return false;  
        }else if (fullname!==""){
            alert("welcome " +fullname);
        }
    } 
    

/*
function firstName(e) {
    console.log(e.value)
    document.getElementById(name: )
}

var myInput = document.getElementById("name");
var length = document.getElementById("length");

//When the user clicks on the name field, show the message box
myInput.onfocus = function () {
    document.getElementById("message").style.display = "block";
}

//when the user clicks outside the message field, hide the message box
myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}

//when the user starts to type something inside the message field
myInput.onkeyup = function() {
    //validate length
    if (myInput.value.length < 3) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("invalid");
    }
}