
"use strict";

function MakeCookie(params, backgroundColor, hoverColor) {
    
    var cookieObj = document.createElement("div");
    cookieObj.classList.add(params.style);
    cookieObj.name = params.name || "unknown";   //creates custom public property
    cookieObj.cals = params.cals || 0; //custom private property "cals"
    var amount = 0;// creates custom private property amount
    cookieObj.classList.add(params.style);

    //display function
    var display = function() {
        cookieObj.innerHTML = "Cookie Type: " + cookieObj.name +
                "<br/> Caloric Content: " + cookieObj.cals + "<br/> Amount Of Cookies: " + amount +
                "<br/> <img src='" + params.theImg + "'>";
                    
        cookieObj.style.backgroundColor = hoverColor;
  
    };

    
      cookieObj.onmouseover = function () {
        console.log("onmouseover");
        cookieObj.style.backgroundColor = hoverColor;
        cookieObj.cals = cookieObj.cals + (cookieObj.cals * .25);
        display();
    };

    cookieObj.onmouseout = function () {
        console.log("onmouseout");
        cookieObj.style.backgroundColor = hoverColor;
    };
    
    
    
    //Set Name of Cookie   
    cookieObj.setType = function (newType) {  //create custom public method "setType"
        cookieObj.name = newType;
        display(); //show the updated cookie type on the page
    };
    
    cookieObj.setPic = function (newPic) {
        cookieObj.theImg = newPic;
        display();
    };

    //Set Caloric Content of Cookie 
    cookieObj.setCal = function (newCal) { //create custom public method "setCal"
        cookieObj.cals = newCal;
        display();
        //show updated calories on the page
    };

    cookieObj.setAmount = function (newAmount) { //create custom public method "setAmount"
        cookieObj.amount = newAmount + 1;
        display();
        //show updated amount on the page
    };
    
    
    cookieObj.changeCal = function (changeCalorie) {
        cookieObj.amount = cookieObj.amount * (1 + changeCalorie);
        display(); // show updated price on the page
    };
    
    cookieObj.addamount = function(){
        amount = amount + 1;
        display();
    };
    

    display();
    return cookieObj;
}


