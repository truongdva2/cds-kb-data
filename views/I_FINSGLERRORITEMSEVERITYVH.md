---
name: I_FINSGLERRORITEMSEVERITYVH
description: Finsglerroritemseverityvh
semantic_en: "value-help view for GL error item severity — classification for error severity levels"
semantic_vi: "lựa chọn hỗ trợ cho mức độ nghiêm trọng mục lỗi sổ cái — phân loại mức độ nghiêm trọng lỗi"
keywords:
  - lỗi sổ cái
  - mức độ nghiêm trọng
app_component: AC-INT-ECS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AC
  - AC-INT
  - AC-INT-ECS
  - interface-view
  - value-help
  - item-level
  - component:AC-INT-ECS-2CL
  - lob:Other
---
# I_FINSGLERRORITEMSEVERITYVH

**Finsglerroritemseverityvh**

| Property | Value |
|---|---|
| App Component | `AC-INT-ECS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `FinSGLErrorItemSeverity` | `cast( domvalue_l as char1 )` |
| `FinSGLErrorItemSeverityText` | `cast( ddtext as char10 )` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Error Item Severity'
@Metadata.ignorePropagatedAnnotations: true
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}

@ObjectModel: {
  representativeKey: 'FinSGLErrorItemSeverity',
  dataCategory: #VALUE_HELP,
  resultSet: {
    sizeCategory: #XS
  },
  usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #META
  }
}
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #VALUE_HELP_PROVIDER,
                                     #SQL_DATA_SOURCE]
define view entity I_FinSGLErrorItemSeverityVH
  as select from dd07t
{
          @ObjectModel.text.element: ['FinSGLErrorItemSeverityText']
          @UI.textArrangement: #TEXT_ONLY
  key     cast( domvalue_l as char1 ) as FinSGLErrorItemSeverity,
          @Semantics.text:true
          cast( ddtext as char10 )    as FinSGLErrorItemSeverityText
}
where
      domname    = 'GLE_DOM_ECS_ITEM_SEVER_LEVEL'
  and as4local   = 'A'
  and ddlanguage = $session.system_language
```
