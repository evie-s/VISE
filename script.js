//global variables
var animals = 0;
var plants = 0;
var seniorCenter = 0;
var tutor = 0;
var art = 0;
var time;

//Q1
function questionOne(c){
  if(c == 'a'){
    document.getElementById("q1a").src = "mediaHover/yes.png";
    animals++;
    plants++;
  }
  else{
     document.getElementById("q1b").src = "mediaHover/no.png";
    seniorCenter++;
    tutor++;
    art++;
  }
}

//Q2
function questionTwo(c){
  if(c == 'a'){
     document.getElementById("q2a").src = "mediaHover/introverted.png";
    animals++;
    plants++;
    art++;
  }
  else{
     document.getElementById("q2b").src = "mediaHover/extroverted.png";
    seniorCenter++;
    tutor++;
  }
}

//Q3
function questionThree(c){
  if(c == 'a'){
    document.getElementById("q3a").src = "mediaHover/alone.png";
    animals++;
    plants++;
    art++;
  }
  else{
    document.getElementById("q3b").src = "mediaHover/team.png";
    seniorCenter++;
    tutor++;
  }
}

//Q4
function questionFour(c){
  document.getElementById("q4a").src = "mediaHover/yes.png";
  if(c == 'a'){
    seniorCenter++;
    art++;
  }
  else{
    document.getElementById("q4b").src = "mediaHover/no.png";
    seniorCenter++;
    tutor++;
    plants++;
  }
}

//Q5
function questionFive(c){
  if(c == 'a'){
    document.getElementById("q5a").src = "mediaHover/math-and-science.png";
    animals++;
    plants++;
    tutor++;
  }
  else{
    document.getElementById("q5b").src = "mediaHover/english-and-art.png";
    seniorCenter++;
    art++;
  }
}

//Q7
function questionSeven(c){
  if(c == 'a'){
    document.getElementById("q7a").src = "mediaHover/long-term.png";
    time = 'a';
  }
  else{
    document.getElementById("q7b").src = "mediaHover/short-term.png";
    time = 'b';
  }
}

//results
function results(){

  const globalResults = [animals, plants, seniorCenter, tutor, art];
  var winner = globalResults[0];
  console.log(winner);
  for(var i = 1; i < 5; i++){
    if(winner < globalResults[i]){
      winner = globalResults[i];
    }
  }

  console.log(winner);

  if(winner == globalResults[0])
    {
      if(time == 'a')
      {
        document.getElementById("resultImg").src = "resultsPic/animalShelter.png";
      }
      else
      {
        document.getElementById("resultImg").src = "resultsPic/walkDog.png";
      }
    }
    else if(winner == globalResults[1])
    {
      if(time == 'a')
      {
        document.getElementById("resultImg").src = "resultsPic/farmersMarket.png";
      }
      else
      {
        document.getElementById("resultImg").src = "resultsPic/waterPlants.png";
      }
    }
    else if(winner == globalResults[2])
    {
      if(time == 'a')
      {
        document.getElementById("resultImg").src = "resultsPic/seniorCenter.png";
      }
      else
      {
        document.getElementById("resultImg").src = "resultsPic/groceries.png";
      }
    }
    else if(winner == globalResults[3])
    {
      if(time == 'a')
      {
        document.getElementById("resultImg").src = "resultsPic/tutorB.png";
      }
      else
      {
        document.getElementById("resultImg").src = "resultsPic/tutorS.png";
      }
    }
    else
    {
      if(time == 'a')
      {
       document.getElementById("resultImg").src = "results/mural.png";
      }
      else
      {
       document.getElementById("resultImg").src = "results/cards.png";
      }
    }
  
}
