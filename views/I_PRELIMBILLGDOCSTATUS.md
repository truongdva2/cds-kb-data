---
name: I_PRELIMBILLGDOCSTATUS
description: Prelimbillgdocstatus
semantic_en: "domain value list for preliminary billing document status — captures codes for different statuses of preliminary billing documents."
semantic_vi: "danh sách giá trị miền cho trạng thái tài liệu lập hóa đơn sơ bộ — chứa các mã trạng thái khác nhau của tài liệu lập hóa đơn sơ bộ."
keywords:
  - trạng thái
  - hóa đơn sơ bộ
  - tài liệu
app_component: SD-BIL-PBD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-PBD
  - interface-view
  - status
  - component:SD-BIL-PBD-2CL
  - lob:Sales & Distribution
  - bo:PreliminaryBillingDocStatus
---
# I_PRELIMBILLGDOCSTATUS

**Prelimbillgdocstatus**

| Property | Value |
|---|---|
| App Component | `SD-BIL-PBD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PrelimBillingDocumentStatus` | `substring(dd07l.domvalue_l, 1, 1)` |
| `DomainValue` | `domvalue_l` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PrelimBillgDocStatusText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.sapObjectNodeType.name: 'PreliminaryBillingDocStatus'
@ObjectModel.representativeKey: 'PrelimBillingDocumentStatus'
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
                                      #SQL_DATA_SOURCE,
                                      #VALUE_HELP_PROVIDER,
                                      #SEARCHABLE_ENTITY ]
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@EndUserText.label: 'Preliminary Billing Document Status'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog: {
  sqlViewName: 'IPRELIMDOCSTA',
  compiler.compareFilter: true,
  preserveKey: true
}
@Search.searchable: true
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations:true 

define view I_PrelimBillgDocStatus as select from dd07l
  
association [0..*] to I_PrelimBillgDocStatusText as _Text on $projection.PrelimBillingDocumentStatus = _Text.PrelimBillingDocumentStatus
{
    @ObjectModel.text.association: '_Text'
    key substring(dd07l.domvalue_l, 1, 1) as PrelimBillingDocumentStatus,
    
    @Analytics.hidden: true
    @Consumption.hidden: true
    @Search.defaultSearchElement: true
    @Search.ranking: #HIGH
    domvalue_l as DomainValue,

//    Associations
    _Text
}
where (dd07l.domname  = 'PBD_STATUS') and (dd07l.as4local = 'A');
```
