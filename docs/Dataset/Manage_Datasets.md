# Manage Datasets

Managing Datasets in the Data Catalog is similar to managing Projects: you can **edit** details of metadata or **archive** datasets when they are no longer needed. The steps are almost the same, but here we focus more on the dataset aspect.

➤ *Follow the steps below based on the action you want to perform.*


## Step 1: Locate your Dataset
Use the search bar in the ***top navigation*** to find your dataset.


## Step 2: Choose an Action
On the Dataset home page, click on the Metadata tab, where you will find two action buttons:

* Click **`Edit metadata`**, located ***on the top*** of the metadata section, to update dataset details 

    **or**

* Click **`Archive`**, always located on the ***top-right corner*** of the page, to archive the dataset



## Step 3: Confirm
➤ If you choose to **`Edit metadata`**: 

After making the necessary updates, click:
   * <span style="color:#00C48C">Save</span> to apply your changes 

       **or**

   * <span style="color:#FF4D4F">Cancel</span> to discard them


➤ If you choose to **`Archive`**: 

A confirmation box will appear asking you to confirm the action. 


<br/>

-------------------------------

<br/>

```{figure} ../../_static/images/manage-dataset.gif
:alt: Manage Datasets
:width: 93%
:align: center

*Manage Datasets*
```
----------------------------

<br/>



 
```{note} 

→ Archived datasets remain visible under the **Archived** section on the Dataset List page. You can open and view them, but they cannot be edited unless you first click the **`Restore`** button on the dataset home page.

→ They also appear under the **Datasets** tab on the project home page it is linked to. This is indicated by this <img src="../../_static/images/archived_icon.png" alt="open_icon" style="height:1.2em; vertical-align:text-bottom;"> icon displayed next to the dataset name. If you hover over the icon, a note appears explaining that the dataset is archived.<br/>

→ If you unlink the archived dataset from the project, it will only appear on the Dataset List page.

```


---------------------


## Manage Dataset User Permissions

Managing dataset user permissions works similarly to managing project user permissions, but with additional options specific to files and pipelines. You can add users and assign permissions through the **Permissions** tab on the dataset home page.

### How the Permissions Tab Works
The tab displays a table view with:

* **User column:** Lists all users who have access to the dataset
* **Permissions columns:** Show the available permissions:
    * **Can Edit Permissions:** Allows managing user access and permissions for the dataset
    * **Can Edit Metadata:** Allows editing dataset details
    * **Can Archive:** Allows Archiving the dataset
    * **Can List Files:** Allows viewing all files in the dataset
    * **Can Edit Files:** Allows uploading or deleting files in the dataset
    * **Can Download Files:** Allows downloading files
    * <span style="color:#999999"> **Can Run Pipelines:** Allows running analysis pipelines on the dataset's files (coming soon)</span>
* **Actions column:** Includes:
    * **Save Policy:** Saves changes when adding a new user
    * **Remove Policy:** Revokes a user's access to the dataset

### Adding or Removing Users

* To **add a new user**, click **`Add user policy`**, enter their details (first name and last name), select the permissions you want to grant, and click the <img src="../../_static/images/save_icon.png" alt="open_icon" style="height:1.2em; vertical-align:text-bottom;"> icon to save your user policy.

* To **remove a user policy**, click the <img src="../../_static/images/delete.png" alt="open_icon" style="height:1.2em; vertical-align:text-bottom;"> icon in the action column.



<br/>

-------------------------------

<br/>

```{figure} ../../_static/images/dataset-user-permissions.gif
:alt: Dataset Permissions
:width: 93%
:align: center

*Dataset Permissions*
```
----------------------------

<br/>

