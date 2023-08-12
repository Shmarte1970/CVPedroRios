var btnAbrirVideo = document.getElementById('btn-abrir-Video'),
	overlay = document.getElementById('overVideo'),
	popup = document.getElementById('popupVideo'),
	btnCerrarPopup = document.getElementById('btn-cerrar-Video');

btnAbrirVideo.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarVideo.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});