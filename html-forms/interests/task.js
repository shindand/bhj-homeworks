const interestCheck = document.querySelectorAll('.interest__check');
const interestsActive = document.querySelectorAll('.interests.interests_active');

 Array.from(interestCheck).forEach((item, index) => {
    
   console.log(item, index);

    item.addEventListener('change', () => 
 {
     Array.from(interestsActive).forEach(next => {
       // while(item.nextSibling != 'ul')
        console.log(item.nextSibling);
     });
    });
   // console.log(item.nextSibling);
    //console.log(item.nextSibling);
     //console.log(item.closest('ul'));



    
});
    
    
    
    
    
    
  //  item.checked = true);
    
