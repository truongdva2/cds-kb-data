---
name: I_CASRVCRECONNCNREQSTATUSTEXT
description: Casrvcreconncnreqstatustext
semantic_en: "reconnection request status text localization — translated status descriptions for service reconnection requests by language."
semantic_vi: "văn bản trạng thái yêu cầu kết nối lại — mô tả trạng thái dịch sang các ngôn ngữ khác nhau."
keywords:
  - mô tả trạng thái
  - ngôn ngữ
  - kết nối lại
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - text-view
  - text
  - status
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CASRVCRECONNCNREQSTATUSTEXT

**Casrvcreconncnreqstatustext**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CASrvcReconncnReqStatus` | `cast( left( dd07t.domvalue_l, 1 ) as recreq_stat_kk preserving type )` |
| `Language` | `cast( ddlanguage as spras preserving type )` |
| `CASrvcReconncnReqStatusText` | `cast( ddtext as recreq_stat_text_kk preserving type )` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'ICASRVRCCNREQSTS'

@EndUserText.label: 'Reconnection Request Status - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CASrvcReconncnReqStatus',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CASrvcReconncnReqStatusText
  as select from dd07t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key cast( left( dd07t.domvalue_l, 1 ) as recreq_stat_kk preserving type ) as CASrvcReconncnReqStatus,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( ddlanguage as spras preserving type )                           as Language,

      @Semantics.text
      cast( ddtext as recreq_stat_text_kk preserving type )                 as CASrvcReconncnReqStatusText,

      _Language
}
where
      domname  = 'RECREQ_STAT_KK'
  and as4local = 'A'
```
