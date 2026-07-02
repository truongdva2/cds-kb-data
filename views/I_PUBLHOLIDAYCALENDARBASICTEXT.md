---
name: I_PUBLHOLIDAYCALENDARBASICTEXT
description: Publholidaycalendarbasictext
semantic_en: "Holiday calendar multilingual descriptions — stores translated descriptions of public holiday calendars."
semantic_vi: "Mô tả đa ngôn ngữ lịch ngày lễ công cộng — lưu trữ các mô tả dịch của lịch ngày lễ công cộng."
keywords:
  - mô tả lịch lễ
  - dịch lịch lễ
  - ngôn ngữ
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
  - text-view
  - text
  - component:BC-SRV-ASF-CAL
  - lob:Basis Components
  - bo:PublicHolidayCalendarID
---
# I_PUBLHOLIDAYCALENDARBASICTEXT

**Publholidaycalendarbasictext**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ASF-CAL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PublicHolidayCalendarLanguage` | `PublicHolidayCalendarLanguage` |
| `PublicHolidayCalendarID` | `PublicHolidayCalendarID` |
| `PublHolidayCalendarDescription` | `PublHolidayCalendarDescription` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Holiday Calendar - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations:true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'PublicHolidayCalendarID'
@ObjectModel.supportedCapabilities:  [ #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory:  #M


define view entity I_PublHolidayCalendarBasicText 
  as select from R_FHC_HCAL_COMBINED_TEXT

{
      @Semantics.language:true
  key PublicHolidayCalendarLanguage           as PublicHolidayCalendarLanguage,
   
      @ObjectModel.text.element: ['PublHolidayCalendarDescription']
  key PublicHolidayCalendarID as PublicHolidayCalendarID,
  
      @Semantics.text:true
      PublHolidayCalendarDescription        as PublHolidayCalendarDescription
      
}
```
