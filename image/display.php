<?php
include('dbcon.php');
$sql1="select * from tb1";

$data=mysqli_query($con,$sql1) or die(mysqli_error($con));
//print_r($data);
echo "<table border=1>";
while($array=mysqli_fetch_array($data,MYSQLI_BOTH))
{
echo "<tr>";
echo "<td>".$array['name']."</td>";
echo "<td>".$array['city']."</td>";
echo "<td>".$array['age']."</td>";
echo "<td>".$array['state']."</td>"; 
echo "</tr>";
}
echo "</table>";
?>