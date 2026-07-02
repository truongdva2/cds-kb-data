---
name: I_ENTPROJELMNTPUBLICSECTORTP_3
description: Entprojelmntpublicsectortp 3
semantic_en: "public sector data of enterprise project element transient projection — shows fund and grant allocations for project work breakdown structure elements"
semantic_vi: "Hình chiếu thoáng qua dữ liệu khu vực công của phần tử dự án cấp công ty — hiển thị các phân bổ quỹ và trợ cấp cho phần tử cấu trúc phân tích công việc"
keywords:
  - khu vực công
  - quỹ trợ cấp
  - phần tử dự án
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
# I_ENTPROJELMNTPUBLICSECTORTP_3

**Entprojelmntpublicsectortp 3**

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
| `Fund` | `Fund` |
| `FundIsFixAssigned` | `FundIsFixAssigned` |
| `FunctionalAreaIsFixAssigned` | `FunctionalAreaIsFixAssigned` |
| `GrantID` | `GrantID` |
| `GrantIsFixAssigned` | `GrantIsFixAssigned` |
| `SponsoredProgram` | `SponsoredProgram` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl: {
    authorizationCheck:     #CHECK,
    personalData.blocking:  #BLOCKED_DATA_EXCLUDED
}
@VDM: {
    viewType: #TRANSACTIONAL,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    usageType: {
      dataClass:       #MIXED,
      serviceQuality:  #C,
      sizeCategory:    #L
    }
}

@EndUserText.label: 'Public Sector Data of Ent Proj Elmnt – TP'
@Metadata.ignorePropagatedAnnotations:true

define view entity I_EntProjElmntPublicSectorTP_3  as projection on I_EntProjElmntPublicSectorTP_2

{
  key ProjectElementUUID,
      ProjectUUID,     
      Fund,
      FundIsFixAssigned, 
      FunctionalAreaIsFixAssigned,
      GrantID,
      GrantIsFixAssigned,
      SponsoredProgram,
//Association            
      _EnterpriseProjectElement : redirected to parent I_EnterpriseProjectElementTP_3,
      _EnterpriseProject: redirected to I_EnterpriseProjectTP_3

}
```
