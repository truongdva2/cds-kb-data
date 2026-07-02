---
name: I_ADDRESSREMARK_2
description: Addressremark 2
semantic_en: "address remarks — multilingual notes and remarks associated with specific address representation"
semantic_vi: "ghi chú địa chỉ — ghi chú đa ngôn ngữ liên kết với biểu diễn địa chỉ cụ thể"
keywords:
  - ghi chú
  - địa chỉ
  - mô tả
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ADR
  - interface-view
  - address
  - component:BC-SRV-ADR
  - lob:Basis Components
  - bo:AddressRemark
---
# I_ADDRESSREMARK_2

**Addressremark 2**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `AddressID` | `addrnumber` |
| `AddressRepresentationCode` | `nation` |
| `Language` | `langu` |
| `AddressRemarkText` | `remark` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
    }
}
@EndUserText.label: 'Address Remarks'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED 

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.sapObjectNodeType.name: 'AddressRemark'


define view entity I_AddressRemark_2
  as select distinct from adrct 
{ 
    key addrnumber as AddressID,
    key nation as AddressRepresentationCode,
    key langu as Language,
        remark as AddressRemarkText
}                       
where adrct.date_from = '00010101'
```
