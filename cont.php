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
  
$name =  $_POST['name-2'];
$email = $_POST['email-2'];
$message = $_POST['field-2'];

$sql ="INSERT INTO `contact_form` (`name`, `email`, `message`) VALUES ('$name', '$email', '$message')";
  
if ($conn->query($sql) === TRUE) {
    echo "record inserted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
} 
?>