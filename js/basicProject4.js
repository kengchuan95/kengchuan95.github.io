function addItem() {
    var itemFromField = document.getElementById("newItem").value;
    if (itemFromField) {
        //create text portion of list item
        var node = document.createTextNode(itemFromField);
        var listItem = document.createElement("li");
        listItem.appendChild(node);
        //create close button of list item
        var spanItem = document.createElement("SPAN");
        var closeIcon = document.createTextNode("\u00D7");
        spanItem.className = "close";
        spanItem.append(closeIcon);
        //append close button to list item
        listItem.appendChild(spanItem);
        document.getElementById("listCollector").appendChild(listItem);
        document.getElementById("newItem").value = "";
        setCloseFunction();
    }
}

function setCloseFunction() {
    var close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}