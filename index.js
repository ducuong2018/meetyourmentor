console.log('after load');
const load = document.querySelector('#loading');
const wrap = document.querySelector('#wrap');


window.addEventListener('load',()=>{
  load.classList.remove('show');
  load.classList.add('hide');
  
  wrap.classList.add('show');
  wrap.classList.remove('hide');
})