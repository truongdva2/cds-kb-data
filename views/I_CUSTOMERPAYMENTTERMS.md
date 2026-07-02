---
name: I_CUSTOMERPAYMENTTERMS
description: Customerpaymentterms
semantic_en: "Customer payment terms — payment term codes defining payment conditions and due date calculations for customer transactions."
semantic_vi: "Điều khoản thanh toán khách hàng — mã điều khoản thanh toán xác định điều kiện thanh toán và tính toán ngày hạn cho giao dịch khách hàng."
keywords:
  - điều khoản thanh toán
  - mã thanh toán
  - tính toán hạn cuối
app_component: SD-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-MM
  - interface-view
  - customer
  - payment
  - component:SD-MD-MM-2CL
  - lob:Sales & Distribution
  - bo:Customer
---
# I_CUSTOMERPAYMENTTERMS

**Customerpaymentterms**

| Property | Value |
|---|---|
| App Component | `SD-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CustomerPaymentTerms` | `zterm` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CustomerPaymentTermsText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'CustomerPaymentTerms'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Customer Payment Terms'
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDCUSTPAYTTRMS'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ObjectModel.dataCategory: #VALUE_HELP
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #ANALYTICAL_DIMENSION,
                                        #SEARCHABLE_ENTITY,
                                        #VALUE_HELP_PROVIDER ]
define view I_CustomerPaymentTerms

  as select from tvzb
  association [0..*] to I_CustomerPaymentTermsText as _Text on $projection.CustomerPaymentTerms = _Text.CustomerPaymentTerms
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key zterm as CustomerPaymentTerms,

      _Text

};
```
