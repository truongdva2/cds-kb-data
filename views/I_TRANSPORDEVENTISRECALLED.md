---
name: I_TRANSPORDEVENTISRECALLED
description: Transpordeventisrecalled
semantic_en: "Domain values for transportation order event recall flag — indicates whether events are recalled or invalidated."
semantic_vi: "Giá trị miền cho cờ gọi lại sự kiện đơn hàng vận chuyển — chỉ ra sự kiện có bị gọi lại hay không."
keywords:
  - gọi lại sự kiện
  - cờ gọi lại
  - sự kiện vô hiệu
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - interface-view
  - component:TM-FRM-2CL
  - lob:Other
  - bo:TranspOrderEventRecalled
---
# I_TRANSPORDEVENTISRECALLED

**Transpordeventisrecalled**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TranspOrdEventIsRecalled` | `cast(substring(domvalue_l, 1, 1) as /scmtms/event_revoked preserving type)` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TranspOrdEventIsRecalledText` | [0..*] |

## Source Code

```abap
@EndUserText:   {label:              'Transportation Order Event is Recalled'}
@Analytics:     {dataCategory:       #DIMENSION,
                 dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@Analytics.technicalName: 'IEVENTREVOKED'
@ObjectModel:   {representativeKey:  'TranspOrdEventIsRecalled',

                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #META},
                 modelingPattern:        #ANALYTICAL_DIMENSION,
                 supportedCapabilities:  [ #ANALYTICAL_DIMENSION,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #VALUE_HELP_PROVIDER,
                                           #SEARCHABLE_ENTITY]}
@VDM:           {viewType:           #BASIC}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Metadata:      {allowExtensions:    true,
                 ignorePropagatedAnnotations: true}
@ObjectModel.sapObjectNodeType.name: 'TranspOrderEventRecalled'

define root view entity I_TranspOrdEventIsRecalled
  as select from dd07l
  composition [0..*] of I_TranspOrdEventIsRecalledText as _Text
{
      @ObjectModel.text.association: '_Text'
      @Semantics.booleanIndicator: true
  key cast(substring(domvalue_l, 1, 1) as /scmtms/event_revoked preserving type) as TranspOrdEventIsRecalled,

      /* Associations */
      _Text
}
where
      domname  = '/SCMTMS/EVENT_REVOKED'
  and as4local = 'A';
```
