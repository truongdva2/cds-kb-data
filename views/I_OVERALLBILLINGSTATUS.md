---
name: I_OVERALLBILLINGSTATUS
description: Overallbillingstatus
semantic_en: "billing status reference — provides domain values for overall billing document completion statuses."
semantic_vi: "tham chiếu trạng thái hóa đơn — cung cấp các giá trị tên miền cho các trạng thái hoàn thành tài liệu hóa đơn tổng thể."
keywords:
  - trạng thái hóa đơn
  - tài liệu
  - hoàn thành
app_component: SD-BIL-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-GF
  - interface-view
  - billing
  - status
  - component:SD-BIL-GF-2CL
  - lob:Sales & Distribution
  - bo:OverallBillingDocumentStatus
---
# I_OVERALLBILLINGSTATUS

**Overallbillingstatus**

| Property | Value |
|---|---|
| App Component | `SD-BIL-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `OverallBillingStatus` | `cast(substring(domvalue_l, 1, 1) as vf_status preserving type)` |
| `DomainValue` | `domvalue_l` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_OverallBillingStatusText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.sapObjectNodeType.name: 'OverallBillingDocumentStatus'
@ObjectModel.representativeKey: 'OverallBillingStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.resultSet.sizeCategory: #XS 
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern:         #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SEARCHABLE_ENTITY,
                                      #SQL_DATA_SOURCE,
                                      #VALUE_HELP_PROVIDER ]
@EndUserText.label: 'Overall Billing Status'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog: {
  sqlViewName: 'ISDOVLBLLGSTS',
  preserveKey: true
}
@Search.searchable: true
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true

define view I_OverallBillingStatus
as select from dd07l

association [0..*] to I_OverallBillingStatusText as _Text on $projection.OverallBillingStatus = _Text.OverallBillingStatus
{
    @ObjectModel.text.association: '_Text'
    key cast(substring(domvalue_l, 1, 1) as vf_status preserving type) as OverallBillingStatus,
    @Analytics.hidden: true
    @Consumption.hidden: true
    @Search.defaultSearchElement: true
    @Search.ranking: #HIGH
    domvalue_l as DomainValue,    
    _Text
}
where (dd07l.domname = 'VF_STATUS') and (dd07l.as4local = 'A');
```
