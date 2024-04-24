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
			<h1><strong>Liste des items </strong><a href="insert.php" class="btn btn-success btn-lg"><span class="bi bi-plus"></span>Ajouter</a></h1>
			<table class="table table-striped table-bordered">
				<thead>
					<tr>
						<th>Nom</th>
						<th>Description</th>
						<th>Prix</th>
						<th>Catégorie</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					<?php
                    require 'database.php';
                    $db = Database::connect();
                    $statement = $db->query('SELECT items.id, items.name, items.description, items.price, categories.name AS category FROM items LEFT JOIN categories On items.category = categories.id ORDER BY items.id DESC');
                    while($item = $statement->fetch()) {
                       echo '<tr>';
					   echo	'<td>' . $item['name'] . '</td>';
					   echo '<td>' . $item['description'] . '</td>';
					   echo '<td>' . number_format((float)$item['price'],2, '.', '') . '</td>';
					   echo	'<td>' . $item['category'] . '</td>';
					   echo	'<td width="300">';
					   echo	'<a class="btn btn-outline-dark btn-sm" href="view.php?id=' . $item['id'] . '"><span class="bi bi-eye-fill"></span>Voir</a>';
					   echo ' ';
					   echo '<a class="btn btn-primary btn-sm" href="update.php?id=' . $item['id'] . '"><span class="bi bi-pencil-fill"></span>Modifier</a>';
					   echo ' ';
					   echo	'<a class="btn btn-danger btn-sm" href="delete.php?id=' . $item['id'] . '"><span class="bi bi-x-lg"></span>Supprimer</a>';
					   echo '</td>';
					   echo '</tr>';   
                    }
                    Database::disconnect();


					?>
					
				</tbody>
			</table>

		</div>
	</div>
</body>
</html>