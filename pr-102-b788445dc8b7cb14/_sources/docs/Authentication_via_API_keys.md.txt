# Authentication via API keys
The Data Catalog can be accessed either through the web interface or programmatically through the API. This page explains how to authenticate API requests using API keys.

1. Generate an API key in the Data Catalog.
2. When making API requests, use HTTP Basic Authentication. The API key is used as the username and the password is left empty.

Example of an authenticated API request using *curl*:
```{code-block}
MY_KEY="your-api-key"
curl -u $MY_KEY: http://localhost:5173/api/datasets
```

```{tip} 
The colon (:) separates the username and password.
Since no password is required, it is left empty.
```

## API Availability 
Throughout the rest of this user guide, you will find the **API Availability** sections at the end of each page, with links to the API endpoints that related to the actions described.
