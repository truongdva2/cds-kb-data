---
name: D_PCLGSDCGETDAGDSEDIINFOITEMR
description: D Pclgsdcgetdagdsediinfoitemr
semantic_en: "EDI-formatted dangerous goods item data — includes product reference, regulatory text blocks (basic info, extended info, relevant regulations)."
semantic_vi: "Dữ liệu hàng hóa nguy hiểm định dạng EDI — thông tin sản phẩm, quy định, điều khiển EDI."
keywords:
  - EDI
  - quy định
  - sản phẩm
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
  - item-level
  - component:EHS-SUS-FND-PC
  - lob:Other
---
# D_PCLGSDCGETDAGDSEDIINFOITEMR

**D Pclgsdcgetdagdsediinfoitemr**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ProdCmplncLogsDocumentItem` | `ehfnd_log_doc_posnr` |
| `Product` | `ehfnd_mat_id` |
| `DangerousGoodsEDIControllerTxt` | `dangerousgoodsedicontrollertxt` |
| `DangerousGoodsEDIBasicInfoTxt` | `dangerousgoodsedibasicinfotxt` |
| `DngrsGoodsEDIExtendedInfoTxt` | `dngrsgoodsediextendedinfotxt` |
| `DngrsGdsEDIRlvtRegulationsTxt` | `dngrsgdsedirlvtregulationstxt` |
| `_Root` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Root` | `D_PCLgsDcGetDngrsGoodsEDIInfoR` | — |

## Source Code

```abap
@EndUserText.label: 'Item EDI R'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
define abstract entity D_PCLgsDcGetDaGdsEDIInfoItemR
{
  ProdCmplncLogsDocumentItem     : ehfnd_log_doc_posnr; // Id of the corresponding item in the PCLD instance
  Product                        : ehfnd_mat_id;
  DangerousGoodsEDIControllerTxt : dangerousgoodsedicontrollertxt;
  DangerousGoodsEDIBasicInfoTxt  : dangerousgoodsedibasicinfotxt;
  DngrsGoodsEDIExtendedInfoTxt   : dngrsgoodsediextendedinfotxt;
  DngrsGdsEDIRlvtRegulationsTxt  : dngrsgdsedirlvtregulationstxt;
  _Root                          : association to parent D_PCLgsDcGetDngrsGoodsEDIInfoR;

}
```
