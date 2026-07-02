---
name: I_SALESORDERPRECDGPROCFLOW
description: Sales OrderPRECDGPROCFLOW
semantic_en: "Preceding process flow of sales order — process flow tracking showing prior documents with creation and change metadata at header level"
semantic_vi: "Quy trình tiền nhiệm của đơn hàng bán — theo dõi quy trình hiển thị các tài liệu trước đó với siêu dữ liệu tạo và thay đổi mức tiêu đề"
keywords:
  - quy trình tiền nhiệm đơn hàng
  - tài liệu trước
  - theo dõi quy trình bán hàng
app_component: SD-SLS-SO-2CL
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
  - sales-order
  - component:SD-SLS-SO-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# I_SALESORDERPRECDGPROCFLOW

**Sales OrderPRECDGPROCFLOW**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SalesOrder` | `PrecedingProcFlow.SalesDocument` |
| `DocRelationshipUUID` | `PrecedingProcFlow.DocRelationshipUUID` |
| `PrecedingDocument` | `PrecedingProcFlow.PrecedingDocument` |
| `PrecedingDocumentCategory` | `PrecedingProcFlow.PrecedingDocumentCategory` |
| `ProcessFlowLevel` | `PrecedingProcFlow.ProcessFlowLevel` |
| `CreationDate` | `PrecedingProcFlow.CreationDate` |
| `CreationTime` | `PrecedingProcFlow.CreationTime` |
| `LastChangeDate` | `PrecedingProcFlow.LastChangeDate` |
| `SalesOrderType` | `_SalesOrder.SalesOrderType` |
| `SalesOrganization` | `_SalesOrder.SalesOrganization` |
| `DistributionChannel` | `_SalesOrder.DistributionChannel` |
| `OrganizationDivision` | `_SalesOrder.OrganizationDivision` |
| `_SalesOrder` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrder` | `I_SalesOrder` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Preceding Process Flow of Sales Order'
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@ObjectModel: {
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #C,
     sizeCategory:   #XL
   },
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
}
@Metadata.ignorePropagatedAnnotations: true

define view entity I_SalesOrderPrecdgProcFlow as select from I_SalesDocumentPrecdgProcFlow as PrecedingProcFlow

association [1..1] to I_SalesOrder       as _SalesOrder       on  _SalesOrder.SalesOrder      = $projection.SalesOrder 

 {  
    key PrecedingProcFlow.SalesDocument as SalesOrder,
    key PrecedingProcFlow.DocRelationshipUUID,   
        
        PrecedingProcFlow.PrecedingDocument,      
        PrecedingProcFlow.PrecedingDocumentCategory,
        
        PrecedingProcFlow.ProcessFlowLevel,
        
        @Semantics.systemDate.createdAt: true
        PrecedingProcFlow.CreationDate,
        @Semantics.systemTime.createdAt: true
        PrecedingProcFlow.CreationTime,
        @Semantics.systemDate.lastChangedAt: true
        PrecedingProcFlow.LastChangeDate,
        
        // For Access control
        @Consumption.hidden: true
        _SalesOrder.SalesOrderType,
        @Consumption.hidden: true
        _SalesOrder.SalesOrganization,
        @Consumption.hidden: true
        _SalesOrder.DistributionChannel,
        @Consumption.hidden: true
        _SalesOrder.OrganizationDivision,
        
        //Associations
        _SalesOrder 
} 
where PrecedingProcFlow.SDDocumentCategory = 'C'
```
