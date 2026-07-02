---
name: D_ARDISPUTECASECREATEP
description: D Ardisputecasecreatep
semantic_en: "Action parameter for creating new AR dispute case — coordinator, root cause, deadline, customer amount, currency, contact details, customer, company code, external reference, planned close date, processor, responsible party"
semantic_vi: "Tham số thao tác để tạo trường hợp tranh chấp AR mới — bao gồm người phối hợp, nguyên nhân gốc rễ, hạn chót, số tiền khách hàng, loại tiền tệ, chi tiết liên hệ, khách hàng, mã công ty, tham chiếu bên ngoài, ngày đóng dự định, người xử lý, bên chịu trách nhiệm"
keywords:
  - tranh chấp
  - tạo
  - AR
  - mới
app_component: FIN-FIO-CCD-COL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - dispute
  - component:FIN-FIO-CCD-COL-2CL
  - lob:Other
---
# D_ARDISPUTECASECREATEP

**D Ardisputecasecreatep**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `DisputeCaseCoordinator` | `udm_coordinator` |
| `DisputeCaseRootCause` | `udm_root_ccode` |
| `CaseProcessingDeadlineDate` | `udm_due_date` |
| `CustomerDisputedAmount` | `udm_custdisp_amt` |
| `CustomerDisputedCurrency` | `udm_custdisp_curr` |
| `ContactPersonName` | `udm_contact_name` |
| `ContactPersonEmailAddress` | `udm_contact_email` |
| `ContactPersonPhoneNumber` | `udm_contact_phone` |
| `Customer` | `udm_kunnr` |
| `CompanyCode` | `bukrs` |
| `CaseExternalReference` | `scmg_ext_ref` |
| `CasePlannedCloseDate` | `scmg_plan_end_date` |
| `CaseProcessor` | `scmg_processor` |
| `CaseResponsible` | `scmg_responsible` |
| `CaseTitle` | `scmg_case_title` |
| `CaseEscalationReason` | `scmg_escal_reason` |
| `CaseCategory` | `scmg_category` |
| `CasePriority` | `scmg_priority` |
| `CaseStatus` | `scmgstatusonr` |
| `CaseReason` | `scmg_reason_code` |
| `_CustDsputItems` | *Association* |
| `_DisputedItems` | *Association* |
| `_Notes` | *Association* |
| `_Attachments` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustDsputItems` | `D_ARDsputCaseCrteCustDsputItmP` | [0..*] |
| `_DisputedItems` | `D_ARDisputeCaseCrteDsputdItmP` | [0..*] |
| `_Notes` | `D_ARDisputeCaseCreateNoteP` | [0..*] |
| `_Attachments` | `D_ARDisputeCaseCreateAttchP` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Parameter for action CreateDisputeCase'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define root abstract entity D_ARDisputeCaseCreateP
{
  DisputeCaseCoordinator     : udm_coordinator;
  DisputeCaseRootCause       : udm_root_ccode;
  CaseProcessingDeadlineDate : udm_due_date;
  @Semantics.amount.currencyCode: 'CustomerDisputedCurrency'
  CustomerDisputedAmount     : udm_custdisp_amt;
  CustomerDisputedCurrency   : udm_custdisp_curr;
  ContactPersonName          : udm_contact_name;
  ContactPersonEmailAddress  : udm_contact_email;
  ContactPersonPhoneNumber   : udm_contact_phone;
  Customer                   : udm_kunnr;
  CompanyCode                : bukrs;
  CaseExternalReference      : scmg_ext_ref;
  CasePlannedCloseDate       : scmg_plan_end_date;
  CaseProcessor              : scmg_processor;
  CaseResponsible            : scmg_responsible;
  CaseTitle                  : scmg_case_title;
  CaseEscalationReason       : scmg_escal_reason;
  CaseCategory               : scmg_category;
  CasePriority               : scmg_priority;
  CaseStatus                 : scmgstatusonr;
  CaseReason                 : scmg_reason_code;

  _CustDsputItems            : composition [0..*] of D_ARDsputCaseCrteCustDsputItmP;
  _DisputedItems             : composition [0..*] of D_ARDisputeCaseCrteDsputdItmP;
  _Notes                     : composition [0..*] of D_ARDisputeCaseCreateNoteP;
  _Attachments               : composition [0..*] of D_ARDisputeCaseCreateAttchP;
}
```
