---
name: I_SLCQUESTIONNOTEOPTION
description: Slcquestionnoteoption
semantic_en: "value help for question note option flags — provides coded options controlling whether question comments are enabled."
semantic_vi: "trợ giúp giá trị cho các cờ tùy chọn ghi chú câu hỏi — cung cấp tùy chọn mã hóa kiểm soát xem bình luận câu hỏi có được bật hay không."
keywords:
  - ghi chú câu hỏi
  - bình luận câu hỏi
  - tùy chọn ghi chú
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
  - note
  - component:SLC-SUP
  - lob:Other
  - bo:IsQuestionCommentEnabled
---
# I_SLCQUESTIONNOTEOPTION

**Slcquestionnoteoption**

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
| `_SLCQuestionNoteOptionText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SLCQuestionNoteOptionText` | `I_SLCQuestionNoteOptionText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Question Note Option' //same as DDL description
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ClientHandling.algorithm: #SESSION_VARIABLE 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'IsQuestionCommentEnabled'
@AbapCatalog.sqlViewName: 'ISLCQSTNOTEOPT'
@Metadata.ignorePropagatedAnnotations: true
define view I_SLCQuestionNoteOption as select from dd07l
  association [0..*] to I_SLCQuestionNoteOptionText as _SLCQuestionNoteOptionText  on $projection.IsQuestionCommentEnabled = _SLCQuestionNoteOptionText.IsQuestionCommentEnabled
{
  @ObjectModel.text.association: '_SLCQuestionNoteOptionText'
  key  cast( substring(  domvalue_l, 1, 1 ) as /srmsmc/qst_notes) as IsQuestionCommentEnabled,
  _SLCQuestionNoteOptionText
}
where domname  = '/SRMSMC/QST_NOTE_OPT' 
  and as4local = 'A'
```
