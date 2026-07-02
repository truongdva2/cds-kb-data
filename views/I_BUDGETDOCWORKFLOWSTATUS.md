---
name: I_BUDGETDOCWORKFLOWSTATUS
description: Budgetdocworkflowstatus
semantic_en: "budget document workflow status — enumerated domain values for budget document workflow states."
semantic_vi: "trạng thái quy trình công việc tài liệu ngân sách — các giá trị miền cho các trạng thái quy trình tài liệu ngân sách."
keywords:
  - trạng thái quy trình
  - tài liệu ngân sách
  - quy trình công việc
app_component: PSM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PSM
  - interface-view
  - status
  - workflow
  - component:PSM
  - lob:Other
---
# I_BUDGETDOCWORKFLOWSTATUS

**Budgetdocworkflowstatus**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BudgetDocWorkFlowStatus` | `cast(…)` |
| `DomainValue` | `dd07l.domvalue_l` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BudgetDocWorkFlowStatusText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBDGTDOCWFSTAT'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Budget Document Work Flow Status'

@VDM.viewType: #BASIC
@Analytics: {
     dataCategory: #DIMENSION,
     internalName: #LOCAL
}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
     dataCategory: #VALUE_HELP,
     representativeKey: 'BudgetDocWorkFlowStatus',
     usageType: {
         dataClass: #META,
         serviceQuality: #A,
         sizeCategory: #S
     },
     resultSet.sizeCategory: #XS,
     supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET ],
     modelingPattern: #ANALYTICAL_DIMENSION
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define root view I_BudgetDocWorkFlowStatus
  as select from dd07l
  composition [0..*] of I_BudgetDocWorkFlowStatusText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast( cast ( substring( dd07l.domvalue_l, 1, 1 ) as abap.char( 1 ) ) as bdgt_doc_workflow_status ) as BudgetDocWorkFlowStatus,
      @Consumption.hidden: true
      @Analytics.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                                                                   as DomainValue,

      _Text

}
where domname    =  'BDGT_DOC_WORKFLOW_STATUS'
  and as4local   =  'A'
```
