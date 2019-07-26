document.addEventListener('DOMContentLoaded', function() {

   var userData = { 
      users: [
         {username: "alan", firstName: "Alan", lastName: "Johnson", email: "alan@test.com" },
         {username: "allison", firstName: "Allison", lastName: "House", email: "allison@test.com" },
         {username: "ryan", firstName: "Ryan", lastName: "Carson", email: "ryan@test.com" }
      ]
   };

   // get a reference to the template script tag
   var rawTemplate = document.querySelector('.userTemplate').innerHTML;
   // compile the template
   var compiledTemplate = Handlebars.compile(rawTemplate);
   var ourHTML = compiledTemplate(userData);
//console.log(ourHTML);
   // var userDataElem = document.querySelector('.userData');
   // userDataElem.innerHTML = ourHTML;

   document.querySelector('.userData').innerHTML = ourHTML;

});