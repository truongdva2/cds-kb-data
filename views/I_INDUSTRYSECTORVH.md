---
name: I_INDUSTRYSECTORVH
description: Industrysectorvh
semantic_en: "Value-help projection for industry sectors used in product data — provides industry sector selection list for products."
semantic_vi: "Chiếu trợ giúp giá trị cho các khu vực ngành được sử dụng trong dữ liệu sản phẩm — cung cấp danh sách lựa chọn khu vực ngành cho các sản phẩm."
keywords:
  - Khu vực ngành sản phẩm
  - Danh sách lựa chọn
  - Trợ giúp giá trị
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - value-help
  - component:LO-MD-MM-2CL
  - lob:Logistics General
  - bo:IndustrySector
---
# I_INDUSTRYSECTORVH

**Industrysectorvh**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `IndustrySector` | `Industry.IndustrySector` |
| `_Text` | *Association* |
| `_Text_2` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IINDSECTORVHV'
@EndUserText.label: 'Industry Sector for Products'

@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@ObjectModel.representativeKey: 'IndustrySector'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #S
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.dataCategory: #VALUE_HELP
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]

define view I_Industrysectorvh  
    as select from I_IndustrySector as Industry
    
{   
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      key Industry.IndustrySector,
         /* Associations */
                @VDM.lifecycle: {
        status: #DEPRECATED,
        successor: '_Text_2'
      }
          Industry._Text,     
          Industry._Text_2
    
}
```
