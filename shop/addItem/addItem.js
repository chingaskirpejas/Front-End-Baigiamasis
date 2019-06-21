
sneakers = document.querySelector('#select-sneakers');
sandals = document.querySelector('#select-sandals');
sb = document.querySelector('#select-sb');
classic = document.querySelector('#select-classic');
topbar = document.querySelector('.window-topbar');
center = document.querySelector('.window-center');
typeTitle = document.querySelector('#type-title');
nameInput =  document.querySelector('#pName-in');
descriptInput = document.querySelector('#pDesc-in');
addImg = document.querySelector('#pImg-in');

sneakers.addEventListener('click', evt => {
	topbar.style.background = '#771d3d';
	center.style.background = '#af2456';
	nameInput.setAttribute('name', 'sneakersName');
	descriptInput.setAttribute('name', 'sneakersDescription');
	addImg.setAttribute('name', 'sneakersImg');
});
sandals.addEventListener('click', evt => {
	topbar.style.background = '#0e594d';
	center.style.background = 'rgba(23, 136, 118)';
	typeTitle.textContent ='Sandals';
	nameInput.setAttribute('name', 'sandalsName');
	descriptInput.setAttribute('name', 'sandalsDescription');
	addImg.setAttribute('name', 'sandalsImg');
});
sb.addEventListener('click', evt => {
	topbar.style.background = '#c19a2c';
	center.style.background = 'rgba(248, 197, 55)';
	typeTitle.textContent ='Skateboarding';
	nameInput.setAttribute('name', 'skateboardingName');
	descriptInput.setAttribute('name', 'skateboardingDescription');
	addImg.setAttribute('name', 'skateboardingImg');
});
classic.addEventListener('click', evt => {
	topbar.style.background = 'rgb(51,51,51)';
	center.style.background = 'rgb(136,136,136)';
	typeTitle.textContent ='Classic';
	nameInput.setAttribute('name', 'classicName');
	descriptInput.setAttribute('name', 'classicDescription');
	addImg.setAttribute('name', 'classicImg');
});

selectBox = document.querySelector('.select-type');
select = document.querySelectorAll('.select');
windowContainer = document.querySelector('.window-cont');
chooseT = document.querySelector('#choose-title');

for (var i = 0; i < select.length; i++) {
    select[i].addEventListener('click', evt =>{
    	if (selectBox.className.indexOf('active') === -1) {
			selectBox.classList.add('active');
			windowContainer.style.display = 'flex';
			chooseT.style.color = '#ffffff';
			window.onkeyup = function(event) {
				if (event.keyCode == 27) {	
					selectBox.classList.remove('active');
					windowContainer.style.display = 'none';
					chooseT.style.color = 'black';
				}
			}
		}
		else {
			selectBox.classList.remove('active');
			windowContainer.style.display = 'none';
			chooseT.style.color = 'black';
  		}
    });
}

close = document.querySelector('.uzdarymas');

close.addEventListener('click', evt =>{
	selectBox.classList.remove('active');
	windowContainer.style.display = 'none';
	chooseT.style.color = 'black';
})
// select.addEventListener('click', evt =>{
// 	alert('sudai');
// // 	
// });