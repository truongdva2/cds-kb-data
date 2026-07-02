---
name: I_MFGORDERFAILEDCONFLOG
description: Mfgorderfailedconflog
semantic_en: "Error log for failed manufacturing order confirmations — stores system messages and error variables."
semantic_vi: "Nhật ký lỗi cho xác nhận lệnh sản xuất thất bại — lưu trữ thông báo hệ thống và biến lỗi."
keywords:
  - xác nhận thất bại
  - nhật ký lỗi
  - lệnh sản xuất
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MFGORDERFAILEDCONFLOG

**Mfgorderfailedconflog**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SequentialPlantDataCollection` | `SequentialPlantDataCollection` |
| `ConfirmationApplicationOrigin` | `ConfirmationApplicationOrigin` |
| `SystemMessageIdentification` | `SystemMessageIdentification` |
| `SystemMessageNumber` | `SystemMessageNumber` |
| `SystemMessageType` | `SystemMessageType` |
| `SystemMessageVariable1` | `SystemMessageVariable1` |
| `SystemMessageVariable2` | `SystemMessageVariable2` |
| `SystemMessageVariable3` | `SystemMessageVariable3` |
| `SystemMessageVariable4` | `SystemMessageVariable4` |
| `_ConfirmationApplicationOrigin` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Manufacturing Order Failed Confirmation Log'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_MfgOrderFailedConfLog
  as select from I_FailedConfirmationLog
{
      // Key
  key SequentialPlantDataCollection,
  
      @ObjectModel.foreignKey.association: '_ConfirmationApplicationOrigin'
      ConfirmationApplicationOrigin,

      // Message Log
      SystemMessageIdentification,
      SystemMessageNumber,
      SystemMessageType,
      SystemMessageVariable1,
      SystemMessageVariable2,
      SystemMessageVariable3,
      SystemMessageVariable4,

      // Association
      _ConfirmationApplicationOrigin
}
where ( ConfirmationApplicationOrigin = '2' or
        ConfirmationApplicationOrigin = '6' or //Manufacturing orders only
        ConfirmationApplicationOrigin = '8' ); //including results recording
```
