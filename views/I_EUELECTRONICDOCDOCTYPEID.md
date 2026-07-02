---
name: I_EUELECTRONICDOCDOCTYPEID
description: Euelectronicdocdoctypeid
semantic_en: "document type identifier — maps document type codes to EU process identifiers and email document indicators"
semantic_vi: "định danh loại tài liệu — ánh xạ các mã loại tài liệu thành các định danh quy trình EU và chỉ báo tài liệu email"
keywords:
  - loại tài liệu
  - định danh
  - quy trình
app_component: CA-GTF-CSC-EDO-PAP
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
  - component:CA-GTF-CSC-EDO-PAP
  - lob:Cross-Application Components
---
# I_EUELECTRONICDOCDOCTYPEID

**Euelectronicdocdoctypeid**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-PAP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `EU_EDocDoctypeId` | `doc_type_id` |
| `EU_EDocDoctype` | `doc_type` |
| `EU_EDocProcessId` | `process_id` |
| `EU_EDocIsEmailDocType` | `is_email_doc_type` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Document Type ID'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel:{
usageType:{
  serviceQuality: #C,
  sizeCategory: #M,
  dataClass: #MIXED
},
  supportedCapabilities: [#SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET],
  modelingPattern: #NONE,

 representativeKey: 'EU_EDocDoctypeId'
 }
@VDM:{
viewType: #BASIC
}

define root view entity I_EUElectronicDocDocTypeId
  as select from edoeudoctypeid
{

  key doc_type_id       as EU_EDocDoctypeId,
      doc_type          as EU_EDocDoctype,
      process_id        as EU_EDocProcessId,
      is_email_doc_type as EU_EDocIsEmailDocType
}
```
