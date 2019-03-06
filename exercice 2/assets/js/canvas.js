// getElementById() qui va permettre d'aller chercher et cibler l'élément <canvas> identifié par son attribut id unique
var c = document.getElementById('ufo');
// la méthode getContext() de l'élément ainsi récupéré pour savoir dans quel contexte de dessin (2D ou 3D) le script va pouvoir agir,
// et de quelles fonctions il pourra disposer.
// Le contexte sera l'élément central de gestion de Canvas.
var ctx = c.getContext('2d');

// ovnis
ctx.beginPath();
ctx.moveTo(160,150);
// jusqu'au point de destination (destx, desty) en étirant vers le point de contrôle (cpx, cpy).
 // quadraticCurveTo( horizontal, vertical, point fin horizontal, point fin vertical )
ctx.quadraticCurveTo(200,60,240,160);
ctx.fillStyle='#fff';
ctx.fill();
ctx.closePath(); 

// arrondi haut
ctx.beginPath();
ctx.moveTo(80,180);
ctx.quadraticCurveTo(200,100,320,180);


// arrondi bas
ctx.moveTo(80,180);
ctx.quadraticCurveTo(200,260,320,180);
ctx.fillStyle='#e0e1f3';
ctx.fill();
ctx.closePath();
