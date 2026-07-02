---
name: I_CITCLASSIFICATIONCODEVH
description: Citclassificationcodevh
semantic_en: "CIT classification code projection view — displays corporate income tax classification codes with hierarchy structure and node relationships."
semantic_vi: "Xem tính năng CIT classification code — hiển thị các mã phân loại thuế thu nhập doanh nghiệp với cấu trúc phân cấp và mối quan hệ nút."
keywords:
  - CIT
  - phân loại
  - mã
app_component: FI-LOC-CIT
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-CIT
  - interface-view
  - value-help
  - classification
  - component:FI-LOC-CIT
  - lob:Finance
---
# I_CITCLASSIFICATIONCODEVH

**Citclassificationcodevh**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CIT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CorporateIncomeTaxHierarchy` | `CorporateIncomeTaxHierarchy` |
| `HierarchyNode` | `HierarchyNode` |
| `CITClassificationCode` | `CITClassificationCode` |
| `ParentNode` | `ParentNode` |
| `NodeType` | `NodeType` |
| `CITClassificationCodeDesc` | `CITClassificationCodeDesc` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICITCLFCODEVH'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'CIT Classification Code'
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: {
  compositionRoot: true,
  dataCategory: #VALUE_HELP,
  representativeKey: 'CITClassificationCode',
  usageType: {
    serviceQuality: #C,
    dataClass: #META,
    sizeCategory: #S
  },
  supportedCapabilities: [#SEARCHABLE_ENTITY,
                          #VALUE_HELP_PROVIDER]
}

@Search.searchable: true
@Consumption.ranked: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE

@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
define view I_CITClassificationCodeVH
  as select from P_CITClassificationCode
{
  key CorporateIncomeTaxHierarchy,
  key HierarchyNode,
      @Search.defaultSearchElement: true
      @ObjectModel.text.element: ['CITClassificationCodeDesc']
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
  key CITClassificationCode,
      ParentNode,
      NodeType,

      @Semantics.text: true
      CITClassificationCodeDesc
}
```
