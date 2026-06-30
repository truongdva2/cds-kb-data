---
name: C_PRMTHBRPLDPURREQNWRKFLWEML
description: Prmthbrpldpurreqnwrkflweml
semantic_en: "Procurement Hub replicated purchase requisition workflow deadline email data provider — supplies workflow task ID, requisition number, type, source system, and task creation/due timestamps for generating workflow deadline reminder emails at requisition header level."
semantic_vi: "Nhà cung cấp dữ liệu email nhắc nhở hạn chót quy trình yêu cầu mua hàng sao chép từ Procurement Hub — cung cấp ID nhiệm vụ quy trình, số yêu cầu mua hàng, loại, hệ thống nguồn và mốc thời gian nhiệm vụ để tạo email nhắc nhở hạn chót quy trình cấp tiêu đề."
keywords:
  - email hạn chót yêu cầu mua hàng
  - quy trình phê duyệt
  - Procurement Hub
  - purchase requisition deadline email
app_component: MM-PUR-HUB-PR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - consumption-view
  - workflow
  - component:MM-PUR-HUB-PR-2CL
  - lob:Sourcing & Procurement
---
# C_PRMTHBRPLDPURREQNWRKFLWEML

**Prmthbrpldpurreqnwrkflweml**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `WorkflowTaskInternalID` | `_Workflowtask.WorkflowTaskInternalID` |
| `ProcmtHubPurchaseRequisition` | `cast(…)` |
| `ProcmtHubPurRequisitionType` | `_PurchaseRequisition.ProcmtHubPurRequisitionType` |
| `ProcurementHubSourceSystem` | `_PurchaseRequisition.ProcurementHubSourceSystem` |
| `PrmtHbWrkflwTskCrtnUTCDte` | `cast(…)` |
| `PrmtHbWrkflwTskCrtnUTCTme` | `cast(…)` |
| `PrmtHbWrkflwTskDuUTCDte` | `cast(…)` |
| `PrmtHbWrkflwTskDuUTCTme` | `cast(…)` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CPURREQNWFLEML'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Purchase Requisition Details for Workflow Deadline Email'

@VDM.viewType : #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType : {
  serviceQuality: #D,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.supportedCapabilities: #OUTPUT_EMAIL_DATA_PROVIDER
@ObjectModel.modelingPattern : #NONE
@Metadata.ignorePropagatedAnnotations:true

define view C_PrmtHbRpldPurReqnWrkflwEml
  as select from            I_WorkflowTask               as _Workflowtask

    inner join I_WorkflowTaskApplObject     as _WorkflowTaskApplObject  on  _WorkflowTaskApplObject.WorkflowTaskInternalID        = _Workflowtask.WorkflowTaskInternalID
                                                                                     and _WorkflowTaskApplObject.WorkflowObjectRole            = '99'
                                                                                     and _WorkflowTaskApplObject.SAPObjectNodeRepresentation   = 'PrmtHbRpldPurchaseRequisition'
                                                                                     and _WorkflowTaskApplObject.TechnicalWrkflwObjectCategory = 'CL'

    left outer to one join  I_PrmtHbRpldPurchaseReqnAPI01 as _PurchaseRequisition on _PurchaseRequisition.ProcmtHubPurchaseRequisition = _WorkflowTaskApplObject.SAPBusinessObjectNodeKey1

{
  key _Workflowtask.WorkflowTaskInternalID,

      cast(substring(_WorkflowTaskApplObject.TechnicalWrkflwObject, 1 , 10 ) as banfn )                             as ProcmtHubPurchaseRequisition,

      _PurchaseRequisition.ProcmtHubPurRequisitionType                                                              as ProcmtHubPurRequisitionType,

      _PurchaseRequisition.ProcurementHubSourceSystem                                                               as ProcurementHubSourceSystem,

      cast(tstmp_to_dats( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lsd ) as PrmtHbWrkflwTskCrtnUTCDte,

      cast(tstmp_to_tims( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lst ) as PrmtHbWrkflwTskCrtnUTCTme,

      cast(tstmp_to_dats( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_led )    as PrmtHbWrkflwTskDuUTCDte,

      cast(tstmp_to_tims( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_let )    as PrmtHbWrkflwTskDuUTCTme

}
```
