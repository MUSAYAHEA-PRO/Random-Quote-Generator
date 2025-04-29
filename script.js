const quote=[
    "Education is the kindling of a flame, not the filling of a vessel.",
    "Educating the mind without educating the heart is no education at all.",
    "The highest education is that which does not merely give us information but makes our life in harmony with all existence.",
    "The teacher who is indeed wise does not bid you to enter the house of his wisdom but rather leads you to the threshold of your own mind.",
    "Education is not the learning of facts, but the training of the mind to think.",
    "Education breeds confidence. Confidence breeds hope. Hope breeds peace.",
    "The function of education is to create human beings who are integrated and therefore intelligent.",
    "The direction in which education starts a man will determine his future in life.",
    "One looks back with appreciation to the brilliant teachers, but with gratitude to those who touched our human feelings.",
    "Don’t be satisfied with stories, how things have gone with others. Unfold your own myth.",
];

const author=[
    "Socrates",
    "Aristotle",
    "Rabindranath Tagore",
    "Khalil Gibran",
    "Albert Einstein",
    "Confucius",
    "Jiddu Krishnamurti",
    "Plato",
    "Carl Jung",
    "Rumi",
]

let quoteElement=document.getElementById("quote");
let authorElement=document.getElementById("author");
let buttonElement=document.getElementById("button");

buttonElement.addEventListener("click",function(){
    let random=Math.random()*10;
    quoteElement.textContent=quote[parseInt(random)];
    authorElement.textContent=author[parseInt(random)];
});