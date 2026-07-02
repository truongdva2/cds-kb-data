---
name: I_MAXDOCVALUECREDITCHECKSTS
description: Maxdocvaluecreditchecksts
semantic_en: "Maximum document value credit check status — domain values for credit limit validation status on sales documents."
semantic_vi: "Trạng thái kiểm tra tín dụng giá trị tài liệu tối đa — giá trị miền cho trạng thái xác thực giới hạn tín dụng trên tài liệu bán hàng."
keywords:
  - kiểm tra tín dụng
  - giá trị tài liệu
  - trạng thái
app_component: SD-BF-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-CM
  - interface-view
  - credit
  - component:SD-BF-CM-2CL
  - lob:Sales & Distribution
  - bo:MaxDocValueCreditCheckStatus
---
# I_MAXDOCVALUECREDITCHECKSTS

**Maxdocvaluecreditchecksts**

| Property | Value |
|---|---|
| App Component | `SD-BF-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `MaxDocValueCreditCheckStatus` | `substring(dd07l.domvalue_l, 1, 1)` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MaxDocValueCreditCheckStsT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'MaxDocValueCreditCheckStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]
@EndUserText.label: 'Maximum Document Value Credit Check Status'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDMDVACRDCKSTS'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'MaxDocValueCreditCheckStatus'

define view I_MaxDocValueCreditCheckSts 
as select from dd07l

association [0..*] to I_MaxDocValueCreditCheckStsT as _Text on $projection.MaxDocValueCreditCheckStatus = _Text.MaxDocValueCreditCheckStatus
{
    @ObjectModel.text.association: '_Text'
    key substring(dd07l.domvalue_l, 1, 1) as MaxDocValueCreditCheckStatus,
    
    //Associations
    _Text
}
where (dd07l.domname = 'CMPSZ') and (dd07l.as4local = 'A');
```
