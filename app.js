function getContent(fragmentID){
  var partials = {
    home:"This is my home",
    about:"THis is About page!",
    contact:"This is our contact page!!",
  }
  return partials[fragmentID];
};

function navbar(){
  var mycontent = document.getElementById('myid');
  fragmentID = location.hash.substr(1);
  mycontent.innerHTML = getContent(fragmentID);
  //console.log(location.hash);
}
if (!location.hash) {
  location.hash = "#home";
}
navbar();
window.addEventListener('hashchange', navbar);
