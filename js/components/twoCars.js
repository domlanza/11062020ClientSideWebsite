// Naming convention JS file name matches the name of the SINGLE function (or object) defined in the file.



function twoCars () {
    //Create a  two Cookie DOM
    var twoCookieDOM = document.createElement("div");
    //First cookie created
    var myCookieObj = MakeCookie({
        name: "Chocolate Chip",
        cals:    "120",    
        amount: "3",
        theImg: "pics/chocolateChipcookie.png",
        style: "cookieStyle.css",
        backgroundColor: "brown",
        hoverColor: "blue"
    });
    twoCookieDOM.appendChild(myCookieObj);    

            
    var CookieNameButton = document.createElement('button');
    CookieNameButton.innerHTML = 'Change Name of Cookie:';
    twoCookieDOM.appendChild(CookieNameButton);
    var CookieNameInput = document.createElement("input");
    CookieNameInput.setAttribute("type", "text");
    twoCookieDOM.appendChild(CookieNameInput);
    CookieNameButton.onclick = function() {
       console.log("changing to : " + CookieNameInput.value);
       myCookieObj.setType(CookieNameInput.value); 
    };
    
    var CalChangeButton = document.createElement('button');
    CalChangeButton.innerHTML = 'Change Caloric Content: ';
    twoCookieDOM.appendChild(CalChangeButton);
    var CalChangeInput = document.createElement("input");
    CalChangeInput.setAttribute("type", "text");
    twoCookieDOM.appendChild(CalChangeInput);
    CalChangeButton.onclick = function() {
       console.log("changing to : " + CalChangeInput.value);
       myCookieObj.setCal(CalChangeInput.value); 
    };
    
    var amountCookieButton = document.createElement('button');
    amountCookieButton.innerHTML = 'Take A Cookie: ';
    twoCookieDOM.appendChild(amountCookieButton);
    amountCookieButton.onclick = function() {
       myCookieObj.addamount(); 
    };

            
           var emptyPara = document.createElement('p');
    emptyPara.innerHTML = "&nbsp"; 
    twoCookieDOM.appendChild(emptyPara);
         
    
    //Second cookie created
    var yourCookieObj = MakeCookie({
        name: "Peanut Butter",
        cals:    "120",    
        amount: "3",
        theImg: "pics/peanutbuttercookie.jpg",
        style: "cookieStyle.css",
        hoverColor: "brown",
        backgroundColor: "blue"
    });
        twoCookieDOM.appendChild(yourCookieObj);    

    
     var YourCookieNameButton = document.createElement('button');
    YourCookieNameButton.innerHTML = 'Change Name of Cookie:';
    twoCookieDOM.appendChild(YourCookieNameButton);
    var YourCookieNameInput = document.createElement("input");
    YourCookieNameInput.setAttribute("type", "text");
    twoCookieDOM.appendChild(YourCookieNameInput);
    YourCookieNameButton.onclick = function () {
        console.log("changing name of cookie to: " + YourCookieNameInput.value);
            yourCookieObj.setType(YourCookieNameInput.value);
    };
    
    var YourCalChangeButton = document.createElement('button');
    YourCalChangeButton.innerHTML = 'Change Caloric Content: ';
    twoCookieDOM.appendChild(YourCalChangeButton);
    var YourCalChangeInput = document.createElement("input");
    YourCalChangeInput.setAttribute("type", "text");
    twoCookieDOM.appendChild(YourCalChangeInput);
    YourCalChangeButton.onclick = function () {
        console.log("changing quantity to " + YourCalChangeInput.value);
        yourCookieObj.setCal(YourCalChangeInput.value);
        
        
    };
    
    var YouramountCookieButton = document.createElement('button');
    YouramountCookieButton.innerHTML = 'Take A Cookie: ';
    twoCookieDOM.appendChild(YouramountCookieButton);
    YouramountCookieButton.onclick = function() {
        yourCookieObj.addamount();
    };
            twoCookieDOM.appendChild(yourCookieObj);    

    return twoCookieDOM;

}