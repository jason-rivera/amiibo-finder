/* FINALLY WORKS - save this version !! */

// fetch('https://www.amiiboapi.com/api/amiibo/?name=luigi')
// .then((res) => res.json())
// .then((data) => {
//   console.log(data.amiibo[0].character);
// })

/* THIS USES A FOR LOOP TO GO THROUGH JSON - WORKS */

// fetch('https://www.amiiboapi.com/api/amiibo/?name=luigi')
// .then((res) => res.json())
// .then((data) => {
//   console.log(data.amiibo);
  
//   for (let i = 0; i < data.amiibo.length; i++) {
//     console.log(data.amiibo[i].character);
//     console.log("hello");
//   }
// })

/* AND FINALL THIS WORKS!!!! */

// fetch('https://www.amiiboapi.com/api/amiibo/')
// .then((res) => res.json())
// .then((data) => {
//   console.log(data.amiibo);
  
//   let output = '<h2>All Amiibo</h2>';
//   for (let i = 0; i < 100; i++) {
//     console.log(data.amiibo);
//     output += `
//       <ul>
//         <img src="${data.amiibo[i].image}" alt="" style="width: 100px">
//         <li>Character: ${data.amiibo[i].character}</li>
//         <li>Name: ${data.amiibo[i].name}</li>
//         <li>Game: ${data.amiibo[i].gameSeries}</li>
//       </ul>
//     `
//     document.getElementById('output').innerHTML = output;
//   }
// })

var count = 1;
loadPage();

async function loadPage() {
  const response = await fetch(`https://www.amiiboapi.com/api/amiibo/`);
  const data = await response.json();
  console.log(data);
}

document.getElementById("button-search").addEventListener("click", function() {
  getAmiibo();
  document.getElementById('character').value = '';
})

async function getAmiibo() {
  
  let randomNumber = Math.floor((Math.random() * 3) + 1);
  const gamecharacter = document.getElementById('character').value;

  let out = "";
  try {
    const response = await fetch(`https://www.amiiboapi.com/api/amiibo/?character=${gamecharacter}`);
    const data = await response.json();

    let greetingOne = `A wild ${data.amiibo[0].name} has appeared!`
    let greetingTwo = `${data.amiibo[0].name} has entered the arena!`
    let greetingThree = `You got this, ${data.amiibo[0].name}!`

    if (randomNumber == 1) {
      console.log(greetingOne);
    } else if (randomNumber == 2) {
      console.log(greetingTwo);
    } else {
      console.log(greetingThree);
    }
    
    for (let i = 0; i < count; i++) {
      out += `
        <div class="card">
          <h1>${data.amiibo[i].name}</h1>
          <img class="amiibo-image" src="${data.amiibo[i].image}" alt=""/>
          <br/><br/><br/><br/>
          <b><p>Series: ${data.amiibo[i].gameSeries}</p></b>
          <i><p>Release Date (NA): ${data.amiibo[i].release.na}</p>
          <p>Release Date (EU): ${data.amiibo[i].release.eu}</p>
          <p>Release Date (JP): ${data.amiibo[i].release.jp}</p></i>
        </div>
    `
    }
  } catch (e) {
    console.log(e);
    console.log(`There was an error fetching, '${gamecharacter}' may not be an Amiibo!`);
  }

  document.getElementById("output").innerHTML = out;
}



/* This gets all amiibo from 1 - n */

// fetch('https://www.amiiboapi.com/api/amiibo')
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);

//     let output = '<h2> All the Amiibos! </h2>';

//     for (let i = 0; i < 20; i++) {

//       let character = document.getElementById('character').value;
      
//       output += `
//       <ul>
//         <img src="${data.amiibo[i].image}" alt="" style="width: 100px"/>
//         <li>Character: ${data.amiibo[i].character}</li>
//         <li>Name: ${data.amiibo[i].name}</li>
//         <li>Series: ${data.amiibo[i].gameSeries}</li>
//         <li>Release Date (NA): ${data.amiibo[i].release.na}</li>
//         <li>Release Date (EU): ${data.amiibo[i].release.eu}</li>
//         <li>Release Date (JP): ${data.amiibo[i].release.jp}</li>
//       </ul>
//     `
    
//   }

//   document.getElementById('output').innerHTML = output;
  
// })



