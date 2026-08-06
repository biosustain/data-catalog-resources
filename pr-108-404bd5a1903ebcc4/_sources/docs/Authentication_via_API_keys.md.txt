# Authentication via API keys
Data Catalog can be accessed programmatically via the API.

Steps:

1. Generate an API key in Data Catalog.
    - [**https://datacatalog.bright.dtu.dk/api-keys**](https://datacatalog.bright.dtu.dk/api-keys)
2. When making API requests, use HTTP Basic Authentication. The API key is used as the username and the password is left empty.

Example of an authenticated API request using *curl*:
```{code-block}
curl -u $MY_KEY: https://datacatalog.bright.dtu.dk/api/datasets
```

```{tip} 
The colon (:) separates the username and password.
Since no password is required, it is left empty.
It is important that the colon (:) is included.
```


Throughout the rest of this user guide, you will find the **API Availability** sections at the end of each page, with links to the API endpoints that related to the actions described.
