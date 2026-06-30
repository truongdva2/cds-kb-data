---
name: C_RECRRGSUPLRINVCTMPLINSTCE
description: Recrrgsuplrinvctmplinstce
semantic_en: "Recurring supplier invoice template instance — forecast line of a recurring AP invoice template, showing posting date, accounting document, fiscal year, amount, and instance status for each scheduled occurrence."
semantic_vi: "Phiên bản mẫu hóa đơn nhà cung cấp định kỳ — dòng dự báo của mẫu hóa đơn AP định kỳ, hiển thị ngày hạch toán, chứng từ kế toán, năm tài chính, số tiền và trạng thái cho từng lần xuất hiện đã lên lịch."
keywords:
  - phiên bản hóa đơn định kỳ
  - lịch hóa đơn AP định kỳ
  - dự báo hóa đơn nhà cung cấp
app_component: FI-FIO-AP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - consumption-view
  - component:FI-FIO-AP-2CL
  - lob:Finance
  - bo:RecrrgSuplrInvcTmplInstce
---
# C_RECRRGSUPLRINVCTMPLINSTCE

**Recrrgsuplrinvctmplinstce**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `RecrrgSuplrInvcTmplInstceUUID` | `_Forcast.RecrrgSuplrInvcTmplInstceUUID` |
| `RecrrgSuplrInvcTmplUUID` | `_Forcast.RecrrgSuplrInvcTmplUUID` |
| `RecrrgSuplrInvcTmplInstance` | `_Forcast.RecrrgSuplrInvcTmplInstance` |
| `RecurrenceInstanceStatus` | `_Forcast.RecurrenceInstanceStatus` |
| `RecurrenceInstanceStatusName` | `expr(…)` |
| `PostingDate` | `_Forcast.PostingDate` |
| `AccountingDocument` | `_Forcast.AccountingDocument` |
| `FiscalYear` | `_Forcast.FiscalYear` |
| `TransactionCurrency` | `_Forcast.TransactionCurrency` |
| `AmountInTransactionCurrency` | `_Forcast.AmountInTransactionCurrency` |
| `CompanyCode` | `_Tmpl.CompanyCode` |
| `OriginalReferenceDocument` | `_Forcast.OriginalReferenceDocument` |
| `_Tmpl` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Tmpl` | `C_RecrrgSuplrInvcTmpl` | [1..1] |
| `_RecurrenceStatusText` | `I_RecurrenceStatus` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Forecast Lines of Recrrg Suplr Invc'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.semanticKey: ['RecrrgSuplrInvcTmplInstance']
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #L,
  dataClass: #MIXED
}
@VDM.viewType: #CONSUMPTION
@ObjectModel.supportedCapabilities:[#EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.sapObjectNodeType.name:'RecrrgSuplrInvcTmplInstce'
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@Analytics:{
  dataExtraction: {
    enabled: true
  }
}


define view entity C_RecrrgSuplrInvcTmplInstce
  as select from I_RecrrgSuplrInvcTmplInstce as _Forcast

  association [1..1] to C_RecrrgSuplrInvcTmpl as _Tmpl                 on $projection.RecrrgSuplrInvcTmplUUID = _Tmpl.RecrrgSuplrInvcTmplUUID

  association [0..1] to I_RecurrenceStatus    as _RecurrenceStatusText on $projection.RecurrenceInstanceStatus = _RecurrenceStatusText.RecrrgAcctgDocOccrncSts
{

  key _Forcast.RecrrgSuplrInvcTmplInstceUUID                                                  as RecrrgSuplrInvcTmplInstceUUID,

      _Forcast.RecrrgSuplrInvcTmplUUID                                                        as RecrrgSuplrInvcTmplUUID,

      _Forcast.RecrrgSuplrInvcTmplInstance                                                    as RecrrgSuplrInvcTmplInstance,

      _Forcast.RecurrenceInstanceStatus                                                       as RecurrenceInstanceStatus,

      _RecurrenceStatusText._Text[ Language = $session.system_language ].RecurrenceStatusName as RecurrenceInstanceStatusName,

      _Forcast.PostingDate                                                                    as PostingDate,

      _Forcast.AccountingDocument                                                             as AccountingDocument,

      _Forcast.FiscalYear                                                                     as FiscalYear,

      _Forcast.TransactionCurrency                                                            as TransactionCurrency,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      _Forcast.AmountInTransactionCurrency                                                    as AmountInTransactionCurrency,

      _Tmpl.CompanyCode                                                                       as CompanyCode,

      _Forcast.OriginalReferenceDocument                                                      as OriginalReferenceDocument,

      _Tmpl
}
```
