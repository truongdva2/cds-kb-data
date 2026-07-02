---
name: I_SLSORDWTHOUTCHRGITMPARTNERTP
description: Slsordwthoutchrgitmpartnertp
semantic_en: "item partners for sales orders without charge by plant — associates business partners with promotional order items across plants."
semantic_vi: "đối tác mục cho đơn hàng bán hàng không tính phí theo nhà máy — liên kết các đối tác kinh doanh với các mục đơn hàng khuyến mãi trên các nhà máy."
keywords:
  - đối tác mục
  - nhà máy
  - mục không tính phí
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
# I_SLSORDWTHOUTCHRGITMPARTNERTP

**Slsordwthoutchrgitmpartnertp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-RAP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SalesOrderWithoutCharge` | `SlsOrdWithoutChargeItemPartner.SalesOrderWithoutCharge` |
| `SalesOrderWithoutChargeItem` | `SlsOrdWithoutChargeItemPartner.SalesOrderWithoutChargeItem` |
| `PartnerFunction` | `SlsOrdWithoutChargeItemPartner.PartnerFunction` |
| `PartnerFunctionForEdit` | `SlsOrdWithoutChargeItemPartner.PartnerFunctionForEdit` |
| `Customer` | `SlsOrdWithoutChargeItemPartner.Customer` |
| `Supplier` | `SlsOrdWithoutChargeItemPartner.Supplier` |
| `Personnel` | `SlsOrdWithoutChargeItemPartner.Personnel` |
| `ContactPerson` | `SlsOrdWithoutChargeItemPartner.ContactPerson` |
| `ReferenceBusinessPartner` | `SlsOrdWithoutChargeItemPartner.ReferenceBusinessPartner` |
| `Partner` | `SlsOrdWithoutChargeItemPartner.Partner` |
| `PartnerIsSpecificForSDDocItem` | `SlsOrdWithoutChargeItemPartner.PartnerIsSpecificForSDDocItem` |
| `SalesOrderWithoutChargeType` | `SlsOrdWithoutChargeItemPartner.SalesOrderWithoutChargeType` |
| `SalesOrganization` | `SlsOrdWithoutChargeItemPartner.SalesOrganization` |
| `DistributionChannel` | `SlsOrdWithoutChargeItemPartner.DistributionChannel` |
| `OrganizationDivision` | `SlsOrdWithoutChargeItemPartner.OrganizationDivision` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Sls Ord Without Charge Item Partner - TP'

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
   semanticKey: ['SalesOrderWithoutCharge', 'SalesOrderWithoutChargeItem', 'PartnerFunction']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_SlsOrdWthoutChrgItmPartnerTP
  as projection on R_SlsOrdWthoutChrgItmPartnerTP as SlsOrdWithoutChargeItemPartner
{
  key SlsOrdWithoutChargeItemPartner.SalesOrderWithoutCharge,
  key SlsOrdWithoutChargeItemPartner.SalesOrderWithoutChargeItem,
  key SlsOrdWithoutChargeItemPartner.PartnerFunction,

      @ObjectModel.editableFieldFor: 'PartnerFunction'
      SlsOrdWithoutChargeItemPartner.PartnerFunctionForEdit,
      SlsOrdWithoutChargeItemPartner.Customer,
      SlsOrdWithoutChargeItemPartner.Supplier,
      SlsOrdWithoutChargeItemPartner.Personnel,
      SlsOrdWithoutChargeItemPartner.ContactPerson,
      SlsOrdWithoutChargeItemPartner.ReferenceBusinessPartner,
      SlsOrdWithoutChargeItemPartner.Partner,
      SlsOrdWithoutChargeItemPartner.PartnerIsSpecificForSDDocItem,

      //    DCL
      @Consumption.hidden: true
      SlsOrdWithoutChargeItemPartner.SalesOrderWithoutChargeType,
      @Consumption.hidden: true
      SlsOrdWithoutChargeItemPartner.SalesOrganization,
      @Consumption.hidden: true
      SlsOrdWithoutChargeItemPartner.DistributionChannel,
      @Consumption.hidden: true
      SlsOrdWithoutChargeItemPartner.OrganizationDivision,

      //Composition
      _Item                    : redirected to parent I_SlsOrderWithoutChargeItemTP,
      _SalesOrderWithoutCharge : redirected to I_SalesOrderWithoutChargeTP
}
```
