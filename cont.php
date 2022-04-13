<?php
$servername = "cp-in-20";
$username = "manasuhc_manas_client";
$password = "manas@2022";
$dbname = "manasuhc_manas_contact";
  
// Create connection
$conn = new mysqli($servername, 
    $username, $password, $dbname);
  
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " 
        . $conn->connect_error);
}
  
$name =  $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$sql ="INSERT INTO `contact_form` (`name`, `email`, `message`) VALUES ('$name', '$email', '$message')";
  
if ($conn->query($sql) === TRUE) {
    echo "DONE";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
} 
?>