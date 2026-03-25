# Files

**Files** are the smallest data units in the system. Each file belongs to a dataset and represents a single piece of data, such as a sequence file, image, table, or model output in a specific format.


## Upload Files

Once your dataset has been successfully created in Data Catalog, you can start adding files or directories directly from the dataset's home page. The upload section is located on the **Files** tab and it supports multiple upload options for flexibility.


There are three options available:

* **`Drag & Drop`** files from your computer into the upload area

* Click **`Choose files`** to select individual files from your local storage

    **or**

* Click **`Choose directory`** to upload an entire folder (ideal for keeping related files together)

➤ Once uploaded, files will appear in the list with details such as **name**, and **upload date**, making it easy to keep track of its content.

```{note}
The system queues files upon upload, meaning they are uploaded sequentially rather than in parallel. Because of this, the total upload time depends almost entirely on the network upload speed during the transfer. For large uploads (5–10 GB up to 50 GB), avoid Wi‑Fi and use a **wired internet connection** for much faster and more stable upload speeds.
```

```{tip}
When uploading a **directory**, the folder structure is preserved for better organization.
```

----------------------------------

## Manage Files

You can perform basic actions on files or directories in the Data Catalog:

* **Download**: Click the <img src="../../_static/images/download.png" alt="open_icon" style="height:1.2em; vertical-align:text-bottom;"> icon to save a file locally and view its details.

* **Delete**: Click the <img src="../../_static/images/delete.png" alt="open_icon" style="height:1.2em; vertical-align:text-bottom;"> icon to remove files that are no longer needed.

* **Cancel Upload**: While a file is uploading, a **Cancel** button appears next to it. Click to stop and remove the in-progress upload in case you selected the wrong files.

**Please review files before deleting to avoid accidental data loss.*


<br/>

-------------------------------

<br/>

```{figure} ../../_static/images/files-updated2.gif
:alt: Uploading files
:width: 93%
:align: center

*Uploading files*
```
----------------------------

<br/>



```{warning}
Currently, deleting a file permanently removes it from the Data Catalog. However, files can still be **restored within 7 days** of deletion through the storage account. If you need to restore a file, please contact **Research Data Management** team at [rdm@bright.dtu.dk](mailto:rdm@bright.dtu.dk) or **Pasquale Domenico Colaianni** at [pasdom@dtu.dk](mailto:pasdom@dtu.dk). 

**Keep in mind that this behavior may change in future releases.*
```

