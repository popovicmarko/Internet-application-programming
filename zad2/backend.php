<?php 
    if(isset($_POST['submit'])) {
        echo "Cao {$_POST['name']}, ti si iz {$_POST['drzava']}<br>";
        echo "<h1>Tvoj tip zena je {$_POST['tip']}"; 
    }
    else {
        echo "NIJE ISPRAVNO";
    }
    foreach($_POST['kanal'] as $kanal) {
        echo "$kanal <br>";
    }
?>