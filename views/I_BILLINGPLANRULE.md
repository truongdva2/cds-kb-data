---
name: I_BILLINGPLANRULE
description: Billingplanrule
semantic_en: "billing plan rule domain value — enumeration of billing plan rules for determining billing methodology"
semantic_vi: "giá trị miền quy tắc kế hoạch lập hóa đơn — liệt kê quy tắc kế hoạch lập hóa đơn để xác định phương pháp lập hóa đơn"
keywords:
  - kế hoạch lập hóa đơn
  - quy tắc
app_component: SD-BIL-IV-BP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-IV
  - interface-view
  - billing
  - component:SD-BIL-IV-BP-2CL
  - lob:Sales & Distribution
  - bo:BillingPlanBillingRule
---
# I_BILLINGPLANRULE

**Billingplanrule**

| Property | Value |
|---|---|
| App Component | `SD-BIL-IV-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BillingPlanRule` | `substring(dd07l.domvalue_l, 1, 1)` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BillingPlanRuleText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'BillingPlanRule'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION ]
@EndUserText.label: 'Billing Plan Rule'
@Analytics.dataCategory: #DIMENSION 
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDBILLPLANRULE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'BillingPlanBillingRule'
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_BillingPlanRule
as select from dd07l

association [0..*] to I_BillingPlanRuleText as _Text on $projection.BillingPlanRule = _Text.BillingPlanRule
{
    @ObjectModel.text.association: '_Text'
    key substring(dd07l.domvalue_l, 1, 1) as BillingPlanRule,
    
    _Text
}
where (dd07l.domname = 'FAREG') and (dd07l.as4local = 'A');
```
