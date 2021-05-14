<?php
    $nombre = $_POST['nombre'];
 

    $contenido = "Nombre: " . $nombre;
    
    $destinatario = 'dalopezm11@gmail.com'; 
    //Correo al que se envia el correo
    $asuntoCliente = "Formulario de contacto de" . $nombre;
    
    mail($destinatario, $asuntoCliente, $contenido);
    header("Location:registro.html");
    //echo "<script> setTimeout(\"'\",1000)</script>";
?>