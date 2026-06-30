---
name: C_CHGRECRESPONSIBLEDEX
description: Chgrecresponsibledex
semantic_en: "DEX — change record responsible person — automatic-CDC extraction view exposing the responsible partner (UUID, parent UUID, Partner) assigned to a change record, with personal-data blocking on Partner."
semantic_vi: "Trích xuất dữ liệu — người chịu trách nhiệm phiếu thay đổi — view trích xuất CDC tự động, cung cấp thông tin đối tác chịu trách nhiệm (UUID, UUID cha, Partner) của phiếu thay đổi, có chặn dữ liệu cá nhân trên trường Partner."
keywords:
  - người chịu trách nhiệm phiếu thay đổi
  - đối tác phụ trách thay đổi
  - trích xuất người phụ trách
  - DEX responsible thay đổi
app_component: PLM-CR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PLM
  - PLM-CR
  - consumption-view
  - data-extraction
  - component:PLM-CR-2CL
  - lob:Other
  - bo:ChangeRecord
---
# C_CHGRECRESPONSIBLEDEX

**Chgrecresponsibledex**

| Property | Value |
|---|---|
| App Component | `PLM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ChangeRecordUUID` | `ChangeRecordUUID` |
| `ParentChangeRecordUUID` | `ParentChangeRecordUUID` |
| `Partner` | `Partner` |

## Associations

> No associations found.

## Source Code

```abap
@Metadata:          {allowExtensions:             true,
                     ignorePropagatedAnnotations: true}

@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator: ['Partner']

@ObjectModel:       {usageType:                   {serviceQuality: #D,
                                                   sizeCategory:   #L,
                                                   dataClass:      #MIXED},
                     modelingPattern:             #NONE,
                     supportedCapabilities:      [
                                                  #EXTRACTION_DATA_SOURCE]}

@VDM:               {viewType:                    #CONSUMPTION,
                     lifecycle.contract.type:     #PUBLIC_LOCAL_API}

@Analytics:         {dataCategory:                #FACT,
                     dataExtraction:              {enabled: true,
                                                   delta.changeDataCapture: {
                                                   automatic: true                                                            }
                                                  },
                     internalName:                #LOCAL}
@ObjectModel.sapObjectNodeType.name: 'ChangeRecord'
@EndUserText.label: 'DEX for Change Record Responsible'
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

define view entity C_ChgRecResponsibleDEX
  as select from I_ChgRecResponsible
{
      @Semantics.uuid: true
  key ChangeRecordUUID,
      @Semantics.uuid: true
      ParentChangeRecordUUID,
      Partner
}
```
