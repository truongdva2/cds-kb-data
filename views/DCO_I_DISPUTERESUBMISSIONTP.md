---
name: /DCO/I_DISPUTERESUBMISSIONTP
description: Disputeresubmissiontp
semantic_en: "Dispute resubmission (transactional interface) — a follow-up task on a debt-collections dispute: due date, activity type, status, note text, and lifecycle timestamps for creation, last change, and closing."
semantic_vi: "Giao diện giao dịch tái trình tranh chấp thu hồi nợ — ghi nhận nhiệm vụ theo dõi cho một tranh chấp: ngày đến hạn, loại hoạt động, trạng thái, ghi chú và dấu thời gian vòng đời."
keywords:
  - tái trình tranh chấp
  - thu hồi nợ
  - tranh chấp FSCM
  - hoạt động tranh chấp
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
  - transactional-processing
  - dispute
  - component:FIN-FSCM-DM-2CL
  - lob:Other
---
# /DCO/I_DISPUTERESUBMISSIONTP

**Disputeresubmissiontp**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `DCoDisputeUUID` | `DCoDisputeUUID` |
| `DCoDisputeResubmissionUUID` | `DCoDisputeResubmissionUUID` |
| `DCoDisputeResubmissionDueDate` | `DCoDisputeResubmissionDueDate` |
| `DCoDisputeResubmissionActivity` | `DCoDisputeResubmissionActivity` |
| `DCoDisputeResubmissionStatus` | `DCoDisputeResubmissionStatus` |
| `DCoDisputeResubmissionNoteText` | `DCoDisputeResubmissionNoteText` |
| `DCoDisputeResubmsnCreationUser` | `DCoDisputeResubmsnCreationUser` |
| `DCoDsputResubmsnCrtnDateTime` | `DCoDsputResubmsnCrtnDateTime` |
| `DCoDsputResubmsnLastChgdByUsr` | `DCoDsputResubmsnLastChgdByUsr` |
| `DCoDsputResubmsnLstChgDateTime` | `DCoDsputResubmsnLstChgDateTime` |
| `DCoDisputeResubmsnClosedByUser` | `DCoDisputeResubmsnClosedByUser` |
| `DCoDsputResubmsnClsgDateTime` | `DCoDsputResubmsnClsgDateTime` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText: { label: 'Dispute Resubmission - TP' }
@AccessControl: { authorizationCheck:     #MANDATORY,
                  personalData.blocking:  #BLOCKED_DATA_EXCLUDED }
@VDM: { viewType: #TRANSACTIONAL,
        usage:    { type: [ #TRANSACTIONAL_PROCESSING_SERVICE ] } }
@ObjectModel: { semanticKey: [ 'DCoDisputeResubmissionActivity' ],
                representativeKey: 'DCoDisputeResubmissionUUID',
                modelingPattern: #TRANSACTIONAL_INTERFACE,
                supportedCapabilities: [ #TRANSACTIONAL_PROVIDER,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE ],
                sapObjectNodeType: { name: 'DCoDisputeResubmission' },
                usageType: { dataClass:      #MIXED,
                             sizeCategory:   #L,
                             serviceQuality: #C } }
@Metadata: { allowExtensions:             true,
             ignorePropagatedAnnotations: true }

define view entity /DCO/I_DisputeResubmissionTP
  as projection on /DCO/R_DisputeResubmissionTP
{

      @Semantics: { uuid: true }
      @ObjectModel: { foreignKey: { association: '_Dispute' } }
  key DCoDisputeUUID,

      @Semantics: { uuid: true }
  key DCoDisputeResubmissionUUID,
      DCoDisputeResubmissionDueDate,
      DCoDisputeResubmissionActivity,
      DCoDisputeResubmissionStatus,
      DCoDisputeResubmissionNoteText,

      @Semantics: { user: { createdBy: true } }
      DCoDisputeResubmsnCreationUser,

      @Semantics: { dateTime: true,
                    systemDateTime: { createdAt: true } }
      DCoDsputResubmsnCrtnDateTime,

      @Semantics: { user: { localInstanceLastChangedBy: true } }
      DCoDsputResubmsnLastChgdByUsr,

      @Semantics: { dateTime: true,
                    systemDateTime: { localInstanceLastChangedAt: true } }
      DCoDsputResubmsnLstChgDateTime,

      DCoDisputeResubmsnClosedByUser,

      @Semantics: { dateTime: true }
      DCoDsputResubmsnClsgDateTime,

      // Exposed Associations
      _Dispute : redirected to parent /DCO/I_DisputeTP

}
```
