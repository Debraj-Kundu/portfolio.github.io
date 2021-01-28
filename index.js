let btn = document.getElementById('menu');
let box = document.getElementById('pop-up');
let exit = document.getElementById('exit');
btn.onclick = () => {
  box.style.visibility = 'visible';
  box.style.opacity = 1;
};
exit.onclick = () => {
  box.style.visibility = 'hidden';
  box.style.opacity = 0;
}