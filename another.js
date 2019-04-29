const tSharpElements = document.getElementsByClassName('t-sharp-elements')[0];
const tSharpLinks = document.getElementsByClassName('t-sharp-nav')[0];

function fadeIn(el){
    el.classList.add('show');
    el.classList.remove('dim');  
  }
  
  function dim(el){
    el.classList.add('dim');
    el.classList.remove('show');
 
  }
  

  tSharpLinks.addEventListener('mouseover', function(){
    if (tSharpElements.className.indexOf('dim') !== -1) {
      fadeIn(tSharpElements);
     
    }
    else {
      dim(tSharpElements);
    }
  });
  tSharpLinks.addEventListener('mouseout', function(){
    if (tSharpElements.className.indexOf('dim') !== -1) {
      fadeIn(tSharpElements);
     
    }
    else {
      dim(tSharpElements);
    }
  });