let h1=document.querySelector("h1");
let genrateBtn=document.querySelector("button");
let main=document.querySelector(".main");
let teams=[
     {
    name: "Chennai Super Kings",
    shortName: "CSK",
    captain: "Ruturaj Gaikwad",
    primaryColor: "yellow",
    secondaryColor: "blue",
    homeGround: "M. A. Chidambaram Stadium",
    coach: "Stephen Fleming",
    trophyCount: 5,
    founded: 2008,
  },

  {
    name: "Mumbai Indians",
    shortName: "MI",
    captain: "Hardik Pandya",
    primaryColor: "blue",
    secondaryColor: "gold",
    homeGround: "Wankhede Stadium",
    coach: "Mark Boucher",
    trophyCount: 5,
    founded: 2008,
  },

  {
    name: "Royal Challengers Bengaluru",
    shortName: "RCB",
    captain: "Faf du Plessis",
    primaryColor: "red",
    secondaryColor: "black",
    homeGround: "M. Chinnaswamy Stadium",
    coach: "Andy Flower",
    trophyCount: 0,
    founded: 2008,
  },

  {
    name: "Kolkata Knight Riders",
    shortName: "KKR",
    captain: "Nitish Rana",
    primaryColor: "purple",
    secondaryColor: "gold",
    homeGround: "Eden Gardens",
    coach: "Chandrakant Pandit",
    trophyCount: 3,
    founded: 2008,
  },

  {
    name: "Rajasthan Royals",
    shortName: "RR",
    captain: "Sanju Samson",
    primaryColor: "pink",
    secondaryColor: "blue",
    homeGround: "Sawai Mansingh Stadium",
    coach: "Kumar Sangakkara",
    trophyCount: 1,
    founded: 2008,
  },

  {
    name: "Punjab Kings",
    shortName: "PBKS",
    captain: "Shreyas Iyer",
    primaryColor: "red",
    secondaryColor: "gold",
    homeGround: "IS Bindra Stadium",
    coach: "Trevor Bayliss",
    trophyCount: 0,
    founded: 2008,
  },

  {
    name: "Delhi Capitals",
    shortName: "DC",
    captain: "Rishabh Pant",
    primaryColor: "lightblue",
    secondaryColor: "red",
    homeGround: "Arun Jaitley Stadium",
    coach: "Ricky Ponting",
    trophyCount: 0,
    founded: 2008,
  },

  {
    name: "Sunrisers Hyderabad",
    shortName: "SRH",
    captain: "Pat Cummins",
    primaryColor: "orange",
    secondaryColor: "black",
    homeGround: "Rajiv Gandhi Intl. Cricket Stadium",
    coach: "Daniel Vettori",
    trophyCount: 1,
    founded: 2013,
  },

  {
    name: "Lucknow Super Giants",
    shortName: "LSG",
    captain: "KL Rahul",
    primaryColor: "lightblue",
    secondaryColor: "orange",
    homeGround: "Ekana Cricket Stadium",
    coach: "Justin Langer",
    trophyCount: 0,
    founded: 2022,
  },

  {
    name: "Gujarat Titans",
    shortName: "GT",
    captain: "Shubman Gill",
    primaryColor: "darkblue",
    secondaryColor: "gold",
    homeGround: "Sardar Patel Stadium",
    coach: "Ashish Nehra",
    trophyCount: 1,
    founded: 2022,
  }
];

let getRandomTeam=()=>{
    let randomIndex=Math.floor(Math.random()*teams.length);
    return teams[randomIndex];
}
genrateBtn.addEventListener("click",()=>{
    let team=getRandomTeam();
    h1.innerHTML= `
    <div class="team-name">${team.name}</div>
    <div class="details">
        Captain: ${team.captain}<br>
        Home Ground: ${team.homeGround}<br>
        Coach: ${team.coach}<br>
        Trophies Won: ${team.trophyCount}<br>
        Founded: ${team.founded}
    </div>`;
    main.style.backgroundColor=team.primaryColor;
    h1.style.backgroundColor=team.secondaryColor;
    h1.style.color="white"; 

});

