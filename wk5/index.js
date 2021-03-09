// const h1 = document.getElementsByTagName('h1')[0];
// const p = document.getElementsByTagName('p')[0];
// const ul = document.getElementsByTagName('ul')[0];
// var text = document.getElementById("main-title").innerHTML;
// alert("the main title is" + text);

// highlight every text that are 6 characters long with pink background
function highlightPink() {
    const pTag = document.querySelector('p');
    pTag.innerHTML = pTag.innerText
        .split(' ')
        .map(word => word.length > 6 ? `<span style="background-color:pink">${word}</span>` : word)
        .join(' ');
}

function removePink() {
    const pTag = document.querySelector('p');
    pTag.innerHTML = pTag.innerText
        .split(' ')
        .map(word => word.length > 6 ? `<span style="background-color:white">${word}</span>` : word)
        .join(' ');
}



//grab the HTML element and store it in the variable

function firstDiv() {
    var output = document.getElementById("firstDiv").innerHTML =
        'The content of the first div is ' + document.getElementById()
    console.log(output)

    //alert(output);
}


function tagName1() {
    var p = document.getElementsByTagName('p');
}

function tagName2() {
    // selects the p tag that resides only under div id 'first-div'
    var p = first - div.getElementsByTagName('p');
}