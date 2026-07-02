---
name: I_PPM_AUTHZNBYSUBSTITH
description: Ppm Authznbysubstith
semantic_en: "project authorization information by user substitution — maps substituted users and their delegated activities to project objects."
semantic_vi: "thông tin cấp phép dự án theo sự thay thế người dùng — ánh xạ người dùng được thay thế và các hoạt động được ủy quyền của họ tới các đối tượng dự án."
keywords:
  - cấp phép dự án
  - thay thế người dùng
  - ủy quyền
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
  - component:PPM-SCL-STR
  - lob:Other
---
# I_PPM_AUTHZNBYSUBSTITH

**Ppm Authznbysubstith**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ReferencedObjectUUID` | `hier.object_id` |
| `Activity` | `usr.activity` |
| `UserID` | `sub.user_id_subst` |
| `SubstitutedUser` | `sub.user_id` |
| `ObjectType` | `usr.type` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPMAUTHZNSBSTH'
@VDM.viewType: #BASIC

@AbapCatalog.compiler.compareFilter: true

@AccessControl.authorizationCheck:      #NOT_REQUIRED
@AccessControl.personalData.blocking:   #BLOCKED_DATA_EXCLUDED

@ClientHandling.algorithm:#SESSION_VARIABLE

@ObjectModel: {
   supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET ],
   modelingPattern: [ #NONE ],
   usageType: {
       serviceQuality:  #A,
       dataClass:       #MIXED,
       sizeCategory:    #L
   }
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API
@EndUserText.label: 'Project Authorizations by Substitution'
// PPM Object Authorization for a user by substitution inclduing inherited authorizations
define view I_PPM_AuthznBySubstitH as 
    select from aco_user            as usr
        inner join aco_substitute   as sub      on usr.user_id   = sub.user_id
                                               and usr.object_id = sub.object_id
        // get all inherited authorizations by join with table containing all inherited_from objects
        inner join /s4ppm/auth_ref   as hier    on usr.object_id = hier.inherited_from
{
  key hier.object_id     as ReferencedObjectUUID,
  key usr.activity       as Activity,

//      @Semantics.user.id: true
  key sub.user_id_subst  as UserID,
  key sub.user_id        as SubstitutedUser,
      usr.type           as ObjectType
}
```
