---
name: I_CABILLGDOCINVCGSTATUS
description: Cabillgdocinvcgstatus
semantic_en: "billing document invoicing status — domain values for document invoicing state (pending, invoiced, etc.)"
semantic_vi: "trạng thái hóa đơn của tài liệu hóa đơn — giá trị miền cho trạng thái hóa đơn tài liệu (chờ xử lý, đã hóa đơn, v.v.)"
keywords:
  - trạng thái hóa đơn
  - tài liệu
  - miền
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - interface-view
  - status
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABILLGDOCINVCGSTATUS

**Cabillgdocinvcgstatus**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CABillgDocumentInvcgStatus` | `cast( dd07l.domvalue_l as invstatus_kk )` |
| `DomainValue` | `dd07l.domvalue_l` |
| `_CABillgDocInvcgStatusText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgDocInvcgStatusText` | `I_CABillgDocInvcgStatusText` | [0..*] |

## Source Code

```abap
@Search.searchable: true
@Consumption.ranked: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Fakturierungsstatus eines Abr.bel.'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CABillgDocumentInvcgStatus',
  sapObjectNodeType.name: 'ContrAcctgBillgDocInvcgStatus',
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S
  },
  resultSet.sizeCategory: #XS,
  dataCategory: #VALUE_HELP
}
@VDM.viewType: #BASIC
define root view entity I_CABillgDocInvcgStatus
  as select from dd07l
  composition [0..*] of I_CABillgDocInvcgStatusText as _CABillgDocInvcgStatusText
{
      @ObjectModel.text.association: '_CABillgDocInvcgStatusText'
  key cast( dd07l.domvalue_l as invstatus_kk ) as CABillgDocumentInvcgStatus,
  
      @Consumption.hidden: true
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
      dd07l.domvalue_l                         as DomainValue,
      
      _CABillgDocInvcgStatusText
}
where
      dd07l.domname  = 'INVSTATUS_KK'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
