<?php
  // Prikupi podatke iz forme
  $ime = $_POST['ime'];
  $prezime = $_POST['prezime'];
  $email = $_POST['email'];
  $lozinka = $_POST['lozinka'];

  // Validiraj podatke
  if (empty($ime)) {
    // Ime je obavezno polje
    $error = "Ime je obavezno polje.";
  } else if (empty($prezime)) {
    // Prezime je obavezno polje
    $error = "Prezime je obavezno polje.";
  } else if (empty($email)) {
    // Email je obavezno polje
    $error = "Email je obavezno polje.";
  } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // Email nije ispravan format
    $error = "Unesite ispravan email.";
  } else if (empty($lozinka)) {
    // Lozinka je obavezno polje
    $error = "Lozinka je obavezno polje.";
  } else {
    // Podaci su validirani, možemo ih spremiti u bazu podataka ili ih koristiti na neki drugi način
  }
?>
