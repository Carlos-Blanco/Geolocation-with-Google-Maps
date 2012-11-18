function localizar(){
	navigator.geolocation.getCurrentPosition(datos,error);
	}
	function datos(pos){
		contenedor = document.getElementById("map");
		latitud = pos.coords.latitude;
		longitud = pos.coords.longitude;
		accuracy = pos.coords.accuracy;
		altitude = pos.coords.altitude;
		centro = new google.maps.LatLng(latitud,longitud);
		propiedades = {
			center: centro,
			draggable: true,
			KeyBoardShortcuts: true,
			mapTypeControl: true,
			mapTypeId: google.maps.MapTypeId.HYBRID,
			navigationControl: true,
			scrollwheel: true,
			streetViewControl: true,
			zoom: 15
		};
		var map = new google.maps.Map(contenedor,propiedades);
	
  	}
	function error(error){
		alert("No ha sido posible obtener los datos de posición");
	}


function position(){
	$('#texto').text("Te encuentras en la coordenadas: " + centro);
}

function precision(){
	$('#texto').text("Con una precision de : " + accuracy + " metros.");
}

function altitud(){
	if (altitude == null || altitude == 0){
		$('#texto').text("No es posible localizar tu altitud");
	} else {
		$('#texto').text("Te encuentras a: " + altitude + " metros.");
}
}

function guardarPosicion(){
	localStorage.setItem('casa', centro );
}
function mostrarPosicion(){
	home = localStorage.getItem('casa');
	$('#texto').text('La posicion de tu casa es: ' + home);
	var map = new google.maps.Map(contenedor,propiedades);
	var marker = new google.maps.Marker({
			position: centro,
			map: map,
			title:"Aqui esta tu casa!!"
  		});
} 
