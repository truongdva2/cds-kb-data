---
name: I_SETTLMTAPPLSTS
description: Settlmtapplsts
semantic_en: "Settlement application status — reference data providing status codes for settlement application processing."
semantic_vi: "Trạng thái ứng dụng quyết toán — dữ liệu tham chiếu cung cấp mã trạng thái cho xử lý ứng dụng quyết toán."
keywords:
  - trạng thái quyết toán
  - mã ứng dụng
  - xử lý quyết toán
app_component: LO-AB
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-AB
  - interface-view
  - component:LO-AB
  - lob:Logistics General
---
# I_SETTLMTAPPLSTS

**Settlmtapplsts**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SettlmtApplSts` | `SettlmtApplSts` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SettlmtApplStsText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Settlement Application Status'  
@AccessControl: {
    authorizationCheck: #NOT_REQUIRED
    }
@ObjectModel: {
    representativeKey: 'SettlmtApplSts',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities : [ #ANALYTICAL_DIMENSION,
                              #CDS_MODELING_ASSOCIATION_TARGET,
                              #SQL_DATA_SOURCE,
                              #CDS_MODELING_DATA_SOURCE ],
    usageType: {
      dataClass:      #CUSTOMIZING,
      serviceQuality: #A,
      sizeCategory:   #S
      }
    }
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Analytics: {
    technicalName: 'IWLFSMTSTATUS',  
    dataCategory: #DIMENSION,
    dataExtraction.enabled: false,
    internalName: #LOCAL
    }
@Metadata.ignorePropagatedAnnotations: true

define root view entity I_SettlmtApplSts
  as select from R_SettlmtApplSts
  
  composition [0..*] of I_SettlmtApplStsText as _Text 

{
      @ObjectModel.text.association: '_Text'
  key SettlmtApplSts,

      /* Associations */
      _Text
}
```
