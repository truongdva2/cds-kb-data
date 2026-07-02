---
name: I_SLCQUESTIONNOTEOPTIONTEXT
description: Slcquestionnoteoptiontext
semantic_en: "question note option text descriptions in multiple languages — translates note option codes to localized text names."
semantic_vi: "mô tả văn bản tùy chọn ghi chú câu hỏi trong nhiều ngôn ngữ — chuyển đổi mã tùy chọn ghi chú thành tên văn bản địa phương hóa."
keywords:
  - tên tùy chọn
  - dịch ngôn ngữ
  - mô tả ghi chú
app_component: SLC-SUP
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-SUP
  - interface-view
  - text-view
  - text
  - note
  - component:SLC-SUP
  - lob:Other
  - bo:IsQuestionCommentEnabled
---
# I_SLCQUESTIONNOTEOPTIONTEXT

**Slcquestionnoteoptiontext**

| Property | Value |
|---|---|
| App Component | `SLC-SUP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `IsQuestionCommentEnabled` | `cast( substring( domvalue_l, 1, 1 ) as /srmsmc/qst_notes)` |
| `Language` | `ddlanguage` |
| `SLCQuestionCommentOptionName` | `cast(ddtext as /srmsmc/type_descr preserving type)` |
| `_SLCQuestionNoteOption` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_SLCQuestionNoteOption` | `I_SLCQuestionNoteOption` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Question Note Option - Text' //same as DDL description
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'IsQuestionCommentEnabled'
@AbapCatalog.sqlViewName: 'ISLCQSTNOTEOPTT'
define view I_SLCQuestionNoteOptionText as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  association [1..1] to I_SLCQuestionNoteOption as _SLCQuestionNoteOption on $projection.IsQuestionCommentEnabled = _SLCQuestionNoteOption.IsQuestionCommentEnabled
{
  key  cast( substring(  domvalue_l, 1, 1 ) as /srmsmc/qst_notes) as IsQuestionCommentEnabled,

  @Semantics.language: true
  key ddlanguage as Language,

  @Semantics.text: true
  cast(ddtext as /srmsmc/type_descr preserving type) as SLCQuestionCommentOptionName,

  _SLCQuestionNoteOption, 
  _Language
}
where domname = '/SRMSMC/QST_NOTE_OPT' and as4local = 'A'
```
