# Search
Data Catalog offers several ways to search for datasets and projects.

## &#10147; Using the Search Bar on the Welcome Page
Use the `Search bar` on the welcome page to look for projects or datasets.
Simply type in keywords, such as the name of a project, dataset, etc. Then Data Catalog will display the matching results. 



```{figure} ../_static/images/new_search_field_.png
:alt: Data Catalog Welcome Page
:width: 60%
:align: center

*Data Catalog Welcome Page*
```




 ```{note} 
 If you're already inside a project or dataset and want to search for something else, you can use the `Search bar` at the ***top of any page***.
 ```



---------------------------------

(this_is_the_Navigation_bar_Search_reference_point)=
## &#10147; Using the top Navigation Bar
You can also use the `Projects` or `Datasets` tabs in the ***top navigation bar***.
These tabs will take you to the respective overview pages, where you will find a list of all available projects or datasets. 
To search within a section, use the `search bar` located just below the ***Add Project*** or ***Add Dataset*** button. 


```{figure} ../_static/images/project_dataset_tabs_combined_.png
:alt: Project & Dataset Overview
:width: 60%
:align: center

*Project & Dataset Overview*
```




--------------------------------------


## &#10147; Searching Dataset within a Project
If you are looking for data owned by a particular project, you can search within that project from its home page in Data Catalog. You can do that as follows:

### Step 1: Find the project
Click on the **Projects** tab at the top of any page.

### Step 2: Select the project
On the ***Projects overview page***, use the search bar to find the project you are interested in, then click on it to open.

### Step 3: Find the dataset
This will open the ***Project home page***, where you can use the search bar on the page to find the dataset.




------------------



## Filtering Dataset Results
Once you've searched for a dataset in the Data Catalog, you can **narrow down** the results using the **filters** on the sidebar. These filters make it easier to find exactly what you're looking for.

These may include:

* **Tags**: Select specific keywords associated with datasets.
* **Projects**: Filter by the project to which the data belongs.
* **Formats**: Choose data formats like CSV, JSON, XML, etc.
* **Combining** multiple filters can help you quickly find the most relevant datasets.

```{note} 
Results are ranked by **relevance** by default, so the most likely matches appear first. However you can change the sorting order using the `Order by` dropdown located below the search bar. For example you can also sort by name ascending or descending and last modified.
```


```{figure} ../_static/images/filters_.png
:alt: Filters
:width: 60%
:align: center

*Filters*
```


## Advanced Search Tips
If the search query includes a colon (:), then it will be considered as fielded search. This means that you can use **advanced operators** to narrow down your results for both datasets and projects.

* **The asterisk (*)**: It is used as a wildcard to match zero or more characters.
* **The OR Operator (||)**: It allows you to search for either of multiple terms.

You can also combine these with title-specific queries to narrow down your results for both projects and datasets. 
This is especially useful when you know part of the dataset or project name and want more targeted results.

<u>Examples:</u>

1. **title:gene** &rarr; This will return datasets and projects that include the word “gene” in their title, helping you avoid unrelated results from descriptions or tags. 

2. **title:te*** &rarr; Will look for all projects or datasets containing in its title a word that starts with "te" like "test" and "testing".

3. **title:genomics || title:proteomics** &rarr; Will look for datasets or projects containing "genomics" or "proteomics" in its title.

