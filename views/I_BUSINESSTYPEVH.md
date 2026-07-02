---
name: I_BUSINESSTYPEVH
description: Businesstypevh
semantic_en: "value help for business type — lookup list for enterprise type classification."
semantic_vi: "danh sách trợ giúp giá trị cho loại doanh nghiệp — tìm kiếm loại hình kinh doanh."
keywords:
  - loại doanh nghiệp
  - tìm kiếm
  - phân loại
app_component: FI-LOC-FI-KR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-FI
  - interface-view
  - value-help
  - component:FI-LOC-FI-KR
  - lob:Finance
---
# I_BUSINESSTYPEVH

**Businesstypevh**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-KR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BusinessType` | `bustype.gestyp` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Type of Business'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC

@ObjectModel: {
  dataCategory: #VALUE_HELP,
  representativeKey: 'BusinessType',
  usageType: { dataClass: #MASTER,
               serviceQuality: #A,
               sizeCategory: #S
  }
}
@ObjectModel.supportedCapabilities: 
   [  #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #UI_PROVIDER_PROJECTION_SOURCE ] 
define view entity I_BusinessTypeVH as select from bustype
{
  key bustype.gestyp as BusinessType
}
```
