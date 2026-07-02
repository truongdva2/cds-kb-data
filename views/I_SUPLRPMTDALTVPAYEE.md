---
name: I_SUPLRPMTDALTVPAYEE
description: Suplrpmtdaltvpayee
semantic_en: "supplier permitted alternative payee view — designates alternative payment recipients by company code"
semantic_vi: "xem người nhận thanh toán thay thế được phép của nhà cung cấp — chỉ định những người nhận thanh toán thay thế theo mã công ty"
keywords:
  - người nhận thay thế
  - thanh toán
  - nhà cung cấp
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
  - component:LO-MD-BP-2CL
  - lob:Logistics General
---
# I_SUPLRPMTDALTVPAYEE

**Suplrpmtdaltvpayee**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Supplier` | `lifnr` |
| `CompanyCode` | `bukrs` |
| `SupplierAlternativePayee` | `empfk` |
| `_SupplierCompany` | *Association* |
| `_CompanyCode` | *Association* |
| `_Supplier` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_SupplierCompany` | `I_SupplierCompany` | [1..1] |
| `_Supplier` | `I_Supplier` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISUPLRPMTDPAYEE'
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType:{
  sizeCategory: #M,
  dataClass: #MASTER,
  serviceQuality: #A
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Supplier Permitted Alternative Payee'
@AbapCatalog.compiler.compareFilter:true 
@AccessControl.personalData.blocking: #REQUIRED
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]                                     
@Metadata.ignorePropagatedAnnotations:true
define view I_SuplrPmtdAltvPayee as select from lfza 
association [1..1] to I_CompanyCode                 as _CompanyCode               on $projection.CompanyCode = _CompanyCode.CompanyCode

association [1..1] to I_SupplierCompany             as _SupplierCompany           on $projection.Supplier = _SupplierCompany.Supplier
                                                                                    and $projection.CompanyCode = _SupplierCompany.CompanyCode
association [1..1] to I_Supplier                    as _Supplier                  on $projection.Supplier = _Supplier.Supplier 
{
  @ObjectModel.foreignKey.association: '_Supplier'
  key lifnr as Supplier,
  @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs as CompanyCode,
  key empfk as SupplierAlternativePayee,
  _SupplierCompany,
  _CompanyCode,
  _Supplier
}
```
