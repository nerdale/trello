
function anadirLista(){
	//contenedor donde irá input y botón
	var contenedor = document.getElementById('contenedor');	
	var formulario = document.createElement('form');
	formulario.setAttribute('id', 'formu');
	
	//creo input
	var inp = document.createElement('input');
	inp.setAttribute('type', 'text');
	inp.setAttribute('placeholder', 'Ingrese nombre de la lista');
	inp.classList.add('form-group');
	inp.value;
	//creo botón
	var boton = document.createElement('input');
	boton.setAttribute('type', 'button');
	boton.setAttribute('value', 'Guardar');
	boton.classList.add('btn', 'btn-primary');
    //envío input y botton a div contenedor
    formulario.appendChild(inp);
    formulario.appendChild(boton);
    contenedor.appendChild(formulario);

    //limpio input al hacer click en guardar
    boton.addEventListener('click', function(){
		formulario.reset();
	})

}
