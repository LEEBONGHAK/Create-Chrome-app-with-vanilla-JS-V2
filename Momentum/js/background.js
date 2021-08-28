const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");      // html에 쓰일 tag생성
bgImage.src = `Momentum/images/${chosenImage}`;      // img tag에 src 속성 값 추가
bgImage.className("bgImage");

document.body.appendChild(bgImage);        // appendChild() : 생성한 html tag를 가장 마지막에 추가
//document.body.prepend(bgImage);        // prepend() : 생성한 html tag를 가장 처음에 추가
