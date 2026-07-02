---
name: I_SRVCDOCEXECUTIONSTATUS
description: Srvcdocexecutionstatus
semantic_en: "service transaction execution status — domain values representing execution status for service documents with quotation indicator."
semantic_vi: "trạng thái thực thi giao dịch dịch vụ — các giá trị miền đại diện cho trạng thái thực thi cho các tài liệu dịch vụ với chỉ báo báo giá."
keywords:
  - trạng thái thực thi
  - báo giá dịch vụ
  - miền
app_component: CRM-S4-SRV-SVO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - status
  - component:CRM-S4-SRV-SVO-2CL
  - lob:Other
---
# I_SRVCDOCEXECUTIONSTATUS

**Srvcdocexecutionstatus**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ServiceDocumentIsQuotation` | `stat_quotation` |
| `SrvcDocExecutionStatus` | `stat_execution` |
| `_Text` | *Association* |
| `_SrvcDocIsQuotation` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SrvcDocExecutionStatusText` | [0..*] |
| `_SrvcDocIsQuotation` | `I_SrvcDocQuotationStatus_2` | [1..1] |

## Source Code

```abap
@AbapCatalog:
    {
        sqlViewName: 'ISRVCDOCEXECST',
        compiler.compareFilter: true,
        buffering:
            {
                status: #ACTIVE,
                type: #FULL
            }
    }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
      dataCategory: #DIMENSION,
      internalName:#LOCAL,
      dataExtraction.enabled: true
}

@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Service Transaction Execution Status'
@ObjectModel:
    {
        representativeKey: 'SrvcDocExecutionStatus',
        sapObjectNodeType.name: 'SrvcDocExecutionStatus',
        supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ],
        usageType:
            {
                dataClass: #META,
                serviceQuality: #A,
                sizeCategory: #S
            },
        dataCategory: #VALUE_HELP,
        resultSet.sizeCategory: #XS
    }
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true

define view I_SrvcDocExecutionStatus
  as select from crms4c_stat_exec

  association [0..*] to I_SrvcDocExecutionStatusText as _Text               on  $projection.SrvcDocExecutionStatus     = _Text.SrvcDocExecutionStatus
                                                                            and $projection.ServiceDocumentIsQuotation = _Text.ServiceDocumentIsQuotation

   association [1..1] to I_SrvcDocQuotationStatus_2                  as _SrvcDocIsQuotation on  $projection.ServiceDocumentIsQuotation = _SrvcDocIsQuotation.ServiceDocumentIsQuotation


{
      @ObjectModel.foreignKey.association: '_SrvcDocIsQuotation'
      @Semantics.booleanIndicator
  key stat_quotation as ServiceDocumentIsQuotation,

      @ObjectModel.text.association: '_Text'
  key stat_execution as SrvcDocExecutionStatus,

      _Text,
      _SrvcDocIsQuotation
}

where
  object_type = 'BUS2000116'
```
