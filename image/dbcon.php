<?php
//date_default_timezone_set('Asia/Kolkata');
$con=mysqli_connect("localhost","sammy","Sakshi#@417","sakshidb");
if(!$con)
{
die ('Could not connect:'.mysqli_error($con));
}
//else
//echo "DB connect";
?>