const quote=[
    {
        quote:"Education is the kindling of a flame, not the filling of a vessel.",
        author:"Socrates",
    },

    {
        quote:"Educating the mind without educating the heart is no education at all.",
        author:"Aristotle",
    },

    {
        quote:"The highest education is that which does not merely give us information but makes our life in harmony with all existence.",
        author:"Rabindranath Tagore",
    },

    {
        quote:"The teacher who is indeed wise does not bid you to enter the house of his wisdom but rather leads you to the threshold of your own mind.",
        author:"Khalil Gibran",
    },

    {
        quote:"Education is not the learning of facts, but the training of the mind to think.",
        author:"Albert Einstein",
    },

    {
        quote:"Education breeds confidence. Confidence breeds hope. Hope breeds peace.",
        author:"Confucius",
    },

    {
        quote:"The function of education is to create human beings who are integrated and therefore intelligent.",
        author:"Jiddu Krishnamurti",
    },

    {
        quote:"The direction in which education starts a man will determine his future in life.",
        author:"Plato",
    },

    {
        quote:"One looks back with appreciation to the brilliant teachers, but with gratitude to those who touched our human feelings.",
        author:"Carl Jung",
    },

    {
        quote:"Don’t be satisfied with stories, how things have gone with others. Unfold your own myth.",
        author:"Rumi",
    },
];

let quoteElement=document.getElementById("quote");
let authorElement=document.getElementById("author");
let buttonElement=document.getElementById("button");

function generator(){
    let randomNum=Math.random()*10;
    let obj=quote[parseInt(randomNum)];
    quoteElement.textContent=obj.quote;
    authorElement.textContent=obj.author;
};

buttonElement.addEventListener("click",generator);