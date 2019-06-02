<?php
	$newProductName = $_POST['productName'];
	$newProductDescription = $_POST['productDescription'];
	$newProductImage = $_POST['productImage'];

	$newProduct = [
		'name' => $newProductName,
		'description' => $newProductDescription,
		'image' => $newProductImage
	];

	$productsFromJson = file_get_contents('ddd.json');
	$productsArray = json_decode($productsFromJson, true);
	$productsArray = $productsArray['products'];
	
	array_push($productsArray, $newProduct);

	$finalArray['products'] = $productsArray;
	$productToJson = json_encode($finalArray);

	file_put_contents('ddd.json', $productToJson);

	header('Location: productsList.phtml');

