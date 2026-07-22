# Exploring Dataset

The **Datasets** section in the Data Catalog can help you organize and manage research data efficiently. Its structure is similar to the Projects section, so if you have explored projects before, you will find the navigation familiar. 

Like projects, datasets have two main views:

* **Dataset List Page**, where you can search, and create new dataset.
* **Dataset Home Page**, where you manage the details of a specific dataset, including metadata, linked projects, and files.



## ➤ Dataset List Page

This is the starting point for navigating to all datasets in the Data Catalog.

### ➣ Key Features of the Dataset List Page
From the Dataset List Page, you can:

* **Search** 

    * Use the search bar to find specific datasets

* **Create new Dataset**

    * Click the `Add a new dataset` button to start creating a new dataset.

* **View Active & Archived datasets**

    * Use the tabs at the top of the page to organize your view


<br/>


```{tip}
The **Search** bar is available throughout the platform, so you can easily find datasets and projects from different views.
```


-------------------------------------------------

## ➤ Dataset Home Page

The **Dataset Home Page** in Data Catalog is the central place to view and manage everything related to a specific dataset. It brings together all the essential components such as:

   * Metadata
   * Files 
   * Projects
   * Permissions
   * <span style="color:#999999">History (coming soon)</span>
   * Lineage
   * Seqera (WIP - work in progress)


for a specific dataset, into one organized interface.

```{note}
The **History** feature is currently visible but not active. It will be available soon, allowing you to view dataset activity.

The **Seqera** section is available in the Data Catalog, but the functionality is still under development and may not work as expected.
```


### Inside the Dataset Home Page
Once you open a dataset, you will land on its home page. This page is structured into several key areas to help you explore and manage dataset details.

#### ➣ Dataset Title & Description

At the top of the page, there is the title and a short description of the dataset to help you quickly understand its purpose or scope.

#### ➣ Key Features of the Dataset Home Page

Just below the description, several key features are displayed:


* **Metadata**: 
    * This section includes the list of all the dataset details (metadata) entered during dataset creation.

* **Files**:
    * Here are listed all files or entire directories related to this dataset.
    * You can upload new files or directories, view their details, download to see their content, or delete if no longer needed.

* **Projects**: 
    * Here are listed all projects the dataset is linked to.
    * You can view project details.

        (see also: {ref}`projects-tab`)

* **Permissions**:
    * This section shows all users who have access to the dataset.
    * Here dataset creators can manage (add/remove) users and assign permissions:
        * Can Read: Allows the user to view the dataset’s metadata, associated projects, and lineage (view‑only).
        * Can Edit Permissions: Allows managing user access and permissions for the dataset
        * Can Edit Metadata: Allows editing dataset details
        * Can Link To: Allows the current dataset to be linked to as the destination (**descendant**) in the dataset lineage
        * Can Archive: Allows archiving the dataset
        * Can List Files: Allows viewing all files in the dataset
        * Can Edit Files: Allows uploading or deleting files in the dataset
        * Can Download Files: Allows downloading files

            (see also: {ref}`manage-dataset-user-permissions`)

* <span style="color:#999999">**History**:</span>
    * <span style="color:#999999">Shows a log of changes made to the dataset.</span>
    * <span style="color:#999999">Useful for tracking updates.</span>


* **Lineage**
    * This section displays the relationships between datasets across different stages (e.g., raw → processed → results)
    * Provides data provenance by identifying source datasets when creating new ones (e.g., pipelines), ensuring reproducibility.
    
        (see also: {ref}`dataset-lineage`)
  

* **Seqera (WIP - work in progress)**

    * In this section, you can automatically set up a Dataset in Seqera Workspace as input for runnig **Nextflow** pipelines.
    * Select the project under which the pipeline costs will be billed, and click `Create a new setup`.
    * Only projects where you have the **Can Set Up Workspace** permission will appear in the list.


(see also: {ref}`Seqera Workspace`) 



 <br/>

-------------------------------

<br/>

```{raw} html
<div style="text-align: center;">
  <video width="93%" controls autoplay loop muted playsinline>
    <source src="../../_static/images/exploring-dataset-updated2.mp4" type="video/mp4">
  </video>
  <p><em>Dataset Home Page</em></p>
</div>
```
----------------------------

<br/>


```{note}
→ You can edit the dataset details directly in the **Metadata** section. Just click the **`Edit metadata`** button located at the ***top*** of that section.


→ If the dataset is no longer needed, you can archive it by clicking the **`Archive`** button, located on the ***top-right corner*** of the dataset home page.
```






