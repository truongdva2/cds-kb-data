---
name: I_BR_DUETYPE
description: BR Duetype
semantic_en: "Brazil DUE type domain value — classification of electronic export declaration document types"
semantic_vi: "Giá trị miền loại DUE Brazil — phân loại loại tài liệu khai báo xuất khẩu điện tử"
keywords:
  - DUE
  - loại khai báo
  - xuất khẩu
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
  - component:FI-LOC-LO-BR
  - lob:Finance
  - bo:BR_DUEType
---
# I_BR_DUETYPE

**BR Duetype**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BR_DUEType` | `cast ( substring( domvalue_l, 1, 1 ) as logbr_due_type preserving type )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_DUETypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRDUETYPE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Brazil Domain for DUE Type'
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'BR_DUEType'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.compositionRoot:true
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_BR_DUEType 
as select from dd07l
  
  association [0..*] to I_BR_DUETypeText as _Text on $projection.BR_DUEType = _Text.BR_DUEType                    
  
{
  @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 1 ) as logbr_due_type preserving type ) as BR_DUEType, 
  
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
where domname = 'LOGBR_DUE_TYPE' 
  and as4local = 'A'
```
