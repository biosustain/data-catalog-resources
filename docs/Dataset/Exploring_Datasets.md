# Exploring Dataset

The **Datasets** section in the Data Catalog can help you organize and manage research data efficiently. Its structure is similar to the Projects section, so if you have explored projects before, you will find the navigation familiar. 

Like projects, datasets have two main views:

* **Datasets Overview Page**, where you can search, and create new dataset.
* **Dataset Home Page**, where you manage the details of a specific dataset, including metadata, linked projects, and files.



## ➤ Dataset Overview Page

This is the starting point for navigating to all datasets in the Data Catalog.

### ➣ Key Features of the Datasets Overview Page
From the Datasets Overview Page, you can:

* **Search** 

    * Use the search bar to find specific datasets

* **View Active & Archived datasets**

    * Use the tabs at the top of the page to organize your view

 <br/>

-------------------------------

<br/>

```{figure}
:alt: Dataset Overview Page
:width: 98%
:align: center

*Dataset Overview Page*
```
----------------------------

<br/>


```{tip}
The **Search** bar is available throughout the platform, so you can easily find datasets and projects from different views.
```


-------------------------------------------------

## ➤ Dataset Home Page

The **Dataset Home Page** in Data Catalog is the central place to view and manage everything related to a specific dataset. It brings together all the essential components such as:

   * Metadata
   * Projects
   * <span style="color:#999999">Permissions (coming soon)</span>
   * <span style="color:#999999">History (coming soon)</span>
   * <span style="color:#999999">Lineage (coming soon)</span>
   * Files 


for a specific dataset, into one organized interface.

```{note}
The **Permissions**, **History** and **Lineage** features are currently visible but not active. They will be available soon, allowing you to manage dataset users, view dataset activity and track relationships between datasets.
```


### Inside the Dataset Home Page
Once you open a dataset, you will land on its home page. This page is structured into several key areas to help you explore and manage dataset details.

#### ➣ Dataset Title & Description

At the top of the page, there is the title and a short description of the dataset to help you quickly understand its purpose or scope.

#### ➣ Key Features of the Dataset Home Page

Just below the description, several key features are displayed:


* **Metadata**: 
    * This section includes the list of all the dataset details (metadata) entered during dataset creation.

* **Projects**: 
    * Here are listed all projects the dataset is linked to.
    * You can view project details.

* <span style="color:#999999">**Permissions**:</span>
    * <span style="color:#999999">This section shows all users who have access to the dataset.</span>
    * <span style="color:#999999">Here dataset creators can manage (add/remove) users and assign permissions:</span>
        * <span style="color:#999999">Can Edit: Update dataset medatada</span>
        * <span style="color:#999999">Can Edit Files</span>
        * <span style="color:#999999">Can List Files</span>
        * <span style="color:#999999">Can Download Files</span>
        * <span style="color:#999999">Can Run Pipelines</span>
   

* <span style="color:#999999">**History**:</span>
    * <span style="color:#999999">Shows a log of changes made to the dataset.</span>
    * <span style="color:#999999">Useful for tracking updates.</span>


* <span style="color:#999999">**Lineage**:</span>
    * <span style="color:#999999">This section displays the relationships between datasets across different stages (e.g., raw → processed → results). </span>
    * <span style="color:#999999">Provides data provenance by identifying source datasets when creating new ones (e.g., pipelines), ensuring reproducibility.</span>
  

* **Files**:
    * Here are listed all files or entire directories related to this dataset.
    * You can upload new files or directories, view their details, download to see their content, or delete if no longer needed.


```{note}
→ You can edit the dataset details directly in the **Metadata** section. Just click the **`Edit metadata`** button located at the ***top*** of that section.


→ If the dataset is no longer needed, you can archive it by clicking the **`Archive`** button, located on the ***top-right corner*** of the dataset home page.
```






