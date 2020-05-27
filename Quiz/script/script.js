//  Mogelijke fonts
var fontFamilys = ["Jost", "Roboto", "Helvetica"];

var length = fontFamilys.length;
var numberFont = Math.floor(Math.random() * length);

document.body.style.fontFamily = fontFamilys[numberFont];

// Kijken als het andwoord goed is
var submitFont = document.getElementById('submitFont')
var fontValue = document.body.style.fontFamily

function checkAwnser() {
    var fontAnswer = document.getElementById('fontAnswer').value

    if (fontValue === fontAnswer) {
        console.log("yay");
        document.getElementById('submitFont').style.display = "none"
        document.getElementById('submitNext').style.display = "block"
        document.body.style.backgroundColor = "0f0"
    } else {
        console.log("ney");
    }
}
submitFont.onclick = checkAwnser;

// Geef een nieuwe font
var submitFont = document.getElementById('submitNext')

function randomizeFont() {
    document.getElementById('submitNext').style.display = "none"
    document.getElementById('submitFont').style.display = "block"

    var length = fontFamilys.length;
    var numberFont = Math.floor(Math.random() * length);

    document.body.style.fontFamily = (fontFamilys[numberFont]);
    fontValue = document.body.style.fontFamily
    document.getElementById('giveAwnser').textContent = "awnser";
}
submitNext.onclick = randomizeFont;

// Laat het andwoord zien
var awnserButton = document.getElementById('giveAwnser')

function giveAwnser() {
    document.getElementById('giveAwnser').textContent = fontValue;
}
awnserButton.onclick = giveAwnser;
