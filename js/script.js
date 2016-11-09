
function anadirLista(){
	//contenedor donde irá input y botón
	var contenedor = document.getElementById('contenedor');	
	var padre = document.getElementById('padre');	
	//creo input
	var inp = document.createElement('input');
	inp.setAttribute('type', 'text');
	inp.setAttribute('placeholder', 'Ingrese nombre de la lista');
	inp.setAttribute('id', 'inp')
	inp.classList.add('form-group', 'input-lista');
	//creo botón
	var boton = document.createElement('input');
	boton.setAttribute('type', 'button');
	boton.setAttribute('value', 'Guardar');
	boton.classList.add('btn', 'btn-primary');
    //envío input y botton a div contenedor
    padre.appendChild(inp);
    padre.appendChild(boton);
    //funcionalidad boton
    boton.addEventListener('click', function(){
    	var textoRescatado = document.getElementsByClassName('input-lista')[0].value;
    	document.getElementsByClassName('form-group', 'input-lista')[0].value = "";
		//validacion que textarea no este vacio
		if(textoRescatado == null || textoRescatado.length == 0){
			alert('¡Error ! Debe ingresar un nombre de lista');
			return false;
		}
		//contenedor donde irán las listas
		var cont = document.getElementById('contenedor');
		// creo elemento div 
		var columnas = document.createElement('div');
		//agrego clases de columnas al div creado
		columnas.classList.add('col-xs-12','col-md-3', 'col-sm-3', 'col-lg-3');
		//creo elemento nombre de la lista
		var textoT = document.createElement('p');
		//ingreso a variable el texto rescatado del input
		var areaTexto = document.createTextNode(textoRescatado);
		//agrego vinculo para la funcionalidad de añadir tarjeta
		var agregar = document.createElement('a');
		agregar.classList.add('vinculo');
		//le paso texto que se visualizará a vinculo 
		var newTxt = document.createTextNode('Añadir tarjeta');
		//botón guardar tarjeta agregada
		var guardarTarjeta = document.createElement('input');
		guardarTarjeta.setAttribute('type', 'button');
		guardarTarjeta.setAttribute('value', 'Guardar');
		guardarTarjeta.classList.add('btn', 'btn-success', 'btnTarjeta');		
		//hijos
		cont.appendChild(columnas); //paso las columnas al div contenedor de html
		columnas.appendChild(textoT); //paso el elemento p al div con columnas
		columnas.appendChild(agregar); //paso elemento a al div con columnas
		textoT.appendChild(areaTexto); //paso el texto rescatado a elemento p
		agregar.appendChild(newTxt) // le agrego texto al elemento a
		columnas.appendChild(guardarTarjeta);// paso boton guardar tarjeta al div con columnas
		//boton guardar tarjeta manda alert simulando guardado
		guardarTarjeta.addEventListener('click', function(){
			alert('Tarjeta guardada con éxito');
		})
		//funcionalidad vinculo añadir tarjeta
		agregar.addEventListener('click', function(){
			var areaDeTexto = document.createElement('textarea');
			areaDeTexto.setAttribute('placeholder' , 'Ingrese tarjeta...');
			areaDeTexto.classList.add('form-group', 'areaDeTxt');
			textoT.appendChild(areaDeTexto);
		})
	})
}


