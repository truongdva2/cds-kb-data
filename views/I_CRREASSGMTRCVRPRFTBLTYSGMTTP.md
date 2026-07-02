---
name: I_CRREASSGMTRCVRPRFTBLTYSGMTTP
description: Crreassgmtrcvrprftbltysgmttp
semantic_en: "cost and revenue reassignment receiver profitability segment record — tracks profit center allocation from source cost transactions"
semantic_vi: "bản ghi phân khúc lợi nhuận bên nhận phân bổ lại chi phí và doanh thu — theo dõi phân bổ trung tâm lợi nhuận từ giao dịch chi phí nguồn"
keywords:
  - phân bổ lại chi phí doanh thu
  - phân khúc lợi nhuận
  - trung tâm lợi nhuận
app_component: CA-GTF-FXU-FI-CO
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-FXU
  - interface-view
  - transactional-processing
  - component:CA-GTF-FXU-FI-CO
  - lob:Cross-Application Components
---
# I_CRREASSGMTRCVRPRFTBLTYSGMTTP

**Crreassgmtrcvrprftbltysgmttp**

| Property | Value |
|---|---|
| App Component | `CA-GTF-FXU-FI-CO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `FiscalYear` | `FiscalYear` |
| `ReferenceDocument` | `ReferenceDocument` |
| `ControllingArea` | `ControllingArea` |
| `ReferenceDocumentItem` | `ReferenceDocumentItem` |
| `LedgerGLLineItem` | `LedgerGLLineItem` |
| `ReferenceDocumentType` | `ReferenceDocumentType` |
| `ReferenceDocumentContext` | `ReferenceDocumentContext` |
| `AccountingDocument` | `AccountingDocument` |
| `TransactionSubitem` | `TransactionSubitem` |
| `CompanyCode` | `CompanyCode` |
| `SourceLedger` | `SourceLedger` |
| `Customer` | `Customer` |
| `CustomerGroup` | `CustomerGroup` |
| `CustomerSupplierIndustry` | `CustomerSupplierIndustry` |
| `CustomerSupplierCountry` | `CustomerSupplierCountry` |
| `SalesDistrict` | `SalesDistrict` |
| `SoldProduct` | `SoldProduct` |
| `SoldProductGroup` | `SoldProductGroup` |
| `SalesOrganization` | `SalesOrganization` |
| `DistributionChannel` | `DistributionChannel` |
| `OrganizationDivision` | `OrganizationDivision` |
| `BillToParty` | `BillToParty` |
| `ShipToParty` | `ShipToParty` |
| `WBSElementExternalID` | `WBSElementExternalID` |
| `ServiceDocumentType` | `ServiceDocumentType` |
| `ServiceDocument` | `ServiceDocument` |
| `ServiceDocumentItem` | `ServiceDocumentItem` |
| `SalesDocument` | `SalesDocument` |
| `SalesDocumentItem` | `SalesDocumentItem` |
| `ProfitCenter` | `ProfitCenter` |
| `PartnerProfitCenter` | `PartnerProfitCenter` |
| `FunctionalArea` | `FunctionalArea` |
| `ControllingBusTransacType` | `ControllingBusTransacType` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #NOT_REQUIRED
}
@EndUserText.label: 'Cost and Revn Reassgmt Rcvr PS - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType: {
    serviceQuality: #C,
    sizeCategory: #XXL,
    dataClass: #TRANSACTIONAL
  }
}
@OData.entityType.name:'CRReassgmtRcvrPrftbltySgmt_Type'
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_CRReassgmtRcvrPrftbltySgmtTP
        as projection on R_CRReassgmtRcvrPrftbltySgmtTP as _ProfitabilitySegment
{
  key FiscalYear,
  key ReferenceDocument,
  key ControllingArea, 
  key ReferenceDocumentItem,
  key LedgerGLLineItem,
  key ReferenceDocumentType, 
  key ReferenceDocumentContext, 
  key AccountingDocument,  
            
      TransactionSubitem,    
      CompanyCode,
      SourceLedger,
      
      Customer,
      CustomerGroup,
      CustomerSupplierIndustry,
      CustomerSupplierCountry,
      SalesDistrict,
      SoldProduct,
      SoldProductGroup,
      SalesOrganization,
      DistributionChannel,
      OrganizationDivision,
      BillToParty,
      ShipToParty,  

      WBSElementExternalID,
      
      ServiceDocumentType,
      ServiceDocument,
      ServiceDocumentItem,
      
      SalesDocument,
      SalesDocumentItem, 
      ProfitCenter,
      PartnerProfitCenter,
      
      FunctionalArea,
      ControllingBusTransacType,

      _Item : redirected to parent I_CostAndRevnReassgmtItemTP,
      _CRReassgmt : redirected to I_CostAndRevenueReassignmentTP

}
```
