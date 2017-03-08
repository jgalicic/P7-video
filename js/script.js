
const video = document.querySelector('video');

const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const p4 = document.getElementById('p4');
const p5 = document.getElementById('p5');
const p6 = document.getElementById('p6');
const p7 = document.getElementById('p7');
const p8 = document.getElementById('p8');
const p9 = document.getElementById('p9');
const p10 = document.getElementById('p10');
const p11 = document.getElementById('p11');
const p12 = document.getElementById('p12');
const p13 = document.getElementById('p13');
const p14 = document.getElementById('p14');
const p15 = document.getElementById('p15');
const p16 = document.getElementById('p16');

//Highlight transcript text from the video
function timeUpdateFunction(event) {

  //Clear highlighted class from any previously highlighted span elements
  function clearClass() {

   var x = document.querySelectorAll("span.highlighted");
        for (var i = 0; i < x.length; i++) {
        x[i].removeAttribute('class');
        }
      }

    if (video.currentTime >= 0 && video.currentTime < 4.13) {
      clearClass();
      p1.className = 'highlighted';
    } else if (video.currentTime >= 4.13 && video.currentTime < 7.535) {
      clearClass();
      p2.className = 'highlighted';
    } else if (video.currentTime >= 7.535 && video.currentTime < 11.27) {
      clearClass();
      p3.className = 'highlighted';
    } else if (video.currentTime >= 11.27 && video.currentTime < 13.96) {
      clearClass();
      p4.className = 'highlighted';
    } else if (video.currentTime >= 13.96 && video.currentTime < 17.94) {
      clearClass();
      p5.className = 'highlighted';
    } else if (video.currentTime >= 17.94 && video.currentTime < 22.37) {
      clearClass();
      p6.className = 'highlighted';
    } else if (video.currentTime >= 22.37 && video.currentTime < 26.88) {
      clearClass();
      p7.className = 'highlighted';
    } else if (video.currentTime >= 26.88 && video.currentTime < 32.1) {
      clearClass();
      p8.className = 'highlighted';
    } else if (video.currentTime >= 32.1 && video.currentTime < 34.73) {
      clearClass();
      p9.className = 'highlighted';
    } else if (video.currentTime >= 34.73 && video.currentTime < 39.43) {
      clearClass();
      p10.className = 'highlighted';
    } else if (video.currentTime >= 39.43 && video.currentTime < 42.35) {
      clearClass();
      p11.className = 'highlighted';
    } else if (video.currentTime >= 42.35 && video.currentTime < 46.3) {
      clearClass();
      p12.className = 'highlighted';
    } else if (video.currentTime >= 46.3 && video.currentTime < 49.27) {
      clearClass();
      p13.className = 'highlighted';
    } else if (video.currentTime >= 49.27 && video.currentTime < 53.76) {
      clearClass();
      p14.className = 'highlighted';
    } else if (video.currentTime >= 53.76 && video.currentTime < 57.78) {
      clearClass();
      p15.className = 'highlighted';
    } else if (video.currentTime >= 57.78) {
      clearClass();
      p16.className = 'highlighted';
    }
}
  
//Skip to a specified area in the video when transcript text is clicked

p1.addEventListener('click', () => {
  video.currentTime = 0;
});
p2.addEventListener('click', () => {
  video.currentTime = 4.13;
});
p3.addEventListener('click', () => {
  video.currentTime = 7.535;
});
p4.addEventListener('click', () => {
  video.currentTime = 11.27;
});
p5.addEventListener('click', () => {
  video.currentTime = 13.96;
});
p6.addEventListener('click', () => {
  video.currentTime = 17.94;
});
p7.addEventListener('click', () => {
  video.currentTime = 22.37;
});
p8.addEventListener('click', () => {
  video.currentTime = 26.88;
});
p9.addEventListener('click', () => {
  video.currentTime = 32.1;
});
p10.addEventListener('click', () => {
  video.currentTime = 34.73;
});
p11.addEventListener('click', () => {
  video.currentTime = 39.43;
});
p12.addEventListener('click', () => {
  video.currentTime = 42.35;
});
p13.addEventListener('click', () => {
  video.currentTime = 46.3;
});
p14.addEventListener('click', () => {
  video.currentTime = 49.27;
});
p15.addEventListener('click', () => {
  video.currentTime = 53.76;
});
p16.addEventListener('click', () => {
  video.currentTime = 57.78;
});

