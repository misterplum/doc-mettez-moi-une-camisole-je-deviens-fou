function masquer_div(names)
{
 // document.getElementById("texte").innerHTML = "test"; 
 var cercles = document.querySelectorAll(".epaule, .coude, .poignet, .hanche, .cheville, .genou");
 //selectionne les cercles

 for (var i = 0; i < cercles.length; i++) {
 	cercles[i].style.background = "#00000078";//réinitialise la couleur des cercles
 }
 document.getElementById(names).style.background = "#ff000078";//change la couleur de l'élément cliqué

switch (names){ //série de situations liées à 'bouton_... innerHTML affiche le texte correspondant break finit l'action
	case 'bouton_cheville':document.getElementById("texte").innerHTML = "cheville"; break;
	case 'bouton_genou':document.getElementById("texte").innerHTML = "genou"; break;
	case 'bouton_hanche':document.getElementById("texte").innerHTML = "hanche"; break;
	case 'bouton_poignet':document.getElementById("texte").innerHTML = "poignet"; break;
	case 'bouton_epaule':document.getElementById("texte").innerHTML = "épaule"; break;
	case 'bouton_coude':document.getElementById("texte").innerHTML = "coude"; break;
	default: document.getElementById("texte").innerHTML = "error"; break;
	//par défaut affiche rien, mais affiche error en cas de faute de frappe dans les noms des boutons
 }}
