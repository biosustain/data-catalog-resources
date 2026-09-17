# Q&A

<details>
<summary><strong>What is the difference between "Data Lake" and "Data Catalog"?</strong></summary>

The **Data Lake** is where your files are stored. **Data Catalog** is the web app you work in, and the gateway to that storage.

Data Catalog does not store your files itself. It works with two storage locations:

* A **metadata database**, holding the information about your data — your projects, datasets, and files, with their descriptions, permissions, and relationships.
* The **Azure Data Lake**, holding the files themselves.

Each file entry in Data Catalog points to the matching file in the Data Lake. So when you open a dataset, the metadata you see comes from the database, while the file you download comes from the Data Lake.

This is also why the Advanced upload uses AzCopy or Azure Storage Explorer: those tools write your files straight to the Data Lake, and `Finalize upload` tells Data Catalog to register them.

</details>