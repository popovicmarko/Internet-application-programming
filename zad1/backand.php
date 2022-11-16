<?php
    if(isset($_POST["submit"])){
        echo "{$_POST["name"]}";
        $zbir= 0;
        foreach($_POST["smart"] as $cicovi){
           $zbir+=$cicovi;
        }
        echo "Vasa ukupna cena je $zbir";
    } else {
        echo "Cuje se a  ne radii!!";
    }
?>