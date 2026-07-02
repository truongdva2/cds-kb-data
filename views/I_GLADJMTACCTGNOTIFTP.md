---
name: I_GLADJMTACCTGNOTIFTP
description: Gladjmtacctgnotiftp
semantic_en: "G/L adjustment accounting notification TP — notifications for general ledger adjustments with timestamp."
semantic_vi: "Thông báo kế toán điều chỉnh sổ cái — thông báo cho các điều chỉnh sổ cái với dấu thời gian."
keywords:
  - sổ cái
  - điều chỉnh
  - thông báo
app_component: AC-INT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AC
  - AC-INT
  - interface-view
  - transactional-processing
  - component:AC-INT-2CL
  - lob:Other
---
# I_GLADJMTACCTGNOTIFTP

**Gladjmtacctgnotiftp**

| Property | Value |
|---|---|
| App Component | `AC-INT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `GLAdjmtAcctgNotificationUUID` | `GLAdjmtAcctgNotificationUUID` |
| `AccountingDocument` | `AccountingDocument` |
| `CompanyCode` | `CompanyCode` |
| `FiscalYear` | `FiscalYear` |
| `EntryTimestamp` | `EntryTimestamp` |
| `_CompanyCodeVH` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'G/L Adjustment Accounting Notif - TP'
@VDM.viewType: #TRANSACTIONAL
@ObjectModel: {
   sapObjectNodeType:{
      name: 'GLAdjmtAccountingNotification'},
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER, #UI_PROVIDER_PROJECTION_SOURCE],
   usageType: {
     serviceQuality: #A,
     sizeCategory:   #XXL,
     dataClass:      #TRANSACTIONAL
   }
 }

@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define root view entity I_GLAdjmtAcctgNotifTP
  provider contract transactional_interface
  as projection on R_GLAdjmtAcctgNotifTP

{
  key GLAdjmtAcctgNotificationUUID,
      AccountingDocument,
      @ObjectModel.text.association: '_CompanyCodeVH'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCodeVH', element: 'CompanyCode' }, association: '_CompanyCodeVH' } ]
      CompanyCode,
      FiscalYear,
      EntryTimestamp,
      _CompanyCodeVH
}
```
