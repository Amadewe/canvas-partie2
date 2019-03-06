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

// Losange 1
ctx.beginPath();
//sup gauche
ctx.moveTo(700,150);
// pointe haut
ctx.lineTo(710,140);
// sup droite
ctx.lineTo(720,150);
// inf droite
ctx.lineTo(720,160);
// pointe bas
ctx.lineTo(710,170);
// inf gauche
ctx.lineTo(700,160);
ctx.fillStyle = '#ebebeb';
ctx.fill();
ctx.closePath();

// 2eme logange
// plus plus du 1er losange
ctx.beginPath();
//sup gauche
ctx.moveTo(720,170);
// pointe haut
ctx.lineTo(730,160);
// sup droite
ctx.lineTo(740,170);
// inf droite
ctx.lineTo(740,180);
// pointe bas
ctx.lineTo(730,190);
// inf gauche
ctx.lineTo(720,180);
ctx.fillStyle = '#ebebeb';
ctx.fill();
ctx.closePath();

// 3eme losange
//moins plus du 1er losange
ctx.beginPath();
//sup gauche
ctx.moveTo(680,170);
// pointe haut
ctx.lineTo(690,160);
// sup droite
ctx.lineTo(700,170);
// inf droite
ctx.lineTo(700,180);
// pointe bas
ctx.lineTo(690,190);
// inf gauche
ctx.lineTo(680,180);
ctx.fillStyle = '#ebebeb';
ctx.fill();
ctx.closePath();

// 4eme Losange
// plus plus du 3eme losange
ctx.beginPath();
//sup gauche
ctx.moveTo(700,190);
// pointe haut
ctx.lineTo(710,180);
// sup droite
ctx.lineTo(720,190);
// inf droite
ctx.lineTo(720,200);
// pointe bas
ctx.lineTo(710,210);
// inf gauche
ctx.lineTo(700,200);
ctx.fillStyle = '#ebebeb';
ctx.fill();
ctx.closePath();

//5eme Losange
// plus plus du 4eme losange
ctx.beginPath();
//sup gauche
ctx.moveTo(720,210);
// pointe haut
ctx.lineTo(730,200);
// sup droite
ctx.lineTo(740,210);
// inf droite
ctx.lineTo(740,220);
// pointe bas
ctx.lineTo(730,230);
// inf gauche
ctx.lineTo(720,220);
ctx.fillStyle = '#ebebeb';
ctx.fill();
ctx.closePath();

// 6eme losange
//moins plus du 4eme losange
ctx.beginPath();
//sup gauche
ctx.moveTo(680,210);
// pointe haut
ctx.lineTo(690,200);
// sup droite
ctx.lineTo(700,210);
// inf droite
ctx.lineTo(700,220);
// pointe bas
ctx.lineTo(690,230);
// inf gauche
ctx.lineTo(680,220);
ctx.fillStyle = '#ebebeb';
ctx.fill();
ctx.closePath();
