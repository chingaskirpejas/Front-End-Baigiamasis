menu = document.querySelector('.menu');
btn = menu.querySelector('.nav-tgl');
list = menu.querySelector('.list')
btn.addEventListener('click', evt => {
  if (menu.className.indexOf('active') === -1) {
		menu.classList.add('active');
		list.style.display = 'block';
  } else {
		menu.classList.remove('active');
		list.style.display = 'none';
  }

})