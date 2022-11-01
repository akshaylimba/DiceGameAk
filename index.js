
function dice()
{
    var a1;
    var a2;
    var s2;
    a1 = Math.floor(Math.random()*6)+1;
    a2 = 'images/dice'+a1 +'.png';
    s2 = 'images/s'+a1 +'.png';
    document.getElementById("images1").src =s2;
    document.getElementById("imagedice1").src =a2;

    a1 = Math.floor(Math.random()*6)+1;
    a2 = 'images/dice'+a1 +'.png';
    s2 = 'images/s'+a1 +'.png';
    document.getElementById("imagedice2").src =a2;
    document.getElementById("images2").src =s2;
}