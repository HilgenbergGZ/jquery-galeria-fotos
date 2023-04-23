$(document).ready(function() {
    //O comando abaixo serve para selecionar o botão
    //É o mesmo que utilizar: document.querySelector("header button")
    $("header button").click(function(){
        $("form").slideDown()
    })

    $("#btnCancelar").click(function(){
        $("form").slideUp()
    })

    $("form").on("submit", function(e){
        e.preventDefault()
        const enderecoNovaImg = $("#novaImagem").val()
        const novaImagem = $(`<li style="display: none"></li>`)
        $(`<img src="${enderecoNovaImg}">`).appendTo(novaImagem)
        $(`
        <div class="over-lay-img-link">
            <a href="${enderecoNovaImg}" target= "_blank" tittle="Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>
        </div>`).appendTo(novaImagem)
        $(novaImagem).appendTo('ul')
        $(novaImagem).fadeIn(2000)
        $("#novaImagem").val("")
    })
})