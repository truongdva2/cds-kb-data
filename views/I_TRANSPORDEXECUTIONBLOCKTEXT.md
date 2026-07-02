---
name: I_TRANSPORDEXECUTIONBLOCKTEXT
description: Transpordexecutionblocktext
semantic_en: "Text labels for transportation order execution block status in multiple languages — provides translated block state descriptions."
semantic_vi: "Nhãn văn bản cho trạng thái chặn thực thi đơn hàng vận chuyển đa ngôn ngữ — cung cấp mô tả trạng thái chặn dịch."
keywords:
  - mô tả chặn thực thi
  - đa ngôn ngữ
  - nhãn chặn
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - interface-view
  - text-view
  - text
  - component:TM-FRM-2CL
  - lob:Other
---
# I_TRANSPORDEXECUTIONBLOCKTEXT

**Transpordexecutionblocktext**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TranspOrdExecutionIsBlocked` | `cast(substring(domvalue_l, 1, 1) as /scmtms/vdm_block_execution)` |
| `Language` | `ddlanguage` |
| `TranspOrdExecutionBlockDesc` | `cast(ddtext as /scmtms/vdm_block_exectn_desc preserving type )` |
| `_TranspOrdExecutionIsBlocked` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TranspOrdExecutionIsBlocked` | `I_TranspOrdExecutionIsBlocked` | — |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText:   {label:              'Ind Transp Ord Exe Block - Text'}
@Analytics:     {dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@ObjectModel:   {representativeKey:  'TranspOrdExecutionIsBlocked',
                 dataCategory:       #TEXT,
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #META},
                 modelingPattern:        #LANGUAGE_DEPENDENT_TEXT,
                 supportedCapabilities:  [ #LANGUAGE_DEPENDENT_TEXT,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #SEARCHABLE_ENTITY]}
@Analytics.technicalName: 'IEXECBLOCKTEXT'
@VDM:           {viewType:           #BASIC}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Metadata:      {ignorePropagatedAnnotations: true}

define view entity I_TranspOrdExecutionBlockText
  as select from dd07t
  association        to parent I_TranspOrdExecutionIsBlocked as _TranspOrdExecutionIsBlocked on $projection.TranspOrdExecutionIsBlocked = _TranspOrdExecutionIsBlocked.TranspOrdExecutionIsBlocked
  association [0..1] to I_Language                           as _Language                    on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspOrdExecutionIsBlocked'
      @Semantics.booleanIndicator: true
  key cast(substring(domvalue_l, 1, 1) as /scmtms/vdm_block_execution) as TranspOrdExecutionIsBlocked,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                       as Language,
      @Semantics.text
      cast(ddtext as /scmtms/vdm_block_exectn_desc preserving type )   as TranspOrdExecutionBlockDesc,
      /* Associations */
      _TranspOrdExecutionIsBlocked,
      _Language
}
where
      domname  = '/SCMTMS/BLOCK_EXECUTION'
  and as4local = 'A';
```
