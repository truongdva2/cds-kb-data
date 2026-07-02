---
name: I_CNSLDTNSEGMENTPAIRELIMASSGMT
description: Cnsldtnsegmentpairelimassgmt
semantic_en: "consolidation segment pair elimination assignment — paired segments and target segments for elimination"
semantic_vi: "gán loại bỏ cặp phân khúc hợp nhất — các phân khúc được ghép nối và phân khúc đích để loại bỏ"
keywords:
  - cặp phân khúc
  - loại bỏ liên công ty
  - gán
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNSEGMENTPAIRELIMASSGMT

**Cnsldtnsegmentpairelimassgmt**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ConsolidationSegmentHierarchy` | `cast ( _Source.hryid as fincs_hryid_segment )` |
| `ValidityEndDate` | `cast ( _Source.hryvalto as fincs_validityenddate preserving type )` |
| `Segment` | `cast ( _Source.segment as fincs_segment preserving type )` |
| `PartnerSegment` | `cast ( _Source.psegment as fincs_partnersegment preserving type )` |
| `ValidityStartDate` | `cast ( _Source.hryvalfrom as fincs_validitystartdate preserving type )` |
| `ConsolidationSegmentForElim` | `cast ( _Source.segment_eliminated as fincs_segmentforelim preserving type )` |

## Associations

> No associations found.

## Source Code

```abap
@Analytics: {
  internalName: #LOCAL,
  dataExtraction.enabled: true,
  technicalName: 'ICSSEGMENTPAIRELIMASSGMT'
}
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@Metadata:{
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #L
   },
   modelingPattern: #NONE,
   supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #EXTRACTION_DATA_SOURCE,
                            #SQL_DATA_SOURCE ],
   sapObjectNodeType.name: 'CnsldtnSegmentPairElimAssgmt'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Segment Pair Elim Assignment'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_CnsldtnSegmentPairElimAssgmt

  as select from fincs_sgmt_hier as _Source

{

  key cast ( _Source.hryid as fincs_hryid_segment )                               as ConsolidationSegmentHierarchy,

      @Semantics.businessDate.to
  key cast ( _Source.hryvalto as fincs_validityenddate preserving type )          as ValidityEndDate,

  key cast ( _Source.segment as fincs_segment preserving type )                   as Segment,

  key cast ( _Source.psegment as fincs_partnersegment preserving type )           as PartnerSegment,

      @Semantics.businessDate.from
      cast ( _Source.hryvalfrom as fincs_validitystartdate preserving type )      as ValidityStartDate,

      cast ( _Source.segment_eliminated as fincs_segmentforelim preserving type ) as ConsolidationSegmentForElim

}
```
