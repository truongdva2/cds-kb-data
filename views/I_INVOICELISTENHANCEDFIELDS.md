---
name: I_INVOICELISTENHANCEDFIELDS
description: Invoicelistenhancedfields
semantic_en: "extended data for invoice lists including transaction currency and gross amounts"
semantic_vi: "dữ liệu mở rộng cho danh sách hóa đơn bao gồm tiền tệ giao dịch và số tiền tổng cộng"
keywords:
  - danh sách hóa đơn
  - tiền tệ
  - số tiền
app_component: SD-BIL-IL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-IL
  - interface-view
  - component:SD-BIL-IL-2CL
  - lob:Sales & Distribution
  - bo:InvoiceList
---
# I_INVOICELISTENHANCEDFIELDS

**Invoicelistenhancedfields**

| Property | Value |
|---|---|
| App Component | `SD-BIL-IL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `InvoiceList` | `InvoiceList.InvoiceList` |
| `TransactionCurrency` | `InvoiceList.TransactionCurrency` |
| `TotalGrossAmount` | `cast(…)` |
| `_Remuneration` | *Association* |
| `_TransactionCurrency` | *Association* |
| `_InvoiceList` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InvoiceList` | `I_InvoiceList` | [1..1] |
| `_Remuneration` | `I_InvoiceListRemuneration` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Analytics.technicalName: 'ISDINVLSTENHFLD'

@EndUserText.label: 'Invoice List Enhanced Fields'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.representativeKey: 'InvoiceList'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.usageType: { dataClass: #TRANSACTIONAL, serviceQuality: #C, sizeCategory: #L }

@VDM.viewType: #COMPOSITE

define view entity I_InvoiceListEnhancedFields
  as select from I_InvoiceList as InvoiceList

  association [1..1] to I_InvoiceList             as _InvoiceList  on $projection.InvoiceList = _InvoiceList.InvoiceList
  association [0..1] to I_InvoiceListRemuneration as _Remuneration on $projection.InvoiceList = _Remuneration.InvoiceList

{
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_InvoiceListStdVH', element: 'InvoiceList' } } ]
  key InvoiceList.InvoiceList,

      InvoiceList.TransactionCurrency                           as TransactionCurrency,

      @DefaultAggregation: #NONE
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      cast(InvoiceList.TotalTaxAmount +
           InvoiceList.TotalNetAmount +
           _Remuneration.TotalRemunerationNetAmount +
           _Remuneration.TotalRemunerationTaxAmount  as sum_rl) as TotalGrossAmount,

      _Remuneration,
      _TransactionCurrency,

      // Needed for DCL
      @Consumption.hidden: true
      _InvoiceList
}
```
