var timelineContent = [`<pre>
Nowhere boy is a compelling book with two perspectives, Ahmed and Max.
Ahmed is a kind boy who is a refugee and homeless.
Max is a boy who traveled to Brussels because his parents were in search of a "better" place for Max.
Ahmed ends up in Turkey after bombings in Syria (his home)
He gets to the coast of Greece through a boat and in turn lost his dad, his only family as the rest had been killed in a bomb.
He then rides with a smuggler and eventually ends up in Brussels, also losing his phone.
Ahmed happens to live in Max's house and lives in a wine "cellular"
Max is very brave because he finds him and doesn't report him, he also is a nice kid because he didn't discriminate.
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