var arrayOfQ = [`https://www.goodreads.com/book/show/36717949-nowhere-boy`, `Page 87-88`, `Page 169-170`, `Page 123-124`, `Page 385-386`, 'Page 399-400'];

var ogAr = [`Nowhere Boy`, `"He’d scored 13 out of 77, a score so low it almost didn’t seem possible"`, `“Ahmed looked at the books Max brought him. It was easy enough to follow the Aquaman comic. 
The pictures helped”`, `“Max stumbled backward.
He was about to shout for help when the blanket rustled and a man emerged. He was muscular, 
with thick, dark eyebrows and the shadow of a mustache.”`, `"“Is he home?” There was no need to ask who she was talking about. “Yeah. He’s fine.”  
“That’s great,” she said, but Max could detect a note of sarcasm. 
“What?” he asked. Claire took a deep breath. “You can’t keep hiding him.”
Max was surprised by how hurt he felt, as if she’d personally insulted him. “Yes, I can"`, `“He’d try to find him!” Max said. “Didn’t he have family in Molenbeek?” “Yes,” Farah said.
“Ibrahim Malki … No, Malaki—that was it!”`];

function eArr(input) {
    document.getElementsByTagName('i')[input].innerHTML = arrayOfQ[input];
}

var iz = document.getElementsByTagName('i');

for (var i = 0; i < iz.length; i++) {
    iz[i].setAttribute('onclick', `eArr(${i})`)
    iz[i].setAttribute('onmousemove', `this.innerHTML = ogAr[${i}]`)
}