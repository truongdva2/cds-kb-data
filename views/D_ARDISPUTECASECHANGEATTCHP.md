---
name: D_ARDISPUTECASECHANGEATTCHP
description: D Ardisputecasechangeattchp
semantic_en: "Action parameter for changing attachments in AR dispute case — CaseAttachmentName, MimeType, UploadFileContentBinary"
semantic_vi: "Tham số thao tác để thay đổi tệp đính kèm trong trường hợp tranh chấp AR — tên tệp, loại MIME, nội dung tệp nhị phân"
keywords:
  - tranh chấp
  - tệp đính kèm
  - thay đổi
  - AR
app_component: FIN-FIO-CCD-COL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - dispute
  - component:FIN-FIO-CCD-COL-2CL
  - lob:Other
---
# D_ARDISPUTECASECHANGEATTCHP

**D Ardisputecasechangeattchp**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CaseAttachmentName` | `bapidocid` |
| `MimeType` | `w3conttype` |
| `UploadFileContentBinary` | `dispute_attachment_content` |
| `_ChildToParent` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChildToParent` | `D_ARDisputeCaseChangeP` | — |

## Source Code

```abap
@EndUserText.label: 'Change Parameter for Attachments'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define abstract entity D_ARDisputeCaseChangeAttchP
{
  CaseAttachmentName      : bapidocid;
  MimeType                : w3conttype;
  UploadFileContentBinary : dispute_attachment_content;
  _ChildToParent          : association to parent D_ARDisputeCaseChangeP;
}
```
