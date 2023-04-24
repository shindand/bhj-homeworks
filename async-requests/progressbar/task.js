const progress = document.getElementById( 'progress' );
const sendFile = document.getElementById('send');
const sendFileForm = document.forms.form;
progress.value = 0.3;

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/upload');
xhr.send();

xhr.onload = function() {
    console.log(xhr.status);
    console.log(xhr.response);
}

xhr.onprogress = function(event) {
    console.log(event.total);
    console.log(event.loaded);
  }


//  sendFile.onclick = function(evt) {
//    evt.preventDefault();
//  }

