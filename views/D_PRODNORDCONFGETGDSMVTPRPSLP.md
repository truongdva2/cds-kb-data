---
name: D_PRODNORDCONFGETGDSMVTPRPSLP
description: D Prodnordconfgetgdsmvtprpslp
semantic_en: "parameter entity for proposing goods movements on production order confirmation — specifies movement quantity, rework, scrap, unit, and proposal controls."
semantic_vi: "Tham số đề xuất chuyển động hàng hóa cho xác nhận lệnh sản xuất — số lượng, gia công lại, hao hụt."
keywords:
  - chuyển động
  - xác nhận lệnh
  - hàng hóa
app_component: PP-ES
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-ES
  - component:PP-ES
  - lob:Manufacturing
---
# D_PRODNORDCONFGETGDSMVTPRPSLP

**D Prodnordconfgetgdsmvtprpslp**

| Property | Value |
|---|---|
| App Component | `PP-ES` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ConfirmationGroup` | `pph_rueck` |
| `OrderID` | `manufacturingorder` |
| `OrderOperation` | `vdm_vornr` |
| `Sequence` | `manufacturingordersequence` |
| `OrderSuboperation` | `vdm_uvorn` |
| `OrderConfirmationRecordType` | `co_satza` |
| `ConfirmationUnit` | `meinh` |
| `ConfirmationUnitISOCode` | `isocd_unit` |
| `ConfirmationUnitSAPCode` | `meinsint` |
| `ConfirmationYieldQuantity` | `ru_lmnga` |
| `ConfirmationScrapQuantity` | `ru_xmnga` |
| `ConfirmationReworkQuantity` | `ru_rmnga` |
| `QuantityIsToBeProposed` | `vssmg` |
| `ActivityIsToBeProposed` | `vssle` |
| `DateAndTimeIsToBeProposed` | `vsszt` |
| `PersonnelIsToBeProposed` | `vsszu` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Parameter for Action to Propose Goodsmovement Data'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ProdnOrdConfGetGdsMvtPrpslP 
{
    ConfirmationGroup               : pph_rueck; 
    OrderID                         : manufacturingorder;
    OrderOperation                  : vdm_vornr;
    Sequence                        : manufacturingordersequence;
    OrderSuboperation               : vdm_uvorn;
    OrderConfirmationRecordType     : co_satza;
    @Semantics.unitOfMeasure: true
    ConfirmationUnit                : meinh;
    ConfirmationUnitISOCode         : isocd_unit;
    ConfirmationUnitSAPCode         : meinsint;
    @Semantics.quantity.unitOfMeasure: 'ConfirmationUnit'    
    ConfirmationYieldQuantity       : ru_lmnga;
    @Semantics.quantity.unitOfMeasure: 'ConfirmationUnit'    
    ConfirmationScrapQuantity       : ru_xmnga;
    @Semantics.quantity.unitOfMeasure: 'ConfirmationUnit'    
    ConfirmationReworkQuantity      : ru_rmnga;
    QuantityIsToBeProposed          : vssmg;
    ActivityIsToBeProposed          : vssle;
    DateAndTimeIsToBeProposed       : vsszt;
    PersonnelIsToBeProposed         : vsszu;
}
```
