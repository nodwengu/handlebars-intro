// get a reference to the sms or call radio buttons
var billItemTypeRadio = document.querySelectorAll('.billItemTypeRadio');

//get a reference to the add button
var radioBillAddBtn = document.querySelector('.radioBillAddBtn');

//create a variable that will keep track of the total bill
var callTotalTwoElem = document.querySelector('.callTotalTwo');
var smsTotalTwoElem = document.querySelector('.smsTotalTwo');
var totalTwoElem = document.querySelector('.totalTwo');

var radioBillTotal1 = radioBillTotal()

function radioBillAddBtnClicked() {
   
   for(var i = 0; i < billItemTypeRadio.length; i++) {
      var element = billItemTypeRadio[i];

      if(element.checked) {
         if(element.value == "call") {
            radioBillTotal1.makeCall();
         } else if(element.value == "sms") {
            radioBillTotal1.sendSms();
         }
      }
   }

   createHtml()

   var total = radioBillTotal1.getTotal();
   if(total >= 50) {
      document.querySelector('#orange').classList.add('danger');
   } else if(total >= 30) {
      document.querySelector('#orange').classList.add('warning');
   }
}

function createHtml() {
   Handlebars.registerHelper('calcCallTotal', function() {
      return radioBillTotal1.getCallTotal();2
   });
   
   Handlebars.registerHelper('calcSmsTotal', function() {
      return radioBillTotal1.getSmsTotal();
   })
   
   Handlebars.registerHelper('calcTotal', function() {
      return radioBillTotal1.getTotal();
   })

   // Handlebars.registerHelper('changeColor', function(text, options) {
   //    text = Handlebars.Utils.escapeExpression(text);

   //    var total = radioBillTotal1.getTotal();
   //    if(total >= 10 && options.hash.color == "orange") {
   //       return new Handlebars.SafeString("<span class='red'>" + text + "</span>");
   //    } else if(total >= 5 && options.hash.color == "black") {
   //       return new Handlebars.SafeString("<span class='orange'>" + text + "</span>");
   //    }

   //    // if(options.hash.color == "blue") {
   //    //    return new Handlebars.SafeString("<span class='warning'>" + text + "</span>");
   //    // } else if(options.hash.color == "black") {
   //    //    return new Handlebars.SafeString("<span class='red'>" + text + "</span>");
   //    // } else {
   //    //    return new Handlebars.SafeString("<span class='green'>" + text + "</span>");
   //    // }
      
   // })
  
   var template = document.querySelector('.phoneCostTotal').innerHTML;
  
   var compiled = Handlebars.compile(template);
  
   var ourHtml = compiled();
   
   var radioBillTableElem = document.querySelector('.radioBillTable');

   radioBillTableElem.innerHTML = ourHtml;
}


radioBillAddBtn.addEventListener('click', radioBillAddBtnClicked);
