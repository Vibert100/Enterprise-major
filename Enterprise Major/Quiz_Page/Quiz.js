document.getElementById("Recommender_Form").addEventListener("submit", function(event) {event.preventDefault();

const Sleep = parseInt(document.querySelector('select[name="Sleep"]').value);
const Exercise = parseInt(document.querySelector('select[name="Exercise"]').value);
const Academics = parseInt(document.querySelector('select[name="Academics"]').value);
const Social = parseInt(document.querySelector('select[name="Social"]').value);

document.getElementById("Sleep_Reco").style.display = "none";
document.getElementById("Exercise_Reco").style.display = "none";
document.getElementById("Academic_Reco").style.display = "none";
document.getElementById("Social_Reco").style.display = "none";


if (Sleep <= Exercise && Sleep <= Academics && Sleep <= Social){
    document.getElementById("Sleep_Reco").style.display = "flex";
}
else if (Exercise <= Academics && Exercise <= Social) {
    document.getElementById("Exercise_Reco").style.display = "flex";
}
else if (Academics <= Social) {
    document.getElementById("Academic_Reco").style.display = "flex";
}
else {
    document.getElementById("Social_Reco").style.display = "flex";
}

})