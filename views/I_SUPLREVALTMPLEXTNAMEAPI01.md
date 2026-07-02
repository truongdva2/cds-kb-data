---
name: I_SUPLREVALTMPLEXTNAMEAPI01
description: Suplrevaltmplextnameapi 01
semantic_en: "supplier evaluation template external name view — multilingual template names by language"
semantic_vi: "xem tên bên ngoài mẫu đánh giá nhà cung cấp — tên mẫu đa ngôn ngữ theo ngôn ngữ"
keywords:
  - tên mẫu
  - bảng câu hỏi
  - ngôn ngữ
app_component: SLC-EVL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-EVL
  - interface-view
  - component:SLC-EVL
  - lob:Other
---
# I_SUPLREVALTMPLEXTNAMEAPI01

**Suplrevaltmplextnameapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SuplrEvalTmplExternalNameUUID` | `SuplrEvalTmplExternalNameUUID` |
| `SuplrEvalTemplateUUID` | `SuplrEvalTemplateUUID` |
| `SuplrEvalTmplExternalName` | `SuplrEvalTmplExternalName` |
| `Language` | `Language` |

## Associations

> No associations found.

## Source Code

```abap
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.sqlViewName: 'ISEVTMPEXTNAPI01'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Ext Name for Supplier Eval Template' 
define view I_SuplrEvalTmplExtNameAPI01
  as select from I_SuplrEvalTmplExtName
{
  key SuplrEvalTmplExternalNameUUID,
      SuplrEvalTemplateUUID,
      SuplrEvalTmplExternalName,
      Language
}
```
