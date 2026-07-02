---
name: I_BPRELATIONSHIP_2
description: Bprelationship 2
semantic_en: "business partner relationship — links between two business partners with relationship type, validity dates, and role definition indicators"
semantic_vi: "mối quan hệ giữa các đối tác kinh doanh — liên kết giữa hai đối tác kinh doanh với loại mối quan hệ, ngày hiệu lực và chỉ số định nghĩa vai trò"
keywords:
  - mối quan hệ
  - đối tác kinh doanh
  - loại quan hệ
app_component: AP-MD-BP
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - component:AP-MD-BP
  - lob:Other
  - bo:BusinessPartnerRelationship
---
# I_BPRELATIONSHIP_2

**Bprelationship 2**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `RelationshipNumber` | `relnr` |
| `BusinessPartner1` | `partner1` |
| `BusinessPartner2` | `partner2` |
| `ValidityEndDate` | `date_to` |
| `ValidityStartDate` | `date_from` |
| `IsStandardRelationship` | `xdfrel` |
| `RelationshipCategory` | `reltyp` |
| `BPRelationshipType` | `relkind` |
| `BusPartRelshpIsRoleDefinition` | `xrf` |
| `CreatedByUser` | `crusr` |
| `CreationDate` | `crdat` |
| `CreationTime` | `crtim` |
| `LastChangedByUser` | `chusr` |
| `LastChangeDate` | `chdat` |
| `LastChangeTime` | `chtim` |
| `_BusinessPartner1` | *Association* |
| `_BusinessPartner2` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner1` | `I_BusinessPartner` | [1..1] |
| `_BusinessPartner2` | `I_BusinessPartner` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBUPAREL2'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'Business Partner Relationship'//'Interface view for BUT050'
@VDM.viewType: #BASIC
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
@Analytics: {
 dataCategory: #DIMENSION,
 dataExtraction: {
    enabled: true, 
    delta.changeDataCapture: {
      automatic: true
    }       
 }
}
@ObjectModel.sapObjectNodeType.name: 'BusinessPartnerRelationship'
@ObjectModel.representativeKey: 'RelationshipNumber'
define view I_BPRelationship_2
  as select from but050
  
  association [1..1] to I_BusinessPartner as _BusinessPartner1 on  _BusinessPartner1.BusinessPartner = $projection.BusinessPartner1
  association [1..1] to I_BusinessPartner as _BusinessPartner2  on  _BusinessPartner2.BusinessPartner = $projection.BusinessPartner2
{

  key relnr as RelationshipNumber,
  @ObjectModel.foreignKey.association: '_BusinessPartner1'
  key partner1 as BusinessPartner1,
  @ObjectModel.foreignKey.association: '_BusinessPartner2'
  key partner2 as BusinessPartner2,
  @Semantics.businessDate.to: true
  key date_to as ValidityEndDate,  
  @Semantics.businessDate.from: true
  date_from as ValidityStartDate,
  xdfrel as IsStandardRelationship,
  reltyp as RelationshipCategory,
  relkind as BPRelationshipType,
  xrf as BusPartRelshpIsRoleDefinition,
  
  crusr as CreatedByUser,
  crdat as CreationDate,
  crtim as CreationTime,
  chusr as LastChangedByUser,
  chdat as LastChangeDate,
  chtim as LastChangeTime,  
      
  _BusinessPartner1, 
  _BusinessPartner2
}
```
