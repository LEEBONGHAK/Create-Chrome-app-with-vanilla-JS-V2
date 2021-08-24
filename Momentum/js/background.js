const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");      // html에 쓰일 tag생성
bgImage.src = `images/${chosenImage}`;

document.body.appendChild(bgImage);        // appendChild() : 생성한 html tag 추가