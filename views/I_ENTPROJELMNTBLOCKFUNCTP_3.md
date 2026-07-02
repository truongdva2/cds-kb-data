---
name: I_ENTPROJELMNTBLOCKFUNCTP_3
description: Entprojelmntblockfunctp 3
semantic_en: "blocked functions of enterprise project element transient projection — indicates which functions are blocked for elements in time recording, expense, service, and purchasing"
semantic_vi: "Hình chiếu thoáng qua hàm bị khóa của phần tử dự án cấp công ty — cho biết các hàm nào bị khóa cho phần tử trong ghi thời gian, chi phí, dịch vụ và mua hàng"
keywords:
  - hàm bị khóa
  - phần tử dự án
  - ghi thời gian
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
# I_ENTPROJELMNTBLOCKFUNCTP_3

**Entprojelmntblockfunctp 3**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ProjectElementUUID` | `ProjectElementUUID` |
| `ProjectUUID` | `ProjectUUID` |
| `EntProjTimeRecgIsBlkd` | `EntProjTimeRecgIsBlkd` |
| `EntProjStaffExpensePostgIsBlkd` | `EntProjStaffExpensePostgIsBlkd` |
| `EntProjServicePostingIsBlkd` | `EntProjServicePostingIsBlkd` |
| `EntProjOtherExpensePostgIsBlkd` | `EntProjOtherExpensePostgIsBlkd` |
| `EntProjPurchasingIsBlkd` | `EntProjPurchasingIsBlkd` |
| `_EnterpriseProjectForUser` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Blocked Functions of Ent Proj Elmnt - TP'

@AccessControl: {
    authorizationCheck:     #CHECK,
    personalData.blocking:  #BLOCKED_DATA_EXCLUDED
}
@ObjectModel: {
    semanticKey:       [ 'ProjectElementUUID' ],
    representativeKey: 'ProjectElementUUID',
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    usageType: {
      dataClass:       #MIXED,
      serviceQuality:  #C,
      sizeCategory:    #L
    }
}

@VDM: {
    viewType: #TRANSACTIONAL,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Metadata.ignorePropagatedAnnotations:true

define view entity I_EntProjElmntBlockFuncTP_3 as projection on R_EntProjElmntBlockFuncTP_2
{
 key   ProjectElementUUID, 
      ProjectUUID,
      EntProjTimeRecgIsBlkd,
      EntProjStaffExpensePostgIsBlkd,
      EntProjServicePostingIsBlkd,
      EntProjOtherExpensePostgIsBlkd,
      EntProjPurchasingIsBlkd,
//Association      
      _EnterpriseProjectElement : redirected to parent I_EnterpriseProjectElementTP_3,
      _EnterpriseProject: redirected to I_EnterpriseProjectTP_3,
      _EnterpriseProjectForUser    
}
```
