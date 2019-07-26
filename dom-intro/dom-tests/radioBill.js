
function radioBillTotal() {
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

   return {
      makeCall,
      sendSms,
      getTotal,
      getCallTotal,
      getSmsTotal
   }
}

//var radioBillTotal = radioBillTotal('call', true);
// var radioBillTotal2 = radioBillTotal('sms', true);

// var test  = radioBillTotal.getCallTotal();
// radioBillTotal.getCallTotal();
// radioBillTotal.getCallTotal();
// alert(test);

// var test2  = radioBillTotal2.getSmsTotal();
// radioBillTotal2.getSmsTotal();
// alert(test2);

// var total = radioBillTotal2.getTotal();
// alert(total);
// textBillTotalOne.getCallTotal();
