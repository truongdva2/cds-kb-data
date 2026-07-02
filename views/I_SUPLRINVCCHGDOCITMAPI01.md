---
name: I_SUPLRINVCCHGDOCITMAPI01
description: Suplrinvcchgdocitmapi 01
semantic_en: "supplier invoice change document item view — details field changes with before/after values and units"
semantic_vi: "xem mục tài liệu thay đổi hóa đơn nhà cung cấp — chi tiết thay đổi trường với giá trị trước/sau và đơn vị"
keywords:
  - mục tài liệu thay đổi
  - hóa đơn
  - giá trị thay đổi
app_component: MM-IV-LIV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IV
  - MM-IV-LIV
  - interface-view
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
---
# I_SUPLRINVCCHGDOCITMAPI01

**Suplrinvcchgdocitmapi 01**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ChangeDocObject` | `ChangeDocObject` |
| `ChangeDocObjectClass` | `ChangeDocObjectClass` |
| `ChangeDocument` | `ChangeDocument` |
| `DatabaseTable` | `DatabaseTable` |
| `ChangeDocTableKey` | `ChangeDocTableKey` |
| `ChangeDocDatabaseTableField` | `ChangeDocDatabaseTableField` |
| `ChangeDocItemChangeType` | `ChangeDocItemChangeType` |
| `ChangeDocPreviousUnit` | `ChangeDocPreviousUnit` |
| `ChangeDocNewUnit` | `ChangeDocNewUnit` |
| `ChangeDocPreviousCurrency` | `ChangeDocPreviousCurrency` |
| `ChangeDocNewCurrency` | `ChangeDocNewCurrency` |
| `ChangeDocNewFieldValue` | `ChangeDocNewFieldValue` |
| `ChangeDocPreviousFieldValue` | `ChangeDocPreviousFieldValue` |

## Associations

> No associations found.

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ISIVCGDCITMAPI01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Change Document Items for Supplier Invoices'
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations: true

define view I_SuplrInvcChgDocItmAPI01
  as select from I_SupplierInvoiceChangeDocItem
{
  key ChangeDocObject,
  key ChangeDocObjectClass,
  key ChangeDocument,
  key DatabaseTable,
  key ChangeDocTableKey,
  key ChangeDocDatabaseTableField,
  key ChangeDocItemChangeType,

      ChangeDocPreviousUnit,
      ChangeDocNewUnit,
      ChangeDocPreviousCurrency,
      ChangeDocNewCurrency,
      ChangeDocNewFieldValue,
      ChangeDocPreviousFieldValue
}
```
