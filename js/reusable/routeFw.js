


function routeFw(routes, contentId, firstlink) {

    function inject(what) {
        //to fix when other pages do not have view id
        document.getElementById(contentId).innerHTML = "";
        document.getElementById(contentId).appendChild(what);
    }
    function router() {
        console.log("location.hash (the link that was clicked) is " + location.hash);
        var path = location.hash;
        if (!routes[path]) {
            var ele = document.createElement("div");
            ele.innerHTML = "<h4>Error: path '" + path + "' was never added to the route array</h4>";
            inject(ele);
        } else {
            var newDOM = routes[path]();
            inject(newDOM);
        }
    }
    window.addEventListener('hashchange', router);
    window.location.hash = '#/xxx';
    //cannot assume home as a link for everypage

    window.location.hash = firstlink;
}
