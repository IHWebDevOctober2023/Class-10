// ------- CREATE A JS SERVER  ------- \\

// USE EXPRESS 

// npm init

// npm install express

// This server is going to give us information in a JSON file. 
// When I make a GET request to the server I get back a JSON.
// This JSON FILE contains an array of users or characters (10) and images

// ------- CREATE AN HTML  ------- \\

// This HTML is going to have a UL
// and with another JS file you need to make a request to your server and get the data back

// BONUS:: ADD CSS and super fancy styling


console.log("JS is working");


async function getCharacters() {
    try {
        const response = await fetch("http://localhost:3000");
        console.log(response);
        const responseJson = await response.json();
        console.log(responseJson);
        const ulElement = document.querySelector("#list");
        responseJson.forEach((user) => {
            const liElement = document.createElement("li")
            liElement.innerHTML = `
            <h3>${user.name}</h3>
            <img src="${user.imageUrl}">
            `
            ulElement.appendChild(liElement)
        })

    } catch (error) {
        console.log(error);
    }
}

getCharacters()