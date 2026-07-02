---
name: I_EUELECTRONICDOCBANKACC
description: Euelectronicdocbankacc
semantic_en: "bank accounts for electronic documents — maps bank accounts and payment means to electronic document processing"
semantic_vi: "tài khoản ngân hàng cho tài liệu điện tử — ánh xạ các tài khoản ngân hàng và phương tiện thanh toán để xử lý tài liệu điện tử"
keywords:
  - tài khoản ngân hàng
  - tài liệu điện tử
  - thanh toán
app_component: CA-GTF-CSC-EDO-PAP
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - bank
  - component:CA-GTF-CSC-EDO-PAP
  - lob:Cross-Application Components
  - bo:Bank
---
# I_EUELECTRONICDOCBANKACC

**Euelectronicdocbankacc**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-PAP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CompanyCode` | `bukrs` |
| `HouseBank` | `hbkid` |
| `HouseBankAccount` | `hktid` |
| `EU_EDocPaymentMeans` | `paym_means` |
| `IBAN` | `iban` |
| `_HouseBank` | *Association* |
| `_HouseBankAccount` | *Association* |
| `_CompanyCode` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_HouseBank` | `I_Housebank` | [1..1] |
| `_HouseBankAccount` | `I_HouseBankAccount` | — |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Bank Accounts for Company Code'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
usageType:{
  serviceQuality: #C,
  sizeCategory: #M,
  dataClass: #CUSTOMIZING
 },
  supportedCapabilities: [#SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET],
  modelingPattern: #NONE
}
@VDM:{
viewType: #BASIC
}

define root view entity I_EUElectronicDocBankAcc
  as select from edoeubankacc
  association [1..1] to I_CompanyCode      as _CompanyCode      on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_Housebank        as _HouseBank        on  edoeubankacc.hbkid = _HouseBank.HouseBank
                                                                and edoeubankacc.bukrs = _HouseBank.CompanyCode
  association        to I_HouseBankAccount as _HouseBankAccount on  $projection.CompanyCode      = _HouseBankAccount.CompanyCode
                                                                and $projection.HouseBank        = _HouseBankAccount.HouseBank
                                                                and $projection.HouseBankAccount = _HouseBankAccount.HouseBankAccount
{


      @Consumption.valueHelpDefinition: [
      { entity:  { name   : 'I_CompanyCodeVH',
                   element: 'CompanyCode' }
       }]
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs      as CompanyCode,
      @ObjectModel.foreignKey.association : '_HouseBank'
  key hbkid      as HouseBank,
      @ObjectModel.foreignKey.association : '_HouseBankAccount'
  key hktid      as HouseBankAccount,
      @Consumption.valueHelpDefinition: [
      { entity:  { name   : 'I_EUElectronicDocPaymentMeanVH',
                 element: 'EU_EDocPaymentmeans' }
      }]
      paym_means as EU_EDocPaymentMeans,
      iban       as IBAN,
      _HouseBank,
      _HouseBankAccount,
      _CompanyCode

}
```
