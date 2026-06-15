# Search & Favorites

The Data Catalog makes it easy to find projects and datasets quickly using keywords, filters and favorites. This guide explains the available search options and how to use favorites.

## ➤  Basic Search
At the top of the page, you will find the **`Search bar`**. Simply type any relevant keyword such as the project or dataset name, and the Data Catalog will display matching results.

→ The **search** is designed to handle typos and partial matches. Even if you enter an incorrect or incomplete term, the Data Catalog will still try to return the **most relevant results** based on what you intended to search for.

```{note} 
Results are ranked by **relevance** by default, so the most likely matches appear first. 
You can change the sorting order using the **`Order by`** dropdown located on the top right corner of that section. For example, sort by ***name*** (ascending or descending) or by ***last modified***.

**This feature is still under development and might not work as expected yet!*
```

## ➤  Advanced Search

For more precise results, you can use the Advanced search. It helps you narrow down your results by applying filters, making it easier to find what you are looking for.

Available filters include:

* **Archive Status:** Choose from ***Active***, ***Archived*** or ***All***
* **Entity Type:** Select whether you want ***Projects & Datasets***, ***Projects only*** or ***Datasets only***
* **Entity Name:** If you know the exact name you can type it here
* **Owner:** Filter by the owner of the project or dataset
* **Metadata:** Use metadata tags for more precise filtering

```{tip} 
To make your search more precise, try combining **multiple filters** at once.
```


<br/>

-------------------------------

<br/>

```{raw} html
<div style="text-align: center;">
  <video width="93%" controls autoplay loop muted playsinline>
    <source src="../_static/images/search-2.mp4" type="video/mp4">
  </video>
  <p><em>Search</em></p>
</div>
```
----------------------------

## Favorites

The Favorite feature allows you to mark frequently used projects and datasets for quick access. Favorite items appear under the **Favorites** section at the top of the Projects and Datasets list pages respectively.

### Adding and removing favorites

1. Navigate to the **Projects** or **Datasets** list page
2. Click the **<img src="../_static/images/star.png" alt="open_icon" style="height:1.2em; vertical-align:text-bottom;">** icon next to its name to mark it as a favorite
3. To remove a favorite, click the star icon again

The screenshots below show how to mark a dataset as favorite. The same applies to projects.

```{raw} html
<div id="carousel" style="text-align:center; max-width:700px; margin:20px auto;">
  <img id="carousel-img" src="../_static/images/favorite-icon-ds.png" style="width:100%; border-radius:6px; border:1px solid #ddd;">
  <p id="carousel-caption" style="color:#555; font-size:0.9em; margin-top:8px;">The star icon on the dataset list page</p>
  <div style="margin-top:10px;">
    <button onclick="moveSlide(-1)" style="margin-right:10px; cursor:pointer;"><</button>
    <span id="carousel-counter" style="font-size:0.9em; color:#555;">1 / 2</span>
    <button onclick="moveSlide(1)" style="margin-left:10px; cursor:pointer;">></button>
  </div>
</div>

<script>
  const slides = [
    { src: "../_static/images/favorite-icon-ds.png", caption: "The star icon on the dataset list page"},
    { src: "../_static/images/favorites-tab.png", caption: "The Favorites section for datasets"},
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



--------------------------------

## API Availability

The search can also be performed programmatically using our **FastAPI**. For more details, see the following endpoint in our API Reference:

* [**/search**](https://datacatalog.bright.dtu.dk/api/docs#/search/search_search_post)
