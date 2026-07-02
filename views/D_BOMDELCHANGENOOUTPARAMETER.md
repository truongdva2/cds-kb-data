---
name: D_BOMDELCHANGENOOUTPARAMETER
description: D Bomdelchangenooutparameter
semantic_en: "Result for deleting BOM with change number — BOMIsSuccessfulDeleted flag"
semantic_vi: "Kết quả xóa BOM với số thay đổi — cờ BOM đã xóa thành công"
keywords:
  - BOM
  - xóa
  - thay đổi
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BOM
  - bom
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
---
# D_BOMDELCHANGENOOUTPARAMETER

**D Bomdelchangenooutparameter**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BOMIsSuccessfulDeleted` | `boolean` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'BOM deletion with change number result'
@ObjectModel: { 
  supportedCapabilities: [#DATA_STRUCTURE],
  modelingPattern: #DATA_STRUCTURE      
 }
define abstract entity D_BOMDelChangeNoOutParameter {
  //  DeletionStatus : abap.string( 256 ),
    BOMIsSuccessfulDeleted :  boolean;   
}
```
