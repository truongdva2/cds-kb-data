---
name: D_PROCORDCONFGETGDSMVTPRPSLP
description: D Procordconfgetgdsmvtprpslp
semantic_en: "parameter entity for proposing goods movement data on process order confirmation — specifies movement quantity, scrap, unit, and proposal flags."
semantic_vi: "Tham số đề xuất dữ liệu chuyển động hàng hóa cho xác nhận lệnh công nghiệp — số lượng, hao hụt."
keywords:
  - chuyển động hàng hóa
  - xác nhận
  - đề xuất
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
# D_PROCORDCONFGETGDSMVTPRPSLP

**D Procordconfgetgdsmvtprpslp**

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
| `OrderSuboperation` | `vdm_uvorn` |
| `OrderConfirmationRecordType` | `co_satza` |
| `ConfirmationUnit` | `meinh` |
| `ConfirmationUnitISOCode` | `isocd_unit` |
| `ConfirmationUnitSAPCode` | `meinsint` |
| `ConfirmationYieldQuantity` | `ru_lmnga` |
| `ConfirmationScrapQuantity` | `ru_xmnga` |
| `QuantityIsToBeProposed` | `vssmg` |
| `ActivityIsToBeProposed` | `vssle` |
| `DateAndTimeIsToBeProposed` | `vsszt` |
| `PersonnelIsToBeProposed` | `vsszu` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Parameter for Action Movement Proposal'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ProcOrdConfGetGdsMvtPrpslP 
{
    ConfirmationGroup               : pph_rueck; 
    OrderID                         : manufacturingorder;
    OrderOperation                  : vdm_vornr;
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
    QuantityIsToBeProposed          : vssmg;
    ActivityIsToBeProposed          : vssle;
    DateAndTimeIsToBeProposed       : vsszt;
    PersonnelIsToBeProposed         : vsszu;
}
```
