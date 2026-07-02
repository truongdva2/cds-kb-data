---
name: I_SALESDOCBLOCKINGREASON
description: Salesdocblockingreason
semantic_en: "Blocking reasons for sales documents — reason codes preventing sales document processing or delivery."
semantic_vi: "Mã lý do khóa tài liệu bán hàng — mã lý do chặn xử lý hoặc giao hàng tài liệu bán hàng."
keywords:
  - khóa đơn hàng
  - lý do chặn
  - ngăn cấm
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
  - bo:SalesDocumentBlockingReason
---
# I_SALESDOCBLOCKINGREASON

**Salesdocblockingreason**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SalesDocumentBlockingReason` | `aufsp` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SalesDocBlockingReasonT` | [0..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Blocking Reason for Sales Document'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.sapObjectNodeType.name: 'SalesDocumentBlockingReason'
@ObjectModel.representativeKey: 'SalesDocumentBlockingReason'
@ObjectModel.modelingPattern:         #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #SEARCHABLE_ENTITY,
                                      #EXTRACTION_DATA_SOURCE ]

@VDM.viewType: #BASIC
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Analytics.dataExtraction.enabled: true
@Search.searchable: true
@Consumption.ranked: true

define view entity I_SalesDocBlockingReason
  as select distinct from tvast

  association [0..*] to I_SalesDocBlockingReasonT as _Text on $projection.SalesDocumentBlockingReason = _Text.SalesDocumentBlockingReason
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.9
      @Search.ranking: #HIGH
  key aufsp as SalesDocumentBlockingReason,

      _Text
}
```
