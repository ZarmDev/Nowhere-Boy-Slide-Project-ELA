var arrayOfQ = [`https://www.goodreads.com/book/show/36717949-nowhere-boy`, `Page 409-410`];

var ogAr = [`Nowhere Boy`, `“there were no parents or grandparents sitting on the benches,
no babies wailing from their strollers, no toddlers 
shouting up the slides or clambering up the mound. Ahmed instantly understood: 
people were afraid to be out.”`];

function eArr(input) {
    document.getElementsByTagName('i')[input].innerHTML = arrayOfQ[input];
}