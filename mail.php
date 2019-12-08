<?php
$name = $_POST['clientName'];
$email = $_POST['clientEmail'];
$message = $_POST['clientMessage'];
$formcontent="From: $name ($email) \n Message: $message";
$recipient = "sagemini17@gmail.com";
$subject = "Contact request";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>