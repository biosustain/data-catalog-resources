(this_is_the_Search_reference_point)=
# Search
Data Catalog offers several ways to search for datasets and projects, whether you are starting from the welcome page or navigating within a project or dataset.

## &#10147; Using the Search Bar on the Welcome Page
Use the `Search bar` on the welcome page to look for projects or datasets.
Simply type keywords such as a project or dataset name, and the Data Catalog will display matching results. 



```{figure} ../_static/images/new_search_field_.png
:alt: Data Catalog Welcome Page
:width: 60%
:align: center

*Data Catalog Welcome Page*
```

```{note} 
Results are ranked by **relevance** by default, so the most likely matches appear first. 
You can change the sorting order using the `Order by` dropdown located below the search bar. For example, sort by ***name*** (ascending or descending) or by ***last modified***.
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


 ```{note} 
 If you're already within a project or dataset and want to search for something else, you can use the `Search` bar located at the ***top-right corner*** of any page.
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



## Filtering Results
You can use filters to narrow down your search results and find what you need more easily.

Filtering is available in different places, depending on where you are searching from:

* ***Welcome page:*** If your search shows both projects and datasets with similar keywords, you can use the filters on the left sidebar to narrow down the results by type, format, or tags.
* ***Within Projects or Datasets overview page:*** If you search within a specific section, the results are already limited to the section. In this case, filters will still be available, but they will only apply the content of that section.

These filters help you quickly find the most relevant results.

Available filters include:

* **Tags:** Select specific keywords associated with datasets.
* **Type:** Filter by projects or datasets.
* **Projects:** Filter by the project to which the data belongs.
* **Formats:** Choose data formats like CSV, JSON, XML, etc.


```{tip} 
To make your search more precise, try combining **multiple filters** at once.
```


```{figure} ../_static/images/filters_comb.2.png
:alt: Filters
:width: 60%
:align: center

*Filters*
```


## Advanced Search Tips
If your search query includes a colon (:), it will be treated as fielded search. This means that you can use **advanced operators** to narrow down your results for both datasets and projects.

* **The asterisk (*)**: It is used as a wildcard to match zero or more characters.
* **The OR Operator (||)**: It allows you to search for either of multiple terms.

You can also combine these with title-specific queries to narrow down your results for both projects and datasets. 
This is especially useful when you know part of the dataset or project name and want more targeted results.

<u>Examples:</u>

1. **title:gene** &rarr; This will return datasets and projects that include the word “gene” in their title, helping you avoid unrelated results from descriptions or tags. 

2. **title:te*** &rarr; Will search for projects or datasets with titles containing words that starts with "te", such as "test" and "testing".

3. **title:genomics || title:proteomics** &rarr; Will look for datasets or projects containing "genomics" or "proteomics" in its title.

