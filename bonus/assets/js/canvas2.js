
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
