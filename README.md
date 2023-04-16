# cloth management API

The Cloth Management API allows users to perform various operations related to managing clothes. This includes the ability to sign in, sign up, sign out, and perform CRUD operations for categories, products, and users.


## Authentication Endpoints

#### Sign Up

```http
  POST /api/signup
```
Creates a new user account.

Request Body
These Parameters are to be passed into `request.body`
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`  | `string` | **Required**  |
| `email`| `string` | **Required**  |
| `passward`      | `string` | **Required**  |

Response On success,
returns JSON data containing the new user's details:
```json

{
    "name": "test",
    "email": "test8@test.com",
    "id": "643ba176d7f77931f0091b57"
}

```

#### Sign In

```http
  POST /api/signin
```
This endpoint is used to authenticate a user and generate a JSON web token (JWT) for further API access.
These Parameters are to be passed into `request.body`

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`| `string` | **Required**  |
| `passward`      | `string` | **Required**  |

Response On success,
returns JSON data containing the new user's details:
```json

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNiYTE3NmQ3Zjc3OTMxZjAwOTFiNTciLCJpYXQiOjE2ODE2Mjk3OTV9.TBAmo26g5BVuIAFl78U2oHmF_HtD76E5-8LXaelqA08",
    "user": {
        "_id": "643ba176d7f77931f0091b57",
        "name": "test",
        "email": "test8@test.com",
        "role": "user"
    }
}
```

####Sign Out

```http
 GET /api/signout
```
Logs out the currently signed-in user.
Response On success,
returns JSON data containing the new user's details:
```json

{
    "message": "user signout sucsess."
}

```

## USER Endpoints

####GET user

```http
 GET api/user/:userId
```
This endpoint is used to retrieve user information. The :userId parameter must be replaced with the user's ID. Successful retrieval will result in a JSON response with the following fields:

```json

{
    "role": "admin",
    "purchases": [],
    "_id": "643a8b40fb35ac3a90e91a43",
    "name": "POSTsd",
    "email": "test6@test.com"
}
```

####PUT user

```http
 PUT api/user/:userId
```
This endpoint is used to update user information. The :userId parameter must be replaced with the user's ID. Here role is updated to admin

These Parameters are to be passed into `request.body`

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `role`| `string` | admin |


Successful update will result in a JSON response with the following fields:

```json

{
    "role": "admin",
    "purchases": [],
    "_id": "643ba176d7f77931f0091b57",
    "name": "test",
    "email": "test8@test.com",
    "createdAt": "2023-04-16T07:19:18.809Z",
    "updatedAt": "2023-04-16T07:35:00.104Z",
    "__v": 0
}
```
###DELETE user

```http
 DELETE api/user/:userId
```
This endpoint is used to delete a user. The :userId parameter must be replaced with the user's ID. No parameters Required.


Successful deletion will result in a JSON response with the following fields:

```json

{
    "message": "User deleted successfully",
    "deletedUser": {
        "role": "admin",
        "purchases": [],
        "_id": "643ba176d7f77931f0091b57",
        "name": "test",
        "email": "test8@test.com",
        "createdAt": "2023-04-16T07:19:18.809Z",
        "updatedAt": "2023-04-16T07:35:00.104Z",
        "__v": 0
    }
}
```



## Category Endpoints


#### CREATE Category

```http
  POST /api/category/create/:userId
```
This method is used to create a new category.

These Parameters are to be passed into `request.body`
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`  | `string` | **Required**  |
| `size`| `string` | **Required**  |
| `season`      | `string` | **Required**  |
| `gender`      | `string` | **Required**  |

Response On success,
returns JSON data containing the new Category's details:
```json

{
    "category": {
        "_id": "643ba7a2d7f77931f0091b63",
        "name": "Summer male",
        "size": "40",
        "season": "summer",
        "gender": "male",
        "createdAt": "2023-04-16T07:45:38.873Z",
        "updatedAt": "2023-04-16T07:45:38.873Z",
        "__v": 0
    }
}

```


#### GET Category

```http
  GET /api/category/:categoryId
```
This method is used to get a category by its ID.

Response On success,
returns JSON data containing the Category details:
```json

{
    "_id": "643ba7a2d7f77931f0091b63",
    "name": "Summer male",
    "size": "40",
    "season": "summer",
    "gender": "male",
    "createdAt": "2023-04-16T07:45:38.873Z",
    "updatedAt": "2023-04-16T07:45:38.873Z",
    "__v": 0
}

```



#### GET Categorise

```http
  GET /categories
```
This method is used to get all categories

Response On success,
returns JSON data containing the all categories:
```json

[
    {
        "_id": "643ad7e50d3907425ca779ca",
        "name": "cate1",
        "size": "40",
        "season": "summer",
        "gender": "male",
        "createdAt": "2023-04-15T16:59:17.460Z",
        "updatedAt": "2023-04-15T16:59:17.460Z",
        "__v": 0
    },
    {
        "_id": "643ad8ac0d3907425ca779ce",
        "name": "cate1",
        "size": "40",
        "season": "summer",
        "gender": "male",
        "createdAt": "2023-04-15T17:02:36.080Z",
        "updatedAt": "2023-04-15T17:02:36.080Z",
        "__v": 0
    },
    {
        "_id": "643add409b3b1626709dc625",
        "name": "cate2",
        "size": "40",
        "season": "summer",
        "gender": "male",
        "createdAt": "2023-04-15T17:22:08.315Z",
        "updatedAt": "2023-04-15T17:22:08.315Z",
        "__v": 0
    },
    {
        "_id": "643add4c9b3b1626709dc628",
        "name": "cate3",
        "size": "40",
        "season": "summer",
        "gender": "male",
        "createdAt": "2023-04-15T17:22:20.292Z",
        "updatedAt": "2023-04-15T17:22:20.292Z",
        "__v": 0
    },
    {
        "_id": "643ba7a2d7f77931f0091b63",
        "name": "Summer male",
        "size": "40",
        "season": "summer",
        "gender": "male",
        "createdAt": "2023-04-16T07:45:38.873Z",
        "updatedAt": "2023-04-16T07:45:38.873Z",
        "__v": 0
    }
]

```
#### UPDATE Category

```http
  PUT /api/category/:categoryId
```
This method is used to update an existing category.

These Parameters are to be passed into `request.body`

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`| `string` | Summer MALE |
| `size`| `string` | 40 |
| `season`| `string` | summer |
| `gneder`| `string` | MALE |


Response On success,
returns JSON data containing the updated Category details:
```json

{
    "_id": "643ba7a2d7f77931f0091b63",
    "name": "Summer MALE",
    "size": "40",
    "season": "summer",
    "gender": "male",
    "createdAt": "2023-04-16T07:45:38.873Z",
    "updatedAt": "2023-04-16T07:54:04.132Z",
    "__v": 0
}
```


#### DELETE Category

```http
  DELETE /api/category/:categoryId
```
This method is used to remove a category.


Response On success,
returns JSON data containing the deleted Category details:
```json

{
    "message": "Summer MALE is deleted"
}
```


## Product(Cloth) Endpoints


#### CREATE Product

```http
  POST /api/product/create/:userId
```
This method is used to create a new product in the database. It takes in the product details such as name, description, price, 
category, and stock as input parameters. It uses the formidable module to handle file uploads for product images.

These Parameters are to be passed into `request.body`
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`  | `string` | **Required**  |
| `description`| `string` | **Required**  |
| `category`      | `objectID` | **Required**  |
| `stock`      | `Number` | **Required**  |
| `photo`      | `buffer` | **Required**  |
| `price`      | `Number` | **Required**  |


Response On success,
returns JSON data containing new product:
```json
{
 "soldunit": 0,
    "_id": "643bb33d46d5cf2bd472d631",
    "name": "Cotton T-Shirt white 6",
    "description": "White comfortable and stylish t-shirt made of pure cotton.",
    "category": "643adcf0794c92400829926e",
    "stock": 55,
    "price": 24.5,
    "photo": {[]
            "contentType": "image/jpeg"
        }
    ],
    "createdAt": "2023-04-16T08:35:09.481Z",
    "updatedAt": "2023-04-16T08:35:09.481Z",
    "__v": 0
}

```

#### GET Product

```http
  GET /api/product/:productId
```
This method is used to get a product's details from the database by its ID. It uses the getProductById middleware function to find the product by its ID. 


Response On success, returns JSON data containing product with out photos:
```json
{
    "soldunit": 0,
    "_id": "643bb33d46d5cf2bd472d631",
    "name": "Cotton T-Shirt white 6",
    "description": "White comfortable and stylish t-shirt made of pure cotton.",
    "category": null,
    "stock": 55,
    "price": 24.5,
    "createdAt": "2023-04-16T08:35:09.481Z",
    "updatedAt": "2023-04-16T08:35:09.481Z",
    "__v": 0
}

```


#### GET Photo

```http
  GET /api/product/photo/:productId
```
This method is a middleware function used to send the product image to the client. It checks if the product image data is available in the req.product object. If the image data is available, it sets the content type header to the image content type and sends the image data to the client. If the image data is not available, the next middleware function is called.



#### DELETE Product

```http
  DELETE /api/product/:productId
```
This method is used to delete a product from the database by its ID. It uses the getProductById middleware function to find the product by its ID. Once the product is found, it is removed from the database. 


Response On success, returns JSON data containing Deletion message With deleted Product:
```json
{
    "message": "Deletion was successful",
    "deletedProduct": {
        "soldunit": 0,
        "_id": "643b75cf063c4423249e4dad",
        "name": "Cotton T-Shirt white",
        "description": "White comfortable and stylish t-shirt made of pure cotton.",
        "category": null,
        "stock": 55,
        "price": 24.5,
        "photo": [],
        "createdAt": "2023-04-16T04:13:03.260Z",
        "updatedAt": "2023-04-16T04:13:03.260Z",
        "__v": 0
    }
}
```

#### UPDATE Product

```http
  UPDATE /api/product/:productId
```
This method is used to update a product's details in the database by its ID. It uses the getProductById middleware function to find the product by its ID. Once the product is found, its details are updated with the new fields provided by the client.  


Response On success, returns JSON data containing Deletion message With deleted Product:
```json
{
"soldunit": 0,
    "_id": "643b9cffd7f77931f0091b54",
    "name": "Black shirt",
    "description": "White comfortable and stylish t-shirt made of pure cotton.",
    "category": null,
    "stock": 20,
    "price": 24.5,
    "photo": [
        {
            "_id": "643b9cffd7f77931f0091b55",
            "data": {
                "type": "Buffer",
                "data": []
             ]
            },
            "contentType": "image/png"
        }
    ],
    "createdAt": "2023-04-16T07:00:15.900Z",
    "updatedAt": "2023-04-16T09:07:40.022Z",
    "__v": 0
}

```



#### GET Unique categories

```http
  GET /api/products/categories
```
This method is used to get all unique categories of products from the database. It uses the distinct method to retrieve all unique categories of products from the database. 


Response On success, returns JSON data containing array of categories:
```json
{
[
    "643adcf0794c92400829926e"
]
}

```
