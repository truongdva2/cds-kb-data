---
name: I_TRANSPORTATIONRATETABLETP
description: Transportationratetabletp
semantic_en: "transportation rate table — rate table definition with value type, charge type, sign type, and audit timestamps"
semantic_vi: "bảng cước phí vận chuyển — định nghĩa bảng cước phí với loại giá trị, loại cước, ký hiệu, và dấu thời gian"
keywords:
  - bảng cước phí
  - định nghĩa
  - dấu thời gian
app_component: TM-MD-CM-RA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-MD
  - TM-MD-CM
  - interface-view
  - transactional-processing
  - transport
  - component:TM-MD-CM-RA-2CL
  - lob:Other
---
# I_TRANSPORTATIONRATETABLETP

**Transportationratetabletp**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TransportationRateTableUUID` | `TransportationRateTableUUID` |
| `TranspRateTableID` | `TranspRateTableID` |
| `TranspRateTableDesc` | `TranspRateTableDesc` |
| `TranspRateTableChangedOnDteTme` | `TranspRateTableChangedOnDteTme` |
| `TranspRateTblCreatedOnDateTime` | `TranspRateTblCreatedOnDateTime` |
| `TranspRateTableChangedBy` | `TranspRateTableChangedBy` |
| `TranspRateTableCreatedBy` | `TranspRateTableCreatedBy` |
| `TranspRateTableValueType` | `TranspRateTableValueType` |
| `TranspChargeType` | `TranspChargeType` |
| `TranspRateTableSignType` | `TranspRateTableSignType` |
| `TranspRateTableTimeZone` | `TranspRateTableTimeZone` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Rate Table - TP'
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #MIXED
   },
  sapObjectNodeType.name: 'TransportationRateTable' }
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@OData.entityType.name: 'TransportationRateTable_Type'
define root view entity I_TransportationRateTableTP
  provider contract transactional_interface
  as projection on R_TranspRateTableTP as TransportationRateTable
{
  key TransportationRateTableUUID,
      TranspRateTableID,
      TranspRateTableDesc,
      TranspRateTableChangedOnDteTme,
      TranspRateTblCreatedOnDateTime,
      TranspRateTableChangedBy,
      TranspRateTableCreatedBy,
      TranspRateTableValueType,
      TranspChargeType,
      TranspRateTableSignType,
      TranspRateTableTimeZone,

      //      TransportationRateType,
      /* Associations */

      TransportationRateTable._TranspRateTableScaleRef     : redirected to composition child I_TranspRateTableScaleRefTP,
      TransportationRateTable._TranspRateTableValidity     : redirected to composition child I_TranspRateTableValidityTP,
      TransportationRateTable._TranspRateTableOrganization : redirected to composition child I_TranspRateTableOrgTP

}
```
