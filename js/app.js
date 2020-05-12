const cotizador = new API('af69a77e819c061a473c678f693badbec59d907b353ad352433a68c7f5d30c0e');
const ui = new Interfaz();


// leer el formulario
const formulario = document.querySelector('#formulario');

// eventlistener
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // leer la moneda seleccionada
    const monedaSelect = document.querySelector('#moneda');
    const monedaSelecionada = monedaSelect.options[monedaSelect.selectedIndex].value;

    // leer la criptomoneda seleccionada
    const criptoMonedaSelect = document.querySelector('#criptomoneda');
    const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

    // comprobar que ambos campos tengan algo seleccionado
    if(monedaSelecionada === '' || criptoMonedaSeleccionada === '') {
        // arrojar una alerta de error
        ui.mostrarMensaje('Ambos Campos son Obligatorios', 'alert bg-danger text-center');
    } else {
        // todo bien, consultar la api
    }

});
