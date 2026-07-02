---
name: I_ENTPROJELMNTDLVBRLTP
description: Entprojelmntdlvbrltp
semantic_en: "deliverable of enterprise project element transient projection — shows deliverable quantities and types for project work breakdown structure elements"
semantic_vi: "Hình chiếu thoáng qua giao dịch của phần tử dự án cấp công ty — hiển thị số lượng và loại giao dịch cho phần tử cấu trúc phân tích công việc"
keywords:
  - giao dịch
  - phần tử dự án
  - loại
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - interface-view
  - transactional-processing
  - component:PPM-SCL-STR
  - lob:Other
---
# I_ENTPROJELMNTDLVBRLTP

**Entprojelmntdlvbrltp**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `EntProjElmntDeliverableUUID` | `EntProjElmntDeliverableUUID` |
| `ProjectElementUUID` | `ProjectElementUUID` |
| `ProjectUUID` | `ProjectUUID` |
| `EntProjElmntDeliverableType` | `EntProjElmntDeliverableType` |
| `EntProjElmntDlvbrlQuantity` | `EntProjElmntDlvbrlQuantity` |
| `EntProjElmntDlvbrlQuantityUnit` | `EntProjElmntDlvbrlQuantityUnit` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDateTime` | `CreationDateTime` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `LastChangedByUser` | `LastChangedByUser` |

## Associations

> No associations found.

## Source Code

```abap
@VDM:{
    viewType: #TRANSACTIONAL,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
    authorizationCheck:     #MANDATORY,
    personalData.blocking:  #BLOCKED_DATA_EXCLUDED
}
@ObjectModel: {
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE,
    usageType: {
      dataClass:       #MIXED,
      serviceQuality:  #C,
      sizeCategory:    #XL
    }
}

@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Deliverable of Ent Project Element - TP'
define view entity I_EntProjElmntDlvbrlTP as projection on R_EntProjElmntDlvbrlTP 
{
    key EntProjElmntDeliverableUUID,
    ProjectElementUUID,
    ProjectUUID,
    EntProjElmntDeliverableType,
    @Semantics.quantity.unitOfMeasure : 'EntProjElmntDlvbrlQuantityUnit'
    EntProjElmntDlvbrlQuantity,
    EntProjElmntDlvbrlQuantityUnit,
    //admin data
    CreatedByUser,
    CreationDateTime,
    LastChangeDateTime,
    LastChangedByUser,
    
    _EnterpriseProjectElement              : redirected to parent I_EnterpriseProjectElementTP_3,
    _EnterpriseProject                     : redirected to I_EnterpriseProjectTP_3,
    _EntProjElmntDlvDistr                  : redirected to composition child I_EntProjElmntDlvbrlDistrTP
    
}
```
