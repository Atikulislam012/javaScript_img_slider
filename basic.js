
//Image slider

var photos = ["image/1.JPG","image/2.JPG","image/3.JPG","image/4.JPG","image/5.JPG",];
var imgTag = document.querySelector("img")

var count = 0;

function next(){
    count++;
    if(count>=photos.length){
        count=0;
        imgTag.src = photos[count];
    }
    else{
      imgTag.src = photos[count];
    }
   
}

function prev(){
    count--;
    if(count< 0 ){
        count=photos.length - 1 ;
        imgTag.src = photos[count];
    }
    else{
      imgTag.src = photos[count];
    }
  }