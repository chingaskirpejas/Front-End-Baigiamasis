
// Add item
addItem = document.querySelector('.add-circle');
if (addItem){
	addItem.addEventListener('click', evt => {
		window.location.href = '/Baigiamasis/shop/addItem/choose-type.html';
	});
}

// MENU POPUP

menu = document.querySelector('.menu');
btn = menu.querySelector('.nav-tgl');
list = document.querySelector('.list');
listBox = document.querySelector('.list-box');
snkrT = document.querySelector('#sneaker-title');
clsT = document.querySelector('#classic-title');
sbT = document.querySelector('#skateboarding-title');
sanT = document.querySelector('#sandals-title');
regT = document.querySelector('#register-title');
chooseT = document.querySelector('#choose-title');

btn.addEventListener('click', evt => {
  if (menu.className.indexOf('active') === -1) {
		menu.classList.add('active');
		listBox.style.display = "flex";
		list.style.display = 'flex';
		if (chooseT){
			chooseT.style.color = '#FFFFFF'
		}
		if (regT){
			regT.style.color = '#00FFF';
		}
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
			clsT.style.color = 'white';
		}
		window.onkeyup = function(event) {
			if (event.keyCode == 27) {	
				menu.classList.remove('active');
				listBox.style.display = 'none';
				list.style.display = 'none';
				if (chooseT){
					chooseT.style.color = 'black'
				}	
				if (regT){
					regT.style.color = 'white';
				}		
				if (snkrT){
					snkrT.style.color = 'white';
				}
				if (sanT){
					sanT.style.color = 'white';
				}
				if (sbT){
					sbT.style.color = 'white';
				}
				if (clsT){
					clsT.style.color = 'white';
				}
			}	
}
  } else {
		menu.classList.remove('active');
		listBox.style.display = 'none';
		list.style.display = 'none';
		if (chooseT){
			chooseT.style.color = 'black'
		}	
		if (regT){
			regT.style.color = 'white';
		}
		if (snkrT){
			snkrT.style.color = 'white';
		}
		if (sanT){
			sanT.style.color = 'white';
		}
		if (sbT){
			sbT.style.color = 'white';
		}
		if (clsT){
			clsT.style.color = 'white';
		}
  }

})
