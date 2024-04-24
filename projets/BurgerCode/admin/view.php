<?php
      require 'database.php';
      
      if(!empty($_GET['id'])) {
          $id = checkInput($_GET['id']);
      }

       $db = Database::connect();
       $statement = $db->prepare('SELECT items.id, items.name, items.description, items.price, items.image, categories.name AS category FROM items LEFT JOIN categories On items.category = categories.id WHERE items.id = ?');
       $statement->execute(array($id));
       $item = $statement->fetch();
       Database::disconnect();

      
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
            <div class="col-sm-6">
              <h1><strong>Voir un item </strong></h1>
              <br>
                <form>
                    <div class="form-group">
                        <label>Nom:</label><?php echo ' ' . $item['name']; ?>
                    </div>
                    <div class="form-group">
                        <label>Description:</label><?php echo ' ' . $item['description']; ?>
                    </div>
                    <div class="form-group">
                        <label>Price:</label><?php echo ' ' . number_format((float)$item['price'],2, '.', '') . ' €'; ?>
                    </div>
                    <div class="form-group">
                        <label>Catégories:</label><?php echo ' ' . $item['category']; ?>
                    </div>
                    <div class="form-group">
                        <label>Image:</label><?php echo ' ' . $item['image']; ?>
                    </div>
                </form>
                <br>
                <div class="form-actions">
                  <a class="btn btn-primary" href="index.php"><span class="bi bi-arrow-left"></span>Retour</a>
                </div>
            </div>
            <div class="col-sm-6 site">
               <div class="img-thumbnail">
                                <img src="<?php echo '../images/' . $item['image'] ; ?>" alt="...">
                                <div class="price"><?php echo number_format((float)$item['price'],2, '.', ''). ' €'; ?></div>
                                <div class="caption">
                                    <h4><?php echo $item['name']; ?></h4>
                                    <p>><?php echo $item['description']; ?></p>
                                    <a href="#" class="btn btn-order" role="button"><span class="bi-cart-fill"></span> Commander</a>
                                </div> 
                           </div>
            </div>

		</div>
	</div>
</body>
</html>