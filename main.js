onload = () => {
        document.body.classList.remove("container");
};

document.getElementById("mostrarTexto").addEventListener("click", function () {
        var cuadro = document.getElementById("cuadroTexto");
        var textoElemento = document.getElementById("texto");
        var textoCompleto = textoElemento.innerText;
        textoElemento.innerText = ""; // Borra el texto original
        cuadro.classList.remove("hidden");

        let i = 0;
        function escribirTexto() {
                if (i < textoCompleto.length) {
                        textoElemento.innerText += textoCompleto[i];
                        i++;
                        setTimeout(escribirTexto, 50); // Velocidad de escritura (50ms)
                }
        }

        setTimeout(() => {
                cuadro.classList.add("show");
                escribirTexto(); // Iniciar el efecto de tipeo
        }, 10);
});
