
let addRegNumberElemBtn = document.querySelector('#addNumber');
let registrationNumberList = document.querySelector('#registrationNumbers');
let registrationFilterBtn = document.querySelector('#registrationFilter');

const registrationInstance = createRegistrationNumber();

function saveRegistration() {
   data = JSON.parse(localStorage.getItem('registrationNumbers'));
   let regInputVal = document.querySelector('#regInput').value;

   if( registrationNumberInstance.displayError(regInputVal) || !registrationNumberInstance.validInput(regInputVal) ) {
      document.querySelector('.errorMsg').classList.add('showError');
      document.querySelector('.errorMsg').innerHTML = "Error in your input fields";
      return;
   } else {
      document.querySelector('.errorMsg').classList.remove('showError');
   }

   registrationNumberInstance.setRegNumber(regInputVal)
   registrationNumberInstance.setRegObj();

   let registrationNumbers = [];
   let obj = registrationNumberInstance.getRegObj();
   

    if(localStorage.getItem('registrationNumbers')) {
      if( registrationNumberInstance.checkRegNumber(data) ) {
         return false;
      } else {
         registrationNumbers = JSON.parse(localStorage.getItem('registrationNumbers'));
         registrationNumbers.push(obj);
         let theDiv = document.createElement('div');

         for(let i = 0; i < registrationNumbers.length; i++) {
            let elem = registrationNumbers[i];
            theDiv.innerHTML = elem.registration;
         }
         registrationNumberList.appendChild(theDiv);
         document.querySelector('#regInput').value = ''
         localStorage.setItem('registrationNumbers', JSON.stringify(registrationNumbers))
      }
      
   } else {
      registrations.push(obj);
      localStorage.setItem('registrationNumbers', JSON.stringify(registrations))
      document.querySelector('#regInput').value = ''
      registrationNumberList.innerHTML = "<div>" + obj.registration + "</div>";
   }
}

function filterRegistrations() {
   
   for(let i = 0; i < regNumberRadio.length; i++) {
      let elem = regNumberRadio[i];

      if(elem.checked) {
         if (registrationNumberList.hasChildNodes()) {
            // It has at least one
            registrationNumberList.innerHTML = "";
         }

         if(elem.value === 'cape town'){
            let regFromCapeTown = registrationNumberInstance.getAllFromCapeTown(data);
            let fromCapeTown = { regFromCapeTown }
            createHTML(fromCapeTown);

         } else if(elem.value === 'paarl') {
            let regFromPaarl = registrationNumberInstance.getAllFromPaarl(data);
            let fromPaarl = { regFromPaarl }
            createHTML(fromPaarl);

         } else if(elem.value === 'bellville') {
            let regFromBellville = registrationNumberInstance.getAllFromBellville(data);
            let fromBellville = { regFromBellville }
            createHTML(fromBellville);

         } else if(elem.value === 'stellenbosch') {
            let regFromStellenbosch = registrationNumberInstance.getAllFromStellenbosch(data);
            let fromStellenbosch = { regFromStellenbosch }
            createHTML(fromStellenbosch);

         } else if(elem.value === 'all') {
            if(localStorage.getItem('registrationNumbers')) {
               let registrations = JSON.parse(localStorage.getItem('registrationNumbers'));
               let numbers = { registrations }
               createHTML(numbers);
            }
         }
      }
   }
}

if(localStorage.getItem('registrationNumbers')) {
    var registrations = JSON.parse(localStorage.getItem('registrationNumbers'));
    var numbers = { registrations }

    createHTML(numbers);
 }

function createHTML(registrations) {

    var rawTemplate = document.querySelector('.registrationTemplate').innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var ourGeneratedHTML = compiledTemplate(registrations);

    var registrationNumbersElem = document.getElementById('registrationNumbers');
    registrationNumbersElem.innerHTML = ourGeneratedHTML;
}

addRegNumberElemBtn.addEventListener('click', saveRegistration);

registrationFilterBtn.addEventListener('click', filterRegistrations);