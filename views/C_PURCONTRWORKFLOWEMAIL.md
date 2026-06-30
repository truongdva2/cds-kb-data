---
name: C_PURCONTRWORKFLOWEMAIL
description: Purcontrworkflowemail
semantic_en: "Purchase contract workflow deadline email data provider — supplies workflow task details (creation/due timestamps), contract type, supplier name, and creator for composing deadline notification emails for purchase contracts."
semantic_vi: "Nguồn dữ liệu email nhắc nhở hạn chót quy trình hợp đồng mua hàng — cung cấp thông tin nhiệm vụ quy trình (thời gian tạo/đến hạn), loại hợp đồng, tên nhà cung cấp và người tạo để soạn email thông báo hạn chót hợp đồng mua."
keywords:
  - email hạn chót hợp đồng mua
  - workflow deadline purchase contract
  - nhắc nhở hợp đồng mua hàng
  - email quy trình hợp đồng
app_component: MM-PUR-OA-CON-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - consumption-view
  - workflow
  - email
  - component:MM-PUR-OA-CON-2CL
  - lob:Sourcing & Procurement
---
# C_PURCONTRWORKFLOWEMAIL

**Purcontrworkflowemail**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-CON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `WorkflowTaskInternalID` | `_Workflowtask.WorkflowTaskInternalID` |
| `PurchaseContract` | `cast(…)` |
| `ActivePurchasingDocument` | `_PurchaseContract.ActivePurchasingDocument` |
| `PurchaseContractType` | `_PurchaseContract.PurchasingDocumentType` |
| `PurchasingDocumentTypeName` | `expr(…)` |
| `DocumentCurrency` | `_PurchaseContract.DocumentCurrency` |
| `PurContrWrkflwTskCrtnUTCDte` | `cast(…)` |
| `PurContrWrkflwTskCrtnUTCTme` | `cast(…)` |
| `PurContrWrkflwTskDuUTCDte` | `cast(…)` |
| `PurContrWrkflwTskDuUTCTme` | `cast(…)` |
| `Supplier` | `_PurchaseContract.Supplier` |
| `CreatedByUserDescription` | `_User.UserDescription` |
| `SupplierName` | `_Supplier.SupplierName` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CPURCONTRWFLEML'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Purchase Contract Details for Workflow Deadline Email'

@VDM.viewType : #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType : {
  serviceQuality: #D,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}
@ObjectModel.supportedCapabilities: #OUTPUT_EMAIL_DATA_PROVIDER
@Metadata.ignorePropagatedAnnotations:true

define view C_PurContrWorkflowEmail
  as select from            I_WorkflowTask           as _Workflowtask

    inner join              I_WorkflowTaskApplObject as _WorkflowTaskApplObject on  _WorkflowTaskApplObject.WorkflowTaskInternalID        = _Workflowtask.WorkflowTaskInternalID
                                                                                and _WorkflowTaskApplObject.WorkflowObjectRole            = '99'
                                                                                and _WorkflowTaskApplObject.SAPObjectNodeRepresentation   = 'PurchaseContract'
                                                                                and _WorkflowTaskApplObject.TechnicalWrkflwObjectCategory = 'CL'

    //left outer to one join  I_PurchaseContractAPI01  as _PurchaseContract       on _PurchaseContract.PurchaseContract = _WorkflowTaskApplObject.TechnicalWrkflwObject
    left outer to one join  R_PurchasingDocument     as _PurchaseContract       on _PurchaseContract.PurchasingDocument = _WorkflowTaskApplObject.TechnicalWrkflwObject
                                                                                and _PurchaseContract.PurchasingDocumentCategory = 'K'

    left outer to one join  I_PurchasingDocumentType as _PurDocType             on  _PurDocType.PurchasingDocumentType     = _PurchaseContract.PurchasingDocumentType
                                                                                and _PurDocType.PurchasingDocumentCategory = 'K'

    left outer to one join  I_User                   as _User                   on _User.UserID = _PurchaseContract.CreatedByUser
    left outer to one join  I_Supplier               as _Supplier               on _Supplier.Supplier = _PurchaseContract.Supplier

{
  key _Workflowtask.WorkflowTaskInternalID,

      cast(substring(_WorkflowTaskApplObject.TechnicalWrkflwObject, 1 , 10 ) as ebeln )                             as PurchaseContract,

      _PurchaseContract.ActivePurchasingDocument as ActivePurchasingDocument,

      _PurchaseContract.PurchasingDocumentType as PurchaseContractType,

      _PurDocType._Text[1:Language=$session.system_language].PurchasingDocumentTypeName,

      @Semantics.currencyCode: true
      _PurchaseContract.DocumentCurrency,

      cast(tstmp_to_dats( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lsd ) as PurContrWrkflwTskCrtnUTCDte,

      cast(tstmp_to_tims( _Workflowtask.WrkflwTskCreationUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_lst ) as PurContrWrkflwTskCrtnUTCTme,

      cast(tstmp_to_dats( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_led )    as PurContrWrkflwTskDuUTCDte,

      cast(tstmp_to_tims( _TaskDueDate.WorkflowTaskDueUTCDateTime, 'UTC', $session.client, 'NULL' ) as sww_let )    as PurContrWrkflwTskDuUTCTme,

      _PurchaseContract.Supplier,

      _User.UserDescription                                                                                         as CreatedByUserDescription,

      _Supplier.SupplierName

}
```
