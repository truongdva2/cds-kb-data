---
name: D_EQUIPCRTEMASSMATLSRLNMBRR
description: D Equipcrtemassmatlsrlnmbrr
semantic_en: "last serial number tracker for mass equipment creation — captures the final serial number assigned in a batch equipment build process."
semantic_vi: "trình theo dõi số seri cuối cùng cho tạo thiết bị hàng loạt — ghi lại số seri cuối cùng được gán trong quá trình xây dựng thiết bị hàng loạt."
keywords:
  - số seri
  - thiết bị
  - tạo hàng loạt
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-EQ
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# D_EQUIPCRTEMASSMATLSRLNMBRR

**D Equipcrtemassmatlsrlnmbrr**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SerialNumber` | `gernr` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@EndUserText.label: 'Abstract Result for Mass Create'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_EquipCrteMassMatlSrlNmbrR
  {
  
  
        //key DummyKey    : abap.char(1);
       @EndUserText.label: 'Last Serial Number'
        SerialNumber: gernr;
  }
```
