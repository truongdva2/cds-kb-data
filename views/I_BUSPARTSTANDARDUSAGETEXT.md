---
name: I_BUSPARTSTANDARDUSAGETEXT
description: Business PartnerSTANDARDUSAGETEXT
semantic_en: "business partner standard usage text — localized descriptions of standard usage classifications."
semantic_vi: "mô tả cách sử dụng tiêu chuẩn đối tác — tên gọi cách sử dụng theo ngôn ngữ."
keywords:
  - cách sử dụng
  - tiêu chuẩn
  - mô tả
app_component: AP-MD-BP
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - text-view
  - business-partner
  - text
  - component:AP-MD-BP
  - lob:Other
  - bo:BusinessPartnerStandardUsage
---
# I_BUSPARTSTANDARDUSAGETEXT

**Business PartnerSTANDARDUSAGETEXT**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Language` | `ddlanguage` |
| `BusinessPartnerStandardUsage` | `domvalue_l` |
| `BusPartStandardUsageText` | `ddtext` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPSTDUSAGETXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'BusinessPartnerStandardUsage'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #X
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Texts for I_Businesspartnerstandardusage'
define view I_BusPartStandardUsageText as select from dd07t 
{
 @Semantics.language: true
  key ddlanguage as Language,
      //      @Search.defaultSearchElement: true
  key domvalue_l as BusinessPartnerStandardUsage,
      @Semantics.text: true
      ddtext     as BusPartStandardUsageText  
}
where
  domname = 'XFELD'
```
