---
name: D_SUPLRINVCCREATEPOITEMP
description: D Suplrinvccreatepoitemp
semantic_en: "parameterized data-input view — supplier invoice item creation parameters with PO reference (item number, purchase order, PO item, reference document, fiscal year, reference item, subsequent debit/credit flag, tax code, jurisdiction, currency, item amount, units, quantity unit) for invoice items linked to purchase orders"
semantic_vi: "chế độ xem đầu vào dữ liệu được tham số hóa — tham số tạo mục hóa đơn nhà cung cấp có tham chiếu PO (số mục, đơn đặt hàng, mục PO, tài liệu tham chiếu, năm tài chính, mục tham chiếu, cờ nợ/có sau, mã thuế, khu vực pháp lý, tiền tệ, số tiền mục, đơn vị, đơn vị số lượng) cho các mục hóa đơn được liên kết với đơn đặt hàng"
keywords:
  - mục hóa đơn
  - tham chiếu đơn đặt hàng
  - tạo hóa đơn
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
  - item-level
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
---
# D_SUPLRINVCCREATEPOITEMP

**D Suplrinvccreatepoitemp**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SupplierInvoiceItem` | `rblgp` |
| `PurchaseOrder` | `ebeln` |
| `PurchaseOrderItem` | `ebelp` |
| `ReferenceDocument` | `lfbnr` |
| `ReferenceDocumentFiscalYear` | `lfgja` |
| `ReferenceDocumentItem` | `lfpos` |
| `SuplrInvcIsSubsqntDebitCrdt` | `tbtkz` |
| `TaxCode` | `mwskz` |
| `TaxJurisdiction` | `txjcd` |
| `DocumentCurrency` | `waers` |
| `SupplierInvoiceItemAmount` | `wrbtr_cs` |
| `PurchaseOrderQuantityUnit` | `bstme` |
| `QuantityInPurchaseOrderUnit` | `menge_d` |
| `PurchaseOrderPriceUnit` | `bprme` |
| `QtyInPurchaseOrderPriceUnit` | `bpmng` |
| `SuplrInvcDeliveryCostCndnType` | `kschl` |
| `SuplrInvcDeliveryCostCndnStep` | `stunr` |
| `SuplrInvcDeliveryCostCndnCount` | `dzaehk` |
| `FreightSupplier` | `lifnr` |
| `ServiceEntrySheet` | `lblni` |
| `ServiceEntrySheetItem` | `extrow` |
| `SupplierInvoiceItemText` | `sgtxt` |
| `IsNotCashDiscountLiable` | `xskrl` |
| `TaxCountry` | `fot_tax_country` |
| `IsFinallyInvoiced` | `erekz` |
| `_AccountAssignments` | *Association* |
| `_SupplierInvoice` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AccountAssignments` | `D_SuplrInvcCreateAccAssgmtP` | [0..*] |
| `_SupplierInvoice` | `D_SuplrInvcCreateP` | — |

## Source Code

```abap
@EndUserText.label: 'Items with Purchase Order Reference'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
@AbapCatalog.extensibility.extensible: true

define abstract entity D_SuplrInvcCreatePOItemP
{
      SupplierInvoiceItem            : rblgp;
      PurchaseOrder                  : ebeln; 
      PurchaseOrderItem              : ebelp;
      ReferenceDocument              : lfbnr; 
      ReferenceDocumentFiscalYear    : lfgja; 
      ReferenceDocumentItem          : lfpos;
      SuplrInvcIsSubsqntDebitCrdt    : tbtkz;
      TaxCode                        : mwskz;
      TaxJurisdiction                : txjcd;
      @Semantics.currencyCode        : true
      DocumentCurrency               : waers; 
      @Semantics                     : { amount : {currencyCode: 'DocumentCurrency'} }
      SupplierInvoiceItemAmount      : wrbtr_cs;
      PurchaseOrderQuantityUnit      : bstme;
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      QuantityInPurchaseOrderUnit    : menge_d;
      @Semantics.unitOfMeasure       : true
      PurchaseOrderPriceUnit         : bprme;
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderPriceUnit'
      QtyInPurchaseOrderPriceUnit    : bpmng;
      SuplrInvcDeliveryCostCndnType  : kschl;
      SuplrInvcDeliveryCostCndnStep  : stunr;
      SuplrInvcDeliveryCostCndnCount : dzaehk;
      FreightSupplier                : lifnr;
      ServiceEntrySheet              : lblni; 
      ServiceEntrySheetItem          : extrow; 
      SupplierInvoiceItemText        : sgtxt;
      IsNotCashDiscountLiable        : xskrl;
      TaxCountry                     : fot_tax_country;
      IsFinallyInvoiced              : erekz;

      _AccountAssignments            : composition [0..*] of D_SuplrInvcCreateAccAssgmtP;
      _SupplierInvoice               : association to parent D_SuplrInvcCreateP;
}
```
