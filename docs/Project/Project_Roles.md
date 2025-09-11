# Adding Members & Assigning Roles to a Project

Projects in Data Catalog help organize datasets and manage access. Each dataset belongs to a single project, and as a creator of a project, you can add members and assign roles that controls who can view, edit, or manage those datasets.

The following guide walks you through the steps to add members and assign roles to within a project.

## Step 1: Find & Open your Project
Click the `Projects` tab in the top navigation bar and select the project you want to add members to.

_For detailed instructions on how to do this, see the [**Search** (Using the top Navigation Bar)](this_is_the_Navigation_bar_Search_reference_point) guide._


## Step 2: Click Manage
In the Project home page, click the `Manage` button located in the ***top-right corner***.

```{figure} ../../_static/images/manage_button.png
:alt: Project Home Page
:width: 60%
:align: center

*Project Home Page*

```

```{note}
When you create a new project, you automatically become its **Admin**. This means you have full control over the project, including its datasets and members.
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



## Step 5: Fill out Collaborator Info
Search for the user by username, select their role, and click `Add Collaborator` to save them.

```{figure} ../../_static/images/project_add_collaborators_view.png
:alt: Adding Collaborators Info
:width: 60%
:align: center

*Adding Collaborators Info*

```

---------------------------------

## Update or Delete Project Members

After adding members to a project, you can either **edit** their role or **delete** them if they no longer require access to the project.

To edit a project member, go to the **Project Collaborators View page**, where all the project members are listed. Click the <img src="../../_static/images/tool.png" alt="tool" style="height:1em; vertical-align:0.002em;"> icon to open the edit page and update a member's role or delete them.


```{figure} ../../_static/images/Project_collaborators_view_after1.png
:alt: Edit Collaborators
:width: 60%
:align: center

*Edit Collaborators*
```

```{tip}
To quicly delete a project member, click the <img src="../../_static/images/x_button.png" alt="tool" style="height:1em; vertical-align:0.002em;"> icon.
```


