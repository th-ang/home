const tSharpElements = document.getElementsByClassName('t-sharp-elements')[0];
const tSharpPorlifio = document.getElementsByClassName('a-porlifio')[0];
const tSharpBlog = document.getElementsByClassName('a-blog')[0];
const tSharpProjects = document.getElementsByClassName('a-projects')[0];
const tLinksArr = [tSharpBlog,tSharpPorlifio,tSharpProjects];
function fadeIn(el){
    el.classList.add('show');
    el.classList.remove('dim');  
  }
  
  function dim(el){
    el.classList.add('dim');
    el.classList.remove('show');
 
  }
 
for (let  i = 0; i< tLinksArr.length; i++) {
tLinksArr[i].addEventListener('mouseover',()=>{
  if (tSharpElements.className.indexOf('dim') !== -1) {
    tLinksArr.forEach(el=> {
      fadeIn(el);
    })
    fadeIn(tSharpElements);
  }
  else {tLinksArr.forEach(el=> {
    dim(el);
  })
  dim(tSharpElements);
  fadeIn(tLinksArr[i]);
}})
tLinksArr[i].addEventListener('mouseout', function(){
  if (tSharpElements.className.indexOf('dim') !== -1) {
    tLinksArr.forEach(el=> {
      fadeIn(el);
    });
    fadeIn(tSharpElements);
   
  }
  else {
    tLinksArr.forEach(el=> {
      dim(el);
    });
    dim(tSharpElements);
    fadeIn(tLinksArr[i]);
  }
});
}


