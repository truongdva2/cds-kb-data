---
name: D_PURGSOURCELISTDELETED_2
description: D Purgsourcelistdeleted 2
semantic_en: "business event signature for deleted purchasing source lists — tracks removal of supplier sources with validity and organizational context"
semantic_vi: "sự kiện kinh doanh khi danh sách nguồn cung cấp bị xóa — theo dõi xóa nguồn nhà cung cấp với ngữ cảnh hiệu lực và tổ chức"
keywords:
  - danh sách nguồn xóa
  - xóa nguồn cung cấp
  - nhà cung cấp
  - danh sách
app_component: MM-PUR-SQ-SLI-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-SQ
  - component:MM-PUR-SQ-SLI-2CL
  - lob:Sourcing & Procurement
---
# D_PURGSOURCELISTDELETED_2

**D Purgsourcelistdeleted 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-SQ-SLI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SourceListRecord` | `dzeord` |
| `SourceListCreationDate` | `erdat` |
| `SourceListCreatedByUser` | `ernam` |
| `ValidityStartDate` | `bdatu` |
| `ValidityEndDate` | `bdatu` |
| `Supplier` | `lifnr` |
| `PurchasingOrganization` | `ekorg` |
| `PurchaseOrderUnit` | `meins` |

## Associations

> No associations found.

## Source Code

```abap
@Event.sapObjectNodeType: 'PurchasingSourceList'
@VDM.usage.type: [#EVENT_SIGNATURE]
@Event.implementedBy: ['ABAP:RAP_EVENT']
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label:  'Purchasing Source list Deleted'
define abstract entity D_PurgSourceListDeleted_2
{
  key SourceListRecord        : dzeord;
      SourceListCreationDate  : erdat;
      SourceListCreatedByUser : ernam;
      ValidityStartDate       : bdatu;
      ValidityEndDate         : bdatu;
      Supplier                : lifnr;
      PurchasingOrganization  : ekorg;
      PurchaseOrderUnit       : meins;
 
}
```
