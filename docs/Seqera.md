(Seqera Workspace)=
# Seqera (WIP)

```{note}
We are still improving how Data Catalog works with Seqera. If something doesn't work as expected, please let us know (see {ref}`contact`).
```

With Seqera, you can use your datasets as input for running Nextflow pipelines. This works in two parts:

* Each **project** has one Seqera **workspace**
* Each **dataset** you want to analyze gets its own **data registry** inside the workspace

```{tip}
  → **Seqera workspace**: your project's space in Seqera, where pipelines run.

  → **Data registry**: a copy of a dataset's files inside the workspace, so your pipeline can read them.

  → **Nextflow**: the language the pipelines are written in. 
```

Once the analysis is complete, you can copy the results back to Data Catalog as a new dataset. Follow the steps below to get started:

## Part 1: Set Up the Project's Seqera Workspace

You only need to do this once per project. If a project already has a workspace, skip to Part 2.

1. Open the project you want to set up the Seqera workspace for

2. Click the **`Seqera`** tab on the project home page

3. Click **`Set up Seqera workspace`**. A progress bar will appear while the workspace is being set up.

When the workspace is ready, you will see its name and the estimated cost of computation per hour. The data registries you create in Part 2 will also be listed here.

```{note}
You must have the **Setup Workspaces** permission on the project to set up a workspace.
```

## Part 2: Create a Data Registry for a Dataset

1. Open the dataset with the files you want to use as input for running Nextflow pipelines

2. Click the **`Seqera`** tab on the dataset home page

3. From the dropdown list, select the project under which you want the result dataset to be created and to which the pipeline costs will be billed.

   > Only projects where you have the **Setup Workspaces** permission will appear in the list. The dataset's primary project is selected by default and shown first.

4. Click **`Create`** 

   > If the **`Create`** button is disabled, the project has no Seqera workspace yet (see Part 1).

5. After the data registry is created, click the **<img src="../_static/images/info.png" alt="open_icon" style="height:1.2em; vertical-align:text-bottom;">** next to the data registry name to view more details, and then click the **`View in Seqera Workspace`** button to open the workspace directly in Seqera.

6. In Seqera, select the pipeline you want to run and start your analysis as usual

7. Once the analysis is complete, return to Data Catalog and click the **`Copy into new dataset`** button. A dialog window will appear where you can:
    * Select or manually enter a **folder path**
    * Provide **metadata** for the new dataset. The name is pre-filled as "*data registry name* copy" and the Data type is set to **Results**, but you can change both.
    * Click **`Create dataset and copy`** to finalize the process
    * Click **`Open new dataset`** to go to the new dataset

  A new dataset containing the analysis results will be created and will be visible alongside other datasets under the **Datasets** tab on the project home page you selected in step 3.

```{note}
You must have the **Add Datasets** permission on the project to use **`Copy into new dataset`**.
```

<br/>

```{raw} html
<div id="carousel" style="text-align:center; max-width:700px; margin:20px auto;">
<img id="carousel-img" src="../_static/images/seqera-steps-2-3-4.png" style="width:100%; border-radius:6px; border:1px solid #ddd;">
  <p id="carousel-caption" style="color:#555; font-size:0.9em; margin-top:8px;">Steps: 1-4</p>
  <div style="margin-top:10px;">
    <button onclick="moveSlide(-1)" style="margin-right:10px; cursor:pointer;"><</button>
    <span id="carousel-counter" style="font-size:0.9em; color:#555;">1 / 5</span>
    <button onclick="moveSlide(1)" style="margin-left:10px; cursor:pointer;">></button>
  </div>
</div>

<script>
  const slides = [
    { src: "../_static/images/seqera-steps-2-3-4.png", caption: "Steps: 1-4" },
    { src: "../_static/images/seqera-step-5.png", caption: "Step 5"},
    { src: "../_static/images/seqera-step-5a.png", caption: "Step 5"},
    { src: "../_static/images/seqera-step-7.png", caption: "Step 7"},
    { src: "../_static/images/seqera-new-dataset.png", caption: "Step 7"},
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
(Manage Seqera Workspace)=
## Viewing and Managing Seqera Workspaces

The project's Seqera workspace and all its data registries are shown in:
* The **`Seqera`** tab on the project home page
* The **`Pipelines`** tab on the navigation bar (all workspaces you have access to)

For the **workspace** you can:
* **`Open`** it directly in Seqera, using the **<img src="../_static/images/open-seqera.png" alt="open_icon" style="height:1.2em; vertical-align:text-bottom;">** icon
* **`Delete`** it

From each **data registry** you can:
* **`Overwrite`:** updates the data registry in Seqera with the latest files from the dataset. Use this if you have added or changed files in the dataset after creating the
  data registry
* **`Copy into new dataset`:** creates a new dataset from the Seqera data registry
* **`Delete`:** removes the data registry entirely

The data registries of a dataset are also shown in the **`Seqera`** tab on the dataset home page.

<br/>


```{warning}
**Overwrite** and **Delete** cannot be undone.
```


-------------------------------


## API Availability

The actions described in this page can also be performed programmatically. For more details, see the following endpoints in the API Reference:

* [**/pipelines**](https://datacatalog.bright.dtu.dk/api/docs#/pipelines)