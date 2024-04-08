let playing1 = false;
let playing2 = false;
let playing3 = false;

const btnPlayPause = document.querySelectorAll(".btn-play-pause");

function playPause(index) {
  switch (Number(index)) {
    case 0:
      playing1 = !playing1;
      if (playing1) {
        btnPlayPause[Number(index)].innerHTML =
          '<i class="ph-fill ph-pause"></i>';
      } else {
        btnPlayPause[Number(index)].innerHTML =
          '<i class="ph-fill ph-play"></i>';
      }
      break;
    case 1:
      playing2 = !playing2;
      if (playing2) {
        btnPlayPause[Number(index)].innerHTML =
          '<i class="ph-fill ph-pause"></i>';
      } else {
        btnPlayPause[Number(index)].innerHTML =
          '<i class="ph-fill ph-play"></i>';
      }
      break;

    default:
      playing3 = !playing3;
      if (playing3) {
        btnPlayPause[Number(index)].innerHTML =
          '<i class="ph-fill ph-pause"></i>';
      } else {
        btnPlayPause[Number(index)].innerHTML =
          '<i class="ph-fill ph-play"></i>';
      }
  }
}
