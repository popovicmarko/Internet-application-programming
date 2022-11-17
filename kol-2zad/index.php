<?php 

    if(isset($_POST['submit'])){
        $zbir = 0;
        $zbir+= $_POST['size'];
        $zbir+= $_POST['filling'];
        foreach($_POST['includes'] as $include) {
            $zbir+= $include;
        }

        echo "Treba da platite: $zbir";
    }

    else {
        echo "Greskaaaaaaaaaaaaa!!!!!";
    }
?>