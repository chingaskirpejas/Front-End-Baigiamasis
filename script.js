slideImages = document.querySelectorAll('.slide');
arrowRight = document.querySelector('#arrow-right');
arrowLeft = document.querySelector('#arrow-left');
slide1 = document.querySelector('.slide1');
slide2 = document.querySelector('.slide2');
slide3 = document.querySelector('.slide3'); 

current = 0;
//BANNER ROTATION
bannerTimer  = 400

// clear all images
function reset(){
	for (let i = 0; i < slideImages.length; i++) {
		slideImages[i].style.display = 'none';
	}
}

function startSlide(){
	reset();
	slideImages[0].style.display = 'block';

}

//Show previous
function slideLeft(){
	reset()
	slideImages[current - 1].style.display = 'block';
	current--;
}

//Show next
function slideRight(){
	reset();
	slideImages[current + 1].style.display = 'block';
	current++;
}

//Right arrow click
arrowRight.addEventListener('click', function(){
	if(current == slideImages.length - 1){
		current = -1;
	}
	slideRight();
});


//Left arrow click
arrowLeft.addEventListener('click', function(){
	if(current === 0){
		current = slideImages.length;
	}
	slideLeft();
});

startSlide();