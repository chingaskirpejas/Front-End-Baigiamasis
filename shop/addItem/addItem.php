<?php

	//CREATING SNEAKER
	if (isset($_POST['sneakersName'])){
		$productsFromJson = file_get_contents('sneakers.json');
		$productsArray = json_decode($productsFromJson, true);

	    $sneakersProductName = $_POST['sneakersName'];
		$sneakersProductDescription = $_POST['sneakersDescription'];
		$sneakersProductImage = $_POST['sneakersImg'];

		$sneaker = [
			'name' => $sneakersProductName,
			'description' => $sneakersProductDescription,
			'image' => $sneakersProductImage
		];

		$productsArray = $productsArray['sneakers'];

		array_push($productsArray, $sneaker);

		$finalArray['sneakers'] = $productsArray;
		$productToJson = json_encode($finalArray);

		// PUTTING PRODUCT INTO JSON FILE

		file_put_contents('sneakers.json', $productToJson);

		header('Location: choose-type.html');
	}

	//CREATING SANDAL
	if (isset($_POST['sandalsName'])){
		$productsFromJson = file_get_contents('sandals.json');
		$productsArray = json_decode($productsFromJson, true);

		$sandalsProductName = $_POST['sandalsName'];
		$sandalsProductDescription = $_POST['sandalsDescription'];
		$sandalsProductImage = $_POST['sandalsImg'];

		$sandal = [
			'name' => $sandalsProductName,
			'description' => $sandalsProductDescription,
			'image' => $sandalsProductImage
		];

		$productsArray = $productsArray['sandals'];

		array_push($productsArray, $sandal);

		$finalArray['sandals'] = $productsArray;
		$productToJson = json_encode($finalArray);

		// PUTTING PRODUCT INTO JSON FILE

		file_put_contents('sandals.json', $productToJson);

		header('Location: choose-type.html');

	}
	
	// CREATING SKATESHOE
	if (isset($_POST['skateboardingName'])){
		$productsFromJson = file_get_contents('skate.json');
		$productsArray = json_decode($productsFromJson, true);

		$sbProductName = $_POST['skateboardingName'];
		$sbProductDescription = $_POST['skateboardingDescription'];
		$sbProductImage = $_POST['skateboardingImg'];

		$sb = [
			'name' => $sbProductName,
			'description' => $sbProductDescription,
			'image' => $sbProductImage
		];

		$productsArray = $productsArray['skate'];

		array_push($productsArray, $sb);

		$finalArray['skate'] = $productsArray;
		$productToJson = json_encode($finalArray);

		// PUTTING PRODUCT INTO JSON FILE

		file_put_contents('skate.json', $productToJson);

		header('Location: choose-type.html');

	}
	
	// CREATING CLASSIC SHOE
	if (isset($_POST['classicName'])){
		$productsFromJson = file_get_contents('classic.json');
		$productsArray = json_decode($productsFromJson, true);

		$classicProductName = $_POST['classicName'];
		$classicProductDescription = $_POST['classicDescription'];
		$classicProductImage = $_POST['classicImg'];

		$classic = [
			'name' => $classicProductName,
			'description' => $classicProductDescription,
			'image' => $classicProductImage
		];

		$productsArray = $productsArray['classic'];
		
		array_push($productsArray, $classic);

		$finalArray['classic'] = $productsArray;
		$productToJson = json_encode($finalArray);

		// PUTTING PRODUCT INTO JSON FILE

		file_put_contents('classic.json', $productToJson);

		header('Location: choose-type.html');
		
	}
