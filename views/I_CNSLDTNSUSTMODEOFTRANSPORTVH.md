---
name: I_CNSLDTNSUSTMODEOFTRANSPORTVH
description: Cnsldtnsustmodeoftransportvh
semantic_en: "sustainability transport mode value-help — lookup for transportation method selection with descriptions"
semantic_vi: "Danh sách giá trị trợ giúp cho phương thức vận chuyển bền vững — tìm kiếm phương pháp vận chuyển"
keywords:
  - tìm kiếm vận chuyển
  - dropdown phương thức
  - chọn logistics
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
  - transport
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNSUSTMODEOFTRANSPORTVH

**Cnsldtnsustmodeoftransportvh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SustainabilityModeOfTransport` | `_Source.SustainabilityModeOfTransport` |
| `SustModeOfTransportName` | `_Source._Text[1: Language=$session.system_language].SustModeOfTransportName` |

## Associations

> No associations found.

## Source Code

```abap
@Analytics: {
  technicalName: 'ICSSUSTMODEOFTRANSPORTVH'
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
  representativeKey: 'SustainabilityModeOfTransport',
  semanticKey: ['SustainabilityModeOfTransport'],
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
@EndUserText.label: 'Cnsldtn Sustainability Mode of Transport'

define view entity I_CnsldtnSustModeOfTransportVH
  as select from I_CnsldtnSustModeOfTransport as _Source

{
      @ObjectModel.text.element: ['SustModeOfTransportName']
  key _Source.SustainabilityModeOfTransport,

      @Semantics.text
      _Source._Text[1: Language=$session.system_language].SustModeOfTransportName
}
```
