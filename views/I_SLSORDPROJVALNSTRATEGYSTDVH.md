---
name: I_SLSORDPROJVALNSTRATEGYSTDVH
description: Slsordprojvalnstrategystdvh
semantic_en: "value help for valuation strategies for sales order projects — provides standard valuation method options."
semantic_vi: "trợ giúp giá trị cho các chiến lược định giá cho dự án đơn hàng bán hàng — cung cấp tùy chọn phương pháp định giá tiêu chuẩn."
keywords:
  - chiến lược định giá
  - định giá dự án
  - phương pháp định giá
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-PCP
  - interface-view
  - value-help
  - standard-value-help
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# I_SLSORDPROJVALNSTRATEGYSTDVH

**Slsordprojvalnstrategystdvh**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SlsOrdProjValnStrategy` | `SlsOrdProjValnStrategy` |
| `SlsOrdProjValnStrgyName` | `_SlsOrdProjValnStrategyText.SlsOrdProjValnStrgyName` |
| `_SlsOrdProjValnStrategyText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SlsOrdProjValnStrategyText` | `I_SlsOrdProjValnStrategyText` | [0..1] |

## Source Code

```abap
@VDM.viewType: #COMPOSITE

@ObjectModel: {
  dataCategory: #VALUE_HELP,
  supportedCapabilities: [ #VALUE_HELP_PROVIDER ],
  representativeKey: 'SlsOrdProjValnStrategy',
  usageType: { dataClass: #CUSTOMIZING,
               serviceQuality: #A,
               sizeCategory: #S
  },
  resultSet.sizeCategory: #XS
}
@Metadata.ignorePropagatedAnnotations:true
@Analytics.technicalName: 'ISORDPROVALSTRTVH'

@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Valuationn Strategy'
@Search.searchable: true
@Consumption.ranked:true

define view entity I_SlsOrdProjValnStrategyStdVH
  as select from I_SlsOrdProjValuationStrategy
  association [0..1] to I_SlsOrdProjValnStrategyText as _SlsOrdProjValnStrategyText on  _SlsOrdProjValnStrategyText.SlsOrdProjValnStrategy = $projection.SlsOrdProjValnStrategy
                                                                                    and _SlsOrdProjValnStrategyText.Language               = $session.system_language
{
      @ObjectModel.text.element: [ 'SlsOrdProjValnStrgyName' ]
      @Search.defaultSearchElement: true
      @Search.ranking:#HIGH
  key SlsOrdProjValnStrategy,
      @Search.defaultSearchElement: true
      _SlsOrdProjValnStrategyText.SlsOrdProjValnStrgyName,

      _SlsOrdProjValnStrategyText
}
```
