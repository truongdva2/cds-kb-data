---
name: I_EG_EDOCFOREIGNTAXCATEGORY
description: EG Edocforeigntaxcategory
semantic_en: "Egypt eDocument foreign tax category — tax categories for foreign business partners in Egypt."
semantic_vi: "Loại thuế nước ngoài eDocument Ai Cập — loại thuế cho đối tác kinh doanh nước ngoài."
keywords:
  - loại thuế
  - nước ngoài
  - Ai Cập
app_component: CA-GTF-CSC-EDO-EG
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - tax
  - component:CA-GTF-CSC-EDO-EG
  - lob:Cross-Application Components
---
# I_EG_EDOCFOREIGNTAXCATEGORY

**EG Edocforeigntaxcategory**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-EG` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `EG_EDocCountryCode` | `EG_EDocCountryCode` |
| `EG_EDocBPPerson` | `EG_EDocBPPerson` |
| `EG_EDocTaxNumberCategory` | `EG_EDocTaxNumberCategory` |
| `EG_EDocPrefixCountryCode` | `EG_EDocPrefixCountryCode` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'eDocument Egypt Tax Cat for Frgn Bsns'
@Metadata.ignorePropagatedAnnotations: true
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@ObjectModel:{
 usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #MASTER
},
supportedCapabilities: [ #SQL_DATA_SOURCE, 
                           #CDS_MODELING_DATA_SOURCE,  
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #UI_PROVIDER_PROJECTION_SOURCE ]
                           }
define view entity I_EG_EDocForeignTaxCategory as select from R_EG_EDocForeignTaxCategory
{
  key EG_EDocCountryCode,
  key EG_EDocBPPerson,
  EG_EDocTaxNumberCategory,
  EG_EDocPrefixCountryCode
}
```
