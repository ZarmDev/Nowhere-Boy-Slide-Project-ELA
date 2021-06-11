var arrayOfQ = [`https://www.goodreads.com/book/show/36717949-nowhere-boy`, `Page 243-244`, `Page 539-540`];

var ogAr = [`Nowhere Boy`, `he imagined how it must feel for him to hear the world outside—the shouts from the schoolyard,
the planes overhead, the sirens and honks and construction noises—and know he couldn’t be part of it.
Whatever Ahmed had seen, whatever he was afraid of being sent back to,
had to have been horrible for him to prefer a life like this.`, `Ahmed would have to try; he had lost faith in his own.
Would a Jewish organization really want to help a Muslim boy?
They probably just resented the comparison between his plight and Ralph’s. 
People were always weighing their suffering against others’,`];

function eArr(input) {
    document.getElementsByTagName('i')[input].innerHTML = arrayOfQ[input];
}

var iz = document.getElementsByTagName('i');

for (var i = 0; i < iz.length; i++) {
    iz[i].setAttribute('onclick', `eArr(${i})`)
    iz[i].setAttribute('onmousemove', `this.innerHTML = ogAr[${i}]`)
}