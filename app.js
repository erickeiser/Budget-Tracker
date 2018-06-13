// BUDGET CONTROLLER 
var budgetController = (function(){

// some code here

}) ();


// UI Controller 
var UIController = (function(){
  // more code here 

}) ();

// Global app controller 
var controller = (function(budgetCtrl, UICtrl) {
  document.querySelector('.add__btn').addEventListener('click', function(){
    // Get the field input data 

    // 2. Add the item to the budget controller 

    // 3. add the item to the UI 

    // 4. Calculate the Budget 

    // 5. Display the budget on the UI 
  })

  document.addEventListener('keypress', function(event){
    if(event.keypress === 13 || event.which === 13) {
      console.log('Enter was pressed');
    } else {
      console.log('you did not hit the enter key');
    }
  })

}) (budgetController, UIController);