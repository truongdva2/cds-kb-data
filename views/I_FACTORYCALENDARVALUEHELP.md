---
name: I_FACTORYCALENDARVALUEHELP
description: Factorycalendarvaluehelp
semantic_en: "factory calendar value help — factory calendar selection list with legacy identifier and validity dates for dropdowns"
semantic_vi: "trợ giúp giá trị lịch nhà máy — danh sách lựa chọn lịch nhà máy với định danh kế thừa và ngày có hiệu lực để tìm kiếm"
keywords:
  - lịch nhà máy
  - giá trị trợ giúp
  - tìm kiếm
app_component: BC-SRV-ASF-CAL
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ASF
  - interface-view
  - value-help
  - component:BC-SRV-ASF-CAL
  - lob:Basis Components
  - bo:FactoryCalendarID
---
# I_FACTORYCALENDARVALUEHELP

**Factorycalendarvaluehelp**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ASF-CAL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `FactoryCalendarID` | `FactoryCalendarID` |
| `FactoryCalendarLegacyID` | `FactoryCalendarLegacyID` |
| `FctryCalendarValidityStartDate` | `FctryCalendarValidityStartDate` |
| `FactoryCalendarValidityEndDate` | `FactoryCalendarValidityEndDate` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FactoryCalendarBasicText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Factory Calendar'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations:true
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'FactoryCalendarID'
@ObjectModel.supportedCapabilities:  [ #VALUE_HELP_PROVIDER ]
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory:  #S


define view entity I_FactoryCalendarValueHelp 
  as select from R_FHC_FCAL_COMBINED
    association [0..*] to I_FactoryCalendarBasicText as _Text 
      on $projection.FactoryCalendarID = _Text.FactoryCalendarID  
{
  
      @ObjectModel.text.association: '_Text'
 key  FactoryCalendarID,
  
      FactoryCalendarLegacyID,
      
      FctryCalendarValidityStartDate,
      FactoryCalendarValidityEndDate,
     
      //association to I_FactoryCalendarBasicText
      _Text
      
      
}
```
