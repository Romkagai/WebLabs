function showLeft(){
	const cat = document.querySelector('.cat_box');
    const dog = document.querySelector('.dog_box');
	const cat_picture = document.querySelector('.cat_picture');
	const dog_picture = document.querySelector('.dog_picture');
	cat.style.zIndex = '20';
    cat.style.width = '850px';

	cat_picture.style.marginLeft = '25px';
	cat_picture.style.width = '600px';

    dog_picture.style.width = '410px';

	dog.style.width = '850px';
    dog.style.left = '50px';
}

function showBoth(){
	const cat = document.querySelector('.cat_box');
    const dog = document.querySelector('.dog_box');
	const cat_picture = document.querySelector('.cat_picture');
	const dog_picture = document.querySelector('.dog_picture');
	cat.style.width = '450px';

	dog.style.width = '450px';
	dog.style.left = '450px';

	cat_picture.style.width = '400px';
    cat_picture.style.marginLeft = '25px';

	dog_picture.style.width = '400px';
    dog_picture.style.marginLeft = '25px';
}

function showRight(){
	const cat = document.querySelector('.cat_box');
    const dog = document.querySelector('.dog_box');
	const cat_picture = document.querySelector('.cat_picture');
	const dog_picture = document.querySelector('.dog_picture');

	cat.style.zIndex = '0';
	cat_picture.style.marginLeft = '50px';
	dog.style.width = '850px';
    dog.style.left = '50px';
	dog_picture.style.width = '600px';
}
