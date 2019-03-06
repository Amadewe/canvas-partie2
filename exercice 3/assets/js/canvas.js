var c = document.getElementById('gingerbreadMan');
var ctx = c.getContext('2d');

// rond de tête
ctx.beginPath();
//200: horizontal / 80: hauteur /40 : taille de ma tête /0 pour tout le cercle
ctx.arc(200,80,50,0,Math.PI*2,true);
ctx.fillStyle = '#976f0f';
ctx.fill();

// haut de la bouche
ctx.beginPath();
ctx.moveTo(175,95); //mon point de départ, horizontal et vertical
ctx.quadraticCurveTo(200,110,225,95);
ctx.lineWidth='2';
ctx.strokeStyle= '#f20b01';
ctx.stroke();

// bas de la bouche
ctx.beginPath();
ctx.moveTo(175,95); //mon point de départ, horizontal et vertical
// Les premières permettent de définir deux points d'inflection (cp1x, cp1y) et (cp2x, cp2y)
// pour changer de direction durant le tracé du même segment de courbe jusqu'au point de destination (destx, desty).
ctx.quadraticCurveTo(200,130,225,95);
ctx.lineWidth='2';
ctx.strokeStyle= '#f20b01';
ctx.stroke();

// l'oeil gauche
ctx.beginPath();
//  Deux méthodes existent : arcTo() et surtout arc().
// Le prototype de cette dernière fonction définit les coordonnées centrales de l'arc, son rayon (toujours en pixels),
// l'angle de début et de fin, et enfin dans quel sens le pinceau va tourner grâce à un booléen.
// arc( x, y, radius, startAngle, endAngle, sensAntiHoraire )
ctx.arc(185, 75, 8, 0, Math.PI*2,true);
ctx.fillStyle = '#ffffff';
ctx.fill();

// l'oeil droit
ctx.beginPath();
ctx.arc(215, 75, 8, 0, Math.PI*2,true);
ctx.fillStyle = '#ffffff';
ctx.fill();

// sourcil gauche
ctx.beginPath();
ctx.moveTo(175, 62);
ctx.quadraticCurveTo(185,53, 193,62);
ctx.lineWidth= '1';
ctx.strokeStyle= '#ffffff';
ctx.stroke();

// sourcil droit
ctx.beginPath();
ctx.moveTo(225, 62);
ctx.quadraticCurveTo(215,53, 207,62);
ctx.lineWidth= '1';
ctx.strokeStyle= '#ffffff';
ctx.stroke();

// le corps
ctx.fillStyle = '#976f0f';
ctx.fillRect(160,130,80,130);
ctx.fill();

// boutton du haut
ctx.beginPath();
ctx.arc(200, 160, 8, 0, Math.PI*2,true);
ctx.fillStyle = '#7a2976';
ctx.fill();

// boutton du bas
ctx.beginPath();
ctx.arc(200, 200, 8, 0, Math.PI*2,true);
ctx.fillStyle = '#7a2976';
ctx.fill();


// les bras
ctx.beginPath();
ctx.moveTo(90,135);
ctx.lineTo(310,135);
// lineCap pour arrondir les bords
ctx.lineCap = 'round';
// lineWidth pour la taille de la ligne
ctx.lineWidth = '35';
ctx.strokeStyle = '#976f0f';
ctx.stroke();

// jambe gauche
ctx.beginPath();
ctx.moveTo(177,230);
ctx.lineTo(177,290);
ctx.lineCap = 'round';
ctx.lineWidth = '35';
ctx.strokeStyle = '#976f0f';
ctx.stroke();

// jambe droite
ctx.beginPath();
ctx.moveTo(223,230);
ctx.lineTo(223,290);
ctx.lineCap = 'round';
ctx.lineWidth = '35';
ctx.strokeStyle = '#976f0f';
ctx.stroke();
