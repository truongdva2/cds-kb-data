---
name: D_DNGRSGDSCLASSFCTNGETDESCSR
description: D Dngrsgdsclassfctngetdescsr
semantic_en: "Dangerous Goods Classification Get Description Result — lookup view for DG transport mode description text in specified Language"
semantic_vi: "Kết quả lấy mô tả phân loại hàng hóa nguy hiểm — tra cứu văn bản mô tả chế độ vận chuyển hàng hóa nguy hiểm theo ngôn ngữ"
keywords:
  - hàng hóa nguy hiểm
  - phân loại
  - mô tả
  - vận chuyển
app_component: EHS-SUS-DG
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EHS
  - EHS-SUS
  - EHS-SUS-DG
  - component:EHS-SUS-DG
  - lob:Other
---
# D_DNGRSGDSCLASSFCTNGETDESCSR

**D Dngrsgdsclassfctngetdescsr**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-DG` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CmplRqRsltDngrsGdsModeOfTrUUID` | `cmplrqrsltdngrsgdsmodeoftruuid` |
| `CmplRqVers` | `ehfnd_bco_id` |
| `DngrsGoodsModeOfTransport` | `ehfnd_req_mot` |
| `Language` | `ehfnd_langu` |
| `DangerousGoodDescForDocuments` | `ehdgm_final_description` |
| `CmplRqVersName` | `ehdgm_regulation_name` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'DG Classfctn Get Description Result'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
define root abstract entity D_DngrsGdsClassfctnGetDescsR
{
  CmplRqRsltDngrsGdsModeOfTrUUID : cmplrqrsltdngrsgdsmodeoftruuid;
  CmplRqVers                     : ehfnd_bco_id;
  DngrsGoodsModeOfTransport      : ehfnd_req_mot;
  Language                       : ehfnd_langu;
  DangerousGoodDescForDocuments  : ehdgm_final_description;
  CmplRqVersName                 : ehdgm_regulation_name;
}
```
