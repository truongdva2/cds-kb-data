---
name: I_CUSTOMERTOBUSINESSPARTNER
description: CUSTOMERTOBusiness Partner
semantic_en: "customer to business partner relationship — linking customer master data to business partner master data"
semantic_vi: "Mối quan hệ khách hàng với đối tác kinh doanh — liên kết dữ liệu chính khách hàng với dữ liệu chính đối tác kinh doanh"
keywords:
  - mối quan hệ đối tác
  - liên kết khách hàng
  - đối tác kinh doanh
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - customer
  - business-partner
  - partner
  - component:LO-MD-BP-2CL
  - lob:Logistics General
  - bo:Customer
  - bo:BusinessPartner
---
# I_CUSTOMERTOBUSINESSPARTNER

**CUSTOMERTOBusiness Partner**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BusinessPartnerUUID` | `partner_guid` |
| `Customer` | `customer` |
| `_Customer` | *Association* |
| `_BusinessPartner` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_Customer` | `I_Customer` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Customer to BusinessPartner Relationship'
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      automatic: true
    }
  }
}
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.sapObjectNodeType.name: 'CustomerBusinessPartner'
@ObjectModel.representativeKey: 'BusinessPartnerUUID'
@AbapCatalog.sqlViewName: 'ICVICUSTLINK'
@AbapCatalog.preserveKey:true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #ANALYTICAL_DIMENSION,
                                     #EXTRACTION_DATA_SOURCE] 
@ObjectModel.modelingPattern:#ANALYTICAL_DIMENSION                                     
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm : #SESSION_VARIABLE
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator: 'IsBusinessPurposeCompleted'
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_CustomerToBusinessPartner
  as select from cvi_cust_link
  association [1..1] to I_BusinessPartner as _BusinessPartner on $projection.BusinessPartnerUUID = _BusinessPartner.BusinessPartnerUUID
  association [1..1] to I_Customer        as _Customer        on $projection.Customer = _Customer.Customer
{
  key partner_guid as BusinessPartnerUUID,
      customer     as Customer,
        
      _Customer,
      _BusinessPartner
}
```
