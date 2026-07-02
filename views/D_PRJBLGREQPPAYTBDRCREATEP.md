---
name: D_PRJBLGREQPPAYTBDRCREATEP
description: D Prjblgreqppaytbdrcreatep
semantic_en: "parameter entity for prepayment billing document requests — specifies WBS element ID and prepayment type for advance billing."
semantic_vi: "Tham số tạo yêu cầu hóa đơn trả trước — mã phần tử WBS, loại trả trước."
keywords:
  - trả trước
  - WBS
  - hóa đơn
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
# D_PRJBLGREQPPAYTBDRCREATEP

**D Prjblgreqppaytbdrcreatep**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BillingWBSElementInternalID` | `ps_s4_pspnr` |
| `PrjBlgElmPlndPpaytType` | `pbe_prepaymenttype` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
//@ObjectModel.modelingPattern: #DATA_STRUCTURE
@EndUserText.label: 'Abstract entity for BDR prepayment'

define abstract entity D_PrjBlgReqPpaytBDRCreateP
{
  BillingWBSElementInternalID : ps_s4_pspnr;
  PrjBlgElmPlndPpaytType      : pbe_prepaymenttype;
}
```
