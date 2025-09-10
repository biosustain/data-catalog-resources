# Adding Members & Assigning Roles to a Project
**Projects** in Data Catalog help organize datasets and manage access. As a creator of a project, you can add members and assign roles, that define what each user can see and do.
Each dataset belongs to a single project, and the project controls who can view, edit, or manage those datasets.
This guide walks you through the steps to add members and assign roles to within a project.


```{admonition} Roles & Permissions
:class: toggle
:collapsible:

Each user in a Project has a role that determines their access level:



```{table}
|  Role name  |              Permissions (in a Project where user belongs)             |
|------------ |-------------|
|  **Member** | <br>• Can **view** private datasets |
|  **Editor** |  Can do everything a Member can, plus:<br>•  **Add** new datasets to the Project<br>•  **Edit** or **delete** any dataset in the Project<br>•  **Change** a dataset's **visibility** (public or private) |
|  **Admin**  |  • Can do everything an Editor can, plus:<br>•  **Add** or **remove** users from the Project<br>•  **Assign** or **change** user roles (Member, Editor, Admin)<br>•  **Edit** Project details (title, description, etc.)<br>•  **Delete** the Project (if needed) |



```

```{note}
When you create a new project, you automatically become its **Admin**. This means you have full control over the project, including its datasets and members.
```


## Step 1: Find & Open your Project
Click the `Projects` tab in the top navigation bar and select the project you want to add members to.

```{figure} ../../_static/images/project_tab.png
:alt: Navigation Bar
:width: 60%
:align: center

*Navigation Bar*

```



## Step 2: Click Manage
In the Project home page, click the `Manage` button located in the ***top-right corner***.

```{figure} ../../_static/images/manage_button.png
:alt: Project Home Page
:width: 60%
:align: center

*Project Home Page*

```

## Step 3: Navigate to Collaborators Page
In the Manage Project page, click the `Collaborators` tab.


```{figure} ../../_static/images/project_collaborators_tab.png
:alt: Project Manage Page
:width: 60%
:align: center

*Project Manage Page*

```


## Step 4: Add a Collaborator
In the Collaborators Overview page, click the `Add Collaborators` button.


```{figure} ../../_static/images/project_collaborators_view.png
:alt: Project Collaborators View
:width: 60%
:align: center

*Project Collaborators View*

```



## Step 5: Fill out Collaborator Info
Search for the user by username, select their role, and click `Add Collaborator` to save them.

```{figure} ../../_static/images/project_add_collaborators_view.png
:alt: Adding Collaborators Info
:width: 60%
:align: center

*Adding Collaborators Info*

```

---------------------------------------

## After Adding a Collaborator
Once you saved your collaborators, you can edit or delete the collaborator from the same page.

```{figure} ../../_static/images/project_collaborators_update_or_delete.png
:alt: Edit Collaborators
:width: 60%
:align: center

*Edit Collaborators*

```


```{figure} ../../_static/images/Project_collaborators_view_after1.png
:alt: Edit Collaborators
:width: 60%
:align: center

*Edit Collaborators*

```


```{admonition} Update or Delete Members
:class: toggle
:collapsible:

After adding members to a project, you can either edit their role or remove them if they are no longer needed.

To edit collaborators, go to the Project Collaborators View page, where all the project members are listed. Click the tool icon <img src="../../_static/images/tool.png" alt="tool" style="height:1em; vertical-align:0.05em;"> to open the edit page and update a member's role or remove them.

To quicly delete a project member, click the <img src="../../_static/images/x_button.png" alt="tool" style="height:1em; vertical-align:0.05em;">.

