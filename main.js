  btn.addEventListener('click', clear);
  form.addEventListener('submit', e => {
  e.preventDefault();
  })
   btnAllArray.forEach( btn => { 
  btn.addEventListener('click', inputed); 
 });
  document.querySelector('#val').addEventListener('click', () => {
   if (input2.value !== '' && input2.value !== NaN ) {
    insert(input2.value)
    INSERT('');
   } 
  });
