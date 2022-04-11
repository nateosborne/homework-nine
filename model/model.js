// this information simulates getting data from a database
var homeContent = `<div class="wrapper">
<div class="title">HOMEPAGE</div>
</div>
<footer>Copyright &copy; 2022</footer>`;
var aboutContent = `<div class="wrapper">
<div class="title">ABOUT</div>
</div>
<footer>Copyright &copy; 2022</footer>`;
var productsContent = `<div class="wrapper">
<div class="title">PRODUCTS</div>
</div>
<footer>Copyright &copy; 2022</footer>`;
var contactContent = `<div class="wrapper">
<div class="title">CONTACT</div>
</div>
<footer>Copyright &copy; 2022</footer>`;

export var myName = "Nate";

// this function is being called from the app.js and it has the page name
export function modelPageName(pgName){
    console.log(pgName);

    $("#app").html(eval(pgName));
}