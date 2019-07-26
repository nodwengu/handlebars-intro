function createRegistrationNumber() {
    let registrationNumber = "";
    let obj = {};
    let regNumberEntered = {};

    function setRegNumber(regVal) {
        registrationNumber = regVal.toUpperCase();
    }

    function getRegNumber() {
        return registrationNumber;
    }

    function getAllFromCapeTown(regNumbers) {
        let capeTownNumbers = [];

        for(let i = 0; i < regNumbers.length; i++){
            let elem = regNumbers[i];
            let registrationNumber = elem.registration;
          
            if(registrationNumber.startsWith("CA")) {
                capeTownNumbers.push(elem);
            }
        }
        return capeTownNumbers;
    }

    function getAllFromPaarl(regNumbers) {
        let paarlNumbers = [];

        for(let i = 0; i < regNumbers.length; i++){
            let elem = regNumbers[i];
            let registrationNumber = elem.registration;

            if(registrationNumber.startsWith("CJ")) {
                paarlNumbers.push(elem);
            }
        }
        return paarlNumbers;
    }

    function getAllFromBellville(regNumbers) {
        let bellvilleNumbers = [];

        for(let i = 0; i < regNumbers.length; i++){
            let elem = regNumbers[i];
            let registrationNumber = elem.registration;
            
            if(registrationNumber.startsWith("CY")) {
                bellvilleNumbers.push(elem);
            }
        }
        return bellvilleNumbers;
    }

    function getAllFromStellenbosch(regNumbers) {
        let stellenboschNumbers = [];

        for(let i = 0; i < regNumbers.length; i++){
            let elem = regNumbers[i];
            let registrationNumber = elem.registration;
            
            if(registrationNumber.startsWith("CL")) {
                stellenboschNumbers.push(elem);
            }
        }
        return stellenboschNumbers;
    }

    function setRegObj() {
        obj = {
           registration: registrationNumber
        }
    } 
     function getRegObj() {
        return obj;
     }
  
     function checkRegNumber(registrations) {
        let repeated  = false;
  
        for(let i = 0; i < registrations.length; i++) {
           let elem = registrations[i];
           let regNumber = elem.registration;
           if (regNumberEntered[regNumber] === undefined){
               regNumberEntered[regNumber] = 0;
           } else {
               regNumberEntered[regNumber]++;
           }
        }

        let newRegNumber = getRegNumber();
        for(let key in regNumberEntered) {
          if(regNumberEntered.hasOwnProperty(newRegNumber)) {
              repeated  = true;
              break;
          } 
        }   
        return repeated ;
     } 

     function displayError(name) {
        return name == "" || !isNaN(name); 
     }

     function validInput(name) {
        return name.startsWith("CA") || name.startsWith("ca") || name.startsWith("cA") || name.startsWith("Ca") ||
            name.startsWith('CJ') || name.startsWith("cj") || name.startsWith("cJ") || name.startsWith("Cj") ||
            name.startsWith('CY') || name.startsWith("cy") || name.startsWith("cY") || name.startsWith("Cy") ||
            name.startsWith('CL') || name.startsWith("cl") || name.startsWith("cL") || name.startsWith("Cl");
     }

    return {
        setRegNumber,
        getRegNumber,
        getAllFromCapeTown,
        getAllFromPaarl,
        getAllFromBellville,
        getAllFromStellenbosch,
        setRegObj,
        getRegObj,
        checkRegNumber,
        displayError,
        validInput

    }
}

 const registrationsInstance = createRegistrationNumber();
