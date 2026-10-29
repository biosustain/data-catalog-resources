# Welcome

This user guide introduces the **Data Catalog**, a central interface designed to **organize**, **register**, and **discover** research data and metadata within BRIGHT.<br/>

You manage your Projects and Datasets in Data Catalog, while the files themselves are securely stored in the **Azure Data Lake** (BRIGHT subscription). Data Catalog is also the gateway to BRIGHT's research data infrastructure, including cloud storage and compute (e.g., running pipelines in Seqera), and it ensures that all data assets (Projects, Datasets, and Files) are **findable**, **accessible**, **interoperable**, and **reusable** (FAIR).
<br/>

```{figure} _static/images/welcome-v12.png
:alt: Overview of Data Catalog and the connected systems
:width: 100%
:align: center

*Overview of Data Catalog and the connected systems*
```


## The Purpose of Data Catalog

Data Catalog provides a secure and structured environment for managing active data, making it **as open as possible and as close as necessary** within BRIGHT. 

Specific goals include:
- Provide a centralized data portal to enhance FAIR data principles throughout the data lifecycle.
- Enable data/metadata capture, data enrichment, efficient and standardized automated workflows.
- Provide visibility and overview of accessible data.
- Ensure governance on all systems and data.
- Establish a strong research data management support function.

## Key Data Assets

### Projects

A **Project** is the top-level organizational entity in Data Catalog. It represents a **research or analytical unit** that includes all the data and metadata associated with a specific study.

Projects can represent:

* An individual experiment
* A collaborative research effort
* A data reuse study

Each Project includes:

* Description, principal investigator, and (optionally) a Benchling project URL
* A Data Management Plan (DMP)
* One or more Datasets, which may include internally generated, externally acquired, or publicly sourced data
* Access control and data provenance


### Datasets

A **Dataset** is a logically grouped **collection of related data** files within a Project, representing a structured set of information generated under consistent experimental, computational, or analytical conditions.

Each Dataset includes:

* Metadata describing its type, instruments, how and where the data was acquired, and relationships to other datasets
* A defined data type (Raw, Processed, Results)
* Provenance tracking (lineage) for traceability



### Files

A **File** is the lowest-level data entity managed by the system. It is stored within a Dataset and represents a **single unit of data** content (e.g., sequence files, image, table, or model output) in a specific format.

Each File has:

* A unique identifier within the system
* Its path within the Dataset, size and upload date


### Authorization

Data Catalog is currently **only accessible** by personnel officially employed or associated with BRIGHT. Each dataset can belong to one or more projects and the metadata of BRIGHT-visible projects and datasets is visible to all BRIGHT employees with read-only access, while Restricted projects and datasets are only visible to users who have been given access.
<br/>



## Start Exploring

```{toctree}
:maxdepth: 2
:titlesonly:

docs/Login
docs/Authentication_via_API_keys
docs/Project/index
docs/Dataset/index
docs/Seqera
docs/Search
docs/Contact
docs/Q&A
```
