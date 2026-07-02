---
name: I_EWM_STORBINMAXVOLISMNTNDTEXT
description: Ewm Storbinmaxvolismntndtext
semantic_en: "storage bin maximum volume is maintained text — describes volume capacity maintenance status in translations."
semantic_vi: "văn bản thể tích tối đa kệ lưu kho được duy trì — mô tả trạng thái duy trì dung tích thể tích bằng các bản dịch."
keywords:
  - thể tích tối đa
  - duy trì dung tích
  - giới hạn kệ
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-WOP
  - interface-view
  - text-view
  - text
  - component:SCM-EWM-WOP-2CL
  - lob:Other
  - bo:EWMStorageBinMaxVolumeIsMntnd
---
# I_EWM_STORBINMAXVOLISMNTNDTEXT

**Ewm Storbinmaxvolismntndtext**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Language` | `ddlanguage` |
| `EWMStorageBinMaxVolumeIsMntnd` | `cast(…)` |
| `EWMStorBinMaxVolumeMntndDesc` | `cast( ddtext as ewm_de_storbinmaxvolmaintdesc preserving type )` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Storage Bin Max Volume Is Mntnd - Text'
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'EWMStorageBinMaxVolumeIsMntnd'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #CUSTOMIZING,
                         sizeCategory: #S}
@Analytics.technicalName: 'IEWMSTBNMVOLMNT' 
@Metadata.ignorePropagatedAnnotations:true    
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT                                                               
define view entity I_EWM_StorBinMaxVolIsMntndText
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                                     as Language,
  key cast ( substring( dd07t.domvalue_l, 1, 1 ) as ewm_de_storbinmaxvolumeismaint preserving type ) as EWMStorageBinMaxVolumeIsMntnd,
      @Semantics.text: true
      cast( ddtext as ewm_de_storbinmaxvolmaintdesc preserving type )                                as EWMStorBinMaxVolumeMntndDesc,

      /* Associations */
      _Language
}
where
      domname  = 'XFELD'
  and as4local = 'A';
```
