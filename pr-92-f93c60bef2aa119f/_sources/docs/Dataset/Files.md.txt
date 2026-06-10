# Files

**Files** are the smallest data units in the system. Each file belongs to a dataset and represents a single piece of data, such as a sequence file, image, table, or model output in a specific format.


## Standard Upload

Once your dataset has been successfully created in Data Catalog, you can start adding files or directories directly from the dataset's home page. The **standard upload** section is located on the **Files** tab and it supports multiple upload options for flexibility.


There are three options available:

* **`Drag & Drop`** files from your computer into the upload area

* Click **`Choose files`** to select individual files from your local storage

    **or**

* Click **`Choose directory`** to upload an entire folder (ideal for keeping related files together)

➤ Once uploaded, files will appear in the list with details such as **name**, and **upload date**, making it easy to keep track of its content.

```{note}
Files are queued on upload, meaning they transfer sequentially rather than in parallel. Total upload time depends entirely on your network's upload speed. For large transfers (5+ GB), use a **wired connection** instead of Wi-Fi to achieve faster and more stable uploads.
```

```{tip}
When uploading a **directory**, the folder structure is preserved for better organization.
```

## Advanced upload
If you have a lot of large data to upload, we recommend that you use the **advanced upload** option. This creates a temporary upload folder in the dataset's storage location, where you can upload your files using one of the following external tools:

* AzCopy
* Azure Storage Explorer

Let's see how to use each tool in more details:

### AzCopy
AzCopy is a command-line utility that allows you to transfer files and directories directly to the dataset's storage location.

Before you start, make sure you have AzCopy downloaded and saved on your computer. For more detailed installation instructions, see [**here**](https://learn.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10).

```{note}
The commands below use Windows-style paths. If you are on Mac, replace backslashes `"\"` with forward slashes `"/"` and adjust the path accordingly (e.g. `"/Users/YOUR_USERNAME/"` instead of `"C:\Users\YOUR_USERNAME\"`).
```

1. Open Command Prompt (Windows) or Terminal (Mac)
2. Navigate to where AzCopy is saved on your computer
3. Log in to AzCopy: 

```bash
azcopy login
```

A link and a code will appear. Open the link in your browser, enter the code, and sign in with your Microsoft account.

4. Request a URL from the Data Catalog
5. Upload files or folder using one of the following commands:

* **Specific files from the same folder:**

```{code-block}
azcopy copy "C:\Users\YOUR_USERNAME\Documents" "UPLOAD_URL" --include-pattern "file1.csv;file2.xlsx"
```

* **Entire folder:**

```{code-block}
azcopy copy "C:\Users\YOUR_USERNAME\Documents\my-data-folder" "UPLOAD_URL" --recursive
```

After the command finishes, AzCopy displays a summary. Make sure **Final Job Status: Completed** and the number of completed transfers matches your files.

6. Once the upload is complete, go back to the Data Catalog and click **`Finalize Upload`**. This will transfer the files back to the dataset and make them visible in the file list.


### Azure Storage Explorer
Azure Storage Explorer is a free desktop application by Microsoft. It is an alternative to AzCopy for users who prefer not to use the command line.
For more information on how to install see [**here**](https://learn.microsoft.com/en-us/azure/storage/storage-explorer/vs-azure-tools-storage-manage-with-storage-explorer?tabs=windows).

1. Request a URL from the Data Catalog
2. Open Azure Storage Explorer and log in with your Microsoft account
3. Click **`plug icon`** on the left side bar to open the Connect dialog
4. Select **`ADLS Gen2 container or directory`**
5. Select **`Sign in using OAuth`** and click `next`
6. Select your Azure account and click `next`
7. Optionally give the connection a display name and paste the upload URL provided from the  Data Catalog, then click `next`
8. Click **`Connect`**
9. Upload your files or folders to the temporary storage location. Check the **Activities** panel at the bottom to make sure all transfers completed successfully.
10. Go back to the Data Catalog and click **`Finalize Upload`** to move the files into the dataset and make them visible in the files list.

The screenshots below illustrate steps 3 to 9:

```{raw} html
<div id="carousel" style="text-align:center; max-width:700px; margin:20px auto;">
  <img id="carousel-img" src="../../_static/images/plug_in.png" style="width:100%; border-radius:6px; border:1px solid #ddd;">
  <p id="carousel-caption" style="color:#555; font-size:0.9em; margin-top:8px;">Step 2</p>
  <div style="margin-top:10px;">
    <button onclick="moveSlide(-1)" style="margin-right:10px; cursor:pointer;"><</button>
    <span id="carousel-counter" style="font-size:0.9em; color:#555;">1 / 7</span>
    <button onclick="moveSlide(1)" style="margin-left:10px; cursor:pointer;">></button>
  </div>
</div>

<script>
  const slides = [
    { src: "../../_static/images/plug_in.png", caption: "Step 3" },
    { src: "../../_static/images/ADLS.png", caption: "Step 4"},
    { src: "../../_static/images/OAuth.png", caption: "Step 5"},
    { src: "../../_static/images/account.png", caption: "Step 6"},
    { src: "../../_static/images/url.png", caption: "Step 7"},
    { src: "../../_static/images/connect.png", caption: "Step 8"},
    { src: "../../_static/images/transfer_files.png", caption: "Step 9"},
  ];
    let current = 0;
 function moveSlide(dir) {
    current = (current + dir + slides.length) % slides.length;
    document.getElementById('carousel-img').src = slides[current].src;
    document.getElementById('carousel-caption').textContent = slides[current].caption;
    document.getElementById('carousel-counter').textContent = (current + 1) + ' / ' + slides.length;
  }
</script>
```


----------------------------------

## Manage Files

You can perform basic actions on files or directories in the Data Catalog:

* **Move to**: Click the <img src="../../_static/images/move_to.png" alt="move_icon" style="height:1.2em; vertical-align:text-bottom;"> icon to move a file or folder to a different destination folder. You can move individual files between folders, or move an entire folder (along with its contents) into another folder.

* **Rename**: Click the <img src="../../_static/images/rename.png" alt="rename_icon" style="height:1.2em; vertical-align:text-bottom;"> icon to rename a file or folder.

* **Download**: Click the <img src="../../_static/images/download.png" alt="open_icon" style="height:1.2em; vertical-align:text-bottom;"> icon to save a file locally and view its details.

* **Delete**: Click the <img src="../../_static/images/delete.png" alt="open_icon" style="height:1.2em; vertical-align:text-bottom;"> icon to remove files that are no longer needed.

* **Cancel Upload**: While a file is uploading, a **Cancel** button appears next to it. Click to stop and remove the in-progress upload in case you selected the wrong files.

**Please review files before deleting to avoid accidental data loss.*


<br/>

-------------------------------

<br/>

```{raw} html
<div style="text-align: center;">
  <video width="93%" controls autoplay loop muted playsinline>
    <source src="../../_static/images/manage_files_updated.mp4" type="video/mp4">
  </video>
  <p><em>Manage files</em></p>
</div>
```
----------------------------

<br/>



```{warning}
Currently, deleting a file permanently removes it from the Data Catalog. However, files can still be **restored within 7 days** of deletion through the storage account. If you need to restore a file, please contact **Research Data Management** team at [rdm@bright.dtu.dk](mailto:rdm@bright.dtu.dk) or **Pasquale Domenico Colaianni** at [pasdom@dtu.dk](mailto:pasdom@dtu.dk). 

**Keep in mind that this behavior may change in future releases.*
```

