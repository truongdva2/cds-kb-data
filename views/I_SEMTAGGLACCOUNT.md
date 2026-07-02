---
name: I_SEMTAGGLACCOUNT
description: Semtaggl Account
semantic_en: "general ledger account with semantic tag — GLAccountHierarchy, HierarchyNode, SemanticTag, GLAccount, FunctionalArea, permission indicators"
semantic_vi: "Tài khoản cái với nhãn ngữ nghĩa — hệ thống phân cấp, nút, nhãn, tài khoản cái, lĩnh vực chức năng"
keywords:
  - tài khoản cái nhãn ngữ nghĩa
  - lĩnh vực chức năng tài khoản
  - hệ thống phân cấp cái
app_component: FI-FIO-GL-HIE-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - interface-view
  - gl-account
  - component:FI-FIO-GL-HIE-2CL
  - lob:Finance
  - bo:SemanticTagGeneralLedger
---
# I_SEMTAGGLACCOUNT

**Semtaggl Account**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-HIE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `GLAccountHierarchy` | `GLAccountHierarchy` |
| `HierarchyNode` | `cast ( '' as hrynode )` |
| `SemanticTag` | `SemanticTag` |
| `ValidityEndDate` | `ValidityEndDate` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ChartOfAccounts` | `ChartOfAccounts` |
| `GLAccount` | `GLAccount` |
| `FunctionalAreaIsUsed` | `FunctionalAreaIsUsed` |
| `IsFunctionalAreaPermitted` | `cast(…)` |
| `_Hierarchy` | *Association* |
| `_GLAccountHierarchyNode` | *Association* |
| `_SemanticTag` | *Association* |
| `_ChartOfAccounts` | *Association* |
| `_GLAccountInChartOfAccounts` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_GLAccountHierarchyNode` | `I_GLAccountHierarchyNode` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'G/L Account with Semantic Tag'
@AbapCatalog.sqlViewName: 'IFISEMTAGGLACCT'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@Analytics: { dataCategory: #CUBE,
              dataExtraction.enabled: true
            }
//@ObjectModel.representativeKey: 'SemanticTag'
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@ObjectModel.sapObjectNodeType.name:'SemanticTagGeneralLedger'

define view I_SemTagGLAccount
  as select distinct from P_SemTagGLAccount

  association [0..*] to I_GLAccountHierarchyNode as _GLAccountHierarchyNode on  $projection.GLAccountHierarchy = _GLAccountHierarchyNode.GLAccountHierarchy
                                                                            and $projection.HierarchyNode      = _GLAccountHierarchyNode.HierarchyNode

{
  @ObjectModel.foreignKey.association: '_Hierarchy'
  GLAccountHierarchy,
  cast ( '' as hrynode )                                                                          as HierarchyNode,
  @ObjectModel.foreignKey.association: '_SemanticTag'
  SemanticTag,
  @Semantics.businessDate.to: true
  ValidityEndDate,
  @Semantics.businessDate.from: true
  ValidityStartDate,
  @ObjectModel.foreignKey.association: '_ChartOfAccounts'
  ChartOfAccounts,
  @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
  GLAccount,
  FunctionalAreaIsUsed,
  cast( case when SemanticTag = 'NTINC_ALAC' then '' else FunctionalAreaIsUsed end as xfber_011 ) as IsFunctionalAreaPermitted,
  _Hierarchy,
  //OBSOLETING, DO NOT USE THIS ASSOCIATION!!!
  _GLAccountHierarchyNode,
  _SemanticTag,
  _ChartOfAccounts,
  _GLAccountInChartOfAccounts

}
```
