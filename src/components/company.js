$(".btnSave").on("click", function (e) {
    if(validate()==true){
    let company = {
        companyName: $(".nameText").val(),
        email: $(".emailText").val()
    }
    comapnyInformation(company)
    console.log(company);
    e.preventDefault();
    $(".formInfo").trigger("reset");
}
});



let comapnyInformation=(company)=> {
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/company',
        dataType: 'json',
        data: company,
        success: function (company) {
            console.log("Added successfully", company);
        },
        error: function () {
            console.log("nont saving employee data");
        }
    });
}

const matchResult=window.matchMedia("(max-width:767px)");

$(".hideMenu").click(function(){
    $(".wrapper").toggleClass("collapse");
 });

// function openNav() {
//     document.getElementById("nav").style.width = "250px";
//     document.getElementById("con").style.marginLeft = "250px";
//   }
  
//   function closeNav() {
//     document.getElementById("mySidebar").style.width = "0";
//     document.getElementById("main").style.marginLeft= "0";
//   }


const saveButton = document.getElementById('saveBtn');
let emailRGEX = /^[a-z]{3,}(|[.]?[0-9a-zA-Z]+)([@])([a-z0-9]+)([.|+|_][a-z]{2,4})(|[.][a-zA-Z]{2})$/;

const emailIsValid = email => {
    return emailRGEX.test(email);
  }

const validate = () => {
  const name = document.getElementById('companyName');
  const email = document.getElementById('email');

  if (name.value === "" || name.value===null) {
    alert("Please enter your companyname.");
    name.focus();
    return false;
  }
  if (email.value === "" || email.value===null) {
    alert("Please enter your email address.");
    email.focus();
    return false;
  }

if (!emailIsValid(email.value)) {
    alert("Please enter a valid email address ex abc@gmail.com.");
    email.focus();
    return false;
  }

  return true;
}

saveButton.addEventListener('click', validate);

