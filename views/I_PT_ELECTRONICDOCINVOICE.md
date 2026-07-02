---
name: I_PT_ELECTRONICDOCINVOICE
description: PT Electronicdocinvoice
semantic_en: "Portugal electronic invoice documents — stores electronic invoice data for Portuguese regulatory compliance including signature and request tracking."
semantic_vi: "Hóa đơn điện tử của Bồ Đào Nha — lưu trữ dữ liệu hóa đơn điện tử để tuân thủ quy định của Bồ Đào Nha bao gồm ký số và theo dõi yêu cầu."
keywords:
  - hóa đơn điện tử Bồ Đào Nha
  - tuân thủ điều lệ
  - hóa đơn ký số
app_component: CA-GTF-CSC-EDO-PT
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - component:CA-GTF-CSC-EDO-PT
  - lob:Cross-Application Components
---
# I_PT_ELECTRONICDOCINVOICE

**PT Electronicdocinvoice**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-PT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ElectronicDocUUID` | `edoc_guid` |
| `PortugueseInvoiceNumber` | `invoice_no` |
| `PT_ElectronicDocIsSigned` | `sign_exists` |
| `PT_ElectronicDocRequestID` | `request_id` |
| `PT_ElectronicDocStatusDate` | `status_issue_date` |
| `PT_ElectronicDocStatusTime` | `status_issue_time` |
| `PT_ElectronicDocInvoiceID` | `uuid` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Portugal eInvoice'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  usageType:{
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #TRANSACTIONAL
  },
  supportedCapabilities: [#SQL_DATA_SOURCE, 
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET],
  modelingPattern: #NONE
}

@VDM: {
  viewType: #BASIC
}

define view entity I_PT_ElectronicDocInvoice 
  as select from edoptinv
{
      key edoc_guid     as ElectronicDocUUID,
      invoice_no        as PortugueseInvoiceNumber,
      sign_exists       as PT_ElectronicDocIsSigned,
      request_id        as PT_ElectronicDocRequestID,
      status_issue_date as PT_ElectronicDocStatusDate,
      status_issue_time as PT_ElectronicDocStatusTime,
      uuid              as PT_ElectronicDocInvoiceID
}
```
