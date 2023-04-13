class Autocomplete {
  constructor( container ) {
    this.container = container;
    this.input = container.querySelector( '.autocomplete__input' );
    this.searchInput = container.querySelector( '.autocomplete__search' );
    this.list = container.querySelector( '.autocomplete__list' );
    this.valueContainer = container.querySelector( '.autocomplete__value' );
    this.valueElement = container.querySelector( '.autocomplete__text-content' );

    this.registerEvents();
  }

  registerEvents() {
    this.valueContainer.addEventListener( 'click', e => {
      this.searchInput.classList.add( 'autocomplete__search_active' );
      this.list.classList.add( 'autocomplete__list_active' );
      this.searchInput.value = this.valueElement.textContent.trim();
      this.searchInput.focus();

      this.onSearch();
    });


    this.searchInput.addEventListener( 'input', e => this.onSearch());

    this.list.addEventListener( 'click', e => {
      const { target } = e;
      if ( !target.matches( '.autocomplete__item' )) {
        return;
      }

      const { textContent: text } = target,
        { id: value, index } = target.dataset;

      this.onSelect({
        index,
        text,
        value
      });
    });
  }

  onSelect( item ) {
    this.input.selectedIndex = item.index;
    this.valueElement.textContent = item.text;

    this.searchInput.classList.remove( 'autocomplete__search_active' );
    this.list.classList.remove( 'autocomplete__list_active' );
  }

  onSearch() {
    const matches = this.getMatches( this.searchInput.value );

    this.renderMatches( matches );
  }

  renderMatches( matches ) {
    const html = matches.map( item => `
    	<li>
        <span class="autocomplete__item"
        	data-index="${item.index}"
          data-id="${item.value}"
        >${item.text}</span>
      </li>
    `);

    this.list.innerHTML = html.join('');
  }

  
  getMatches( text ) {
    /*
      TODO: этот метод нужно дописать
      text - фраза, которую вводят в поле поиска
      Метод должен вернуть массив.

      Он формируется на основе списка опций select-элемента (this.input)
      Подходящие опции - те, чей текст содержит то, что есть в аргументе text
      Необходимо вернуть массив объектов со свойствами:
      {
        text: 'Содержимое <option>',
        value: 'Содержимое атрибута value'
      }
    */


   let array = [];
   let obj = {};
  let i = 0;

   const autocompleteInput = document.querySelector('.autocomplete__input');

   let newArray = Array.from(autocompleteInput).filter(item => {
    if (item.innerText.includes(text)) {
      console.log(item.innerText);
      return item.innerText;
    }
  });

  console.log(newArray[0],newArray[1],newArray[2]);


   Array.from(autocompleteInput).forEach(item => {

    if (item.textContent.includes(text)) {
      obj.text = item.textContent;
      obj.value = item.index;
      array.push(obj);
      i++;
    }
      
   
    
    
 //    if (item.textContent.match(text) != null) {
 //     let regs = "text\\g";
 //     obj.text = item.textContent.match(text).input;
 //     obj.value = item.value;  
//      array.push(obj); 
   
   //   console.log(array);
 //   }

  //  if (item.textContent.input.includes(text)) {console.log('777')};
 //   console.log(item.textContent.includes(text));

 
});
      //console.log(array);
//console.log(i);
  //    console.log(array);
   
  return array;

 
 


  }
}

new Autocomplete( document.querySelector( '.autocomplete' ));
