const progress = document.getElementById( 'progress' );
const sendFile = document.getElementById('send');
const sendFileForm = document.forms.form;
//progress.value = 0.3;

sendFile.onclick = function(evt) {
  evt.preventDefault();
  const fileSend = this.files;

  let xhr = new XMLHttpRequest();

xhr.onprogress = function(event) {
  console.log(event.total);
  console.log(event.loaded);
  progress.value = ((event.loaded * 100) / event.total) / 100;
  console.log(progress.value);
}


xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
xhr.send(fileSend);


}

  // sendFile.addEventListener('change', function(e) {  // evt.preventDefault();    }
  

