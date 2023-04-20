const interestCheck = document.querySelectorAll('.interest__check');
const interestsActive = document.querySelectorAll('.interests.interests_active');

 Array.from(interestCheck).forEach((item, index) => {

    item.addEventListener('change', () => 
 {

  if ((index + 1) < interestCheck.length && interestCheck[index + 1].closest('ul.interests.interests_active') && !item.closest('ul.interests.interests_active')) {

  for (let i = index + 1; i < interestCheck.length; i++) {
    if (interestCheck[i].closest('.interests.interests_active')) {
      if (interestCheck[i].checked == true) {
        interestCheck[i].checked = false;
      }
      else {
        interestCheck[i].checked = true;
      }
    }
    else {return;}
  }
  }

  });
});




    

    
