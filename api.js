let quoteElement=document.getElementById("quote");
let authorElement=document.getElementById("author");
let buttonElement=document.getElementById("button");
let api="https://api.api-ninjas.com/v1/quotes";
let key="MJtmfU/Pri5JESJsS7UUNg==E2syvnqgphKtgWut";

const getApi=()=>{
    fetch(api,{
        headers:{
            'X-Api-Key':key,
        },
    })
    .then(data=>data.json())
    .then(item=>{
        quoteElement.textContent=item[0].quote;
        authorElement.textContent=item[0].author;
    });
};

buttonElement.addEventListener("click",getApi);