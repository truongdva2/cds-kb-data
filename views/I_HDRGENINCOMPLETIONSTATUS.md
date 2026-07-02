---
name: I_HDRGENINCOMPLETIONSTATUS
description: Hdrgenincompletionstatus
semantic_en: "header general incompletion status — domain values for tracking overall incompletion status at the sales document header level."
semantic_vi: "trạng thái không hoàn thành chung tiêu đề — các giá trị miền để theo dõi trạng thái không hoàn thành tổng thể ở cấp tiêu đề tài liệu bán hàng."
keywords:
  - trạng thái không hoàn thành
  - chung
  - tiêu đề
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
  - status
  - header-level
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
  - bo:SlsDocGenIncompletionStatus
---
# I_HDRGENINCOMPLETIONSTATUS

**Hdrgenincompletionstatus**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `HdrGeneralIncompletionStatus` | `cast(…)` |
| `DomainValue` | `domvalue_l` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_HdrGenIncompletionStatusT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC

@AccessControl.authorizationCheck:  #NOT_REQUIRED

@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }

@ObjectModel: {
  dataCategory: #VALUE_HELP,
  representativeKey: 'HdrGeneralIncompletionStatus',
  usageType: {
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S
  }, 
  resultSet.sizeCategory: #XS,
  supportedCapabilities: [ #ANALYTICAL_DIMENSION, 
                           #EXTRACTION_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET, 
                           #SQL_DATA_SOURCE, 
                           #CDS_MODELING_DATA_SOURCE,
                           #VALUE_HELP_PROVIDER, 
                           #SEARCHABLE_ENTITY ],
  modelingPattern: #ANALYTICAL_DIMENSION
}

@AbapCatalog: {
  sqlViewName: 'ISDHDGENINCLSTS',
  preserveKey: true
}

@ObjectModel.sapObjectNodeType.name: 'SlsDocGenIncompletionStatus'
@Search.searchable: true

@Consumption.ranked: true

@Metadata.ignorePropagatedAnnotations:true

@EndUserText.label: 'Header General Incompletion Status'
define view I_HdrGenIncompletionStatus
as select from dd07l 

association [0..*] to I_HdrGenIncompletionStatusT as _Text on $projection.HdrGeneralIncompletionStatus = _Text.HdrGeneralIncompletionStatus
{
    @ObjectModel.text.association: '_Text'
    key cast( substring (dd07l.domvalue_l, 1, 1) as hdr_general_incompltn_status preserving type ) as HdrGeneralIncompletionStatus,
    
    @Analytics.hidden: true
    @Consumption.hidden: true
    @Search.defaultSearchElement: true
    @Search.ranking: #HIGH
    domvalue_l as DomainValue,
    
    _Text  
}
where (dd07l.domname = 'STATV') and (dd07l.as4local = 'A')
  and ((dd07l.domvalue_l = 'A') or (dd07l.domvalue_l = 'C'));
```
