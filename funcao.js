$(document).ready(() => {
    $("#btnInserir").click(() => {
        $.ajax({
            url: "pagina.php",
            type: "POST",
            data: {
                acao: "inserir",
                nome: $("#nome").val()
            },
            success: () => {
                $("#nome").val('');
            }
        });
        $.ajax({
            url: "pagina.php",
            type: "POST",
            data: {
                acao: "mostrar"
            },
            success: (resultado) => {
                let nomes = JSON.parse(resultado);
                let lista = "<ol class='list-group'>";
                for (let i = 0; i < nomes.length; i++) {
                    lista += "<li class='list-group-item'>" + nomes[i] + "</li>";
                }
                lista += "</ol>";
                $("#saida").html(lista);
            }
        });
    });

    $("#btnMostrar").click(() => {
        $.ajax({
            url: "pagina.php",
            type: "POST",
            data: {
                acao: "mostrar"
            },
            success: (resultado) => {
                let nomes = JSON.parse(resultado);
                let lista = "<ol class='list-group'>";
                for (let i = 0; i < nomes.length; i++) {
                    lista += "<li class='list-group-item'>" + nomes[i] + "</li>";
                }
                lista += "</ol>";
                $("#saida").html(lista);
            }
        });
    });
});
