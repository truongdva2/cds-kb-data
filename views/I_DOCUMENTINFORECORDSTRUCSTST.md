---
name: I_DOCUMENTINFORECORDSTRUCSTST
description: Documentinforecordstrucstst
semantic_en: "text view providing localized descriptions of document structure status"
semantic_vi: "khung nhìn văn bản cung cấp mô tả được bản địa hóa của trạng thái cấu trúc tài liệu"
keywords:
  - mô tả cấu trúc
  - trạng thái cấu trúc
  - bản địa hóa
app_component: CA-DMS
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-DMS
  - interface-view
  - document
  - component:CA-DMS
  - lob:Cross-Application Components
  - bo:IsDocInfoRecordStructure
---
# I_DOCUMENTINFORECORDSTRUCSTST

**Documentinforecordstrucstst**

| Property | Value |
|---|---|
| App Component | `CA-DMS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Language` | `ddlanguage` |
| `IsDocInfoRecordStructure` | `domvalue_l` |
| `DocInfoRecdStrucDescription` | `ddtext` |
| `_DocumentInfoRecordStrucSts` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DocumentInfoRecordStrucSts` | `I_DocumentInfoRecordStrucSts` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICVDOCSTRUCSTST'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #COMPOSITE
@ObjectModel.representativeKey: 'IsDocInfoRecordStructure'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #L, dataClass: #META }
@EndUserText.label: 'Document Info Record Struc Status - Text'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

define view I_DocumentInfoRecordStrucStsT
  as select from dd07t as Value

  association [0..1] to I_DocumentInfoRecordStrucSts as _DocumentInfoRecordStrucSts on $projection.IsDocInfoRecordStructure = _DocumentInfoRecordStrucSts.IsDocInfoRecordStructure
  association [0..1] to I_Language                   as _Language                   on $projection.Language = _Language.Language

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                    as Language,

      @ObjectModel.foreignKey.association: '_DocumentInfoRecordStrucSts'
  //key substring( domvalue_l, 1, 1 ) as IsDocInfoRecordStructure, Remove substring due to redundancy. No impacts found in another functionallity
  key domvalue_l as IsDocInfoRecordStructure,

      @Semantics.text: true
      @EndUserText.label:'Document Structure Status Description'
      @EndUserText.quickInfo: 'Document Structure Status Description'
      ddtext                        as DocInfoRecdStrucDescription,

      //Associations
      _DocumentInfoRecordStrucSts,
      _Language
      
}
where
      domname  = 'CV_VDM_DOC_STRUCTURE'
  and as4local = 'A'
```
