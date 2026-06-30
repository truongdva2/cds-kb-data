---
name: C_CNTRLSUPLRCONFWRKFLWDDLNEML
description: Cntrlsuplrconfwrkflwddlneml
semantic_en: "Email/workflow template — central supplier confirmation deadline notification — email data-provider view supplying workflow task ID, confirmation number, purchasing document type, source system, and task creation/due date-time for deadline reminder emails."
semantic_vi: "Mẫu email/quy trình — thông báo hạn chót xác nhận nhà cung cấp trung tâm — view cung cấp dữ liệu email, gồm ID nhiệm vụ quy trình, số xác nhận, loại tài liệu mua hàng, hệ thống nguồn và ngày giờ tạo/hạn của nhiệm vụ cho email nhắc nhở hạn chót."
keywords:
  - thông báo hạn chót xác nhận nhà cung cấp
  - email quy trình mua hàng
  - xác nhận trung tâm
  - nhắc nhở deadline mua hàng
app_component: MM-PUR-HUB-CSC-2CL
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
  - component:MM-PUR-HUB-CSC-2CL
  - lob:Sourcing & Procurement
---
# C_CNTRLSUPLRCONFWRKFLWDDLNEML

**Cntrlsuplrconfwrkflwddlneml**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CSC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `WorkflowTaskInternalID` | `_Workflowtask.WorkflowTaskInternalID` |
| `CentralSupplierConfirmation` | `cast(…)` |
| `PurchasingDocumentType` | `_CntrlSupplierConfirmation.PurchasingDocumentType` |
| `ExtSourceSystem` | `_CntrlSupplierConfirmation.ProcurementHubSourceSystem` |
| `PrmtHbWrkflwTskCrtnUTCDte` | `cast(…)` |
| `PrmtHbWrkflwTskCrtnUTCTme` | `cast(…)` |
| `PrmtHbWrkflwTskDuUTCDte` | `cast(…)` |
| `PrmtHbWrkflwTskDuUTCTme` | `cast(…)` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CCSCWFLDLNEML'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Deadline Notif of Cntrl Confirmation'
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.viewType : #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType : {
  serviceQuality: #D,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.modelingPattern: #OUTPUT_EMAIL_DATA_PROVIDER
@ObjectModel.supportedCapabilities: [ #OUTPUT_EMAIL_DATA_PROVIDER ]
@Metadata.ignorePropagatedAnnotations:true

define view C_CntrlSuplrConfWrkflwDdlnEml
  as select from            I_WorkflowTask                as _Workflowtask
    left outer to many join I_WorkflowTaskApplObject      as _WorkflowTaskApplObject    on  _WorkflowTaskApplObject.WorkflowTaskInternalID        = _Workflowtask.WorkflowTaskInternalID
                                                                                        and _WorkflowTaskApplObject.WorkflowObjectRole            = '99'
                                                                                        and _WorkflowTaskApplObject.SAPObjectNodeRepresentation   = 'CentralSupplierConfirmation'
                                                                                        and _WorkflowTaskApplObject.TechnicalWrkflwObjectCategory = 'CL'

    left outer to one join  R_CntrlSupplierConfirmationTP as _CntrlSupplierConfirmation on _CntrlSupplierConfirmation.CentralSupplierConfirmation = _WorkflowTaskApplObject.SAPBusinessObjectNodeKey1
{
  key _Workflowtask.WorkflowTaskInternalID,
      cast(substring(_WorkflowTaskApplObject.TechnicalWrkflwObject, 1 , 10 ) as ebeln )                             as CentralSupplierConfirmation,
      _CntrlSupplierConfirmation.PurchasingDocumentType                                                             as PurchasingDocumentType,
      _CntrlSupplierConfirmation.ProcurementHubSourceSystem                                                         as ExtSourceSystem,
      cast(tstmp_to_dats( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lsd ) as PrmtHbWrkflwTskCrtnUTCDte,
      cast(tstmp_to_tims( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lst ) as PrmtHbWrkflwTskCrtnUTCTme,
      cast(tstmp_to_dats( _TaskDueDate.WorkflowTaskDueUTCDateTime,    'UTC', $session.client, 'NULL' ) as sww_led ) as PrmtHbWrkflwTskDuUTCDte,
      cast(tstmp_to_tims( _TaskDueDate.WorkflowTaskDueUTCDateTime,    'UTC', $session.client, 'NULL' ) as sww_let ) as PrmtHbWrkflwTskDuUTCTme
}
```
