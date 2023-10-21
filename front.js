const textarea1 = document.getElementById('html-code');
const textarea2 = document.getElementById('css-code');
const textarea3 = document.getElementById('js-code');
const output = document.getElementById('p1');
// ✅ Clear the textarea value
textarea1.value = '';
textarea2.value = '';
textarea3.value = '';
output.value = '';




// ✅ Clear textarea value on click
const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick() {
    // 👇️ log value before clearing it
    console.log(textarea1.value, textarea2.value, textarea3.value, output.value);

    // 👇️ clear textarea value
    textarea1.value = '';
    textarea2.value = '';
    textarea3.value = '';
    output.value = '';

});


// refresh Page
location.reload();


// copy text HTML
function copyTextHtml() {

    /* Select text area by id*/
    let TextHtml = document.getElementById("html-code");


    /* Select the text inside text area. */
    TextHtml.select();


    /* Copy selected text into clipboard */
    navigator.clipboard.writeText(TextHtml.value);


    /* Set the copied text as text for  
    div with id html-code */
    document.getElementById("html-code")
        .innerHTML = TextHtml.value;


}

// copy text CSS
function copyTextCss() {

    /* Select text area by id*/
    let TextCSS = document.getElementById("css-code");


    /* Select the text inside text area. */
    TextCSS.select();


    /* Copy selected text into clipboard */
    navigator.clipboard.writeText(TextCSS.value);


    /* Set the copied text as text for  
    div with id html-code */
    document.getElementById("css-code")
        .innerHTML = TextCSS.value;


}

// copy text JS
function copyTextJS() {

    /* Select text area by id*/
    let TextJs = document.getElementById("js-code");


    /* Select the text inside text area. */
    TextJs.select();


    /* Copy selected text into clipboard */
    navigator.clipboard.writeText(TextJs.value);


    /* Set the copied text as text for  
    div with id html-code */
    document.getElementById("js-code")
        .innerHTML = TextJs.value;


}

// save code

function exportHtml() {

    var element = document.getElementById("html-code");

    if (element !== undefined && element != null) {

        var html = element.innerHTML;

        const htmlBlob = new Blob([html], { type: "text/html" });

        const blobUrl = URL.createObjectURL(htmlBlob);

        const anchorElement = document.createElement("a");

        anchorElement.href = blobUrl;

        anchorElement.download = "randing.html";

        anchorElement.click();

    }

}


// Lock Button
function myLock() {
    document.getElementById("html-code").disabled = true;
    document.getElementById("css-code").disabled = true;
    document.getElementById("js-code").disabled = true;

}

// Unlock
function myUnlock() {
    document.getElementById("html-code").disabled = false;
    document.getElementById("css-code").disabled = false;
    document.getElementById("js-code").disabled = false;

}