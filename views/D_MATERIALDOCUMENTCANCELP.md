---
name: D_MATERIALDOCUMENTCANCELP
description: D Materialdocumentcancelp
semantic_en: "abstract parameter for material document cancellation — specifies posting date for reversal transaction."
semantic_vi: "tham số trừu tượng cho hủy tài liệu vật liệu — xác định ngày ghi nhập cho giao dịch đảo ngược."
keywords:
  - hủy tài liệu
  - vật liệu
  - ngày ghi nhập
app_component: MM-IM-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-GF
  - material
  - document
  - component:MM-IM-GF-2CL
  - lob:Sourcing & Procurement
  - bo:Material
---
# D_MATERIALDOCUMENTCANCELP

**D Materialdocumentcancelp**

| Property | Value |
|---|---|
| App Component | `MM-IM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PostingDate` | `budat` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'Input parameters for MATDOC Cancel'
@ObjectModel.supportedCapabilities:[ #DATA_STRUCTURE]
define root abstract entity D_MaterialDocumentCancelP
{   
    
    PostingDate : budat;
    
}
```
