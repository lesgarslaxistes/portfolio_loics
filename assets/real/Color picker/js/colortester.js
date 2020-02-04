/* Script JS exercice Color Tester */
/* Fabien Cazayous - 2019 */

/* Variables Globales */
var Rouge = 0x00;
var Vert = 0x00;
var Bleu = 0x00;

/* Applique la couleur sélectionnée au DOM */
function ValideCouleurHTML(){
	/* Récupère la chaîne Hexa des couleurs sélectionnées */
	HexaRouge = Rouge.toString(16).toUpperCase();
	HexaVert = Vert.toString(16).toUpperCase();
	HexaBleu = Bleu.toString(16).toUpperCase();

	/* Affiche la valeur sur 2 digits */
	if (HexaRouge == "0"){
	  HexaRouge = "00";
	} /* End If HexaRouge */
	if (HexaVert == "0"){
	  HexaVert = "00";
	} /* End If HexaVert */
	if (HexaBleu == "0"){
	  HexaBleu = "00";
	} /* End If HexaBleu */

	/* Concatène la chaîne Hexa des trois couleurs */
	hexaColor = "#" + HexaRouge + HexaVert + HexaBleu; 
	/* Transmet la chaîne Hexa au Background du DOM */
	document.body.style.backgroundColor = hexaColor;

	/* Transmet la chaîne Hexa à l'élément Output du DOM */
	var Output = document.getElementById("Output");
	Output.innerHTML = "Couleur sélectionnée : " + hexaColor;  
} // Fin function

function ChangeRouge(Butee){
//Controle Incrementation - Décrémentation
	Rouge += Butee;
	if (Rouge > 255){
	  Rouge = 255;
	} /* End Id Rouge */
	if (Rouge < 0){
	  Rouge = 0;
	} /* End If Rouge */
	ValideCouleurHTML();
} /* Fin Function */

function ChangeVert(Butee){
//Controle Incrementation - Décrémentation
	Vert += Butee;
	if (Vert > 255){
	  Vert = 255;
	} /* End If Vert */
	if (Vert < 0){
	  Vert = 0;
	} /* End If Vert */
	ValideCouleurHTML();
} /* Fin Function */

function ChangeBleu(Butee){
//Controle Incrementation - Décrémentation 
	Bleu += Butee;
	if (Bleu > 255){
	  Bleu = 255;
	} /* End If Bleu */
	if (Bleu < 0){
	  Bleu = 0;
	} /* End If Bleur */
	ValideCouleurHTML();
} /* Fin Function */

function ValideRouge(Valeur){
	Rouge = Valeur;
	ValideCouleurHTML();
} 

function ValideBleu(Valeur){
	Bleu = Valeur;
	ValideCouleurHTML();
}

function ValideVert(Valeur){
	Vert = Valeur;
	ValideCouleurHTML();
}