function loadJSON(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  };
  xhr.send();
}
loadJSON('json/data.json',function(text){
  var data=JSON.parse(text);
  console.log(data);
  profileData(data.profiles);
})
var mainDiv=document.querySelector(".main");
function profileData(pro){

  for(var i=0; i<pro.length;i++){
    var subDiv=document.createElement("div");
    subDiv.classList.add("subdiv");
    mainDiv.appendChild(subDiv);

    var name=document.createElement("h2");
    name.textContent=pro[i].name;
    var label=document.createElement("h3");
    label.textContent=pro[i].label;
    var company=document.createElement("h3");
    company.textContent=pro[i].company;
    subDiv.appendChild(name);
    subDiv.appendChild(label);
    subDiv.appendChild(company);
  }
}
