menu = document.querySelector('.menu');
btn = menu.querySelector('.nav-tgl');
list = document.querySelector('.list');
listBox = document.querySelector('.list-box');
snkrT = document.querySelector('#sneaker-title');
clsT = document.querySelector('#classic-title');
sbT = document.querySelector('#skateboarding-title');
sanT = document.querySelector('#sandals-title');
btn.addEventListener('click', evt => {
  if (menu.className.indexOf('active') === -1) {
		menu.classList.add('active');
		listBox.style.display = "flex";
		list.style.display = 'flex';
		if (snkrT){
			snkrT.style.color = '#f91866';
		}
		if (sanT){
			sanT.style.color = '#178876';
		}
		if (sbT){
			sbT.style.color = '#f8c537';
		}
		if (clsT){
			clsT.style.color = '#b7b7b7';
		}
		window.onkeyup = function(event) {
			if (event.keyCode == 27) {	
				menu.classList.remove('active');
				listBox.style.display = 'none';
				list.style.display = 'none';
				if (snkrT){
					snkrT.style.color = 'black';
				}
				if (sanT){
					sanT.style.color = 'black';
				}
				if (sbT){
					sbT.style.color = 'black';
				}
				if (clsT){
					clsT.style.color = 'black';
				}
			}
		
		
}
  } else {
		menu.classList.remove('active');
		listBox.style.display = 'none';
		list.style.display = 'none';
		if (snkrT){
			snkrT.style.color = 'black';
		}
		if (sanT){
			sanT.style.color = 'black';
		}
		if (sbT){
			sbT.style.color = 'black';
		}
		if (clsT){
			clsT.style.color = 'black';
		}
  }

})
