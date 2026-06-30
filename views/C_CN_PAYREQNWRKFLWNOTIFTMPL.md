---
name: C_CN_PAYREQNWRKFLWNOTIFTMPL
description: CN Payreqnwrkflwnotiftmpl
semantic_en: "Email/workflow template — China payment requisition workflow notification — email data-provider view combining workflow task details with payment requisition attributes (company code, supplier, amount, currency, planned payment date, approver note) and task URL for outbound notification emails."
semantic_vi: "Mẫu email/quy trình — thông báo quy trình yêu cầu thanh toán (Trung Quốc) — view cung cấp dữ liệu email kết hợp chi tiết nhiệm vụ quy trình với thông tin yêu cầu thanh toán (mã công ty, nhà cung cấp, số tiền, tiền tệ, ngày thanh toán dự kiến, ghi chú người phê duyệt) và URL nhiệm vụ."
keywords:
  - yêu cầu thanh toán
  - thông báo quy trình thanh toán
  - email phê duyệt thanh toán
  - payment requisition Trung Quốc
app_component: FI-LOC-CM-CN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-CM
  - consumption-view
  - workflow
  - component:FI-LOC-CM-CN
  - lob:Finance
---
# C_CN_PAYREQNWRKFLWNOTIFTMPL

**CN Payreqnwrkflwnotiftmpl**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CM-CN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `WorkflowTaskInternalID` | `_WorkflowTask.WorkflowTaskInternalID` |
| `PaymentRequisitionNumber` | `_CnPayRequisition.PaymentRequisitionNumber` |
| `CompanyCode` | `_CnPayRequisition.CompanyCode` |
| `PaymentRequisitionStatus` | `_CnPayRequisition.PaymentRequisitionStatus` |
| `Supplier` | `_CnPayRequisition.Supplier` |
| `PaymentRequisitionPriority` | `_CnPayRequisition.PaymentRequisitionPriority` |
| `PaytRequisitionAmtInTransCrcy` | `_CnPayRequisition.PaytRequisitionAmtInTransCrcy` |
| `Currency` | `_CnPayRequisition.Currency` |
| `PaymentRequisitionType` | `_CnPayRequisition.PaymentRequisitionType` |
| `PaymentMethod` | `_CnPayRequisition.PaymentMethod` |
| `WorkflowApproverNote` | `_CnPayRequisition.WorkflowApproverNote` |
| `PlannedPaymentDate` | `_CnPayRequisition.PlannedPaymentDate` |
| `PaymentDifferenceReason` | `_CnPayRequisition.PaymentDifferenceReason` |
| `CreatedByUser` | `_CnPayRequisition.CreatedByUser` |
| `CreatedByUserDescription` | `_User.UserDescription` |
| `PayReqnWrkflwTskCrtnUTCDate` | `cast(…)` |
| `PayReqnWrkflwTskCrtnUTCTime` | `cast(…)` |
| `PayReqnWrkflwTskDuUTCDte` | `cast(…)` |
| `PayReqnWrkflwTskDuUTCTme` | `cast(…)` |
| `CreationDateTime` | `_CnPayRequisition.CreationDateTime` |
| `LastChangedByUser` | `_CnPayRequisition.LastChangedByUser` |
| `ChangedOnDateTime` | `_CnPayRequisition.ChangedOnDateTime` |
| `WorkflowTaskURL` | `_WorkflowTaskURL.WorkflowTaskURL` |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkflowTaskURL` | `I_WorkflowTaskURL` | [0..1] |

## Source Code

```abap
@VDM.viewType:#CONSUMPTION
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@AccessControl.authorizationCheck:#MANDATORY
@AccessControl.personalData.blocking:#NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label:'Payment Requisiton Notification Email'
@ObjectModel.supportedCapabilities: [ #OUTPUT_EMAIL_DATA_PROVIDER ]
@ObjectModel.usageType:{
sizeCategory:#L,
serviceQuality:#D,
dataClass:#TRANSACTIONAL
}


define view entity C_CN_PayReqnWrkflwNotifTmpl
  as select from            I_WorkflowTask                as _WorkflowTask

    inner join I_WorkflowTaskApplObject      as _WorkflowTaskApplObject on  _WorkflowTaskApplObject.WorkflowTaskInternalID        = _WorkflowTask.WorkflowTaskInternalID
                                                                                     and _WorkflowTaskApplObject.WorkflowObjectRole            = '99'
                                                                                     and _WorkflowTaskApplObject.TechnicalWrkflwObjectCategory = 'CL'
                                                                                     and _WorkflowTaskApplObject.TechnicalWrkflwObjectType     = 'CL_PAYREQN_WF_PR_APPROVAL'

    inner join I_PaymentRequisition as _CnPayRequisition            on _WorkflowTaskApplObject.TechnicalWrkflwObject = bintohex(
      _CnPayRequisition.PaymentRequisitionUUID
    )
    
    left outer to one join I_User                       as _User                       on _User.UserID = _CnPayRequisition.CreatedByUser
    
  association [0..1] to I_WorkflowTaskURL as _WorkflowTaskURL on _WorkflowTaskURL.WorkflowTaskInternalID = _WorkflowTask.WorkflowTaskInternalID

{
  key _WorkflowTask.WorkflowTaskInternalID,
  _CnPayRequisition.PaymentRequisitionNumber,
  _CnPayRequisition.CompanyCode,
  _CnPayRequisition.PaymentRequisitionStatus,
  _CnPayRequisition.Supplier,
  _CnPayRequisition.PaymentRequisitionPriority,
  @Semantics.amount.currencyCode: 'Currency'
  _CnPayRequisition.PaytRequisitionAmtInTransCrcy,
  _CnPayRequisition.Currency, 
  _CnPayRequisition.PaymentRequisitionType,
  _CnPayRequisition.PaymentMethod,
  _CnPayRequisition.WorkflowApproverNote,//reject reason
  _CnPayRequisition.PlannedPaymentDate,
  _CnPayRequisition.PaymentDifferenceReason,
  @Semantics.user.createdBy: true
  _CnPayRequisition.CreatedByUser,
  _User.UserDescription                                                                                         as CreatedByUserDescription,
  //Creation Time
  cast(tstmp_to_dats( cast(_WorkflowTask.WrkflwTskCreationUTCDateTime as abap.dec( 15, 0 )), 'UTC', $session.client, 'NULL' ) as sww_lsd ) as PayReqnWrkflwTskCrtnUTCDate,
  cast(tstmp_to_tims( cast(_WorkflowTask.WrkflwTskCreationUTCDateTime as abap.dec( 15, 0 )), 'UTC', $session.client, 'NULL' ) as sww_lst ) as PayReqnWrkflwTskCrtnUTCTime,
  //Deadline Due Time
  cast(tstmp_to_dats( cast(_WorkflowTask._TaskDueDate.WorkflowTaskDueUTCDateTime as abap.dec( 15, 0 )), 'UTC', $session.client, 'NULL' ) as sww_lsd ) as PayReqnWrkflwTskDuUTCDte,
  cast(tstmp_to_tims( cast(_WorkflowTask._TaskDueDate.WorkflowTaskDueUTCDateTime as abap.dec( 15, 0 )), 'UTC', $session.client, 'NULL' ) as sww_lst ) as PayReqnWrkflwTskDuUTCTme,
  @Semantics.systemDateTime.createdAt: true
  _CnPayRequisition.CreationDateTime,
  _CnPayRequisition.LastChangedByUser,
  _CnPayRequisition.ChangedOnDateTime,  
  _WorkflowTaskURL.WorkflowTaskURL
}
```
