---
name: I_BR_SIMPLESCLASSCODETEXT
description: BR Simplesclasscodetext
semantic_en: "text translations for Brazil Simples Nacional class code — stores language-specific class code descriptions and domain values (Language, BR_SIMPLESClassCode, BR_SIMPLESClassCodeDesc, DomainValue)."
semantic_vi: "bản dịch văn bản cho mã lớp Simples Nacional Brazil — lưu trữ mô tả mã lớp theo ngôn ngữ và giá trị miền (Language, BR_SIMPLESClassCode, BR_SIMPLESClassCodeDesc, DomainValue)."
keywords:
  - mô tả mã lớp
  - dịch ngôn ngữ
  - Simples Nacional
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - text-view
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
  - bo:BR_SIMPLESClassCode
---
# I_BR_SIMPLESCLASSCODETEXT

**BR Simplesclasscodetext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Language` | `cast( ddlanguage as spras preserving type)` |
| `BR_SIMPLESClassCode` | `cast ( domvalue_l as logbr_simples_class )` |
| `BR_SIMPLESClassCodeDesc` | `cast ( ddtext as logbr_simples_class_desc preserving type)` |
| `DomainValue` | `dd07t.domvalue_l` |
| `_BR_SIMPLESClassCode` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_SIMPLESClassCode` | `I_BR_SIMPLESClassCode` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil Simples Nac Class Code - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics: {dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.sqlViewName: 'IBRSIMPLESCLSTXT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.representativeKey: 'BR_SIMPLESClassCode'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true 
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#EXTRACTION_DATA_SOURCE]

define view I_BR_SIMPLESClassCodeText as select from dd07t
  association [1..1] to I_BR_SIMPLESClassCode as _BR_SIMPLESClassCode on $projection.BR_SIMPLESClassCode = _BR_SIMPLESClassCode.BR_SIMPLESClassCode
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  @Semantics.language: true
  key cast( ddlanguage as spras preserving type) as Language,
  
  @ObjectModel.foreignKey.association: '_BR_SIMPLESClassCode'
  key cast ( domvalue_l as logbr_simples_class ) as BR_SIMPLESClassCode,
  
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  @Semantics.text: true
  cast ( ddtext as logbr_simples_class_desc preserving type) as BR_SIMPLESClassCodeDesc,
  
  @Consumption.hidden: true
  dd07t.domvalue_l as DomainValue,
  
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT] 
  _BR_SIMPLESClassCode,
  _Language
}
where domname = 'LOGBR_SIMPLES_CLASS' and as4local = 'A'
```
