let Search_bar = document.querySelector("#Icon_cont")
Search_bar.onclick = function(){
    Search_bar.style.visibility = "hidden";
    Icon_close.style.display = "inline";
    Searchbox.style.display = "inline"
    document.querySelector(".Searchbox_container").classList.toggle("active");
}
Icon_close.onclick = function(){
    Search_bar.style.visibility = "visible"
    Icon_close.style.display = "none"
    Searchbox.style.display = "none"
    Remove_elements()
}
let Subheadings = ["Home","Training","Trainers","Cafe","Hall_Rental", "Membership","Tips","Feedback","FAQ"
    ,"Location"];

let Subheadings_path = {
    "Home":"home_page/home_page.html",
    "Training":"Training_page/Training_page.html",
    "Trainers":"Training_page/Training_page.html",
    "Cafe":"Features_page/Features_page.html",
    "Hall_Rental":"Features_page/Features_page.html",
    "Membership":"Membership_page/Membership_page.html",
    "Tips":"Tips_page/Tips_page.html",
    "Feedback":"Contact_page/Contact_page.html",
    "FAQ":"About_page/About_page.html",
    "Location":"Location_page/Location_page.html"
}

let Search_input = document.getElementById("Searchbox")
Search_input.addEventListener("keyup", function(e){
    Remove_elements();
    for(let i of Subheadings){
        if(i.toLowerCase().startsWith(Search_input.value.toLowerCase()) && Search_input.value != "")
    {
    let Search_list = document.createElement("li");
    Search_list.classList.add("Autocomplete_list")
    Search_list.setAttribute("onclick", "displayNames('" + i + "')");
    Search_list.onclick = function(){
        window.location.href="../" + Subheadings_path[i];
    }
    let Automatic_fill = "<b>" + i.substring(0,Search_input.value.length) + "</b>";
    Automatic_fill += i.substring(Search_input.value.length)
    Search_list.innerHTML = Automatic_fill;
    document.querySelector(".Autofill_list").appendChild(Search_list);
    }
}}
);
function Remove_elements(){
    let list_items = document.querySelectorAll(".Autocomplete_list");
    list_items.forEach(function(list_item){
        list_item.remove();
    });
}

document.getElementById("Submit_input").addEventListener("onclick", function(){
    
})
