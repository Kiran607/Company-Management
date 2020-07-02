$(".btnSave").on("click", function (e) {
    let company = {
        companyName: $(".nameText").val(),
        email: $(".emailText").val()
    }
    comapnyInformation(company)
    console.log(company);
    e.preventDefault();
    $(".formInfo").trigger("reset");
});



function comapnyInformation(company) {
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