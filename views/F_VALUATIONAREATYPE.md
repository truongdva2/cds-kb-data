---
name: F_VALUATIONAREATYPE
description: Valuationareatype
semantic_en: "valuation area type projection — indicates whether valuation area is plant or company code level."
semantic_vi: "phép chiếu loại khu vực định giá — chỉ ra khu vực định giá ở mức nhà máy hay mã công ty."
keywords:
  - loại khu vực định giá
  - nhà máy
  - công ty
app_component: MM-IM-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-GF
  - fact-view
  - component:MM-IM-GF-2CL
  - lob:Sourcing & Procurement
---
# F_VALUATIONAREATYPE

**Valuationareatype**

| Property | Value |
|---|---|
| App Component | `MM-IM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ValuationAreaType` | `bwkrs_cus` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Valuation area type (Plant/CompanyCode)'
@ObjectModel: {
                derivationFunction:
                                    {
                                      applicableFor.element: ['ValuationAreaType'],
                                      result.type: #SINGLE,
                                      result.multipleRecords: false,
                                      result.element: 'ValuationAreaType'
                                    },
                usageType: {
                             sizeCategory: #S,
                             serviceQuality: #A,
                             dataClass: #CUSTOMIZING
                           },
                modelingPattern: #DERIVATION_FUNCTION,
                supportedCapabilities: [#DERIVATION_FUNCTION]          
              }
@VDM.viewType: #DERIVATION_FUNCTION
@Metadata.ignorePropagatedAnnotations: true
define view entity F_ValuationAreaType
  as select from tcurm
{
  key bwkrs_cus as ValuationAreaType
}
```
