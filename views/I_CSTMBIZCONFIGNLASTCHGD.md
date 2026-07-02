---
name: I_CSTMBIZCONFIGNLASTCHGD
description: Cstmbizconfignlastchgd
semantic_en: "custom business configuration change tracking — records last modification timestamp for view entities"
semantic_vi: "theo dõi thay đổi cấu hình kinh doanh tùy chỉnh — ghi nhận dấu thời gian sửa đổi cuối cùng cho các thực thể xem"
keywords:
  - thay đổi cấu hình
  - kinh doanh tùy chỉnh
  - dấu thời gian
app_component: BC-CUS-TOL-MBC
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-CUS
  - BC-CUS-TOL
  - interface-view
  - component:BC-CUS-TOL-MBC
  - lob:Basis Components
---
# I_CSTMBIZCONFIGNLASTCHGD

**Cstmbizconfignlastchgd**

| Property | Value |
|---|---|
| App Component | `BC-CUS-TOL-MBC` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ViewEntityName` | `view_entity_name` |
| `LastChangedDateTime` | `last_changed_date_time` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Custom Business Confign Last Changed'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_CstmBizConfignLastChgd as select from smbc_last_chngd
{
  key view_entity_name as ViewEntityName,
  last_changed_date_time as LastChangedDateTime
}
```
