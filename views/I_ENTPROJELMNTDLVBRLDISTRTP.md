---
name: I_ENTPROJELMNTDLVBRLDISTRTP
description: Entprojelmntdlvbrldistrtp
semantic_en: "deliverable distribution of enterprise project element transient projection — shows periodic distribution of deliverable quantities"
semantic_vi: "Hình chiếu thoáng qua phân phối giao dịch của phần tử dự án cấp công ty — hiển thị phân phối kỳ hạn của số lượng giao dịch"
keywords:
  - phân phối giao dịch
  - kỳ hạn
  - số lượng
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
# I_ENTPROJELMNTDLVBRLDISTRTP

**Entprojelmntdlvbrldistrtp**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `EntProjElmntDlvbrlDistrUUID` | `EntProjElmntDlvbrlDistrUUID` |
| `EntProjElmntDeliverableUUID` | `EntProjElmntDeliverableUUID` |
| `ProjectElementUUID` | `ProjectElementUUID` |
| `ProjectUUID` | `ProjectUUID` |
| `EntProjElmntDlvbrlDistrYearVal` | `EntProjElmntDlvbrlDistrYearVal` |
| `EntProjElmntDlvbrlDistrPerdVal` | `EntProjElmntDlvbrlDistrPerdVal` |
| `EntProjElmntDlvbrlDistrQty` | `EntProjElmntDlvbrlDistrQty` |
| `EntProjElmntDlvbrlDistrQtyUnit` | `EntProjElmntDlvbrlDistrQtyUnit` |

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
@EndUserText.label: 'Deliverable Distr of Ent Proj Elmnt - TP'
define view entity I_EntProjElmntDlvbrlDistrTP as projection on R_EntProjElmntDlvbrlDistrTP 
{
    key EntProjElmntDlvbrlDistrUUID,
    EntProjElmntDeliverableUUID,
    ProjectElementUUID,
    ProjectUUID,
    EntProjElmntDlvbrlDistrYearVal,
    EntProjElmntDlvbrlDistrPerdVal,
    @Semantics.quantity.unitOfMeasure : 'EntProjElmntDlvbrlDistrQtyUnit'
    EntProjElmntDlvbrlDistrQty,
    EntProjElmntDlvbrlDistrQtyUnit,
    
    _EntProjElmntDlvbrl                : redirected to parent  I_EntProjElmntDlvbrlTP,
    _EnterpriseProject                 : redirected to I_EnterpriseProjectTP_3,
    _EnterpriseProjectElement          : redirected to I_EnterpriseProjectElementTP_3
}
```
