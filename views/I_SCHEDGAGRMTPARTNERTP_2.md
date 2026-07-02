---
name: I_SCHEDGAGRMTPARTNERTP_2
description: Schedgagrmtpartnertp 2
semantic_en: "scheduling agreement partner — transactional partner data with functional roles and creation audit for agreement items."
semantic_vi: "đối tác hợp đồng lập kế hoạch — dữ liệu đối tác giao dịch với vai trò chức năng và kiểm toán tạo cho mục hợp đồng."
keywords:
  - đối tác
  - vai trò
  - nhà cung cấp
app_component: MM-PUR-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - interface-view
  - transactional-processing
  - partner
  - component:MM-PUR-OA-SCH-2CL
  - lob:Sourcing & Procurement
---
# I_SCHEDGAGRMTPARTNERTP_2

**Schedgagrmtpartnertp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SchedulingAgreement` | `SchedulingAgreement` |
| `SchedulingAgreementItem` | `SchedulingAgreementItem` |
| `PurchasingOrganization` | `PurchasingOrganization` |
| `SupplierSubrange` | `SupplierSubrange` |
| `Plant` | `Plant` |
| `PartnerFunction` | `PartnerFunction` |
| `PartnerCounter` | `PartnerCounter` |
| `SchedgAgrmtPartner` | `SchedgAgrmtPartner` |
| `SchedgAgrmtPartnerName` | `SchedgAgrmtPartnerName` |
| `SchedgAgrmtType` | `SchedgAgrmtType` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDate` | `CreationDate` |
| `Supplier` | `Supplier` |
| `SupplierContact` | `SupplierContact` |
| `EmploymentInternalID` | `EmploymentInternalID` |
| `PersonWorkAgreement` | `PersonWorkAgreement` |
| `DefaultPartner` | `DefaultPartner` |
| `PurchasingGroup` | `PurchasingGroup` |
| `PurchasingDocumentType` | `PurchasingDocumentType` |
| `LastChangeDateTime` | `LastChangeDateTime` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Scheduling Agreement Partner'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey:  [ 'SchedulingAgreement','SchedulingAgreementItem', 'PurchasingOrganization','SupplierSubrange', 'Plant','PartnerFunction','PartnerCounter' ]

@ObjectModel: {
  usageType: {
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #MIXED
  }
 }

@Metadata.ignorePropagatedAnnotations: true

define view entity I_SchedgAgrmtPartnerTP_2
  as projection on R_SchedgAgrmtPartnerTP
{
  key SchedulingAgreement,
  key SchedulingAgreementItem,
  key PurchasingOrganization,
  key SupplierSubrange,
  key Plant,
  key PartnerFunction,
  key PartnerCounter,
      SchedgAgrmtPartner,
      SchedgAgrmtPartnerName,
      SchedgAgrmtType,
      CreatedByUser,
      CreationDate,
      Supplier,
      SupplierContact,
      EmploymentInternalID,
      PersonWorkAgreement,
      DefaultPartner,
      PurchasingGroup,
      PurchasingDocumentType,
      LastChangeDateTime,

      /* Associations */
      _SchedgAgrmtHdr : redirected to parent I_SchedgAgrmtHdrTP_2
}
```
