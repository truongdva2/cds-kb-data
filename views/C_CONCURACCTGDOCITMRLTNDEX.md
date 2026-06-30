---
name: C_CONCURACCTGDOCITMRLTNDEX
description: Concuracctgdocitmrltndex
semantic_en: "DEX — Concur accounting document item relation — delta extraction view linking a Concur travel and expense document entry to its SAP journal entry (company code, fiscal year, reference document item), supporting delete-detection."
semantic_vi: "Trích xuất dữ liệu — quan hệ hạng mục chứng từ kế toán Concur — view trích xuất delta liên kết mục nhập tài liệu chi phí Concur với chứng từ kế toán SAP (mã công ty, năm tài chính, hạng mục tài liệu tham chiếu), hỗ trợ phát hiện bản ghi bị xóa."
keywords:
  - Concur chi phí
  - chứng từ kế toán Concur
  - trích xuất du lịch công tác
  - tích hợp Concur SAP
app_component: BNS-CON-SE-S4-FIN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BNS
  - BNS-CON
  - BNS-CON-SE
  - consumption-view
  - data-extraction
  - component:BNS-CON-SE-S4-FIN
  - lob:Other
  - bo:ConcurTrvlAndExpnMgmtDoc
---
# C_CONCURACCTGDOCITMRLTNDEX

**Concuracctgdocitmrltndex**

| Property | Value |
|---|---|
| App Component | `BNS-CON-SE-S4-FIN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ConcurSystemKey` | `ConcurSystemKey` |
| `ConcurDocumentType` | `ConcurDocumentType` |
| `ConcurDocumentID` | `ConcurDocumentID` |
| `ConcurDocumentRevisionNumber` | `ConcurDocumentRevisionNumber` |
| `ConcurEntryIdentifier` | `ConcurEntryIdentifier` |
| `CompanyCode` | `CompanyCode` |
| `JournalEntry` | `JournalEntry` |
| `ConcurDocumentFiscalYear` | `ConcurDocumentFiscalYear` |
| `ReferenceDocumentItem` | `ReferenceDocumentItem` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Concur Accounting Document Item Relation'
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #CONSUMPTION
@Analytics.dataExtraction.delta.byElement.detectDeletedRecords:true
@Metadata.ignorePropagatedAnnotations:true
@Metadata.allowExtensions:true
@ObjectModel.usageType:{
    serviceQuality: #A,
    sizeCategory: #L,
    dataClass: #TRANSACTIONAL }
@Analytics.dataCategory:#FACT
@ObjectModel.modelingPattern: #ANALYTICAL_FACT
@ObjectModel.sapObjectNodeType.name: 'ConcurTrvlAndExpnMgmtDoc'
@ObjectModel.supportedCapabilities:[ #EXTRACTION_DATA_SOURCE ]

define view entity C_ConcurAcctgDocItmRltnDEX
  as select from I_ConcurAcctgDocItmRelation

{
  key ConcurSystemKey,
  key ConcurDocumentType,
  key ConcurDocumentID,
  key ConcurDocumentRevisionNumber,
  key ConcurEntryIdentifier,
  key CompanyCode,
  key JournalEntry,
  key ConcurDocumentFiscalYear,
  key ReferenceDocumentItem
}
```
