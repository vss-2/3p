function copiarSimples() {
      var inputCompleto = document.getElementById("campoInput");
      inputCompleto.select(); // Vai selecionar apenar o campo value
  
      //Descomente se não quiser editar o campo copiado
      //document.execCommand("copy");
  
      //Comente se não quiser editar o campo copiado
      copiarModificar(inputCompleto.value)
      //alert("Copiei o texto: " + copyText.value);
}

function copiarModificado(campoCopiado) {
      navigator.clipboard.writeText(campoCopiado+'. Fonte: http://cin.ufpe.br/vss-2/').then(function() {
        return
      });
}
