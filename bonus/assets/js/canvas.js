var c = document.getElementById('logo');
var ctx = c.getContext('2d');

//E
//baton vertical
ctx.beginPath();
ctx.moveTo(80,150);
ctx.lineTo(80,380);
ctx.lineWidth = 4;
ctx.stroke();

//baton sup
ctx.beginPath();
ctx.moveTo(80,150);
ctx.lineTo(200,150);
ctx.lineWidth = 4;
ctx.stroke();

//baton inf
ctx.beginPath();
ctx.moveTo(80,380);
ctx.lineTo(200,380);
ctx.lineWidth = 4;
ctx.stroke();

//baton milieu
ctx.beginPath();
ctx.moveTo(80,260);
ctx.lineTo(200,260);
ctx.lineWidth = 4;
ctx.stroke();

//N
//1er baton vertical
ctx.beginPath();
ctx.moveTo(425,150);
ctx.lineTo(425,380);
ctx.lineWidth = 4;
ctx.stroke();

//2eme baton vertical
ctx.beginPath();
ctx.moveTo(650,150);
ctx.lineTo(650,380);
ctx.lineWidth = 4;
ctx.stroke();

//baton du milieu
ctx.beginPath();
ctx.moveTo(425,150);
ctx.lineTo(650,380);
ctx.lineWidth = 4;
ctx.stroke();

// debut deux
ctx.beginPath();
ctx.lineWidth="15";
ctx.strokeStyle="#ea4e1d";
ctx.moveTo(200,150);
ctx.quadraticCurveTo(740,-150,150,450);
ctx.stroke();

// deux bas
ctx.beginPath();
ctx.strokeStyle="#ea4e1d";
ctx.moveTo(400,420);
ctx.lineTo(150,450);
ctx.lineWidth = 15;
ctx.stroke();

//rond en bas du 2
ctx.beginPath();
ctx.fillStyle = "#ea4e1d";
ctx.arc(395,420,8,0,Math.PI*2,false);
ctx.fill();

//texte
ctx.beginPath();
ctx.font = '30px serif';
ctx.fillStyle = "grey";
ctx.fillText('Ecole du Numérique', 420, 415);
ctx.fillText('du Noyonnais', 420, 445);
ctx.fill();

//rectangle
ctx.beginPath();
ctx.fillStyle = "grey";
ctx.fillRect(720,150,29,17);
ctx.closePath();

//triangle au dessus
ctx.beginPath();
ctx.fillStyle = "grey";
ctx.moveTo(735,135);
ctx.lineTo(720,150);
ctx.lineTo(750,150);
ctx.fill();
ctx.closePath();

//triangle au dessous
ctx.beginPath();
ctx.fillStyle = "grey";
ctx.moveTo(735,181);
ctx.lineTo(720,167);
ctx.lineTo(750,167);
ctx.fill();
ctx.closePath();

//logange 1 ligne
ctx.beginPath();
//pointe
ctx.moveTo(798,150);
//coin sup droite
ctx.lineTo(815,170);
//coin inf droite
ctx.lineTo(815,185);
//pointe bas
ctx.lineTo(798,200);
//coin inf gauche
ctx.lineTo(780,185);
//coin sup gauche
ctx.lineTo(780,170);
ctx.fillStyle = 'grey';
ctx.fill();
ctx.closePath();

//logange 2 ligne A FINIR 
ctx.beginPath();
//pointe
ctx.moveTo(750,220);
//coin sup droite
ctx.lineTo(780,240);
//coin inf droite
ctx.lineTo(780,250);
//pointe bas
ctx.lineTo(750,300);
//coin inf gauche
ctx.lineTo(720,240);
//coin sup gauche
ctx.lineTo(720,250);
ctx.fillStyle = 'grey';
ctx.fill();
ctx.closePath();
