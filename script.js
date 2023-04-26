
var table = document.createElement("table");
table.setAttribute("class", "table");
var thead = document.createElement("thead");
var trhead = document.createElement("tr");
function createtrth(tagname, content) {
    let ele = document.createElement(tagname);
    ele.innerHTML = content;
    return ele;
}
var th1 = createtrth("th", "First");

var th2 = createtrth("th", "Last");

var th3 = createtrth("th", "Handle");

trhead.append(th1, th2, th3);
thead.append(trhead);

var tBody = document.createElement("tbody");

var trbody1 = document.createElement("tr");

function createtrtd(tagname, content) {
    let ele = document.createElement(tagname);
    ele.innerHTML = content;
    return ele;
}

// function linebreakers(tagname){
//     var ele=document.createElement(tagname);
//     return ele;
// }

var td1 = createtrth("td", "Mark");


var td2 = createtrth("td", "otto");


var td3 = createtrth("td", "@mdo");
trbody1.append(td1, td2, td3);
var trbody2 = document.createElement("tr");
var td4 = createtrth("td", "Jacob");


var td5 = createtrth("td", "Thornton");

var td6 = createtrth("td", "@fat");
trbody2.append(td4, td5, td6);
var trbody3 = document.createElement("tr");
var td7 = createtrth("td", "Larry");

var td8 = createtrth("td", "theBird");

var td9 = createtrth("td", "@thritter");


trbody3.append(td7, td8, td9);
tBody.append(trbody1, trbody2, trbody3);

table.append(thead, tBody);

document.body.append(table);





