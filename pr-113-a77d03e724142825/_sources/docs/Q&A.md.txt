# Q&A

<details>
<summary><strong>Why should I use Data Catalog?</strong></summary>
Data Catalog gives you one place to keep your research data and everything that describes it, instead of files on a laptop and details in someone's head.

In practice it means:

* **You can find things again.** Projects and datasets are searchable by name, owner, and metadata — including data from colleagues you were given access to.
* **Your data has context.** A file on its own says little. A dataset in Data Catalog records what it is, how it was generated, and which instrument produced it.
* **You control who sees what.** Permissions are set per project and per dataset, so you decide what stays restricted and what is visible to BRIGHT.
* **You can trace where results came from.** Lineage links raw data to processed data to results, which is what makes an analysis reproducible later.
* **Your data is ready for analysis.** Files are stored in the Azure Data Lake, so you can run Nextflow pipelines on them through Seqera without moving anything.
</details>

<br/>

<details>
<summary><strong>What is the difference between "Data Lake" and "Data Catalog"?</strong></summary>

The **Data Lake** is where your files are stored. **Data Catalog** is the web app you work in, and the gateway to that storage.

Data Catalog does not store your files itself. It works with two storage locations:

* A **metadata database**, holding the information about your data — your projects, datasets, and files, with their descriptions, permissions, and relationships.
* The **Azure Data Lake**, holding the files themselves.

Each file entry in Data Catalog points to the matching file in the Data Lake. So when you open a dataset, the metadata you see comes from the database, while the file you download comes from the Data Lake.

This is also why the Advanced upload uses AzCopy or Azure Storage Explorer: those tools write your files straight to the Data Lake, and `Finalize upload` tells Data Catalog to register them.

</details>

<br/>

<details>
<summary><strong>How does Data Catalog relate to the other platforms at BRIGHT?</strong></summary>

Each platform covers a different part of the data lifecycle:

* **Benchling** is the LIMS, where experiments are designed and recorded.
* **Azure Data Lake** is the storage where research data files live.
* **Seqera** runs Nextflow pipelines on that data.
* **Data Catalog** is where your data is registered, described, and made findable — and the gateway to the storage and compute above.

You link a Benchling project when creating a project in Data Catalog, and you set up a Seqera workspace from a dataset. So Data Catalog is the layer that connects them, rather than a replacement for any of them.

</details>

<br/>

<details>
<summary><strong>Do I still need Benchling if I use Data Catalog?</strong></summary>

Yes. The two serve different purposes.

**Benchling** is your electronic lab notebook. It records your experiments — protocols, samples, and results as you work.

**Data Catalog** is where the research data from that work is registered and described, so it can be found, shared, and analysed later — also by people who were not involved in the experiment.

When you create a project in Data Catalog, you can link it to the matching Benchling project, so the experimental record and the data stay connected.

</details>

<br/>

<details>
<summary><strong>What pipelines can I run?</strong></summary>

Pipelines run through Seqera and must be written in **Nextflow**.

You can run:

* **Predefined pipelines** available in your Seqera workspace
* **Pipelines built by the Informatics Platform**
* **Your own Nextflow pipeline**, added to your workspace

If you have a pipeline that is not written in Nextflow, get in touch with us — depending on the case, it may be possible to help you move it to Nextflow so it can run in Seqera.

</details>

<br/>

<details>
<summary><strong>What does it cost to run a pipeline?</strong></summary>

Pipelines run on Azure compute, so a run has a cost. The estimated hourly cost of your workspace is shown on the Seqera setup in Data Catalog.

The project you select when creating the setup is the one charged for the run, and it is also where the results dataset is created.

</details>

<br/>

<details>
<summary><strong>My pipeline finished — what do I do now?</strong></summary>

Results do not come back to Data Catalog automatically — they stay in the Seqera data registry until you copy them back.

In Data Catalog, open the Seqera setup and choose `Copy into new dataset`. You select the folder to copy back and fill in the metadata for the new dataset. You can also use `Overwrite` to copy the results into the existing dataset instead.

See {ref}`Seqera Workspace` for the full steps.

</details>

<br/>

<details>
<summary><strong>Can a dataset belong to more than one project?</strong></summary>

Yes. A dataset is created under a parent project, but it can be linked/added to other projects as well.

You do this from the **Projects** tab on the dataset home page. Only projects where you have the `Can Add Datasets` permission will appear in the list.

This is useful when the same data is relevant to more than one project — you link/add it instead of uploading a second copy.

</details>

<br/>

<details>
<summary><strong>Can I create a project in Data Catalog before I have any data?</strong></summary>

Yes. You can create a project as soon as the work starts and fill in the metadata and the DMP, even if no data exists yet.

When data starts being produced, you create a dataset under the project and upload your files to it. Project metadata and the DMP can be updated at any time, so the project grows with your work.

</details>


