#  Create a New Project

This guide walks you through the essential steps to create a project in Data Catalog. 
Creating a project is **simple** and **flexible** and all users can create projects.

```{tip}
Keep in mind that you can update the project metadata at **any time**.
```

## Step 1: Navigate to the Project List Page 
* Click the **`Projects`** button on the Data Catalog welcome page 

    **or** 
    
* Use the **`Projects`** tab located at the top of any page.

Both options will take you to the Project List page, where you can browse, or create a new project.





## Step 2: Add a New Project
On the Project List page, click the **`Add a new project`** button located right below the ***Search*** bar.



## Step 3: Fill in Project Metadata
Complete all the required fields marked with **`*`**:

* Project Name (**`*`**): must be unique, no other projects can have the same name
* Project Description (**`*`**)
* Access Rights (**`*`**)
* Principal Investigator (PI) (**`*`**)
* LIMS (Benchling) project URL _(must start with **https://bright.benchling.com**)_


```{tip}

To find the Benchling project URL, log in to Benchling, open the **Projects** section in the left sidebar, and select the project you want.  
Click the **settings** button (<img src="../../_static/images/settings_button.png" alt="open_icon" style="height:1.2em; vertical-align:text-bottom;">) next to the project name and choose **Copy project link**.

```


## Final Step: Complete Project Creation
Click **`Create project`** at the ***bottom*** of the page to complete the process.

<br/>

-------------------------------

<br/>

```{raw} html
<div style="text-align: center;">
  <video width="93%" controls autoplay loop muted playsinline>
    <source src="../../_static/images/project-creation-updated2.mp4" type="video/mp4">
  </video>
  <p><em>Project Creation</em></p>
</div>
```

----------------------------

<br/>

```{note}
Some fields are filled in automatically by the system after the project is created, such as **Project ID**, **Creation date** and **Created By**.
You can find them on the project's **Metadata** tab. They cannot be changed.
```

<br/>

---------------------------

## Access Rights and Visibility
Projects have two access rights settings:

* **BRIGHT-visible:** 
    * Project metadata is visible (read-only) to all BRIGHT employees. However, visibility of datasets depends on each dataset's individual access rights.

* **Restricted:** 
    * The project is completely hidden to all BRIGHT employees, except from users who have been explicitly granted permissions.

➣ By default, projects are set to **BRIGHT-visible**, but you can change the access rights when creating or editing a project.


Understanding how access rights affect visibility is important for collaboration:

```{note}

Users without assigned permissions (see: {ref}`manage-project-user-permissions`) follow the project access rights:

→ For **BRIGHT-visible** projects: Metadata is visible (read-only) to all BRIGHT employees

→ For **Restricted** projects: Project is completely hidden

```

------------------------------------------
(Datasets-tab)=
## Add Datasets to Project

Once you have created the project, you can **create a new dataset** from the **Datasets** tab, and it will be automatically added to the project. <br/>
You can also **add** existing datasets from the same **Datasets** tab on the project home page. This is useful when the same data is relevant to more than one project.

```{note}
To add a dataset to a project, two conditions must be met:

→ You must have the **Add Datasets** permission on the project you want to add the dataset to
<br/>
→ You must have **access to the dataset** (it is BRIGHT-visible, or it is restricted and you have permission on it)

If either of these is missing, the dataset will not appear in the list.

The **Link To** permission is not needed here. It is only used for {ref}`dataset-lineage`.
```


### To add another dataset to a project:

1. Click the **`Datasets`** tab on the project home page

2. Select the dataset you want to add from the list. Only datasets you have access to are listed.

3. Click **`Link`** to add the dataset

After you add a dataset:

* the dataset appears under the **Datasets** tab on the project home page
* the project appears under the **Projects** tab on the dataset home page

The files stay in the dataset, nothing is copied.

> Adding a dataset does **not** give project users access to a restricted dataset. They still need their own permission on the dataset.


To remove a dataset:

   * Click **`Unlink`** to remove the dataset from this project. A dataset cannot be removed from its parent project (the project it was created in).




<br/>

```{figure} ../../_static/images/link-datasets-to-project.png
:alt: Add Datasets to Project
:width: 93%
:align: center

*Add Datasets to Project*
```



-------------------------------- 

## API Availability

The actions described in this page can also be performed programmatically. For more details, see the following endpoints in the API Reference:

* [**/projects**](https://datacatalog.bright.dtu.dk/api/docs#/projects/create_project_projects_post)
* [**/projects-datasets**](https://datacatalog.bright.dtu.dk/api/docs#/projects-datasets)