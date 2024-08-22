function cargarEncabezado(){
    fetch("/templates/pie-pagina-template.html")
    .then(response => response.text())
    .then(data => {document.getElementById('caja-piepagina-principal').innerHTML = data })
    .catch(error => alert("Error cargando el pie de página", error));
}
cargarEncabezado();