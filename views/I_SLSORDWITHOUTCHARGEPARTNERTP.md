---
name: I_SLSORDWITHOUTCHARGEPARTNERTP
description: Slsordwithoutchargepartnertp
semantic_en: "partners for sales orders without charge by plant — tracks business partners for promotional or free sales order transactions."
semantic_vi: "đối tác cho đơn hàng bán hàng không tính phí theo nhà máy — theo dõi đối tác kinh doanh cho các giao dịch đơn hàng bán hàng khuyến mãi hoặc miễn phí."
keywords:
  - đối tác
  - đơn hàng miễn phí
  - bên liên quan
app_component: SD-SLS-SO-RAP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-SO
  - interface-view
  - transactional-processing
  - partner
  - component:SD-SLS-SO-RAP-2CL
  - lob:Sales & Distribution
---
# I_SLSORDWITHOUTCHARGEPARTNERTP

**Slsordwithoutchargepartnertp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-RAP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SalesOrderWithoutCharge` | `SalesOrderWithoutChargePartner.SalesOrderWithoutCharge` |
| `PartnerFunction` | `SalesOrderWithoutChargePartner.PartnerFunction` |
| `PartnerFunctionForEdit` | `SalesOrderWithoutChargePartner.PartnerFunctionForEdit` |
| `Customer` | `SalesOrderWithoutChargePartner.Customer` |
| `Supplier` | `SalesOrderWithoutChargePartner.Supplier` |
| `Personnel` | `SalesOrderWithoutChargePartner.Personnel` |
| `ContactPerson` | `SalesOrderWithoutChargePartner.ContactPerson` |
| `ReferenceBusinessPartner` | `SalesOrderWithoutChargePartner.ReferenceBusinessPartner` |
| `Partner` | `SalesOrderWithoutChargePartner.Partner` |
| `SalesOrderWithoutChargeType` | `SalesOrderWithoutChargePartner.SalesOrderWithoutChargeType` |
| `SalesOrganization` | `SalesOrderWithoutChargePartner.SalesOrganization` |
| `DistributionChannel` | `SalesOrderWithoutChargePartner.DistributionChannel` |
| `OrganizationDivision` | `SalesOrderWithoutChargePartner.OrganizationDivision` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Sales Order Without Charge Partner - TP'

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:        #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['SalesOrderWithoutCharge', 'PartnerFunction']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_SlsOrdWithoutChargePartnerTP
  as projection on R_SlsOrdWithoutChargePartnerTP as SalesOrderWithoutChargePartner
{
  key SalesOrderWithoutChargePartner.SalesOrderWithoutCharge,
  key SalesOrderWithoutChargePartner.PartnerFunction,
      @ObjectModel.editableFieldFor: 'PartnerFunction'
      SalesOrderWithoutChargePartner.PartnerFunctionForEdit,
      SalesOrderWithoutChargePartner.Customer,
      SalesOrderWithoutChargePartner.Supplier,
      SalesOrderWithoutChargePartner.Personnel,
      SalesOrderWithoutChargePartner.ContactPerson,
      SalesOrderWithoutChargePartner.ReferenceBusinessPartner,
      SalesOrderWithoutChargePartner.Partner,

      //    DCL
      @Consumption.hidden: true
      SalesOrderWithoutChargePartner.SalesOrderWithoutChargeType,
      @Consumption.hidden: true
      SalesOrderWithoutChargePartner.SalesOrganization,
      @Consumption.hidden: true
      SalesOrderWithoutChargePartner.DistributionChannel,
      @Consumption.hidden: true
      SalesOrderWithoutChargePartner.OrganizationDivision,

      //Composition
      _SalesOrderWithoutCharge : redirected to parent I_SalesOrderWithoutChargeTP

}
```
