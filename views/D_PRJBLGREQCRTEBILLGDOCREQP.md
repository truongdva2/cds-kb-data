---
name: D_PRJBLGREQCRTEBILLGDOCREQP
description: D Prjblgreqcrtebillgdocreqp
semantic_en: "parameter entity for creating billing document requests from project billing — controls action type, on-account item inclusion, adhoc plan item creation."
semantic_vi: "Tham số tạo yêu cầu chứng chỉ lập hóa đơn từ dự án — loại hành động, mục phí, mục kế hoạch."
keywords:
  - tạo
  - hóa đơn
  - dự án
app_component: PPM-SCL-BIL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-BIL
  - component:PPM-SCL-BIL
  - lob:Other
---
# D_PRJBLGREQCRTEBILLGDOCREQP

**D Prjblgreqcrtebillgdocreqp**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Action` | `abap.string` |
| `OnAccountItemsAreIncluded` | `boolean` |
| `ProjBillgAdhcBillgPlnItmIsCrtd` | `boolean` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
//@ObjectModel.modelingPattern: #DATA_STRUCTURE
@EndUserText.label: 'Abstract entity for creating BDR'

define root abstract entity D_PrjBlgReqCrteBillgDocReqP

{ 
  Action                    : abap.string;
  OnAccountItemsAreIncluded : boolean; 
  @UI.lineItem: [{ exclude: true  }]
  @Feature: 'PROJ_BILLG_ADHOC_BILLG'
  ProjBillgAdhcBillgPlnItmIsCrtd: boolean;
}
```
