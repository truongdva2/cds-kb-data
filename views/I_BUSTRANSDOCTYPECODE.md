---
name: I_BUSTRANSDOCTYPECODE
description: Bustransdoctypecode
semantic_en: "business transaction document type codes — master data for classifying transaction documents by document type"
semantic_vi: "mã loại tài liệu giao dịch kinh doanh — dữ liệu chính để phân loại tài liệu giao dịch theo loại tài liệu"
keywords:
  - loại tài liệu giao dịch
  - mã phân loại tài liệu
  - phân loại giao dịch
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - interface-view
  - component:TM-2CL
  - lob:Other
  - bo:TranspBizTransacDocTypeCode
---
# I_BUSTRANSDOCTYPECODE

**Bustransdoctypecode**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BusinessTransactionDocType` | `btd_tco129` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusTransDocTypeCodeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@EndUserText.label: 'Business Transaction Document Type Code'
@Analytics:     {dataCategory:       #DIMENSION,
                 dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@Analytics.technicalName: 'IBTDTYPECODE'
@ObjectModel:   {representativeKey:  'BusinessTransactionDocType',
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #M,
                                      dataClass:      #CUSTOMIZING},
                 modelingPattern:        #ANALYTICAL_DIMENSION,
                 supportedCapabilities:  [ #ANALYTICAL_DIMENSION,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #VALUE_HELP_PROVIDER,
                                           #SEARCHABLE_ENTITY]}
@VDM:           {viewType:           #BASIC}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Metadata:      {allowExtensions:    true,
                 ignorePropagatedAnnotations: true}
@ObjectModel.sapObjectNodeType.name: 'TranspBizTransacDocTypeCode'
define root view entity I_BusTransDocTypeCode
  as select from /scmtms/c_btdty
  /* Foreign Key and Text Associations */
  composition [0..*] of I_BusTransDocTypeCodeText as _Text
{
      @ObjectModel.text.association: '_Text'
  key btd_tco129 as BusinessTransactionDocType,
      _Text
}
```
