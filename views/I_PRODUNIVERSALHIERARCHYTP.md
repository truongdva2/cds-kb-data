---
name: I_PRODUNIVERSALHIERARCHYTP
description: Produniversalhierarchytp
semantic_en: "product universal hierarchy TP — organizational structure for products with validity period and last change tracking."
semantic_vi: "Phân cấp sản phẩm phổ quát TP — cấu trúc tổ chức sản phẩm với khoảng thời gian hiệu lực và theo dõi thay đổi."
keywords:
  - phân cấp sản phẩm
  - hiệu lực
  - thay đổi
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - transactional-processing
  - component:LO-MD-MM-2CL
  - lob:Logistics General
  - bo:ProductUniversalHierarchy
---
# I_PRODUNIVERSALHIERARCHYTP

**Produniversalhierarchytp**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ProdUnivHierarchy` | `ProdUnivHierarchy` |
| `ProdHierarchyValidityEndDate` | `ProdHierarchyValidityEndDate` |
| `ProdHierarchyValidityStartDate` | `ProdHierarchyValidityStartDate` |
| `ProdUnivHierLastChangeDateTime` | `ProdUnivHierLastChangeDateTime` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Product Universal Hierarchy - TP'

@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
    usageType.serviceQuality: #A,
    usageType.sizeCategory : #XL,
    usageType.dataClass: #MASTER,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE
    }
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'ProductUniversalHierarchy'

define root view entity I_ProdUniversalHierarchyTP
  provider contract transactional_interface
  as projection on R_ProdUniversalHierarchyTP
{
  key ProdUnivHierarchy,
      @Semantics.businessDate.to: true
  key ProdHierarchyValidityEndDate,
      @Semantics.businessDate.from: true
      ProdHierarchyValidityStartDate,
      ProdUnivHierLastChangeDateTime,
      /* Associations */
      _Text                     : redirected to composition child I_ProdUniversalHierarchyTextTP,
      _ProdUnivHierNodeByHierID : redirected to composition child I_ProdUnivHierNdesByHierIDTP
}
```
