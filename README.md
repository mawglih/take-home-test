# Coding Challenge: Shopping Cart

## Overview

Build an application, using the framework of your choice (excluding jQuery), that implements a product gallery and a shopping cart. The application must exist as a single page application, that is, served from a single HTML file and handle its own routing.

The “home” page is the product listing. The product detail page URL should have the format `/product/{id}` , where `id` is the product ID (see API response below). Finally, the shopping cart page URL should be `/cart` .

## API

The coding challenge comes with an API to help you build your app. It is written in Node.js. To get it up and running, you need to install the latest version of Node (at the time of writing, tested with v9.3.0).

Once you have Node installed, run the following commands in your terminal:

```bash
npm install
node index.js
```

You should see a message like this:

```
Shopping Cart API app listening on port 3001!
```

You can now access the API from this URL: `http://locahost:3001/`. The API includes two routes:

### `/get-items`

This route accepts no parameters, is a `GET` request, and returns a list of all the items available in the store. The response has the following format:

```JSON
[
	{
		"id": "25243",
		"title": "Product Name",
		"description": "Some text here to describe the product in detail.",
		"thumbnail": "http://example.com/25243/thumb.jpg",
		"price": 99.99,
		"inStock": true,
		"images": [
			"http://example.com/25243/product-1.jpg",
			"http://example.com/25243/product-2.jpg",
			"http://example.com/25243/product-3.jpg",
		],
		"reviews": [
			{
				"title": "Foobar",
				"body": "Review text goes here.",
				"author": "Some Person",
				"rating": 3,
			},
			{
				"title": "Bazqux",
				"body": "Review text goes here.",
				"author": "Another Person",
				"rating": 5,
			}
		],
		"tags": [
			"Foo",
			"Bar",
			"Baz"
		]
	}
]
```

### `/checkout`

The checkout route is a `POST` and accepts a JSON payload of the following shape:

```JSON
{
	"items": [
		{ "id": "25243", "quantity": 3 },
		{ "id": "32453", "quantity": 1 }
	]
}
```

If the request is successful, you will receive a `200` response back. If not, it will come back as a `400`.

#### Success

```JSON
{
	"status": "success",
	"message": "Your order was placed successfully",
}
```

#### Error

```JSON
{
	"status": "error",
	"error": "Invalid request."
}
```

## Criteria
## Level 1 - you are Mid level developer

The application consists of three main areas:

### Product Listing

The product listing area consists of products that the store offers. Each item must contain:

- Title
- Thumbnail Image
- Price
- Quantity to purchase
- “Add to Cart” button



### Product Detail

The product detail page displays the information of single product. It should include:

- Title
- Price
- Image(s)
- In stock status (In stock/Out of stock)
- Description
- Quantity to purchase
- “Add to Cart” button
- Reviews (out of 5)



### Shopping Cart

The shopping cart lists all of the items the user wishes to purchase. Each item in the list shows:

- Title
- Quantity (with the ability to adjust)
- Price
- "Remove” button
- Submit button not required

Very basic CSS will be helpful

## Level 2 - you are senior developer
Add the following

1. Add top navbar with Shopping cart displaying total price and number of items inside
2. Add code to cart page that says that cart is empty when it is empty and back button to main page
3. Make it responsive - product listing - for big screen several items per row, for phones - item per row (be creative)
4. For cart page - Submit button that submits cart to the server, clears the cart and displays message - you order is submitted (see '/checkuot' route above)

## Level 3 - you are an expert
Add the following perks
1. Do not use CSS - use SASS, LESS. Use modules (required)
2. Each item includes an array of tags that categorize this product. Display these tags as clickable items on the Product detail page, that when clicked, load the product listing page filtered for only items containing that tag.
3. In addition to the list, there should be a running sub-total of the entire purchase, including a breakdown of the tax (assume NY state tax rate of 8.875%), shipping (assume fixed rate of $9.99), and a grand total. Changes to the items in the cart should immediately be reflected in the price breakdown.
4. In shopping cart it should be + and - buttons to increase/decrease quantity of product. It should be remove button for each product and clear shopping cart button.
5. Create a sliding side bar with routes: Home, Cart. Display it on the phone only.
6. Make sure aplication works fine on all display sizes - have at least 3 break points.

## Evaluation

Your solution will be evaluated on completeness, code clarity, and design. Store management is very important. Selection the way to manage the store will be evaluated separetely. 

_Happy Hacking_
