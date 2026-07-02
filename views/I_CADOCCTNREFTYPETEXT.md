---
name: I_CADOCCTNREFTYPETEXT
description: Cadocctnreftypetext
semantic_en: "document container reference type text — language-specific descriptions of reference types for documents in contract accounting containers."
semantic_vi: "Văn bản loại tham chiếu vùng chứa tài liệu — mô tả loại tham chiếu tài liệu trong vùng chứa kế toán hợp đồng theo từng ngôn ngữ."
keywords:
  - Loại tham chiếu tài liệu
  - Văn bản tham chiếu
  - Kế toán hợp đồng
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - text-view
  - text
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CADOCCTNREFTYPETEXT

**Cadocctnreftypetext**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CADocumentContainerRefType` | `refty` |
| `Language` | `langu` |
| `CADocumentContainerRefTypeText` | `text` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Document Container Reference Type - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CADocumentContainerRefType',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CADocCtnRefTypeText
  as select from tfkdcrt

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key refty as CADocumentContainerRefType,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key langu as Language,

      @Semantics.text
      text  as CADocumentContainerRefTypeText,

      _Language
}
```
