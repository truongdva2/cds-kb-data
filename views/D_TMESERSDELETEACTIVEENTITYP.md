---
name: D_TMESERSDELETEACTIVEENTITYP
description: D Tmesersdeleteactiveentityp
semantic_en: "parameterized workflow view — time series delete operation parameter indicating whether time series with assignments is deleted"
semantic_vi: "chế độ xem quy trình công việc được tham số hóa — tham số hoạt động xóa chuỗi thời gian cho biết chuỗi thời gian có gán được xóa hay không"
keywords:
  - xóa chuỗi thời gian
  - gán chuỗi thời gian
  - quy trình công việc
app_component: CA-ATP-PAL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-ATP
  - CA-ATP-PAL
  - component:CA-ATP-PAL-2CL
  - lob:Cross-Application Components
---
# D_TMESERSDELETEACTIVEENTITYP

**D Tmesersdeleteactiveentityp**

| Property | Value |
|---|---|
| App Component | `CA-ATP-PAL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TmeSersWthAssgmtIsDeltd` | `tmeserswthassgmtisdeltd` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Time Series Delete Active Entity Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
define abstract entity D_TmeSersDeleteActiveEntityP
{
    TmeSersWthAssgmtIsDeltd : tmeserswthassgmtisdeltd;    
}
```
