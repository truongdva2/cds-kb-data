---
name: I_TRANSPRATETABLEORGTP
description: Transpratetableorgtp
semantic_en: "Rate table organization - TP — third-party projection linking rate table to purchasing organization external identifiers."
semantic_vi: "Tổ chức bảng tỷ giá - TP — chiếu bên thứ ba liên kết bảng tỷ giá với mã định danh bên ngoài tổ chức mua hàng."
keywords:
  - bảng tỷ giá vận chuyển
  - tổ chức mua hàng
  - bên thứ ba
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
  - component:TM-MD-CM-RA-2CL
  - lob:Other
---
# I_TRANSPRATETABLEORGTP

**Transpratetableorgtp**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TranspRateTableOrgUUID` | `TranspRateTableOrgUUID` |
| `TransportationRateTableUUID` | `TransportationRateTableUUID` |
| `TranspPurgOrgExtID` | `TranspPurgOrgExtID` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Rate Table Organization - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #MIXED
  },
  sapObjectNodeType.name: 'TranspRateTableOrganization'
 }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@OData.entityType.name: 'TranspRateTableOrganization_Type'
define view entity I_TranspRateTableOrgTP
  as projection on R_TranspRateTableOrgTP as TranspRateTableOrganization
{
  key TranspRateTableOrgUUID,
      TransportationRateTableUUID,
      TranspPurgOrgExtID,
     // OrganizationalUnitName,
    
      TranspRateTableOrganization._TransportationRateTable : redirected to parent I_TransportationRateTableTP

}
```
