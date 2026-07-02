---
name: I_CNSLDTNANSWER
description: Cnsldtnanswer
semantic_en: "consolidation answers — master data for predefined response options used in consolidation questionnaires and processes."
semantic_vi: "câu trả lời hợp nhất — dữ liệu chính cho các tùy chọn phản hồi được xác định trước được sử dụng trong bảng câu hỏi và quy trình hợp nhất."
keywords:
  - câu trả lời
  - hợp nhất
  - bảng câu hỏi
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNANSWER

**Cnsldtnanswer**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ConsolidationAnswer` | `answer` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnAnswerT` | [0..*] |

## Source Code

```abap
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true

@ObjectModel: {
    usageType: {
        dataClass: #MASTER,
        serviceQuality: #A,
        sizeCategory: #M
    },
    representativeKey: 'ConsolidationAnswer',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #ANALYTICAL_DIMENSION ],
    sapObjectNodeType.name: 'ConsolidationAnswer'
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Consolidation Answer'

define view entity I_CnsldtnAnswer
  as select from fincs_answ

  association [0..*] to I_CnsldtnAnswerT as _Text on $projection.ConsolidationAnswer = _Text.ConsolidationAnswer

{
      @ObjectModel.text.association: '_Text'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnAnswerVH',
          element: 'ConsolidationAnswer'
        }
      }]

  key answer as ConsolidationAnswer,


      _Text
};
```
