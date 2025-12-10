# Welcome

This user guide introduces the **Data Catalog**, a central interface designed to **organize**, **register**, and **discover** research data within BRIGHT.<br/>

It serves as the metadata management layer and gateway to the underlying research data infrastructure, ensuring that all data assets (Projects, Datasets, and Files) are **findable**, **accessible**, **interoperable**, and **reusable** (FAIR).
<br/>


## The Purpose of Data Catalog

The Data Catalog provides a secure and structured environment for managing active data, making it **as open as possible and as close as necessary** within BRIGHT. 

Specific goals include:
- Provide a centralized data portal to enhance FAIR data principles throughout the data lifecycle.
- Enable data/metadata capture, data enrichment, efficient and standardized automated workflows.
- Provide visibility and overview of accessible data.
- Ensure governance on all systems and data.
- Establish a strong research data management support function.

## Key Data Assets

### Projects

A **Project** is the top-level organizational entity in the Data Catalog. It represents a **research or analytical unit** that includes all the data and metadata associated with a specific study.

Projects can represent:

* An individual experiment
* A collaborative research effort
* A data reuse study

Each Project includes:

* Description, contributors, objectives, and methods
* One or more Datasets, which may include internally generated, externally acquired, or publicly sourced data
* Access control and data provenance


### Datasets

A **Dataset** is a logically grouped **collection of related data** files within a Project, representing a structured set of information generated under consistent experimental, computational, or analytical conditions.

Each Dataset includes:

* Metadata describing its origin/type, purpose, methods, instruments and parameters and relationships to other datasets
* A defined data stage (Raw, Processed, Results)
* Versioning and provenance tracking for traceability



### Files

A **File** is the lowest-level data entity managed by the system. It is stored within a Dataset and represents a **single unit of data** content (e.g., sequence files, image, table, or model output) in a specific format.

Each File has:

* A unique identifier within the system
* A defined file format (e.g., .fastq, .csv, .tiff, .h5)
* Metadata describing its content, origin and checksum for data integrity

```{note}
***Checksum*** is a unique fingerprint used to verify that the file has not been altered or corrupted.
```


### Authorization

The Data Catalog is currently **only accessible** by personnel officially employed or associated with BRIGHT. Each dataset can belong to one or more projects and project metadata is visible to all BRIGHT employees with read-only access.
<br/>



## Start Exploring

```{toctree}
:maxdepth: 2
:titlesonly:

docs/Login
docs/Project/index
docs/Dataset/index
docs/Search
docs/Contact
```
