
window.onload=function(){
  let form = document.querySelector("form");
  form.onsubmit=function(event){
  event.preventDefault();  

  const name = document.getElementById("userName").value;
  const age = document.getElementById("userAge").value;
  const question1Answer = document.querySelector('input[name="question1"]:checked').value;
  const question2Answer = document.querySelector('input[name="question2"]:checked').value;
  const question3Answer = document.querySelector('input[name="question3"]:checked').value;
  const question4Answer = document.querySelector('input[name="question4"]:checked').value;
  document.querySelector("span#name").innerText = name;
  let recommendation = getRecommendation(question1Answer,question2Answer,question3Answer,question4Answer); 
  document.querySelector("h2#language").innerText = recommendation;
  document.getElementById("recommendation").removeAttribute("class");
  document.getElementById("form").setAttribute("class","hidden");
  console.log("hi");
  };
}  
function getRecommendation(answer1,answer2,answer3,answer4){
    
    /*let python = document.getElementById("python");
    let js = document.getElementById("javaScript");
    let swift = document.getElementById("swift");
    let cSharp = document.getElementById("cSharp");*/
  
  if(answer2==="data" ){
      return "Python"

    }  
    else if(answer2==="mobile"){
      return "Swift";
    } 
    else if(answer3==="back"){
      return "C#";
    }
    else if(answer1==="fun" && answer3==="front"){
      return "Java Script";
    }
    else if(answer4==="yes"){
      return "Python";
    }
}

function showForm(){
  document.getElementById("form").removeAttribute("class");
  document.getElementById("recommendation").setAttribute("class","hidden");
  let form = document.querySelector("form");
  form.reset();
}