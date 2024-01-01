const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  
  const elements = document.getElementsByClassName("typing-animation");
  
  (async (typedElements) => {
     let texts = []
     
     for (let element of typedElements){
      texts.push(element.innerHTML);
      element.innerHTML = "";
     }
     
     for (let i = 0; i < texts.length; i++) {
        for (let character of texts[i]) {
          typedElements[i].innerHTML += character;
          await sleep(200)
        } 
     }

  })(elements);

const counter = document.getElementById("counter");
var count = 0;

function increase(){
    count += 1 ;
    counter.innerHTML = count;
}

function decrease(){
    count -= 1;
    counter.innerHTML = count;
}

const word = document.getElementById("word");

let array = [];

for (let i=0 ; i< word.length; i++) {
    array.push[i];
}


function harfSirala() {
  var kelime = document.getElementById("wordInput").value;
  var sonuc = "";

  for (var i = 0; i < kelime.length; i++) {
      sonuc += kelime[i] + " ";
  }

  for (var i = kelime.length - 2; i >= 0; i--) {
      sonuc += kelime[i] + " ";
  }

  console.log(sonuc.trim());
}