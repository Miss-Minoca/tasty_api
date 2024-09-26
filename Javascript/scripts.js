// const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'a952039b0emsh189af28ccfbbda6p1428b3jsn47a9020d79d0',
// 		'x-rapidapi-host': 'tasty.p.rapidapi.com'
// 	}
// };

// const fetchRecipes = async () => {
// 	try {
// 		const response = await fetch(url, options);
// 		const result = await response.json();

// 		console.table(result.results);


// 	} catch (error) {
// 		console.error(error);
// 	}


// }



// document.addEventListener("DOMContentLoaded", fetchRecipes)


// const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';	
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'a952039b0emsh189af28ccfbbda6p1428b3jsn47a9020d79d0',
// 		'x-rapidapi-host': 'tasty.p.rapidapi.com'
// 	}
// };

// 	console.log(response)




async function fetchUrl() {


	const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';

	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': 'a952039b0emsh189af28ccfbbda6p1428b3jsn47a9020d79d0',
			'x-rapidapi-host': 'tasty.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		const responseContainer = document.querySelector('#recipes');
		// responseContainer.innerHTML = "";

		const recipe = result.results;
		console.log(recipe);

		for (const product of recipe) {
			const recipeDiv = document.createElement('div');

			const productImage = document.createElement('img');
			productImage.setAttribute('src', product.thumbnail_url);
			productImage.setAttribute('alt', product.thumbnail_url);
			productImage.classList.add('product-img')
			recipeDiv.appendChild(productImage)

			const productTitle = document.createElement('h2');
			productTitle.textContent = product.name;
			recipeDiv.appendChild(productTitle);

			const productDescription = document.createElement('p');
			productDescription.textContent = product.description;
			recipeDiv.appendChild(productDescription);

			document.querySelector('#recipes').appendChild(recipeDiv);
		}

	} catch (error) {
		console.error(error);
	}

}
fetchUrl()



