const qrcodeCanva = document.getElementById("qrcode");

const qrcode = new QRCode(qrcodeCanva, {
  text: "http://jindo.dev.naver.com/collie",
  width: 128,
  height: 128,
  colorDark: "#1f1f1f",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H,
});
