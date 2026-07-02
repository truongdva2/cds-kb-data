---
name: D_JOURNALENTRYCHANGEGLITEMP
description: D Journal EntryCHANGEGLITEMP
semantic_en: "journal entry general ledger item changes — captures GL account line items with assignment reference, payment reason, supply country details."
semantic_vi: "thay đổi mục sổ cái chung của ghi chép nhật ký — ghi lại mục hàng tài khoản sổ cái với tham chiếu gán, lý do thanh toán, chi tiết quốc gia cung cấp."
keywords:
  - ghi chép nhật ký
  - sổ cái
  - thay đổi
app_component: AC-INT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AC
  - AC-INT
  - journal-entry
  - item-level
  - component:AC-INT-2CL
  - lob:Other
  - bo:JournalEntry
---
# D_JOURNALENTRYCHANGEGLITEMP

**D Journal EntryCHANGEGLITEMP**

| Property | Value |
|---|---|
| App Component | `AC-INT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `GLAccountLineItem` | `docln6` |
| `DocumentItemText` | `sgtxt` |
| `AssignmentReference` | `dzuonr` |
| `StateCentralBankPaymentReason` | `lzbkz` |
| `SupplyingCountry` | `landl` |
| `Reference1IDByBusinessPartner` | `xref1` |
| `Reference2IDByBusinessPartner` | `xref2` |
| `Reference3IDByBusinessPartner` | `xref3` |
| `PaymentDifferenceReason` | `rstgr` |
| `_JournalEntryChange` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_JournalEntryChange` | `D_JournalEntryChangeParameter` | — |

## Source Code

```abap
@EndUserText.label: 'Journal Entry GL Item'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@AbapCatalog.extensibility.extensible: true
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define abstract entity D_JournalEntryChangeGLItemP
{
 // key DummyKey                      :abap.char(1);
      GLAccountLineItem             :docln6;
      DocumentItemText              :sgtxt;
      AssignmentReference           :dzuonr;      
      StateCentralBankPaymentReason :lzbkz;
      SupplyingCountry              :landl;
      Reference1IDByBusinessPartner :xref1;
      Reference2IDByBusinessPartner :xref2;
      Reference3IDByBusinessPartner :xref3;
      PaymentDifferenceReason       :rstgr;
      _JournalEntryChange           : association to parent D_JournalEntryChangeParameter;

}
```
