console.log("Hola mundo");
var myJson={
  name: "Chipi",
  secondName: "Martínez Santibáñez",
  career: "Ingeniería en sistemas computacionales",
  projects: [
    {title:"Hackathon",text:"Bonito concurso para la solución de problematicas, en el que no puedes dormir a gusto"},
    {title:"Corebook",text:"Bonita ERP que usa la inteligencia artificial, lo cual la hace ser más sexy."},
    {title:"Buscaminas",text:"Jueguillo que en paralelo tienes que esquivar bananas de unos Donkey Kongs locos."}
  ],
  investigations: [
    {title:"¿De dónde vienen los bebes?",text:"Lo descubrí con Aldo en la semana del emprendedor, ggg no es cierto"},
    {title:"Algo",text:"Ya no sé que poner :'("},
    {title:"Buscaminas",text:"Jueguillo que en paralelo tienes que esquivar bananas de unos Donkey Kongs locos."}
  ],
  lenguages: [
    {language:"React.png",text:"React está bien chido"},
    {language:"HTML.png",text:"HTML está bien chido"},
    {language:"C++.png",text:"C++ está bien chido"},
    {language:"GitHub.png",text:"GitHub está bien chido"}
  ],
  comments: [
    {title:"Título",stars:5,user:"Usuario",text:"Está es una evaluación chida de este programador"}
  ],
  picture: "Patrón.jpg",
  skills: [
    {skill: "Comico",power: 90},
    {skill: "Hermoso",power: 100},
    {skill: "Programador",power: 4},
    {skill: "Deportista",power: 80}
  ],
  email:"dsjlkds@fdsklsdk.com",
  medals:{
    gold: 10,
    silver: 10,
    bronze: 10
  },
  phone: 4611897615,
  stars: 4
};
var onResize=function(){
	console.log(document);
  document.getElementById("Content").style.height=window.innerHeight-62+"px";
};
window.addEventListener("resize",onResize);
document.getElementById("Name").innerHTML=myJson.name+" "+myJson.secondName;
document.getElementById("Career").innerHTML=myJson.career;
document.getElementById("Picture").src=myJson.picture;
if(myJson.medals.gold!=0){
  document.getElementById("Medals").appendChild(document.createElement("div"));
  document.getElementById("Medals").childNodes[document.getElementById("Medals").childNodes.length-1].setAttribute("class", "Medal");
  document.getElementById("Medals").childNodes[document.getElementById("Medals").childNodes.length-1].setAttribute("id", "Gold");
  document.getElementById("Medals").childNodes[document.getElementById("Medals").childNodes.length-1].innerHTML=myJson.medals.gold;
}
if(myJson.medals.silver!=0){
  document.getElementById("Medals").appendChild(document.createElement("div"));
  document.getElementById("Medals").childNodes[document.getElementById("Medals").childNodes.length-1].setAttribute("class", "Medal");
  document.getElementById("Medals").childNodes[document.getElementById("Medals").childNodes.length-1].setAttribute("id", "Silver");
  document.getElementById("Medals").childNodes[document.getElementById("Medals").childNodes.length-1].innerHTML=myJson.medals.silver;
}
if(myJson.medals.bronze!=0){
  document.getElementById("Medals").appendChild(document.createElement("div"));
  document.getElementById("Medals").childNodes[document.getElementById("Medals").childNodes.length-1].setAttribute("class", "Medal");
  document.getElementById("Medals").childNodes[document.getElementById("Medals").childNodes.length-1].setAttribute("id", "Bronze");
  document.getElementById("Medals").childNodes[document.getElementById("Medals").childNodes.length-1].innerHTML=myJson.medals.bronze;
}
for(var i=0;i<myJson.skills.length;i++){
  document.getElementById("Skills").appendChild(document.createElement("div"));
  document.getElementById("Skills").childNodes[i].setAttribute("class", "Skill");
  document.getElementById("Skills").childNodes[i].innerHTML=myJson.skills[i].skill;
  document.getElementById("Skills").childNodes[i].appendChild(document.createElement("div"));
  document.getElementById("Skills").childNodes[i].childNodes[1].setAttribute("class", "SkillContainer");
  document.getElementById("Skills").childNodes[i].childNodes[1].appendChild(document.createElement("div"));
  document.getElementById("Skills").childNodes[i].childNodes[1].childNodes[0].setAttribute("class", "SkillPower");
  document.getElementById("Skills").childNodes[i].childNodes[1].childNodes[0].style.width=myJson.skills[i].power+"%";
}
for(var i=0;i<myJson.projects.length;i++){
  document.getElementById("Projects").appendChild(document.createElement("h5"));
  document.getElementById("Projects").childNodes[document.getElementById("Projects").childNodes.length-1].innerHTML=myJson.projects[i].title;
  document.getElementById("Projects").appendChild(document.createElement("p"));
  document.getElementById("Projects").childNodes[document.getElementById("Projects").childNodes.length-1].innerHTML=myJson.projects[i].text;
}
for(var i=0;i<myJson.investigations.length;i++){
  document.getElementById("Investigations").appendChild(document.createElement("h5"));
  document.getElementById("Investigations").childNodes[document.getElementById("Investigations").childNodes.length-1].innerHTML=myJson.investigations[i].title;
  document.getElementById("Investigations").appendChild(document.createElement("p"));
  document.getElementById("Investigations").childNodes[document.getElementById("Investigations").childNodes.length-1].innerHTML=myJson.investigations[i].text;
}
for(var i=0;i<myJson.comments.length;i++){
  document.getElementById("Comments").appendChild(document.createElement("h2"));
  document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].innerHTML=myJson.comments[i].title;
  document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].setAttribute("class","CommentTitle");
  document.getElementById("Comments").appendChild(document.createElement("div"));
  for(var j=0;j<myJson.comments[i].stars;j++){
    document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].appendChild(document.createElement("img"));
    document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].childNodes[document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].childNodes.length-1].src="Star.png";
    document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].childNodes[document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].childNodes.length-1].setAttribute("class","CommentStar");
  }
  for(var j=myJson.comments[i].stars;j<5;j++){
    document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].appendChild(document.createElement("img"));
    document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].childNodes[document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].childNodes.length-1].src="EmptyStar.png";
    document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].childNodes[document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].childNodes.length-1].setAttribute("class","CommentStar");
  }
  document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].setAttribute("class","CommentStars");
  document.getElementById("Comments").appendChild(document.createElement("p"));
  document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].innerHTML="by "+myJson.comments[i].user;
  document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].setAttribute("class","CommentAuthor");
  document.getElementById("Comments").appendChild(document.createElement("p"));
  document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].innerHTML=myJson.comments[i].text;
  document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].setAttribute("class","CommentText");
}
var selectedStars;
var onStar1=function(){
  for(var j=0;j<1;j++){
    document.getElementById("NewComment").childNodes[0].childNodes[j].src="Star.png"
  }
  for(var j=1;j<5;j++){
    document.getElementById("NewComment").childNodes[0].childNodes[j].src="EmptyStar.png"
  }
  selectedStars=1;
};
var onStar2=function(){
  for(var j=0;j<2;j++){
    document.getElementById("NewComment").childNodes[0].childNodes[j].src="Star.png"
  }
  for(var j=2;j<5;j++){
    document.getElementById("NewComment").childNodes[0].childNodes[j].src="EmptyStar.png"
  }
  selectedStars=2;
};
var onStar3=function(){
  for(var j=0;j<3;j++){
    document.getElementById("NewComment").childNodes[0].childNodes[j].src="Star.png"
  }
  for(var j=3;j<5;j++){
    document.getElementById("NewComment").childNodes[0].childNodes[j].src="EmptyStar.png"
  }
  selectedStars=3;
};
var onStar4=function(){
  for(var j=0;j<4;j++){
    document.getElementById("NewComment").childNodes[0].childNodes[j].src="Star.png"
  }
  for(var j=4;j<5;j++){
    document.getElementById("NewComment").childNodes[0].childNodes[j].src="EmptyStar.png"
  }
  selectedStars=4;
};
var onStar5=function(){
  for(var j=0;j<5;j++){
    document.getElementById("NewComment").childNodes[0].childNodes[j].src="Star.png"
  }
  selectedStars=5;
};
var cancelComment=function(){
  document.getElementById("Comments").removeChild(document.getElementById("Comments").lastChild);
  document.getElementById("Comments").appendChild(document.createElement("button"));
  document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].innerHTML="Nuevo comentario";
  document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].addEventListener("click",onComment);
};
var newComment=function(){
  if(document.getElementById("NewComment").childNodes[2].value!=""&&document.getElementById("NewComment").childNodes[4].value!=""){
    var theNewComment={};
    theNewComment.title=document.getElementById("NewComment").childNodes[2].value;
    theNewComment.text=document.getElementById("NewComment").childNodes[4].value;
    theNewComment.stars=selectedStars;
    theNewComment.user="Usuario";
    document.getElementById("Comments").removeChild(document.getElementById("Comments").lastChild);
    document.getElementById("Comments").appendChild(document.createElement("h2"));
    document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].innerHTML=theNewComment.title;
    document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].setAttribute("class","CommentTitle");
    document.getElementById("Comments").appendChild(document.createElement("div"));
    for(var j=0;j<theNewComment.stars;j++){
      document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].appendChild(document.createElement("img"));
      document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].childNodes[document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].childNodes.length-1].src="Star.png";
      document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].childNodes[document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].childNodes.length-1].setAttribute("class","CommentStar");
    }
    for(var j=theNewComment.stars;j<5;j++){
      document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].appendChild(document.createElement("img"));
      document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].childNodes[document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].childNodes.length-1].src="EmptyStar.png";
      document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].childNodes[document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].childNodes.length-1].setAttribute("class","CommentStar");
    }
    document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].setAttribute("class","CommentStars");
    document.getElementById("Comments").appendChild(document.createElement("p"));
    document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].innerHTML="by "+theNewComment.user;
    document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].setAttribute("class","CommentAuthor");
    document.getElementById("Comments").appendChild(document.createElement("p"));
    document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].innerHTML=theNewComment.text;
    document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].setAttribute("class","CommentText");
    myJson.comments.push(theNewComment);
    document.getElementById("Comments").appendChild(document.createElement("button"));
    document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].innerHTML="Nuevo comentario";
    document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].addEventListener("click",onComment);
  }
  else{
    alert("No se puede");
  }
};
var onComment=function(){
  selectedStars=5;
  document.getElementById("Comments").removeChild(document.getElementById("Comments").lastChild);
  document.getElementById("Comments").appendChild(document.createElement("div"));
  document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].setAttribute("id","NewComment");
  document.getElementById("NewComment").appendChild(document.createElement("div"));
  document.getElementById("NewComment").childNodes[0].setAttribute("class","CommentStars");
  document.getElementById("NewComment").childNodes[0].style.display="block";
  //0
    document.getElementById("NewComment").childNodes[0].appendChild(document.createElement("img"));
    document.getElementById("NewComment").childNodes[0].childNodes[0].addEventListener("click",onStar1);
    document.getElementById("NewComment").childNodes[0].childNodes[0].src="Star.png";
    document.getElementById("NewComment").childNodes[0].childNodes[0].setAttribute("class","CommentStar");
  //1
    document.getElementById("NewComment").childNodes[0].appendChild(document.createElement("img"));
    document.getElementById("NewComment").childNodes[0].childNodes[1].addEventListener("click",onStar2);
    document.getElementById("NewComment").childNodes[0].childNodes[1].src="Star.png";
    document.getElementById("NewComment").childNodes[0].childNodes[1].setAttribute("class","CommentStar");
  //2
    document.getElementById("NewComment").childNodes[0].appendChild(document.createElement("img"));
    document.getElementById("NewComment").childNodes[0].childNodes[2].addEventListener("click",onStar3);
    document.getElementById("NewComment").childNodes[0].childNodes[2].src="Star.png";
    document.getElementById("NewComment").childNodes[0].childNodes[2].setAttribute("class","CommentStar");
  //3
    document.getElementById("NewComment").childNodes[0].appendChild(document.createElement("img"));
    document.getElementById("NewComment").childNodes[0].childNodes[3].addEventListener("click",onStar4);
    document.getElementById("NewComment").childNodes[0].childNodes[3].src="Star.png";
    document.getElementById("NewComment").childNodes[0].childNodes[3].setAttribute("class","CommentStar");
  //4
    document.getElementById("NewComment").childNodes[0].appendChild(document.createElement("img"));
    document.getElementById("NewComment").childNodes[0].childNodes[4].addEventListener("click",onStar5);
    document.getElementById("NewComment").childNodes[0].childNodes[4].src="Star.png";
    document.getElementById("NewComment").childNodes[0].childNodes[4].setAttribute("class","CommentStar");
  document.getElementById("NewComment").appendChild(document.createElement("p"));
  document.getElementById("NewComment").childNodes[1].innerHTML="Título";
  document.getElementById("NewComment").appendChild(document.createElement("input"));
  document.getElementById("NewComment").appendChild(document.createElement("p"));
  document.getElementById("NewComment").childNodes[3].innerHTML="Comentario";
  document.getElementById("NewComment").appendChild(document.createElement("input"));
  document.getElementById("NewComment").appendChild(document.createElement("br"));
  document.getElementById("NewComment").appendChild(document.createElement("button"));
  document.getElementById("NewComment").childNodes[6].innerHTML="Cancelar";
  document.getElementById("NewComment").childNodes[6].addEventListener("click",cancelComment);
  document.getElementById("NewComment").appendChild(document.createElement("button"));
  document.getElementById("NewComment").childNodes[7].innerHTML="Aceptar";
  document.getElementById("NewComment").childNodes[7].addEventListener("click",newComment);
};
document.getElementById("Comments").appendChild(document.createElement("button"));
document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].innerHTML="Nuevo comentario";
document.getElementById("Comments").childNodes[document.getElementById("Comments").childNodes.length-1].addEventListener("click",onComment);
document.getElementById("Contact").childNodes[3].innerHTML=myJson.email;
document.getElementById("Contact").childNodes[5].innerHTML=myJson.phone;
for(var i=0;i<myJson.lenguages.length;i++){
  document.getElementById("Languages").appendChild(document.createElement("div"));
  //document.getElementById("Languages").childNodes[document.getElementById("Languages").childNodes.length-1].setAttribute("class","LanguageC");
  document.getElementById("Languages").childNodes[document.getElementById("Languages").childNodes.length-1].appendChild(document.createElement("img"));
  document.getElementById("Languages").childNodes[document.getElementById("Languages").childNodes.length-1].childNodes[0].src=myJson.lenguages[i].language;
  document.getElementById("Languages").childNodes[document.getElementById("Languages").childNodes.length-1].childNodes[0].setAttribute("class","LanguageMedal");
  document.getElementById("Languages").childNodes[document.getElementById("Languages").childNodes.length-1].appendChild(document.createElement("span"));
  document.getElementById("Languages").childNodes[document.getElementById("Languages").childNodes.length-1].childNodes[1].innerHTML=myJson.lenguages[i].text;
  document.getElementById("Languages").childNodes[document.getElementById("Languages").childNodes.length-1].childNodes[1].setAttribute("class","LanguageText");
}

document.getElementById("Calification").appendChild(document.createElement("div"));
for(var j=0;j<myJson.stars;j++){
  document.getElementById("Calification").childNodes[0].appendChild(document.createElement("img"));
  document.getElementById("Calification").childNodes[0].childNodes[j].src="WhiteStar.png";
  document.getElementById("Calification").childNodes[0].childNodes[j].setAttribute("class","CommentStar");
}
for(var j=myJson.stars;j<5;j++){
  document.getElementById("Calification").childNodes[0].appendChild(document.createElement("img"));
  document.getElementById("Calification").childNodes[0].childNodes[j].src="WhiteEmptyStar.png";
  document.getElementById("Calification").childNodes[0].childNodes[j].setAttribute("class","CommentStar");
}
document.getElementById("Calification").childNodes[0].setAttribute("class","CommentStars");