<?php
$conn = mysqli_connect('localhost', 'root','webDev@12','backup_sql');
$table_name = "backup_sql";
   $backup_file  = "/tmp/db_backup.sql";
   $sql = "SELECT * INTO OUTFILE '$backup_file' FROM $table_name";
   
   
   if(! $sql ) {
      die('Could not take data backup: ' . mysql_error());
   }
   $backup_file = "dwnl";
   if(file_exists($backup_file))
   {
   header('Content-Description: File Transfer');
   header('Content-Type: application/octet-stream');
   header('Content-Disposition: attachment; filename='.basename($backup_file));
   header('Content-Transfer-Encoding: binary');
   header('Expires: 0');
   header('Cache-Control: must-revalidate');
   header('Pragma: public');
   header('Content-Length: ' . filesize($backup_file));
   $fp = fopen("backup.sql", "r");
   ob_clean();
   flush();
   readfile($backup_file);                                                                                                                                                                                                                                                                                                                                                                                                   
   exit;
   }
   if ($handle = opendir('backup.sql')) {
      while (false !== ($entry = readdir($handle))) {
          if ($entry != "." && $entry != "..") {
              echo "<a href='backup.sql'?file=".$entry."'>".$entry."</a>\n";
          }
      }
      closedir($handle);
  }
  
   
   echo "Backedup  data successfully\n";
   
   

?>