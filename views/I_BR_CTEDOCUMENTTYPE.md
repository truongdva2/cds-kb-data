---
name: I_BR_CTEDOCUMENTTYPE
description: BR Ctedocumenttype
semantic_en: "Brazil CT-e document type — classification codes for transportation service declarations in Brazilian commerce"
semantic_vi: "loại tài liệu CT-e Brazil — mã phân loại cho khai báo dịch vụ vận chuyển trong thương mại Brazil"
keywords:
  - CT-e
  - tài liệu
  - Brazil
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - document
  - component:FI-LOC-LO-BR
  - lob:Finance
  - bo:BR_CTeDocumentType
---
# I_BR_CTEDOCUMENTTYPE

**BR Ctedocumenttype**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BR_CTeDocumentType` | `cast ( substring( domvalue_l, 1, 1 ) as logbr_type_cte preserving type )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_CTeDocumentTypeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil CT-e Document Type'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRCTEDOCTYPE'
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'BR_CTeDocumentType'
@ObjectModel.compositionRoot: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true

define view I_BR_CTeDocumentType as select from dd07l
  association [0..*] to I_BR_CTeDocumentTypeText as _Text on $projection.BR_CTeDocumentType = _Text.BR_CTeDocumentType
{
  @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 1 ) as logbr_type_cte preserving type ) as BR_CTeDocumentType,  
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
where domname = 'J_1BCTTYPE' and as4local = 'A'
```
