const player = document.getElementById("player");
const captureButton = document.getElementById("capture-button");
const outputCanvas = document.getElementById("output");
const context = outputCanvas.getContext("2d");

navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    player.srcObject = stream;
  })
  .catch((error) => {
    console.error("Can not get an access to a camera...", error);
  });

captureButton.addEventListener("click", () => {
  document.getElementById("container").style.display = "none";
  document.getElementById("rfid").style.display = "block";
  document.getElementById("yellow").innerText = makeid(25); 
});

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}