/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function otherAPI()
{
    var content = document.createElement("div");
    content.classList.add("TableStyle");

    ajax("webAPIs/listOthersAPI.jsp", otherList, "otherTableList");
    function otherList(obj)
    {
        console.log("obj is on the next line");
        console.log(obj);

        var list = obj.otherList;
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

            otherList[i].recipe_id = list[i].recipe_id;
            otherList[i].recipe_name = list[i].recipe_name;
            //otherList[i].recipe_img = "<img src='" + list[i].recipe_img + "'/>"; 
            //Provided from Hong Tran
            //  list[i].Image = "<img src='" + obj.museumList[i].image + "'/>"; 
            otherList[i].recipe_CostToCreate = list[i].recipe_CostToCreate;

            otherList[i].user_email = list[i].web_user_id;
            otherList[i].webUserID = list[i].web_user_id;

        }

        console.log("OTHER LIST");
        console.log(list);

        // Making a DOM object, nothing shows yet... 
        content.appendChild(MakeTable(list));
    }

    return content;
}
