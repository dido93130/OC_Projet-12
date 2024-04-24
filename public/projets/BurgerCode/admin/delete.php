<?php
   require 'database.php';
  
   if(!empty($_GET['id'])) {
       $id = checkInput($_GET['id']);
   }

   if(!empty($_POST)) {
       $id = checkInput($_POST['id']);
       $db = Database::connect();
       $statement = $db->prepare("DELETE FROM items WHERE id = ?");
       $statement->execute(array($id));
       Database::disconnect();
       header("location: index.php");
   }

   function checkInput($data) {
          $data = trim($data);
          $data = stripslashes($data);
          $data = htmlspecialchars($data);
          return $data;
      }
?>

<!DOCTYPE html>
<html>
<head>
	<title>Burger Code</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">        
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
	<link href='http://fonts.googleapis.com/css?family=Holtwood+One+SC' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css">
    <link rel="stylesheet" type="text/css" href="../css/styles.css">   
</head>
<body>
	<h1 class="text-logo"><span class="bi-shop"></span> Burger Code <span class="bi-shop"></span></h1>
	<div class="container admin">
		<div class="row">
          <h1><strong>Supprimer un item </strong></h1>
          <br>
          <form class="form" role="form" action="delete.php" method="post">
          <input type="hidden" name="id" value="<?php echo $id;?>">   <p class="alert alert-warning">Êtes-vous sûr de vouloir supprimer?</p>   
          <div class="form-actions">
          <button type="submit" class="btn btn-warning">Oui</button>    
          <a class="btn btn-outline-dark" href="index.php">Non</a>
          </div>
        </form>      
		</div>
	</div>
</body>
</html>