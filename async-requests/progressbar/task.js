const progress = document.getElementById( 'progress' );
const sendFile = document.getElementById('send');
const sendFileForm = document.forms.form;
//progress.value = 0.3;

sendFile.onclick = function(evt) {
  evt.preventDefault();

  let formData = new FormData(form);
  let xhr = new XMLHttpRequest();
  
  xhr.upload.onprogress = function(event) {
  progress.value = event.loaded / event.total;
}

xhr.onloadend = function() {
  if (xhr.status == 200) {
    console.log("Успех");
  } else {
    console.log("Ошибка " + this.status);
  }
};

xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
xhr.send(formData);


}


  

