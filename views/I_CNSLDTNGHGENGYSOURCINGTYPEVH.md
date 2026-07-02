---
name: I_CNSLDTNGHGENGYSOURCINGTYPEVH
description: Cnsldtnghgengysourcingtypevh
semantic_en: "value help for GHG energy sourcing types — sourcing type codes with display names for selection lists"
semantic_vi: "danh sách hỗ trợ nhập liệu cho loại nguồn năng lượng GHG — các mã loại với tên hiển thị"
keywords:
  - GHG sourcing type
  - value help
  - droplist
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - value-help
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNGHGENGYSOURCINGTYPEVH

**Cnsldtnghgengysourcingtypevh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `GHGEnergySourcingType` | `_Source.GHGEnergySourcingType` |
| `GHGEnergySourcingTypeName` | `_Source._Text[1: Language=$session.system_language].GHGEnergySourcingTypeName` |

## Associations

> No associations found.

## Source Code

```abap
@Analytics: {
  technicalName: 'ICSGHGENGYSOURCINGTYPEVH'
}

@AccessControl:{
  authorizationCheck: #MANDATORY
}
@Metadata:{
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #S
  },
  representativeKey: 'GHGEnergySourcingType',
  semanticKey: ['GHGEnergySourcingType'],
  dataCategory: #VALUE_HELP,
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER ]
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation GHG Energy Sourcing Type'
define view entity I_CnsldtnGHGEngySourcingTypeVH
  as select from I_CnsldtnGHGEnergySourcingType as _Source
{
      @ObjectModel.text.element: ['GHGEnergySourcingTypeName']
  key _Source.GHGEnergySourcingType,

      @Semantics.text
      _Source._Text[1: Language=$session.system_language].GHGEnergySourcingTypeName
}
```
