/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function CookieTable()
{
    var ele = document.createElement("div");
    ele.classList.add("TableStyle");
    
    var title = document.createElement("h1");
    title.innerHTML = "Cookie Type Data Table";
    title.style.fontWeight = "bold";
    title.style.textAlign = "center";
    ele.appendChild(title);
    
    //call ajax file and set appropriate values to pass into
    ajax("json/otherList.json", otherDataTable, "otherDataTable");

    function otherDataTable(list) {

        // print out JS object/array that was converted from JSON data by ajax function
        console.log(list);

        // build new list as we want the fields to appear in the HTML table
        // we can decide the order we want the fields to appear (first property defined is shown first)
        // we can combine, decide to exclude etc...
        var otherList = [];

        // modify properties (image and price) of the array of objects so it will look 
        // better on the page.
        for (var i = 0; i < list.length; i++) {

            otherList[i] = {};
            
            otherList[i].image = "<img  src='" + list[i].image + "' style='width:5rem; margin:0.5rem'>";
            otherList[i].type = list[i].web_userName; // show this first
            otherList[i].rating = list[i].rating;
            otherList[i].component = list[i].component;
        }

        console.log("OTHER LIST");
        console.log(otherList);

        // Making a DOM object, nothing shows yet... 
        ele.appendChild(MakeTable(otherList));
    }

    return ele;
}


