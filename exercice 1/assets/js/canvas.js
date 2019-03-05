// getElementById() qui va permettre d'aller chercher et cibler l'élément <canvas> identifié par son attribut id unique
var c = document.getElementById('iceCream');
// la méthode getContext() de l'élément ainsi récupéré pour savoir dans quel contexte de dessin (2D ou 3D) le script va pouvoir agir,
// et de quelles fonctions il pourra disposer.
// Le contexte sera l'élément central de gestion de Canvas.
var ctx = c.getContext('2d');

// cornet
ctx.beginPath();
ctx.moveTo(200,400);
ctx.lineTo(250,200);
ctx.lineTo(150,200);
ctx.fillStyle = '#aa6522';
ctx.fill();
ctx.closePath();

// glace
ctx.beginPath();
ctx.moveTo(150,200);
// La courbe quadratique tracera une courbe à partir du point courant (défini par les précédents tracés, moveTo, lineTo, arc, etc...)
// jusqu'au point de destination (destx, desty) en étirant vers le point de contrôle (cpx, cpy).
// quadraticCurveTo( cp1x, cp1y, destx, desty )
ctx.quadraticCurveTo(200,60,250,200);
ctx.fillStyle='#8a0908';
ctx.fill();
ctx.lineWidth='1'; //taille de notre ligne
ctx.closePath();
