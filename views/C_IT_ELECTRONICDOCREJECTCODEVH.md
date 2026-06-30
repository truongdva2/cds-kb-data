---
name: C_IT_ELECTRONICDOCREJECTCODEVH
description: IT Electronicdocrejectcodevh
semantic_en: "VH: Italy electronic document rejection codes — value help providing the list of rejection codes used for Italian electronic documents, with rejection code, language, and rejection reason text."
semantic_vi: "VH: Mã từ chối tài liệu điện tử Italy — danh sách trợ giúp giá trị cung cấp các mã từ chối dùng cho tài liệu điện tử Italy, kèm mã từ chối, ngôn ngữ và mô tả lý do từ chối."
keywords:
  - mã từ chối tài liệu điện tử Italy
  - từ chối e-document Italy
  - hóa đơn điện tử bị từ chối
  - trợ giúp giá trị từ chối IT
app_component: CA-GTF-CSC-EDO-IT
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - consumption-view
  - value-help
  - component:CA-GTF-CSC-EDO-IT
  - lob:Cross-Application Components
  - bo:IT_ElectronicDocRejectionCode
---
# C_IT_ELECTRONICDOCREJECTCODEVH

**IT Electronicdocrejectcodevh**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-IT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `IT_ElectronicDocRejectionCode` | `IT_ElectronicDocRejectionCode` |
| `Language` | `Language` |
| `IT_ElectronicDocRejectCodeText` | `IT_ElectronicDocRejectCodeText` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Italy Electronic Rejection Code'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #ORGANIZATIONAL
}

@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #VALUE_HELP_PROVIDER,
                                     #SEARCHABLE_ENTITY]


@VDM.viewType: #CONSUMPTION
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey:'IT_ElectronicDocRejectionCode'
@Search.searchable: true
@ObjectModel.modelingPattern:  #VALUE_HELP_PROVIDER  
@Consumption.ranked: true
define view entity C_IT_ElectronicDocRejectCodeVH as select from I_IT_ElectronicDocRejectCode
{
 
  @ObjectModel.text.element: ['IT_ElectronicDocRejectCodeText']
  key IT_ElectronicDocRejectionCode,
  
  @Semantics.language
  @UI.hidden: true
  key Language, 

  @Semantics.text: true
  @Search: { defaultSearchElement: true, ranking: #HIGH }
  @Search.fuzzinessThreshold: 0.8
  IT_ElectronicDocRejectCodeText
}
```
