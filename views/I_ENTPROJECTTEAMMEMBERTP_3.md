---
name: I_ENTPROJECTTEAMMEMBERTP_3
description: Entprojectteammembertp 3
semantic_en: "team member of enterprise project transient projection — shows project team member relationships with business partners and audit trail"
semantic_vi: "Hình chiếu thoáng qua thành viên nhóm của dự án cấp công ty — hiển thị mối quan hệ thành viên nhóm dự án với đối tác kinh doanh"
keywords:
  - thành viên nhóm
  - dự án
  - đối tác
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
  - project
  - component:PPM-SCL-STR
  - lob:Other
  - bo:Project
---
# I_ENTPROJECTTEAMMEMBERTP_3

**Entprojectteammembertp 3**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TeamMemberUUID` | `TeamMemberUUID` |
| `BusinessPartnerUUID` | `BusinessPartnerUUID` |
| `ProjectUUID` | `ProjectUUID` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDateTime` | `CreationDateTime` |
| `LastChangedByUser` | `LastChangedByUser` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `_EnterpriseProjectForUser` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@Metadata.ignorePropagatedAnnotations:true
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
         serviceQuality:  #C,
         dataClass:       #MIXED,
         sizeCategory:    #L
   } 
  }

@EndUserText.label: 'Team Member of Enterprise Project – TP'

define view entity I_EntProjectTeamMemberTP_3
  as projection on R_EntProjectTeamMemberTP

{
  key TeamMemberUUID,
      BusinessPartnerUUID,
      ProjectUUID,
      CreatedByUser,
      CreationDateTime,
      LastChangedByUser,
      LastChangeDateTime,
//Association      
      _EnterpriseProject : redirected to parent I_EnterpriseProjectTP_3,
      _EntProjEntitlement: redirected to composition child I_EntProjTeamMbrEntlmntTP_3,
      _EnterpriseProjectForUser
}
```
