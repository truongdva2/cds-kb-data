---
name: D_BILLGDOCCRTEFRMBILLGDOCIP
description: D Billgdoccrtefrmbillgdocip
semantic_en: "Action parameter for creating billing document from another billing document — BillingDocumentDate, BillingDocumentType"
semantic_vi: "Tham số thao tác để tạo chứng từ lập hóa đơn từ chứng từ lập hóa đơn khác — ngày chứng từ lập hóa đơn, loại chứng từ lập hóa đơn"
keywords:
  - lập hóa đơn
  - tạo
app_component: SD-BIL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
---
# D_BILLGDOCCRTEFRMBILLGDOCIP

**D Billgdoccrtefrmbillgdocip**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BillingDocumentDate` | `fkdat` |
| `BillingDocumentType` | `fkart` |
| `_Reference` | *Association* |
| `_Control` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Reference` | `D_BillgDocCrteFrmBillgDocRefIP` | [1..*] |
| `_Control` | `D_BlgDcCrteFrmBillgDocCtrlIP` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Billing Document Create from Billing Document - Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_BillgDocCrteFrmBillgDocIP
{
    BillingDocumentDate    : fkdat;
    BillingDocumentType    : fkart;
    
    _Reference : composition [1..*] of D_BillgDocCrteFrmBillgDocRefIP;
    _Control   : composition [0..1] of D_BlgDcCrteFrmBillgDocCtrlIP; 
}
```
