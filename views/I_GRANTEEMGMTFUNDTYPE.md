---
name: I_GRANTEEMGMTFUNDTYPE
description: Granteemgmtfundtype
semantic_en: "grantee management fund type — domain value classification for different fund types used in grantee management."
semantic_vi: "loại quỹ quản lý người nhận tài trợ — phân loại giá trị miền cho các loại quỹ khác nhau được sử dụng trong quản lý người nhận tài trợ."
keywords:
  - loại quỹ
  - quản lý người nhận tài trợ
  - phân loại
app_component: PSM-GM-GTE
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PSM
  - PSM-GM
  - PSM-GM-GTE
  - interface-view
  - component:PSM-GM-GTE
  - lob:Other
---
# I_GRANTEEMGMTFUNDTYPE

**Granteemgmtfundtype**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `GranteeMgmtFundType` | `cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.numc( 1 ) ) as gm_fundtype )` |
| `DomainValue` | `dd07l.domvalue_l` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_GranteeMgmtFundTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IGMFUNDTYPE'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Grantee Management Fund Type'

@VDM.viewType: #BASIC
@Analytics: {
     dataCategory: #DIMENSION,
     dataExtraction.enabled: true,
     internalName: #LOCAL
}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
     dataCategory: #VALUE_HELP,
     representativeKey: 'GranteeMgmtFundType',
     sapObjectNodeType: {
         name: 'GranteeManagementFundType'
     },
     usageType: {
         dataClass: #META,
         serviceQuality: #A,
         sizeCategory: #S
     },
     resultSet.sizeCategory: #XS,
     supportedCapabilities: [
       #ANALYTICAL_DIMENSION,
       #CDS_MODELING_ASSOCIATION_TARGET,
       #CDS_MODELING_DATA_SOURCE,
       #SQL_DATA_SOURCE
     ]     
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define root view I_GranteeMgmtFundType
  as select from dd07l
  composition [0..*] of I_GranteeMgmtFundTypeText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast ( cast ( substring( domvalue_l, 1, 1 ) as abap.numc( 1 ) ) as gm_fundtype ) as GranteeMgmtFundType,
      @Consumption.hidden: true
      @Analytics.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                                 as DomainValue, 

      _Text
}
where
      domname  = 'GM_FUNDTYPE'
  and as4local = 'A'
```
