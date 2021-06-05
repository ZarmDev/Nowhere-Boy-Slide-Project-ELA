var arrayOfQ = [`https://www.goodreads.com/book/show/36717949-nowhere-boy`, `Page 209-210`, `Page 211-212`];

var ogAr = [`Nowhere Boy`, `“Who are you talking about?” Max asked gently. Ahmed turned to Max.
It was too late to keep his mouth shut,
to lock the story back up inside him. A part of him no longer even wanted to. 
“We live in Aleppo,” he began. “You know Aleppo?” Max shook his head. 
“Biggest city in Syria, very old. Home of Jami’ Halab al-Kabir,
very famous old mosque. Also most big market bazaar in world.”`, `Assad take over eastern part of Aleppo, and government army tries to take it back. 
One morning, all calm. The next there is bomb, one street from our street.”`];

function eArr(input) {
    document.getElementsByTagName('i')[input].innerHTML = arrayOfQ[input];
}