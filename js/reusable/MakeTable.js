function MakeTable(list) {
    var returnDiv = document.createElement("div");
    returnDiv.innerHTML = "Filter by: ";
    
    function jsSort(list, byProperty) {

        list.sort(// takes in one parameter -- a function that compares two elements in the list...

                function (q, z) {
                    var qVal = convert(q[byProperty]);
                    var zVal = convert(z[byProperty]);
                    var c = 0;
                    if (qVal > zVal) {
                        c = 1;
                    } else if (qVal < zVal) {
                        c = -1;
                    }
                    console.log("comparing " + qVal + " to " + zVal + " is " + c);
                    return c;
                } // end of the anonymous comparision function
        );
        // check the string to see what type it is, then return that string converted to the right type 
        // so as to get the sort order correct. 
        function convert(s) {

            if (!s || s.length === 0) {
                //console.log("s is null or empty string");
                return -1;
            }

            // a string that holds a date returns true for isNaN(strDate) (it's not a number)  
            // And it returns false for isNaN(Date.parse(strDate))
            var parsedDate = Date.parse(s);
            if (isNaN(s) && !isNaN(parsedDate)) {
                //console.log(s + " is a Date ");
                return parsedDate;
            } else {
                var tmp = s;
                console.log("tmp is " + tmp);
                tmp = tmp.replace("$", ""); // remove dollar signs
                tmp = tmp.replace(",", ""); // remove commas
                if (isNaN(tmp)) { // if not a number, return what was passed in 
                    //console.log(s + " is a string - convert to uppercase for sorting purposes");
                    return s.toUpperCase();
                } else {
                    //console.log(tmp + " is a number");
                    return Number(tmp);
                }
            }
        } // convert 

    } // jsSort

    // Add data as th or td (based on eleType) to row of HTML table.
    function addToRow(eleType, row, data, align) {
        var ele = document.createElement(eleType);
        ele.innerHTML = data;
        ele.style.textAlign = align;
        row.appendChild(ele);
        return ele; // future code may need a reference to this dom object
    }

    function alignment(val) {

        // check if date
        var parsedDate = Date.parse(val);
        if (isNaN(val) && (!isNaN(parsedDate))) {
            return "center";
        }

        // check if image
        if (val.includes(".png") || val.includes(".jpg")) {
            console.log('is center');
            return "center";
        }

        // check if numeric (remove $ and , and then check if numeric)
        var possibleNum = val.replace("$", "");
        possibleNum = possibleNum.replace(",", "");
        if (isNaN(possibleNum)) {
            console.log("not a num - left");
            return "left";
        }

        return "right"; // it's a number

    } // alignment

    function prettyColumnHeading(propName) {

        if (propName.length === 0) {
            return "";
        }

        // studentId --> Student Id
        // capitalize first letter
        var newHdg = propName.charAt(0).toUpperCase();
        // iterate through all characters, inserting space before any capital letters.
        for (var i = 1; i < propName.length; i++) {
            if (propName.charAt(i) < "a") {
                newHdg += " ";
            }
            newHdg += propName.charAt(i);
        }
        return newHdg;
    } // prettyColumnHeading


    // Main Program.
    function addTableHead(table, list) {

        // Create a thead element, place it in table, then 
        // fill up the thead with td elements that are column headers 
        // (populated by the field names from the first object in list). 
        var tableHead = document.createElement("thead");
        table.appendChild(tableHead);
        var tableHeadRow = document.createElement("tr");
        tableHead.appendChild(tableHeadRow);
        // create one column header per property - column header will show the property name. 
        var obj = list[0];
        for (var prop in obj) {
            console.log("setting the sort onclick for column " + prop);
            var colHead = addToRow("th", tableHeadRow, prettyColumnHeading(prop), alignment(obj[prop]));
            // place the property name right into the DOM element that is the "th"
            // Because later when the "th" is clicked "prop" will be the last property
            // (cause this for loop would have already completed). 
            colHead.sortPropName = prop;
            colHead.check = false;
            colHead.switch = 1;
            var tester = " ";
            colHead.onclick = function () {
                // "this" means the DOM lement clicked upon. Take the sortPropName (that
                // we stored in the "th" when the "th" was originally made) and use that
                // for sort order. 
                console.log("ready to sort by " + this.sortPropName);
                if (tester != this.sortPropName) {
                    colHead = addTableBody(table, list, this.sortPropName);
                    console.log("ready to sort by " + this.sortPropName);
                    tester = this.sortPropName;
                } 
                else {
                    if(this.check == true){
                    alert(this.sortPropName + ' forward');

                    colHead = addTableBody(table, list.reverse());
                    this.check = false;
                }else{
                alert(this.sortPropName + ' reverse');
                colHead = addTableBody(table, list.reverse());
                this.check = true;
            }
                }
            };
        }
    }

    function addTableBody(table, list, sortOrderPropName) {

        // remove old tbody element if there is one (else you'll get sorted rows added to end of what's there).
        var oldBody = table.getElementsByTagName("tbody");
        if (oldBody[0]) {
            console.log("ready to remove oldBody");
            table.removeChild(oldBody[0]);
        }

        jsSort(list, sortOrderPropName);
        // Add one row (to HTML table) per element in the array.
        // Each array element has a list of properties that will become 
        // td elements (Table Data, a cell) in the HTML table. 
        var tableBody = document.createElement("tbody");
        table.appendChild(tableBody);
        for (var i in list) {
            var tableRow = document.createElement("tr");
            tableBody.appendChild(tableRow);
            // create one table data <td> content matching the property name
            var obj = list[i];
            for (var prop in obj) {
                addToRow("td", tableRow, obj[prop], alignment(obj[prop]));
            }
        }

    } // addTableBody

    // return true if any property of obj contains searchKey. Else return false.
    function isToShow(obj, searchKey) {
        if (!searchKey || searchKey.length === 0) {
            return true; // show the object if searchKey is empty
        }
        var searchKeyUpper = searchKey.toUpperCase();
        for (var prop in obj) {
            var propVal = obj[prop]; // associative array, using property name as if index. 
            console.log("checking if " + searchKeyUpper + " is in " + propVal);
            var propValUpper = propVal.toUpperCase();
            if (propValUpper.includes(searchKeyUpper)) {

                // do not say it's a hit if it's an image tag 
                // that can have a really long URL in its src attribute.
                if (!propValUpper.includes("<IMG")) {
                    console.log("yes it is inside");
                    return true;
                }
            }
        }
        console.log("no it is not inside");
        return false;
    } // isToShow 

    function RefreshTableBody(filterValue, table, objList) {

        // Add one row (to HTML table) per element in the array.
        // Each array element has a list of properties that will become 
        // td elements (Table Data, a cell) in the HTML table. 
        var tableBody = document.createElement("tbody");
        for (var i in list) {
            if (isToShow(objList[i], filterValue)) {
                console.log("adding row " + i + " to the HTML table");
                var tableRow = document.createElement("tr");
                tableBody.appendChild(tableRow);
                // create one table data <td> content matching the property name
                var obj = objList[i];
                for (var prop in obj) {
                    addToRow("td", tableRow, obj[prop], alignment(obj[prop]));
                }

            } else {
                console.log("not adding row " + i + " to the HTML table");
            }
        } // for loop 

        // remove old tbody element if there is one (else you'll get sorted rows added to end of what's there).
        var oldBody = table.getElementsByTagName("tbody");
        if (oldBody[0]) {
            console.log("ready to remove oldBody");
            table.removeChild(oldBody[0]);
        }
        table.appendChild(tableBody);
    } // RefreshTableBody


    // Create a filter text box for user input and append it.
    var searchInput = document.createElement("input");
    returnDiv.appendChild(searchInput);
    searchInput.onkeyup = function () {
        console.log("search filter changed to " + searchInput.value);
        RefreshTableBody(searchInput.value, newTable, list);
    };
    // Entry Point of MakeSortableTable

    var newTable = document.createElement("table");
    addTableHead(newTable, list);
    addTableBody(newTable, list);
    // this can be injected into the content area by other code

    var div = document.createElement("div");
    div.appendChild(returnDiv);
    div.appendChild(newTable);
    return div;
}