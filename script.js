document.getElementById("swapibtn").addEventListener("click", getApi);
document.getElementById("deckbtn").addEventListener("click", getApiDeck);

function getApi()
{
    document.getElementById("output").value = "";
    let url ="https://www.swapi.tech/api/people/?name=";
    let search = document.getElementById("input").value;


    let fullUri = url+search;
    fetch(fullUri)
        .then(res => res.json())
        .then(data =>
        {
            console.log(data);
            

            const height = data.result[0].properties.height;
            const name = data.result[0].properties.name;
            const mass = data.result[0].properties.mass;
            const gender = data.result[0].properties.gender;
            const hair_color = data.result[0].properties.hair_color;
            
            let s = `Name: ${name} \n Height: ${height} \n Mass: ${mass} \n Gender: ${gender} \n Hair Color: ${hair_color}`;
            console.log(s);

            document.getElementById("output").value = s;

        }
        )
        .catch(err => console.log(err))
}

function getApiDeck()
{
    let fullUri = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";

    fetch(fullUri)
        .then(res => res.json())
        .then(data =>
        {
            console.log(data);

            let img = data.cards[0].image;
            const cardImg = document.getElementById("cardImg");

            cardImg.src = img;
            cardImg.style.display = "block";

        }
        )
        .catch(err => console.log(err))
}

