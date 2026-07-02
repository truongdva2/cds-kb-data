---
name: I_DEFECTLONGTEXT
description: Defectlongtext
semantic_en: "Defect long text — detailed text narratives for defects by language including creation and change history."
semantic_vi: "Tài liệu dài về khuyết tật — mô tả tài liệu chi tiết cho khuyết tật theo ngôn ngữ gồm lịch sử tạo và thay đổi."
keywords:
  - Tài liệu khuyết tật
  - Mô tả dài
  - Chất lượng
app_component: QM-QN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-QN
  - interface-view
  - text-view
  - text
  - component:QM-QN-2CL
  - lob:Quality Management
---
# I_DEFECTLONGTEXT

**Defectlongtext**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `DefectInternalID` | `cast(…)` |
| `Language` | `Language` |
| `LongTextInternalNumber` | `LongTextInternalNumber` |
| `LongTextID` | `LongTextID` |
| `DefectLongText` | `NotificationItemLongText` |
| `LongTextCreatedByUser` | `LongTextCreatedByUser` |
| `LongTextCreatedAt` | `LongTextCreatedAt` |
| `LongTextLastChangedByUser` | `LongTextLastChangedByUser` |
| `LongTextLastChangedAt` | `LongTextLastChangedAt` |
| `MimeType` | `MimeType` |
| `_Defect` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Defect` | `I_Defect` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel:
    { usageType: {
        dataClass: #TRANSACTIONAL,
        sizeCategory: #L,
        serviceQuality: #A
    },
    representativeKey: 'LongTextInternalNumber',
    dataCategory: #TEXT
}
@Analytics.technicalName: 'IDEFLONGTXT'
@EndUserText.label: 'Defect Long Text'
@Metadata.ignorePropagatedAnnotations: true // Projection from generic NotificationItemLT to DefectLT => Start new with annotations

define view entity I_DefectLongText as select from I_NotificationItemLongText

    association [1..1] to I_Defect as _Defect    on $projection.DefectInternalID = _Defect.DefectInternalID

{

    @ObjectModel.foreignKey.association: '_Defect'
    key cast( I_NotificationItemLongText.Notification as qdefectinternalid preserving type ) as DefectInternalID,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key Language,
    
    key LongTextInternalNumber,
    
    
    LongTextID,
    
    @EndUserText:{  label: 'Defect Detailed Description',
                    quickInfo: 'Detailed Description of Defect'
    }/* normally you should build a vdm_q* data element and cast the field to it to get the label, but cast to STRING is not allowed */
    @Semantics.text: true
    NotificationItemLongText as DefectLongText,
    
    LongTextCreatedByUser,
    LongTextCreatedAt,
    LongTextLastChangedByUser,
    LongTextLastChangedAt,
    MimeType,
    
    /* Associations */
    _Defect,
    _Language
  
} where I_NotificationItemLongText.Notification like '$%'
    and I_NotificationItemLongText.NotificationItem = '0000'
```
