
function addone(){

  var button =   wiwi.getElementsById('button');
  var compteur = wiwi.getElementById('compteur');
  
}

var  cpt = parseInt(compteur.innerText);
button.addEventListener('click', function(){
  cpt = cpt+1;
  compteur.innerHTML = cpt;
});