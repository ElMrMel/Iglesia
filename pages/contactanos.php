<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Submit Send Email</title>
    <link rel="stylesheet" href="/src/styles.css">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&display=swap" rel="stylesheet">
<script src="https://kit.fontawesome.com/a076d05399.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
</head>
<html>
    <body>

<?php
    if(!empty($_POST["send"])){
        $nombre = $_POST["nombre"];
        $correo = $_POST["correo"];
        $telefono = $_POST["telefono"];
        $mensaje = $_POST["mensaje"];
        $toEmail = "razielmelendrez@hotmail.com";

        $mailHeaders = "nombre: " . $nombre . 
        "\r\n correo: " . $correo . 
        "\r\n telefono: " . $telefono . 
        "\r\n mensaje: " . $mensaje . "\r\n"; 
        
        if(mail($toEmail, $nombre, $mailHeaders)){
            $message = "Se a enviado su informacion con exito.
        }
    }
    ?>

<my-nav></my-nav>
        <?php if (!empty($message)){ ?>
            
                <strong><?php echo $message; ?></strong>
            </div>
        <?php } ?>
    </form>   
    </div>

<my-footer></my-footer>        
    </body>

    </html>