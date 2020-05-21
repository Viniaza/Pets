<?php 
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "trote_banco";
    $conn = new mysqli($servername, $username, $password, $dbname);

    $usuario = filter_input(INPUT_POST, 'user', FILTER_SANITIZE_STRING);
    $senha = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING);

    $sql = "INSERT INTO usuario (nome_usuario, senha_usuario) VALUES ('$usuario', '$senha')";
    if ($conn->query($sql) === TRUE) {
        header("Location:https://estudante.sesisenai.org.br/login")
    }else{
        echo "Não inserido";
    }
    
?>