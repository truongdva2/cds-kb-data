---
name: I_CACREDITWORTHINESS
description: Cacreditworthiness
semantic_en: "contract accounting creditworthiness — parameterized projection extracting creditworthiness values across manual, frozen, and external sources with audit timestamps."
semantic_vi: "tín dụng kế toán hợp đồng — chiếu dữ liệu có tham số trích xuất các giá trị tín dụng từ các nguồn thủ công, đã đóng băng và bên ngoài cùng với dấu thời gian kiểm toán."
keywords:
  - creditworthiness
  - tín dụng
  - kế toán hợp đồng
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - credit
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CACREDITWORTHINESS

**Cacreditworthiness**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BusinessPartner` | `BusinessPartner` |
| `CAManualCreditWorthinessValue` | `CAManualCreditWorthinessValue` |
| `CACreditWorthinessFactorInPct` | `CACreditWorthinessFactorInPct` |
| `CAManualCreditWorthinessDate` | `CAManualCreditWorthinessDate` |
| `CAFrozenCreditWorthinessValue` | `case…end` |
| `CAFrozenCreditWorthinessDate` | `CAFrozenCreditWorthinessDate` |
| `CAUnfrozenCreditWorthinessDate` | `CAUnfrozenCreditWorthinessDate` |
| `CAExternalCreditWorthinessVal` | `CAExternalCreditWorthinessVal` |
| `CAExternalCreditWorthinessDate` | `CAExternalCreditWorthinessDate` |
| `CALastReplicatedCrdtWrthnssVal` | `CALastReplicatedCrdtWrthnssVal` |
| `CreationDate` | `CreationDate` |
| `CreationTime` | `CreationTime` |
| `LastChangeDate` | `LastChangeDate` |
| `LastChangeTime` | `LastChangeTime` |
| `CACreditWorthinessIsFrozen` | `CACreditWorthinessIsFrozen` |
| `_BusinessPartner` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData: { blocking: #REQUIRED,
                                  blockingIndicator: ['_BusinessPartner.IsBusinessPurposeCompleted'] } }

@Analytics: { dataCategory: #DIMENSION,
              internalName: #LOCAL,  
              dataExtraction: { enabled: true,
                                delta: { byElement : { name: 'LastChangeDate', 
                                                       maxDelayInSeconds : 300 } } } }

@EndUserText.label: 'Contract Accounting Creditworthiness'

@Metadata: { ignorePropagatedAnnotations: true,
             allowExtensions:true }
             
@ObjectModel: { modelingPattern:#ANALYTICAL_DIMENSION,
                representativeKey: 'BusinessPartner',
                sapObjectNodeType.name: 'ContrAcctgCreditWorthiness',
                supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                         #ANALYTICAL_PROVIDER,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],                               
                usageType:{ dataClass: #TRANSACTIONAL,
                            serviceQuality: #B,
                            sizeCategory: #L } }
 
@VDM.viewType: #COMPOSITE

define view entity I_CACreditWorthiness
  as select from P_CACreditWorthinessMaxYear

{
  key BusinessPartner,
      CAManualCreditWorthinessValue,
      CACreditWorthinessFactorInPct,
      CAManualCreditWorthinessDate,
      case CACreditWorthinessIsFrozen
        when 'X' then CAFrozenCreditWorthinessValue
        else '0000'
      end as CAFrozenCreditWorthinessValue,
      CAFrozenCreditWorthinessDate,
      CAUnfrozenCreditWorthinessDate,
      CAExternalCreditWorthinessVal,
      CAExternalCreditWorthinessDate,
      CALastReplicatedCrdtWrthnssVal,
      CreationDate,
      CreationTime,
      LastChangeDate,
      LastChangeTime,
      CACreditWorthinessIsFrozen,

      /* Associations */
      _BusinessPartner
}
```
