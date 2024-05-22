$(document).ready(()=>{
    $("#btnInserir").click(()=>{
        $.ajax({
            url: "pagina.php",
            type: "POST",
            data: {
                acao: "inserir",
                nome: $("#nome").val()
            },
            success: (resultado) => {
                alert("Sucesso");
            }
        });
    });

    $("#btnMostrar").click(()=>{
        $.ajax({
            url: "pagina.php",
            type: "POST",
            data: {
                acao: "mostrar"
            },
            success: (resultado) => {
                $("#saida").html(resultado);
            }
        });
    });
});