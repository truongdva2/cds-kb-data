---
name: I_SA_EDOCLGCLSOLNID
description: SA Edoclgclsolnid
semantic_en: "eDocument KSA for logical solution unit — organization unit data, company code, industry classification, and cryptographic sequence for e-invoice registration"
semantic_vi: "eDocument KSA cho đơn vị giải pháp logic — dữ liệu đơn vị tổ chức, mã công ty, phân loại ngành, và thứ tự mật mã"
keywords:
  - giải pháp logic
  - mã công ty
  - phân loại ngành
app_component: CA-GTF-CSC-EDO-SA
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
  - component:CA-GTF-CSC-EDO-SA
  - lob:Cross-Application Components
---
# I_SA_EDOCLGCLSOLNID

**SA Edoclgclsolnid**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-SA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CompanyCode` | `bukrs` |
| `SA_EDocVATRegisterNumber` | `vat_reg_num` |
| `SA_EDocInvoiceType` | `invoice_type` |
| `SA_EDocSourceType` | `source_type` |
| `SA_EDocCryptographicSqncNmbr` | `seq_no` |
| `SA_EDocLgclSolnUUID` | `egs_id` |
| `SA_EDocLdngCompanyCode` | `leading_company` |
| `SA_EDocOrganisationUnitId` | `org_unit` |
| `SA_EDocOrganizationName` | `org_name` |
| `SA_EDocLocationName` | `location` |
| `SA_EDocIndustryName` | `industry` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@EndUserText.label: 'eDocument KSA for Logical Solution Unit'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #TRANSACTIONAL},
  supportedCapabilities: [ #SQL_DATA_SOURCE, 
                           #CDS_MODELING_DATA_SOURCE,  
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #UI_PROVIDER_PROJECTION_SOURCE ],
  modelingPattern: #NONE
}
@VDM: {  
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl:
{
personalData.blocking: #BLOCKED_DATA_EXCLUDED ,
authorizationCheck: #MANDATORY
}

define view entity I_SA_EDocLgclSolnId as select from edosasolunit
{


  key bukrs           as CompanyCode,
  key vat_reg_num     as SA_EDocVATRegisterNumber,
  key invoice_type    as SA_EDocInvoiceType,
  key source_type     as SA_EDocSourceType,
  key seq_no          as SA_EDocCryptographicSqncNmbr,
      egs_id          as SA_EDocLgclSolnUUID,
      leading_company as SA_EDocLdngCompanyCode,
      org_unit        as SA_EDocOrganisationUnitId,
      org_name        as SA_EDocOrganizationName,
      location        as SA_EDocLocationName,
      industry        as SA_EDocIndustryName
}
```
