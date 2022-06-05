const btnEl = document.querySelector('.btn');

btnEl.addEventListener('mouseover', (event) => {
  let y = event.pageY - btnEl.offsetTop;
  let x = event.pageX - btnEl.offsetLeft;

  btnEl.style.setProperty('--Xposition', x + 'px');
  btnEl.style.setProperty('--Yposition', y + 'px');
});
