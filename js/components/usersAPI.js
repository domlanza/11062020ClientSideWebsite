/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function usersAPI()
{
    var content = document.createElement("div");
    content.classList.add("TableStyle");

    ajax("webAPIs/listUsersAPI.jsp", userList, "webUsersList");
    function userList(obj)
    {
        var list = obj.webUserList;
        // print out JS object/array that was converted from JSON data by ajax function
        console.log(list);

        // build new list as we want the fields to appear in the HTML table
        // we can decide the order we want the fields to appear (first property defined is shown first)
        // we can combine, decide to exclude etc...
        var userList = [];

        // modify properties (image and price) of the array of objects so it will look 
        // better on the page.
        for (var i = 0; i < list.length; i++) {

            userList[i] = {};
            // Don't show the id (no meaningful data)
            //  userList[i].image = "<img  src='" + list[i].image + "' style='width:5rem; margin:0.5rem'>";
            userList[i].webUserId = list[i].webUserId;
            userList[i].userEmail = list[i].userEmail; // show this first
            // Don't show the password
            userList[i].userPassword = list[i].userPassword;
            userList[i].membershipFee = list[i].membershipFee;
            userList[i].role = list[i].userRoleId;
        }

        console.log("USER LIST");
        console.log(userList);

        // Making a DOM object, nothing shows yet... 
        content.appendChild(MakeTable(userList));
    }
    return content;
}
