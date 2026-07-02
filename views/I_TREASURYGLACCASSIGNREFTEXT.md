---
name: I_TREASURYGLACCASSIGNREFTEXT
description: Treasuryglaccassignreftext
semantic_en: "Treasury account assignment reference text — multilingual descriptions of GL account assignment references."
semantic_vi: "Văn bản tham chiếu gán tài khoản kho bạc — mô tả đa ngôn ngữ của tham chiếu gán tài khoản GL."
keywords:
  - tài khoản kho bạc
  - tham chiếu gán tài khoản
  - mô tả
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - text-view
  - text
  - treasury
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
  - bo:TreasuryGLAccountAssignmentRef
---
# I_TREASURYGLACCASSIGNREFTEXT

**Treasuryglaccassignreftext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TreasuryGLAccountAssignmentRef` | `TreasuryGLAccAssignRefText.aa_ref` |
| `Language` | `TreasuryGLAccAssignRefText.spras` |
| `TreasuryGLAccountAssignRefName` | `cast(…)` |
| `_TreasuryGLAccountAssignRef` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TreasuryGLAccountAssignRef` | `I_TreasuryGLAccountAssignRef` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Treasury Account Assignment Ref - Text'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'ITRGLACASGNREFT'
@ObjectModel.representativeKey: 'TreasuryGLAccountAssignmentRef'
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory:  #M
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@VDM.viewType: #BASIC



define view entity I_TreasuryGLAccAssignRefText
  as select from tracc_aa_ref_t as TreasuryGLAccAssignRefText

  association [0..1] to I_TreasuryGLAccountAssignRef as _TreasuryGLAccountAssignRef on $projection.TreasuryGLAccountAssignmentRef = _TreasuryGLAccountAssignRef.TreasuryGLAccountAssignmentRef
  association [0..1] to I_Language                   as _Language                   on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TreasuryGLAccountAssignRef'
  key TreasuryGLAccAssignRefText.aa_ref                                              as TreasuryGLAccountAssignmentRef,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key TreasuryGLAccAssignRefText.spras                                               as Language,
      @Semantics.text: true
      cast(TreasuryGLAccAssignRefText.aa_ref_name  as ftr_gen_accnt_assign_ref_name preserving type) as TreasuryGLAccountAssignRefName,

      _TreasuryGLAccountAssignRef,
      _Language
}
```
