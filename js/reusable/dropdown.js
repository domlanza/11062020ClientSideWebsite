function dropdown(clickedEle) {

    if (clickedEle.classList.contains("dropHeader")) {
        var nextEle = clickedEle.parentElement.getElementsByClassName("dropContent")[0];
        if (nextEle.classList.contains("show")) {
            hide(nextEle);
        } else {
            var dropContentList = document.getElementsByClassName("dropContent");
            for (var i = 0; i < dropContentList.length; i++) {
                if (dropContentList[i].classList.contains("show")) {
                    hide(dropContentList[i]);
                }
            }
            show(nextEle);
        }
    } else {
        var dropContentList = document.getElementsByClassName("dropContent");
        for (var i = 0; i < dropContentList.length; i++) {
            hide(dropContentList[i]);
        }

    }
    function hide(ele) {
        ele.classList.remove("show");
        ele.classList.add("hide");
    }

    function show(ele) {
        ele.classList.remove("hide");
        ele.classList.add("show");
    }
}


