---
name: C_PURCHASEORDERWORKFLOWEMAIL
description: Purchase OrderWORKFLOWEMAIL
app_component: MM-PUR-PO-WFL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-PO
  - consumption-view
  - workflow
  - purchase-order
  - email
  - component:MM-PUR-PO-WFL-2CL
  - lob:Sourcing & Procurement
  - bo:PurchaseOrder
---
# C_PURCHASEORDERWORKFLOWEMAIL

**Purchase OrderWORKFLOWEMAIL**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-WFL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `WorkflowTaskInternalID` | `_Workflowtask.WorkflowTaskInternalID` |
| `PurchaseOrder` | `cast(…)` |
| `PurchaseOrderType` | `_PurchaseOrder.PurchaseOrderType` |
| `PurchasingDocumentTypeName` | `expr(…)` |
| `DocumentCurrency` | `_PurchaseOrder.DocumentCurrency` |
| `PurchaseOrderNetAmount` | `cast(…)` |
| `PurOrdWrkflwTskCreationUTCDate` | `cast(…)` |
| `PurOrdWrkflwTskCreationUTCTime` | `cast(…)` |
| `PurOrdWrkflwTaskDueUTCDate` | `cast(…)` |
| `PurOrdWrkflwTaskDueUTCTime` | `cast(…)` |
| `Supplier` | `_PurchaseOrder.Supplier` |
| `CreatedByUser` | `cast(_User.UserDescription as mm_oa_user_fullname )` |
| `SupplierName` | `_Supplier.SupplierName` |
| `POHeaderTextPlainLongText` | `_PurchaseOrderPlainLongText.PlainLongText` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CMMPURORDWFLEML'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Purchase Order Details for Workflow Deadline Email'

@VDM.viewType : #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType : {
  serviceQuality: #D,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.supportedCapabilities: #OUTPUT_EMAIL_DATA_PROVIDER
@Metadata.ignorePropagatedAnnotations:true

define view C_PurchaseOrderWorkflowEmail
  as select from    I_WorkflowTask               as _Workflowtask

    inner join      I_WorkflowTaskApplObject     as _WorkflowTaskApplObject     on  _WorkflowTaskApplObject.WorkflowTaskInternalID        = _Workflowtask.WorkflowTaskInternalID
                                                                                and _WorkflowTaskApplObject.WorkflowObjectRole            = '99'
                                                                                and _WorkflowTaskApplObject.SAPObjectNodeRepresentation   = 'PurchaseOrder'
                                                                                and _WorkflowTaskApplObject.TechnicalWrkflwObjectCategory = 'CL'

    left outer join I_PurchaseOrderAPI01         as _PurchaseOrder              on _PurchaseOrder.PurchaseOrder = _WorkflowTaskApplObject.TechnicalWrkflwObject

    left outer join I_PurchasingDocumentType     as _PurDocType                 on  _PurDocType.PurchasingDocumentType     = _PurchaseOrder.PurchaseOrderType
                                                                                and _PurDocType.PurchasingDocumentCategory = 'F'

    left outer join I_PurchaseOrderNetAmount     as _PurchaseOrderNetAmount     on _PurchaseOrderNetAmount.PurchaseOrder = _PurchaseOrder.PurchaseOrder

    left outer join I_User                       as _User                       on _User.UserID = _PurchaseOrder.CreatedByUser
    left outer join I_Supplier                   as _Supplier                   on _Supplier.Supplier = _PurchaseOrder.Supplier
    left outer join R_PurchaseOrderPlainLongText as _PurchaseOrderPlainLongText on  _PurchaseOrderPlainLongText.PurchaseOrder  = _PurchaseOrder.PurchaseOrder
                                                                                and _PurchaseOrderPlainLongText.Language       = _PurchaseOrder.Language
                                                                                and _PurchaseOrderPlainLongText.TextObjectType = 'F01'

{
  key _Workflowtask.WorkflowTaskInternalID,

      cast(substring(_WorkflowTaskApplObject.TechnicalWrkflwObject, 1 , 10 ) as ebeln )                             as PurchaseOrder,
      //Purchase Order Type
      _PurchaseOrder.PurchaseOrderType,
      _PurDocType._Text[1:Language=$session.system_language].PurchasingDocumentTypeName,
      //_PurDocType._Text.PurchasingDocumentTypeName,


      //Purchase Order Amount
      @Semantics.currencyCode: true
      _PurchaseOrder.DocumentCurrency,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      cast((_PurchaseOrderNetAmount.PurchaseOrderNetAmount) as mm_pur_order_tot_net_amount )                        as PurchaseOrderNetAmount,

      //Creation Time
      cast(tstmp_to_dats( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lsd ) as PurOrdWrkflwTskCreationUTCDate,
      cast(tstmp_to_tims( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lst ) as PurOrdWrkflwTskCreationUTCTime,
      //Deadline Due Time
      cast(tstmp_to_dats( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_led )    as PurOrdWrkflwTaskDueUTCDate,
      cast(tstmp_to_tims( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_let )    as PurOrdWrkflwTaskDueUTCTime,

      //Supplier
      _PurchaseOrder.Supplier,

      //Created By User
      cast(_User.UserDescription as mm_oa_user_fullname )                                                           as CreatedByUser,

      //Supplier Name Based on Supplier Code
      _Supplier.SupplierName,

      //Purchase Order Header Text
      _PurchaseOrderPlainLongText.PlainLongText                                                                     as POHeaderTextPlainLongText

}
```
