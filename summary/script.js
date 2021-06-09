var timelineContent = [`<pre>
Nowhere boy is an engrossing book with the prespectives of two boys, Ahmed and Max. 
Ahmed is a kind refugee and Max has been dragged off to Brussels by his parents because they are in search 
for a "better" place for Max. In Chapter 1, Ahmed's dad supposedly drowns and dies. Ahmed takes transportation
via a smuggler, but this smuggler wanted more money than Ahmed had and tried to trap him in the car. However, 
Ahmed was able to escape and he bolted inside the first house he could find. This house happens to be the house 
Max, his parents, and his sister are living in. Ahmed makes the cellar his home and tries to only steal what he absolutely 
needs, taking very little food from the kitchen. Almost as repayment, Ahmed tends to the the garden, and his work does 
not go unnoticed. Soon, Max finds Ahmed, however, Max does not tell his parents or Inspector Fontaine about Ahmed 
because he is very curious and does not view Ahmed as a threat. From this point on, Max and Ahmed become great friends.
</pre>`, `<pre>In the middle of the book, Max gives food and helps Ahmed by giving him supplies.
Farah is a girl who is Muslim and agreed to help with Max's plan.
Oscar is a boy who bullied Max but eventually became his friend because Max punched him and they
stopped getting so heated.
Farah agrees to help Max out by calling as a "mom" of Ahmed and Oscar would make a passport,
they did this because Ahmed would need a passport to go to school and Max was determined
to help him.
Farah does a phone call and Oscar prints the passport.
They manage to get Ahmed in school, he also gets his own documentation.
</pre>`, `<pre>In the end, Ahmed flees because the teacher found Ahmed suspicious.
Max in a attempt to find Ahmed, found a person close to Ahmed and Max found that Ahmed's dad was actually alive.
Max finds Ahmed in a park and they go on a train to Hungary to find his dad as that was the location given.
They get to Hungary but the police stop them and they have to get on a refugee service car but Ahmed got taken in.
Ahmed finds his dad and reunites, better yet they are allowed to go out of the center and get to America 
(Washington DC) which is where Max lives.
</pre>`];

var timelineOut = document.getElementById('timelineOut');

var circle = document.getElementById('timeline');

circle.value = 0;

circle.max = timelineContent.length - 1;

for (var i = 0; i < timelineContent.length; i++) {
    if (i == circle.value) {
        timelineOut.innerHTML = timelineContent[i];
    }
}

document.getElementById('timelineDiv').onmousemove = function () {
    for (var i = 0; i < timelineContent.length; i++) {
        if (i == circle.value) {
            timelineOut.innerHTML = timelineContent[i];
        }
    }
}

var arrayOfQ = [`https://www.goodreads.com/book/show/36717949-nowhere-boy`];

var ogAr = [`Nowhere Boy`];

function eArr(input) {
    document.getElementsByTagName('i')[input].innerHTML = arrayOfQ[input];
}

var iz = document.getElementsByTagName('i');

for (var i = 0; i < iz.length; i++) {
    iz[i].setAttribute('onclick', `eArr(${i})`)
    iz[i].setAttribute('onmousemove', `this.innerHTML = ogAr[${i}]`)
}
