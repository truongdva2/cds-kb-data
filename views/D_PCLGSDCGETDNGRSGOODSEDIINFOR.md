---
name: D_PCLGSDCGETDNGRSGOODSEDIINFOR
description: D Pclgsdcgetdngrsgoodsediinfor
semantic_en: "dangerous goods EDI document result — references the compliance document UUID."
semantic_vi: "Kết quả EDI chứng chỉ hàng hóa nguy hiểm — tham chiếu UUID tài liệu."
keywords:
  - EDI
  - UUID
  - chứng chỉ
app_component: EHS-SUS-FND-PC
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EHS
  - EHS-SUS
  - EHS-SUS-FND
  - component:EHS-SUS-FND-PC
  - lob:Other
---
# D_PCLGSDCGETDNGRSGOODSEDIINFOR

**D Pclgsdcgetdngrsgoodsediinfor**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ProdCmplncLogsDocument` | `ehfnd_log_doc_number` |
| `_ItemInformation` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ItemInformation` | `D_PCLgsDcGetDaGdsEDIInfoItemR` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'DG Document EDI R'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
define root abstract entity D_PCLgsDcGetDngrsGoodsEDIInfoR
{
  ProdCmplncLogsDocument : ehfnd_log_doc_number; // Logistics Document Number
  _ItemInformation       : composition [0..*] of D_PCLgsDcGetDaGdsEDIInfoItemR;

}
```
