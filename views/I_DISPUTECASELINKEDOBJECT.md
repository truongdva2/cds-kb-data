---
name: I_DISPUTECASELINKEDOBJECT
description: Disputecaselinkedobject
semantic_en: "linked objects for dispute cases — tracks relationships between disputes and related business objects."
semantic_vi: "các đối tượng được liên kết cho vụ tranh chấp — theo dõi mối quan hệ giữa tranh chấp và các đối tượng kinh doanh liên quan."
keywords:
  - vụ tranh chấp
  - đối tượng liên kết
  - mối quan hệ
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-DM
  - interface-view
  - dispute
  - component:FIN-FSCM-DM-2CL
  - lob:Other
---
# I_DISPUTECASELINKEDOBJECT

**Disputecaselinkedobject**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `LogicalSystem` | `logsys` |
| `ObjectType` | `obj_type` |
| `ObjectKey` | `obj_key` |
| `RelationToLinkedObject` | `cast ( relation as dispute_relationship preserving type )` |
| `DisputeCaseUUID` | `case_guid_loc` |
| `ObjectClassification` | `classification` |
| `ObjectIsConfirmed` | `is_confirmed` |
| `ObjectIsVoided` | `is_voided` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IDCLNKOBJ',
                compiler: { compareFilter: true } }
//                preserveKey: true }
@AccessControl: { authorizationCheck: #PRIVILEGED_ONLY }
@EndUserText: { label: 'Linked Objects of a Dispute Case' }
@VDM: { viewType: #BASIC,
        lifecycle: { contract: { type: #PUBLIC_LOCAL_API } } }
@ClientHandling: { algorithm: #SESSION_VARIABLE }
@ObjectModel: { usageType: { serviceQuality: #A,
                             sizeCategory: #L,
                             dataClass: #TRANSACTIONAL },
                semanticKey: [ 'LogicalSystem', 
                               'ObjectType', 
                               'ObjectKey', 
                               'RelationToLinkedObject', 
                               'DisputeCaseUUID' ],
                supportedCapabilities:[ #CDS_MODELING_DATA_SOURCE, 
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #EXTRACTION_DATA_SOURCE ],
                sapObjectNodeType: { name: 'DisputeCase' } }
@Metadata.ignorePropagatedAnnotations:true
@Analytics: {
//    dataCategory: #FACT,
//    internalName: #LOCAL,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
    }
}
define view I_DisputeCaseLinkedObject
  as select from fdm_dcobj

{
      // VDM Fields
  key logsys                                                    as LogicalSystem,
  key obj_type                                                  as ObjectType,
  key obj_key                                                   as ObjectKey,
  key cast ( relation as dispute_relationship preserving type ) as RelationToLinkedObject,
  key case_guid_loc                                             as DisputeCaseUUID,

      classification                                            as ObjectClassification,
      is_confirmed                                              as ObjectIsConfirmed,
      is_voided                                                 as ObjectIsVoided

}
```
