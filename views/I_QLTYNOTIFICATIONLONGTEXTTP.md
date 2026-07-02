---
name: I_QLTYNOTIFICATIONLONGTEXTTP
description: Qltynotificationlongtexttp
semantic_en: "Quality notification long text — TP variant with extended description and mime type for notification content"
semantic_vi: "Văn bản dài thông báo chất lượng — biến thể TP với mô tả mở rộng và loại mime cho nội dung thông báo"
keywords:
  - văn bản mở rộng
  - nội dung thông báo
  - loại tệp
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
  - transactional-processing
  - text
  - component:QM-QN-2CL
  - lob:Quality Management
---
# I_QLTYNOTIFICATIONLONGTEXTTP

**Qltynotificationlongtexttp**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `QualityNotification` | `_QltyNotificationLongText.QualityNotification` |
| `LongTextInternalNumber` | `_QltyNotificationLongText.LongTextInternalNumber` |
| `Language` | `_QltyNotificationLongText.Language` |
| `LongTextID` | `_QltyNotificationLongText.LongTextID` |
| `QltyNotificationLongText` | `_QltyNotificationLongText.QltyNotificationLongText` |
| `LongTextCreatedByUser` | `_QltyNotificationLongText.LongTextCreatedByUser` |
| `LongTextCreatedAt` | `_QltyNotificationLongText.LongTextCreatedAt` |
| `LongTextLastChangedByUser` | `_QltyNotificationLongText.LongTextLastChangedByUser` |
| `LongTextLastChangedAt` | `_QltyNotificationLongText.LongTextLastChangedAt` |
| `_Language` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Quality Notification Long Text - TP'
@AccessControl.authorizationCheck: #MANDATORY

@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.usage.type: [ #TRANSACTIONAL_PROCESSING_SERVICE ]

@ObjectModel:{
  modelingPattern: #TRANSACTIONAL_INTERFACE,
//  modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #TRANSACTIONAL },
  representativeKey: 'LongTextInternalNumber'
}

@ObjectModel.dataCategory:#TEXT

@Metadata.ignorePropagatedAnnotations: true

define view entity I_QltyNotificationLongTextTP
  as projection on R_QltyNotificationLongTextTP as _QltyNotificationLongText
{
      @ObjectModel.foreignKey.association: '_QltyNotification'
  key _QltyNotificationLongText.QualityNotification,
  key _QltyNotificationLongText.LongTextInternalNumber,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _QltyNotificationLongText.Language,
      _QltyNotificationLongText.LongTextID,

      @Semantics.text: true
      _QltyNotificationLongText.QltyNotificationLongText,
//      MimeType,

      _QltyNotificationLongText.LongTextCreatedByUser,
      _QltyNotificationLongText.LongTextCreatedAt,
      _QltyNotificationLongText.LongTextLastChangedByUser,
      _QltyNotificationLongText.LongTextLastChangedAt,

      /* Associations */
      _QltyNotificationLongText._QltyNotification : redirected to parent I_QltyNotificationTP,
      
      _QltyNotificationLongText._Language
 
}
```
