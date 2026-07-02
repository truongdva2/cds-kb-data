---
name: D_SELECTCUSTOMIZINGTRANSPTREQP
description: D Selectcustomizingtransptreqp
semantic_en: "parameter view for customizing transport request selection — filtering by transport request identifier"
semantic_vi: "chế độ xem tham số để chọn yêu cầu vận chuyển tùy chỉnh — lọc theo mã yêu cầu vận chuyển"
keywords:
  - yêu cầu vận chuyển tùy chỉnh
  - tham số vận chuyển
  - chọn yêu cầu vận chuyển
app_component: BC-CUS-TOL-MBC
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-CUS
  - BC-CUS-TOL
  - component:BC-CUS-TOL-MBC
  - lob:Basis Components
---
# D_SELECTCUSTOMIZINGTRANSPTREQP

**D Selectcustomizingtransptreqp**

| Property | Value |
|---|---|
| App Component | `BC-CUS-TOL-MBC` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TransportRequestID` | `trkorr` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Select Customizing Transport Request'
@VDM.usage.type: [ #ACTION_PARAMETER_STRUCTURE]
define abstract entity D_SelectCustomizingTransptReqP
{
      @Consumption.valueHelpDefinition:
      [
        { entity.name    : 'C_OpenCustomizingRequestVH',
          entity.element : 'TransportRequestID',
          label          : 'Select Customizing Transport Request' }
      ]
  @EndUserText.label: 'Customizing Transport Request'    
  key TransportRequestID : trkorr;
}
```
