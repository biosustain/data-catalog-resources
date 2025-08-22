# Transferring Data from O Drive to Azure Storage

Most researchers in CFB store their compressed data on the O Drive. To
use Azure services for data analysis, the uncompressed data needs to be
stored in an Azure storage account. This process involves four main
phases:

- [Transfer Compressed File from O Drive to Azure Storage
  Account](#transfer-the-compressed-file-from-o-drive-to-azure-storage-account),

- [Download .tar File from Azure Storage to a
  VM](#download-.tar-files-from-azure-storage-to-a-vm),

- [Extract .tar File on the
  VM](#extract-the-.tar-file-to-a-specific-folder),

- [Upload Untarred Files Back to Azure
  Storage](#upload-untarred-files-from-the-vm-to-azure-storage).

## Transfer the Compressed File from O Drive to Azure Storage Account

For transferring data from the O Drive to an Azure storage account,
AzCopy can be used. AzCopy is a command-line tool to copy files to or
from Azure storage. Follow the following steps to transfer your files:

### 1. Download AzCopy:

- Go to [this
  link](https://learn.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-v10)
  to download AzCopy.

- AzCopy V10 is an executable file, so no installation is needed.

### 2. Extract the Downloaded Folder:

- Right-click on the downloaded folder.

- Select "Extract All..."

### 3. Open Command Prompt:

- Press Win + R, type cmd, and press Enter.

- Navigate to the path where the extracted folder and the .exe file are
  located.

### 4. Log in to Azure:

- Run the command: `azcopy login`

### 5. Copy Your Files:

- Run the command: `azcopy copy <source path> <destination link>`

### Example:

```bash
azcopy copy "/Path/to/Source/file/myfile.tar" https://mystorageaccount.blob.core.windows.net/container/subfolder/myfile.tar
```

By following these steps, you can efficiently transfer your files from
the O Drive to your Azure storage account.

## Download .tar Files from Azure Storage to a VM

To uncompress files, you'll need a virtual machine of appropriate size.
Before uncompressing, you must first download the compressed file from
Azure Storage to the VM. Follow the steps below to do this:

### 1. Set Up Your Storage Account:

- Add the VNet of your VM to your storage account networking.

### 2. Install Azure CLI on the VM:

- Follow the instructions here: [Install Azure
  CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli-linux?pivots=apt).

### 3. Log In to Azure from the VM:

- Open the terminal and run: az login

- Follow the on-screen instructions to log in.

### 4. Download the .tar File:

- Run the command:

```bash
az storage blob download
 --container-name <container-name>
 --name <subfolders/filename>
 --file <destination-path/filename>
 --account-name <storage-account-name>
 --account-key <access-key>
```

### Example:

```bash
az storage blob download \
  --container-name mycontainer \
  --name data/myfile.tar \
  --file ~/X204SC23121938-Z01-F001_02.tar \
  --account-name mystorageaccount \
  --account-key RLymfxHdHUo7hq2oHbIvlkdx5YBiV2TLuf14J2gNESrSraX4vT1FycO9IApw67ja1wsE4LpidC4WX9d+AStH2zd2A==
```

## Extract the .tar File to a Specific Folder:

```bash
az storage blob download \
  --container-name mycontainer
  --name data/myfile.tar \
  --file ~/X204SC23121938-Z01-F001_02.tar
  --account-name mystorageaccount
  --account-key RLymfxHdHUo7hq2oHbIvlkdx5YBiV2TLuf14J2gNESrSraX4vT1FycO9IApw67ja1wsE4LpidC4WX9d+AStH2zd2A==
```

## Extract the .tar File to a Specific Folder:

Once the compressed file is on the VM, you can proceed to uncompress it.

```bash
az storage blob download \
  --container-name mycontainer \
  --name data/myfile.tar \
  --file ~/X204SC23121938-Z01-F001_02.tar \
  --account-name mystorageaccount \
  --account-key RLymfxHdHUo7hq2oHbIvlkdx5YBiV2TLuf14J2gNESrSraX4vT1FycO9IApw67ja1wsE4LpidC4WX9d+AStH2zd2A==
```

## Extract the .tar File to a Specific Folder:

Once the compressed file is on the VM, you can proceed to uncompress it.

- Run the command:

```bash
tar -xvf yourfile.tar -C /path/to/destination/folder
```

You can check directory size and number of files by the following
commands:

- To check the size of a directory:

```bash
du -sh /path/to/directory
```

- To count the number of files in a directory:

```bash
find /path/to/directory -type f | wc -l
```

## Upload Untarred Files from the VM to Azure Storage:

Once the files are uncompressed on the VM, you can upload them back to
the storage account.

- Run the command:

```bash
az storage blob upload-batch --account-name \<storage-account-name\>
--account-key \<access-key\> --source \<path-to-source-of-files\>
--destination \<container-name\> --destination-path \<folder-name\>
```

### Example:

```
az storage blob upload-batch --account-name mystorageaccount
--account-key
RLymfxHdHUo7hq2oytHbIvx5YBiV2TLuf14J2gNESrSraX4vT1FycO9IApw67ja1wsE4LpidC4WX9d+AStH2zd2A==
--source /home/azureuser/newfolder --destination mycontainer
--destination-path data
```
