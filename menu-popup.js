menu = document.querySelector('.menu');
btn = menu.querySelector('.nav-tgl');
list = document.querySelector('.list')
listBox = document.querySelector('.list-box')
btn.addEventListener('click', evt => {
  if (menu.className.indexOf('active') === -1) {
		menu.classList.add('active');
  } else {
		menu.classList.remove('active');
  }

})