
//get a reference to the add button
var addToBillBtnElem = document.querySelector('.addToBillBtn');

//create a variable that will keep track of the total bill
var callsTotalElem = document.querySelector('.callTotalOne');
var smsTotalElem = document.querySelector('.smsTotalOne');
var totalCostElem = document.querySelector('.totalOne');

var TextBillTotal1 = TextBillTotal();

function addBtnClicked() {
   // get a reference to the textbox where the bill type is to be entered
   var billTypeText = document.querySelector('.billTypeText');
   var billTypeVal = billTypeText.value;

   // get the value entered in the billType textfield
   billTypeVal = billTypeVal.trim();
   billTypeVal = billTypeVal.toLowerCase();

   if (billTypeVal == 'call'){
      TextBillTotal1.makeCall();

   } else if (billTypeVal == "sms"){
      TextBillTotal1.sendSms();
   }

   createHTML();
   
   var total = TextBillTotal1.getTotal()
   if (total >= 50){
      document.querySelector('.red').classList.add("danger");
   } else if (total >= 30){
      document.querySelector('.red').classList.add("warning");
   }
}


function createHTML() {
   Handlebars.registerHelper('calcCallTotal', function() {
      return TextBillTotal1.getCallTotal();
   });
   
   Handlebars.registerHelper('calcSmsTotal', function() {
      return TextBillTotal1.getSmsTotal();
   })
   
   Handlebars.registerHelper('calcTotal', function() {
      return TextBillTotal1.getTotal();
   })
  
   var rawTemplate = document.querySelector('.phoneCostTotal').innerHTML;
  
   var compiledTemplate = Handlebars.compile(rawTemplate);
  
   var ourGeneratedHtml = compiledTemplate();
   
   var textBillTableElem = document.querySelector('.textBillTable');

   textBillTableElem.innerHTML = ourGeneratedHtml;
}

addToBillBtnElem.addEventListener('click', addBtnClicked);

