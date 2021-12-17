   const barOpen =()=>{
    if (board.style.width !== '227px'){
         board.style.width = '227px'; 
}
    else{
    board.style.width = '0px';
}
   };

   const cln = () =>{
    const free = e => INSERT(e);
 if (input1.value !== '') { 
   if ((input1.value.indexOf('+') != -1 ||
    input1.value.indexOf('-') != -1 ||
    input1.value.indexOf('%') != -1 ||
    input1.value.indexOf('÷') != -1 ||
    input1.value.indexOf('×') !== -1) &&
    (input1.value.indexOf('√') === -1 ||
    input1.value.indexOf('^') === -1 ||
    input1.value.indexOf('π') === -1))
    { 
   let inputResult = input1.value.replace(/×/g, '*').replace(/÷/g, '/').replace(/-/g, '-');
   free(eval(inputResult));
    }
    else if (input1.value.indexOf('^') != -1){
      let expo = input1.value.split('^');free(Math.pow(expo[0], expo[1]));}
    else if (input1.value.indexOf('√') != -1){
      let expo = input1.value.split('√');if (expo[0] !== '') 
    {free(eval(Math.sqrt(expo[1]) * expo[0]));} 
    else {free(Math.sqrt(expo[1])); }} 
    else if (input1.value.indexOf('π') != -1) {var Pi = input1.value.split('π'); 
     if (Pi[0] !== ''){free(eval(Math.PI * Pi[0]));} 
     else {
       free(Math.PI); }
     } 
     else if (input1.value.indexOf('!') != -1) { var exclam = input1.value.split('!'); exclamationMath(exclam[0]); 
     }; } 
  };

  const exclamationMath = expression => {
   let constant = 1;
   const exclaim = () => {
    for (let i = 1; i < expression;) {
     constant += constant * i;i++; } return constant; }
  let expressionResult = exclaim();
   INSERT(expressionResult)
  }

 const clear = e => {
   let startPos = input1.selectionStart;
  let endPos = input1.selectionEnd;
   if (startPos == endPos) {
    var inputValuePostive = Array.from(input1.value).splice(0, endPos - 1);
    var inpValueNegative = Array.from(input1.value).splice(endPos, input1.value.length); var inputStartPositive = inputValuePostive.join().replace(/','/g, ""); var inputStartNegative = inpValueNegative.join().replace(/','/g, '');
    } insert(inputStartPositive + inputStartNegative)
 };

  const inputed = e => {
    let eValue = e.target.value;
    let startPos = input1.selectionStart;
    var endPos = input1.selectionEnd;
    if (startPos == endPos) {
      var inputValuePostive = Array.from(input1.value).splice(0, startPos);
      var inpValueNegative = Array.from(input1.value).splice(startPos, input1.value.length);
      var inputStartPositive = inputValuePostive.join().replace(/,/g, '');
      var inputStartNegative = inpValueNegative.join().replace(/,/g, '');
    }
    ////////////////////////////////////////////////
    const fixedDigit = () => {
      let constantLength = Array.from(input2.value).splice(0, 17).join().replace(/,/g, '');
      if (input1.value.length > 15) {
        insert(constantLength)
      }
      else {
        insert(inputStartPositive + eValue + inputStartNegative);
      }
    }
    fixedDigit();
    cln();
  }
 const insert = value => {
    input1.value = value;
  };
  const INSERT = value => {
     input2.value = value;
   }