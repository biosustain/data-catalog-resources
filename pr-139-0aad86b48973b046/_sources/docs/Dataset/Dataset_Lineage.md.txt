(dataset-lineage)=
# Dataset Lineage

Once you have created a dataset you can define its **Lineage** by linking it to one or more datasets.

➣ Lineage creates a relationship that shows how datasets are related across different stages (e.g., raw → processed → results).

➣ It ensures **data provenance** by identifying source datasets when creating new ones (e.g., pipelines), supporting reproducibility.

➣ When you copy results back from Seqera, the new dataset is linked automatically (see {ref}`Seqera Workspace`).

Before you start, here is an overview of how lineage works:

```{figure} ../../_static/images/dataset-lineage.png
:alt: Dataset Lineage overview
:width: 100%
:align: center

*Dataset Lineage overview*
```

```{important}
To create (or remove) a Dataset Lineage between datasets you must have the permission ***Link To*** on the **destination dataset**. The destination dataset is always the **descendant**.

You also need ***Link To*** on the dataset you are viewing, otherwise the Lineage buttons are greyed out.
```


## Add a Lineage

1. Click the **`Lineage`** tab on the dataset home page

2. Choose the relationship type:
    * **`Add Ancestor`**, if the selected dataset creates the current dataset

      **or** 

    * **`Add Descendant`**, if the selected dataset is a result of the current dataset

3. Select the dataset from the list

4. Add a description explaining the relationship (optional)

5. Click the **`Link as Ancestor`** (or **`Link as Descendant`**) button to complete the process


To remove a Lineage:

   * Click **`Remove link from dataset`**
   * Select the link and click **`Delete`**
   
<br/>

-------------------------------

<br/>

```{raw} html
<div style="text-align: center;">
  <iframe 
    width="93%" 
    height="500" 
    src="https://youtube.com/embed/CHymgLBZsWg"
    title="Dataset Lineage"
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
  <p><em>Dataset Lineage</em></p>
</div>
```

<br/>

-------------------------------


## API Availability

The actions described in this page can also be performed programmatically. For more details, see the following endpoint in the API Reference:

* [**/lineage**](https://datacatalog.bright.dtu.dk/api/docs#/lineage)
