// hideContent=()=>{
//     let content = document.getElementById("home");
//     if (content.style.display === "none") {
//       content.style.display = "block";
//     } else {
//       content.style.display = "none";
//     }
// }

$(document).ready(function(){
$("").each(function(index){
    $(this).hide();
    return false;
});
$(".sidenav #home").click(function(){
    $("a").show();
});
});