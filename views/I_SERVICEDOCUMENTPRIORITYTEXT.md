---
name: I_SERVICEDOCUMENTPRIORITYTEXT
description: Service DocumentUMENTPRIORITYTEXT
semantic_en: "Service transaction priority text — localized descriptions for priority codes used in service documents."
semantic_vi: "Văn bản ưu tiên giao dịch dịch vụ — mô tả đã bản địa hóa cho mã ưu tiên được sử dụng trong tài liệu dịch vụ."
keywords:
  - tên ưu tiên
  - mô tả ưu tiên
  - ngôn ngữ ưu tiên
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - text-view
  - service
  - document
  - text
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICEDOCUMENTPRIORITYTEXT

**Service DocumentUMENTPRIORITYTEXT**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ServiceDocumentPriority` | `priority` |
| `Language` | `langu` |
| `ServiceDocumentPriorityName` | `txt_long` |
| `_ServiceDocumentPriority` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocumentPriority` | `I_ServiceDocumentPriority` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Service Transaction Priority - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISERVDOCPRIOTEXT',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
   dataCategory: #TEXT,
   representativeKey: 'ServiceDocumentPriority',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #D,
     sizeCategory:   #S
   },
   supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE],
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT
}
@Analytics.dataExtraction.enabled: true
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

define view I_ServiceDocumentPriorityText
  as select from scpriot
  association [1..1] to I_ServiceDocumentPriority as _ServiceDocumentPriority on $projection.ServiceDocumentPriority = _ServiceDocumentPriority.ServiceDocumentPriority
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_ServiceDocumentPriority'
  key priority as ServiceDocumentPriority,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu    as Language,
      @Semantics.text: true
      txt_long as ServiceDocumentPriorityName,

      _ServiceDocumentPriority,
      _Language
}
```
