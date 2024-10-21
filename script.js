document.getElementById("btn").addEventListener("click", getApi);


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

