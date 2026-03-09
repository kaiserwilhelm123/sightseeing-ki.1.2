function recommend(){

let city = document.getElementById("city").value.toLowerCase().trim();
let liked = document.getElementById("liked").value.toLowerCase();
let time = document.getElementById("time").value * 60;
let interests = document.getElementById("interests").value.toLowerCase().split(",");

let results = [];
let usedTime = 0;

for(let place of attractions){

if(place.city !== city) continue;

let score = place.popularity;

for(let interest of interests){
if(place.category.includes(interest.trim())){
score += 5;
}
}

if(liked.includes(place.category)){
score += 3;
}

results.push({...place, score});

}

results.sort((a,b)=>b.score-a.score);

let output = document.getElementById("results");
output.innerHTML="";

if(results.length === 0){

output.innerHTML = "<p>Keine passenden Sehenswürdigkeiten gefunden.</p>";
return;

}

for(let place of results){

if(usedTime + place.time > time) continue;

usedTime += place.time;

let card = document.createElement("div");
card.className="card";

card.innerHTML = `
<h3>${place.name}</h3>
<p>Kategorie: ${place.category}</p>
<p>Besuchszeit: ${place.time} Minuten</p>
`;

output.appendChild(card);

}

}
