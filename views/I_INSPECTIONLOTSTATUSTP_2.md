---
name: I_INSPECTIONLOTSTATUSTP_2
description: Inspectionlotstatustp 2
semantic_en: "transient-projected status view for inspection lots — provides status code and object via transient projection"
semantic_vi: "dạng xem trạng thái chiếu quá độ cho lô kiểm tra — cung cấp mã và đối tượng trạng thái qua chiếu quá độ"
keywords:
  - trạng thái lô
  - chiếu quá độ
  - mã trạng thái
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - transactional-processing
  - inspection
  - status
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPECTIONLOTSTATUSTP_2

**Inspectionlotstatustp 2**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `InspectionLot` | `InspectionLot` |
| `StatusCode` | `StatusCode` |
| `StatusObject` | `StatusObject` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Inspection Lot Status - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #TRANSACTIONAL
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
 modelingPattern: #TRANSACTIONAL_INTERFACE,
 supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
 usageType:{
  serviceQuality: #B,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL }
  }
  
define view entity I_InspectionLotStatusTP_2 as projection on R_InspectionLotStatusTP {
  key InspectionLot,
  key StatusCode,
  StatusObject,
  
  /* Associations */
  _InspectionLot: redirected to parent I_InspectionLotTP_2

}
```
