let adjective = prompt('GIVE AN ADJECTIVE')
let noun = prompt('GIVE AND NOUN')
let verb = prompt('GIVE AND VERB')
let adverb = prompt('GIVE AN ADVERB')

let story = `Once upon a time, in a ${adjective} ${noun}, a ${verb} ${noun} ${adverb} ${verb}.`

let madLibOutputDiv = document.getElementById('madlibOutput')

madLibOutputDiv.innerHTML = `<p>${story}</p>`

