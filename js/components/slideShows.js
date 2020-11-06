function slideShows() {

    var container = document.createElement("div");
    container.classList.add("slideShowContainer");
    //ajax call to ProcessCarList  
    ajax("json/cars.json", processCarList);

    function processCarList(carList) {
        for (var i = 0; i < carList.length; i++) {
            carList[i].image = carList[i].photo;
            carList[i].caption = carList[i].make;
            console.log("image " + i + " " + carList[i].image);
            console.log("caption " + i + " " + carList[i].caption);
        }
        console.log("catList after setting image and caption properties");
        console.log(carList);

        var ss1 = MakeSlideShowNew({
            objectArray: carList,
            textAlignment: "left"
        });
        container.appendChild(ss1);
        ss1.changeBorder();
        ss1.setPicNum(0);
    }

    ajax("json/users.json", userlist);

    function userlist(userrlist) { 
        for (var i = 0; i < userrlist.length; i++) {
            userrlist[i].image = userrlist[i].image;
            userrlist[i].caption = userrlist[i].userEmail;
            console.log("image " + i + " " + userrlist[i].image);
            console.log("caption " + i + " " + userrlist[i].caption);
        }
        console.log("userList after setting image and caption properties");
        console.log(userrlist);
        var ss2 = MakeSlideShowNew({
            objectArray: userrlist,
            textColor: "purple"});
        container.appendChild(ss2);
        ss2.changeBorder();
        ss2.setPicNum(0);
    }
    // create third slideshow object
    ajax("json/waterFun.json", waterFun);

    function waterFun(waterFunny) { 
        for (var i = 0; i < waterFunny.length; i++) {
            waterFunny[i].image = waterFunny[i].pic;
            waterFunny[i].caption = waterFunny[i].item;
            console.log("image " + i + " " + waterFunny[i].image);
            console.log("caption " + i + " " + waterFunny[i].caption);
        }
        console.log("userList after setting image and caption properties");
        console.log(waterFunny);
        var ss3 = MakeSlideShowNew({
            objectArray: waterFunny});
        container.appendChild(ss3);
        ss3.changeBorder();
        ss3.setPicNum(0);
    }
    return container;
}