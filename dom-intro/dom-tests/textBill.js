
var TextBillTotal = function() {
   var callsTotal = 0;
   var smsTotal = 0;
   var total = 0;

   function makeCall() {
      callsTotal += 2.75;
   }

   function sendSms() {
      smsTotal += 0.75;
   }

   function getCallTotal() {
      return callsTotal.toFixed(2);;
   }

   function getSmsTotal() {
      return smsTotal.toFixed(2);;
   }

   function getTotal() {
      total = callsTotal + smsTotal;
     return total.toFixed(2);
}

function checkInput(costType) {
   if (costType == ""){
      return "Input value required";
   } else if (costType !== 'call' && costType !== 'sms'){
      return "Invalid input";
   }
}

   return {
      // setCall,
      // setSms,
      makeCall,
      sendSms,
      getTotal,
      checkInput,
      getCallTotal,
      getSmsTotal
   }
}


var textBillTotalInstance = TextBillTotal();

// textBillTotalInstance.makeCall();
// textBillTotalInstance.makeCall();
// alert(textBillTotalInstance.getCallTotal());

// textBillTotalInstance.sendSms();
// textBillTotalInstance.sendSms();
// alert(textBillTotalInstance.getSmsTotal());