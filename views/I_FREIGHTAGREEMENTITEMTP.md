---
name: I_FREIGHTAGREEMENTITEMTP
description: Freightagreementitemtp
semantic_en: "freight agreement item transactional proxy — transportation agreement line items with calculation sheet references and charge classifications."
semantic_vi: "mặt hàng hợp đồng vận chuyển - máy chủ proxy giao dịch — các dòng hợp đồng vận chuyển với tham chiếu bảng tính toán và phân loại phí."
keywords:
  - mặt hàng hợp đồng vận chuyển
  - bảng tính toán
  - phí vận chuyển
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
  - freight
  - item-level
  - component:TM-FRA-2CL
  - lob:Other
---
# I_FREIGHTAGREEMENTITEMTP

**Freightagreementitemtp**

| Property | Value |
|---|---|
| App Component | `TM-FRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TranspAgreementItemUUID` | `TranspAgreementItemUUID` |
| `TransportationAgreementUUID` | `TransportationAgreementUUID` |
| `TranspCalculationSheetUUID` | `TranspCalculationSheetUUID` |
| `TransportationAgreementItem` | `TransportationAgreementItem` |
| `TranspAgreementItemDesc` | `TranspAgreementItemDesc` |
| `TransportationStageCategory` | `TransportationStageCategory` |
| `TransportationCalculationSheet` | `TransportationCalculationSheet` |
| `TranspCalcSheetItmIsHdrCharge` | `TranspCalcSheetItmIsHdrCharge` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Freight Agreement Item - TP'
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType: {
      sizeCategory: #M,
      serviceQuality: #B,
      dataClass:#TRANSACTIONAL
  },
  sapObjectNodeType.name:'FreightAgreementItem'}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@Metadata.ignorePropagatedAnnotations:true
@OData.entityType.name: 'FreightAgreementItem_Type'
define view entity I_FreightAgreementItemTP
  as projection on R_FreightAgreementItemTP as FreightAgreementItem
{
  key TranspAgreementItemUUID,
      TransportationAgreementUUID,
      TranspCalculationSheetUUID,
      TransportationAgreementItem,
      TranspAgreementItemDesc,
      TransportationStageCategory,
      TransportationCalculationSheet,
      TranspCalcSheetItmIsHdrCharge,
      
      //To Child
      @Semantics.valueRange.maximum: '1'
      FreightAgreementItem._FreightAgrmtCalculationSheet   : redirected to composition child I_FreightAgrmtCalcSheetTP,
      @Semantics.valueRange.maximum: '1'
      FreightAgreementItem._FrtAgrmtItemPaymentTerm : redirected to composition child I_FrtAgrmtItemPaymentTermTP,

      //To Parent
      FreightAgreementItem._FreightAgreement        : redirected to parent I_FreightAgreementTP
}
```
