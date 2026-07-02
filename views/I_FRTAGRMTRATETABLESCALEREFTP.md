---
name: I_FRTAGRMTRATETABLESCALEREFTP
description: Frtagrmtratetablescalereftp
semantic_en: "freight agreement rate table scale reference transactional proxy — scaling references with dimension indices, calculation bases, and weight break classifications."
semantic_vi: "tham chiếu thang đo bảng tỷ giá hợp đồng vận chuyển - máy chủ proxy giao dịch — tham chiếu thang đo với chỉ số chiều, cơ sở tính toán và phân loại ngắt trọng lượng."
keywords:
  - thang đo
  - bảng tỷ giá
  - trọng lượng
app_component: TM-FRA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRA
  - interface-view
  - transactional-processing
  - component:TM-FRA-2CL
  - lob:Other
---
# I_FRTAGRMTRATETABLESCALEREFTP

**Frtagrmtratetablescalereftp**

| Property | Value |
|---|---|
| App Component | `TM-FRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TranspRateTableScaleRefUUID` | `TranspRateTableScaleRefUUID` |
| `TransportationRateTableUUID` | `TransportationRateTableUUID` |
| `TransportationScaleUUID` | `TransportationScaleUUID` |
| `TransportationAgreementUUID` | `TransportationAgreementUUID` |
| `TranspRateTableDimensionIndex` | `TranspRateTableDimensionIndex` |
| `TransportationCalculationBase` | `TransportationCalculationBase` |
| `TranspRateTblScRefMinValIsSupp` | `TranspRateTblScRefMinValIsSupp` |
| `TranspRateTblScRefMaxValIsSupp` | `TranspRateTblScRefMaxValIsSupp` |
| `TranspRateTblScaleRefScaleType` | `TranspRateTblScaleRefScaleType` |
| `TranspRateTblScaleRefQtyUnit` | `TranspRateTblScaleRefQtyUnit` |
| `TranspRateTblScaleRefCurrency` | `TranspRateTblScaleRefCurrency` |
| `TranspRateTblScaleRefCalcType` | `TranspRateTblScaleRefCalcType` |
| `TranspRateTblScRefNoValIsSupp` | `TranspRateTblScRefNoValIsSupp` |
| `TranspRateScRefIsRlvtForBrkWgt` | `TranspRateScRefIsRlvtForBrkWgt` |
| `TranspCmmdtyCodeNmbrngSchm` | `TranspCmmdtyCodeNmbrngSchm` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Freight Agrmt Rate Table Scale Ref - TP'
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@OData.entityType.name: 'FrtAgrmtRateTableScaleRef_Type'
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #MIXED
  },
  sapObjectNodeType.name:'FrtAgrmtRateTableScaleRef'
}
define view entity I_FrtAgrmtRateTableScaleRefTP
  as projection on R_FrtAgrmtRateTableScaleRefTP as FrtAgrmtRateTableScaleRef
{
  key TranspRateTableScaleRefUUID,
      TransportationRateTableUUID,
      TransportationScaleUUID,
      TransportationAgreementUUID,
      TranspRateTableDimensionIndex,
      TransportationCalculationBase,
      TranspRateTblScRefMinValIsSupp,
      TranspRateTblScRefMaxValIsSupp,
      TranspRateTblScaleRefScaleType,
      TranspRateTblScaleRefQtyUnit,
      TranspRateTblScaleRefCurrency,
      TranspRateTblScaleRefCalcType,
      TranspRateTblScRefNoValIsSupp,
      TranspRateScRefIsRlvtForBrkWgt,
      TranspCmmdtyCodeNmbrngSchm,

      //Association
      FrtAgrmtRateTableScaleRef._FreightAgreement          : redirected to I_FreightAgreementTP,

      //To Parent
      FrtAgrmtRateTableScaleRef._FreightAgreementRateTable : redirected to parent I_FreightAgreementRateTableTP
}
```
