// mpc94 custom code
//
function pageSetUp() {
  //console.log('pageSetUp');

}

function jmp2LocalPage(whichPage) {
  location.href = whichPage;
}
// mpc94 Local Storage
//

var firstNameArray = new Array();
var ageArray = new Array();
var mainNdx = 0;

function readData() {
  console.log("readData called");
  // Does this browser support local storage?
  if (typeof (Storage) !== "undefined") {
    // Read data from local storage
    medNamesStr =  localStorage.mpc_MedNames;
    quanStr = localStorage.mpc_Quan;
    amtStr = localStorage.mpc_Amt;
    timeStr = localStorage.mpc_Time;
    instStr = localStorage.mpc_Inst;

    console.log("medNamesStr is .. " + medNamesStr);
    console.log("quanStr is .. " + quanStr);
    console.log("amtStr is .. " + amtStr);
    console.log("timeStr is .. " + timeStr);
    console.log("instStr is .. " + instStr);
    


    if (typeof (medNamesStr) !== "undefined") {
      // Convert data string into array
      medNameArray = medNamesStr.split(",");
      quanStr = quanStr.split(",");
      // Convert Ndx string into integer
      amtStr = amtStr.split(",");
      timeStr = timeStr.split(",");
    //Convert to time 
      instStr = instStr.split(",");

      ndx_result.value = mainNdx;

        
        
      mainNdx = parseInt(ndxStr);
//      Display data screen
        
        
      medName.value = medNameArray[mainNdx];
      quantity.value = quanStr[mainNdx];
      amount.value = amtStr[mainNdx]; 
      times.value = timeStr[mainNdx];
      inst.value = instStr[mainNdx];
        
      ndx_result.value = mainNdx;
        
    } else {
      // Initize data if it is empty/invalid
      medName.value = "";
      quantity.value = 0;
      amount.value = 0;
      times.value = 0;
      inst.value = "";
    
      mainNdx = 0;
    }
  } else {
    // Sorry! No Web Storage support..
    alert('This browser does NOT support local storage');
  }
}

function writeData() {
  console.log("writeData called");
  if (typeof (Storage) !== "undefined") {
    // Add data to array
    firstNameArray.push(firstName.value);
    ageArray.push(age.value);
    // Increment array index number
    mainNdx = firstNameArray.length - 1;
    // Convert array into data string
    firstNamesStr = firstNameArray.join();
    ageStr = ageArray.join();
    // save data string to local storage
    localStorage.jwt_FirstNames = firstNamesStr;
    localStorage.jwt_Ages = ageStr;
    localStorage.jwt_Ndx = mainNdx;
    //
    ndx_result.value = mainNdx;
    alert('Record ADDED.')
  } else {
    // Sorry! No Web Storage support..
    alert('This browser does NOT support local storage');
  }
}

function removeData() {
  console.log("removeData called");
  if (typeof (Storage) !== "undefined") {
    if (confirm('Are you sure you want to remove ALL records?')) {
      localStorage.removeItem("jwt_FirstNames");
      localStorage.removeItem("jwt_Ages");
      localStorage.removeItem("jwt_Ndx");
      // Initize data if it is empty/invalid
      firstName.value = "";
      age.value = 0;
      mainNdx = 0;
      ndx_result.value = mainNdx;
    }
  } else {
    // Sorry! No Web Storage support..
    alert('This browser does NOT support local storage');
  }
}

//function display() {
//  DispWin = window.open('','NewWin', 'toolbar=no,status=no,width=300,height=200')
//  message = "<ul><li><b>NAME: </b>" + document.form1.yourname.value;
//  message += "<li><b>ADDRESS: </b>" + document.form1.address.value;
//  message += "<li><b>PHONE: </b>" + document.form1.phone.value + "</ul>";
//  DispWin.document.write(message);
//}

//function displayNextRec() {
//  if (mainNdx < (firstNameArray.length - 1)) {
//    // Increment array index number
//    mainNdx++;
//    // Update form with new values
//    firstName.value = firstNameArray[mainNdx];
//    age.value = ageArray[mainNdx];
//    ndx_result.value = mainNdx;
//    // Save current index to local storage
//    localStorage.jwt_Ndx = mainNdx;
//  }
//}
//
//function displayPrevRec() {
//  if (mainNdx > 0) {
//    // Decrement array index number
//    mainNdx--;
//    // Update form with new values
//    firstName.value = firstNameArray[mainNdx];
//    age.value = ageArray[mainNdx];
//    ndx_result.value = mainNdx;
//    // Save current index to local storage
//    localStorage.jwt_Ndx = mainNdx;
//  }
//}