var arrayOfQ = [`https://www.goodreads.com/book/show/36717949-nowhere-boy`, `Page 477-478`];

var ogAr = [`Nowhere Boy`, `“Even in the darkest times and places there were always good people. People who would help
others out of the kindness of their hearts.” “Why did you teach me to love,
then leave me when my heart became attached to you.”`];

function eArr(input) {
    document.getElementsByTagName('i')[input].innerHTML = arrayOfQ[input];
}

var iz = document.getElementsByTagName('i');

for (var i = 0; i < iz.length; i++) {
    iz[i].setAttribute('onclick', `eArr(${i})`)
    iz[i].setAttribute('onmousemove', `this.innerHTML = ogAr[${i}]`)
}