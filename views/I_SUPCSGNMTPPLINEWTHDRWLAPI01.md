---
name: I_SUPCSGNMTPPLINEWTHDRWLAPI01
description: Supcsgnmtpplinewthdrwlapi 01
semantic_en: "consignment and pipeline withdrawal records for supplier materials — provides posting dates, company code, material, and withdrawal status for inventory management"
semantic_vi: "bản ghi rút ngân hàng ký gửi và đường ống cho vật liệu cung cấp — cung cấp ngày hạch toán, mã công ty, vật liệu, trạng thái rút để quản lý hàng tồn kho"
keywords:
  - ký gửi
  - rút ngân hàng
  - vật liệu
  - hàng tồn kho
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
  - header-level
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
---
# I_SUPCSGNMTPPLINEWTHDRWLAPI01

**Supcsgnmtpplinewthdrwlapi 01**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `MaterialDocument` | `MaterialDocument` |
| `MaterialDocumentYear` | `MaterialDocumentYear` |
| `MaterialDocumentItem` | `MaterialDocumentItem` |
| `SuplrCsgnmtPplineWthdrwlStatus` | `SuplrCsgnmtPplineWthdrwlStatus` |
| `DocumentDate` | `DocumentDate` |
| `PostingDate` | `PostingDate` |
| `CompanyCode` | `CompanyCode` |
| `IssgOrRcvgStkIdfgSpclStkType` | `IssgOrRcvgStkIdfgSpclStkType` |
| `ConsignmentPipelineSupplier` | `ConsignmentPipelineSupplier` |
| `Plant` | `Plant` |
| `Material` | `Material` |
| `DebitCreditCode` | `DebitCreditCode` |
| `BusinessArea` | `BusinessArea` |
| `DocumentCurrency` | `DocumentCurrency` |
| `SuplrCsgnmtPplineWthdrwlAmount` | `SuplrCsgnmtPplineWthdrwlAmount` |
| `SupCsgnmtPplineWthdrwlQtyUnit` | `SupCsgnmtPplineWthdrwlQtyUnit` |
| `SuplrCsgnmtPplineWthdrwlQty` | `SuplrCsgnmtPplineWthdrwlQty` |
| `GLAccount` | `GLAccount` |
| `TaxCode` | `TaxCode` |
| `NonDeductibleInputTaxAmount` | `NonDeductibleInputTaxAmount` |
| `ProfitCenter` | `ProfitCenter` |
| `TaxCountry` | `TaxCountry` |
| `_SupCsgnmtPplineInvcHistAPI01` | *Association* |
| `_Currency` | *Association* |
| `_SupplierCompany` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupCsgnmtPplineInvcHistAPI01` | `I_SupCsgnmtPplineInvcHistAPI01` | [0..*] |
| `_SupplierCompany` | `I_SupplierCompany` | [1..1] |
| `_Currency` | `I_Currency` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISUPCSGPLWDAPI01'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Consignment and Pipeline Withdrawal of Supplier'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@VDM.viewType : #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define view I_SupCsgnmtPplineWthdrwlAPI01
  as select from I_SuplrCsgnmtPplineWithdrawal

  association [0..*] to I_SupCsgnmtPplineInvcHistAPI01 as _SupCsgnmtPplineInvcHistAPI01 on  $projection.MaterialDocument     = _SupCsgnmtPplineInvcHistAPI01.MaterialDocument
                                                                                        and $projection.MaterialDocumentYear = _SupCsgnmtPplineInvcHistAPI01.MaterialDocumentYear
                                                                                        and $projection.MaterialDocumentItem = _SupCsgnmtPplineInvcHistAPI01.MaterialDocumentItem
  association [1..1] to I_SupplierCompany              as _SupplierCompany              on  $projection.ConsignmentPipelineSupplier = _SupplierCompany.Supplier
                                                                                        and $projection.CompanyCode                 = _SupplierCompany.CompanyCode

  association [0..1] to I_Currency                     as _Currency                     on  $projection.DocumentCurrency = _Currency.Currency
{
  key MaterialDocument,
  key MaterialDocumentYear,
  key MaterialDocumentItem,
      SuplrCsgnmtPplineWthdrwlStatus,
      DocumentDate,
      PostingDate,
      CompanyCode,
      IssgOrRcvgStkIdfgSpclStkType,
      ConsignmentPipelineSupplier,
      Plant,
      Material,
      DebitCreditCode,
      BusinessArea,
      @Semantics.currencyCode: true
      DocumentCurrency,
      @Semantics               : { amount : {currencyCode: 'DocumentCurrency'} }
      SuplrCsgnmtPplineWthdrwlAmount,
      SupCsgnmtPplineWthdrwlQtyUnit,
      @Semantics               : { quantity : {unitOfMeasure: 'SupCsgnmtPplineWthdrwlQtyUnit'} }
      SuplrCsgnmtPplineWthdrwlQty,
      GLAccount,
      TaxCode,
      @Semantics               : { amount : {currencyCode: 'DocumentCurrency'} }
      NonDeductibleInputTaxAmount,
      ProfitCenter,
      TaxCountry,

      /* Associations */
      _SupCsgnmtPplineInvcHistAPI01,
      _Currency,
      _SupplierCompany
}
where
     _SupplierCompany.IsBusinessPurposeCompleted = ''
  or _SupplierCompany.IsBusinessPurposeCompleted is null
```
