---
name: I_SUPLREVALREQEXTNAMEAPI01
description: Suplrevalreqextnameapi 01
semantic_en: "supplier evaluation request external name view — maps external names to evaluation requests and questionnaires by language"
semantic_vi: "chế độ xem tên ngoài yêu cầu đánh giá cung cấp — ánh xạ tên ngoài tới yêu cầu đánh giá và khảo sát theo ngôn ngữ"
keywords:
  - cung cấp
  - đánh giá
  - yêu cầu
  - tên ngoài
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
# I_SUPLREVALREQEXTNAMEAPI01

**Suplrevalreqextnameapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SuplrEvalReqExternalNameUUID` | `SuplrEvalReqExternalNameUUID` |
| `SuplrEvalReqUUID` | `SuplrEvalReqUUID` |
| `SuplrEvalReqQuestionnaireUUID` | `SuplrEvalReqQuestionnaireUUID` |
| `Language` | `Language` |
| `SuplrEvalReqExternalName` | `SuplrEvalReqExternalName` |

## Associations

> No associations found.

## Source Code

```abap
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'External Name for Supplier Eval Request'
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ISEVREQEXTNAPI01'
define view I_SuplrEvalReqExtNameAPI01
  as select from I_SupplierEvalRequestExtName
{
  key SuplrEvalReqExternalNameUUID,
      SuplrEvalReqUUID,
      SuplrEvalReqQuestionnaireUUID,
      Language,
      SuplrEvalReqExternalName
}
```
