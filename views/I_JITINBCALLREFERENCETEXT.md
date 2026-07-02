---
name: I_JITINBCALLREFERENCETEXT
description: Jitinbcallreferencetext
semantic_en: "JIT inbound call reference text — additional descriptive text for just-in-time inbound calls and draft tracking."
semantic_vi: "mô tả văn bản tham chiếu lệnh gọi đến JIT — văn bản mô tả bổ sung cho lệnh gọi đến just-in-time và theo dõi nháp."
keywords:
  - tham chiếu lệnh gọi
  - văn bản tham chiếu
  - JIT
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-JIT
  - interface-view
  - text-view
  - text
  - component:LE-JIT-S2C
  - lob:Logistics Execution
---
# I_JITINBCALLREFERENCETEXT

**Jitinbcallreferencetext**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `JITReferenceTextUUID` | `db_key` |
| `RootDraftKey` | `root_key` |
| `ParentDraftKey` | `parent_key` |
| `InternalJITCallNumber` | `int_call_num` |
| `JITCallItemNumber` | `call_item_num` |
| `JITRefType` | `refty` |
| `CompGrpNumber` | `comp_grp_num` |
| `JITAdditionalReferenceText` | `referencetext` |
| `_JITInboundCall` | *Association* |
| `_JITReferenceType` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_JITInboundCall` | `I_JITInboundCall` | — |
| `_JITReferenceType` | `I_JITReferenceType` | [0..1] |

## Source Code

```abap
@AccessControl                          : { authorizationCheck      : #MANDATORY,
                                            personalData.blocking   : #REQUIRED }
@Analytics                              : { dataCategory            : #DIMENSION,
                                            internalName            : #LOCAL }
@EndUserText.label                      : 'JIT Inbound Call Reference Text'
@Metadata.allowExtensions               : true
@Metadata.ignorePropagatedAnnotations   : true
@ObjectModel                            : { modelingPattern         : #ANALYTICAL_DIMENSION,
                                            representativeKey       : 'JITReferenceTextUUID',
                                            sapObjectNodeType.name  : 'JITInbCallReferenceText',
                                            supportedCapabilities   : [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
                                            usageType               : { dataClass         : #TRANSACTIONAL,
                                                                        serviceQuality    : #A,
                                                                        sizeCategory      : #XXL }
                                          }
@VDM.viewType                           : #BASIC
define view entity I_JITInbCallReferenceText
  as select from njit_call_d_rtxt

  association        to parent I_JITInboundCall as _JITInboundCall   on $projection.ParentDraftKey = _JITInboundCall.JITHeaderUUID
  association [0..1] to I_JITReferenceType      as _JITReferenceType on $projection.JITRefType = _JITReferenceType.JITRefType


{
  key db_key        as JITReferenceTextUUID,
      root_key      as RootDraftKey,
      @ObjectModel.foreignKey.association : '_JITInboundCall'
      parent_key    as ParentDraftKey,
      int_call_num  as InternalJITCallNumber,
      call_item_num as JITCallItemNumber,
      @ObjectModel.foreignKey.association : '_JITReferenceType'
      refty         as JITRefType,
      comp_grp_num  as CompGrpNumber,
      referencetext as JITAdditionalReferenceText,

      //Associations
      _JITInboundCall,
      _JITReferenceType
}
where
      _JITInboundCall.JITScenario = '1'
  and call_item_num               is initial
  and comp_grp_num                is initial
```
