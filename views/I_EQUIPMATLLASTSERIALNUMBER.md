---
name: I_EQUIPMATLLASTSERIALNUMBER
description: EQUIPMATLLASTSerial Number
semantic_en: "equipment material last serial number — tracks the most recent serial number assigned to materials"
semantic_vi: "số serial cuối cùng của vật tư thiết bị — theo dõi số serial mới nhất được gán cho các vật tư"
keywords:
  - serial number
  - vật tư thiết bị
  - số serial
app_component: LO-MD-SN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-SN
  - interface-view
  - serial-number
  - component:LO-MD-SN-2CL
  - lob:Logistics General
---
# I_EQUIPMATLLASTSERIALNUMBER

**EQUIPMATLLASTSerial Number**

| Property | Value |
|---|---|
| App Component | `LO-MD-SN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Material` | `matnr` |
| `EquipMaterialLastSerialNumber` | `lsernr` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl: { authorizationCheck: #NOT_REQUIRED,
                  personalData.blocking: #NOT_REQUIRED }

@VDM.viewType: #BASIC
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
                usageType: {
                            serviceQuality: #A,
                            sizeCategory:   #L,
                            dataClass:      #TRANSACTIONAL
                           },
                 supportedCapabilities: [
                            #SQL_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET
                                        ],
                 modelingPattern: #ANALYTICAL_DIMENSION                                  
              }

@EndUserText.label: 'Last Serial Number for Material'
define view entity I_EquipMatlLastSerialNumber
  as select from mase  
{
@Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key matnr  as Material,
  @EndUserText.label: 'Last Serial Number'
      lsernr as EquipMaterialLastSerialNumber
}
```
