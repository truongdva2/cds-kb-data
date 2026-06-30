---
name: C_CHANGERECORDPRODUCTITEMDEX
description: Change RecordPRODUCTITEMDEX
semantic_en: "DEX — change record product item — delta-enabled extraction view for a product (material) referenced as an item of a change record, keyed by ChangeRecordReferenceUUID."
semantic_vi: "Trích xuất dữ liệu — hạng mục sản phẩm của phiếu thay đổi — view trích xuất (DEX) hỗ trợ delta, đại diện cho sản phẩm (vật liệu) được tham chiếu là hạng mục trong phiếu thay đổi."
keywords:
  - hạng mục sản phẩm phiếu thay đổi
  - vật liệu thay đổi
  - trích xuất sản phẩm thay đổi
  - DEX sản phẩm thay đổi
app_component: PLM-CR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PLM
  - PLM-CR
  - consumption-view
  - data-extraction
  - product
  - change-record
  - item-level
  - component:PLM-CR-2CL
  - lob:Other
  - bo:ChangeRecordReferenceProduct
---
# C_CHANGERECORDPRODUCTITEMDEX

**Change RecordPRODUCTITEMDEX**

| Property | Value |
|---|---|
| App Component | `PLM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ChangeRecordReferenceUUID` | `ChangeRecordReferenceUUID` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck:  #PRIVILEGED_ONLY
@EndUserText.label: 'Change Record Product as Item'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory:   #M,
  dataClass:      #TRANSACTIONAL
}
@VDM.viewType: #CONSUMPTION

@ObjectModel.sapObjectNodeType.name: 'ChangeRecordReferenceProduct'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern        : #ANALYTICAL_FACT
@Analytics:{
    internalName: #LOCAL,
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          mapping:[
            {
              table:'/PLMI/CHGREC_MAT', role: #MAIN,
              viewElement: ['ChangeRecordReferenceUUID'],
              tableElement: [ 'DB_KEY']
             }
           ]
        }
    }
}
define view entity C_ChangeRecordProductItemDEX as select from I_ChangeRecordItem
//  as select from I_ChangeRecordProductMaster
{
  key ChangeRecordReferenceUUID
//      ChangeRecordUUID,
//      Product,
//      MaterialType,
//      BaseUnit,
//      CrossPlantStatus

}
```
