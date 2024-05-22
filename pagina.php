<?php
    session_start();
    $acao = $_POST["acao"];
    if($acao == "inserir"){
        if(!isset($_SESSION["nomes"])){
            $_SESSION["nomes"] = Array();
        }
        $_SESSION["nomes"][] = $_POST["nome"];
    } else if ($acao == "mostrar"){
        var_dump($_SESSION["nomes"]);
    }