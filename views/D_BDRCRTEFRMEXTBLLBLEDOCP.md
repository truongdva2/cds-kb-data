---
name: D_BDRCRTEFRMEXTBLLBLEDOCP
description: D Bdrcrtefrmextbllbledocp
semantic_en: "Action parameter for creating BDR from external billable document — reference document, SD document category"
semantic_vi: "Tham số thao tác để tạo BDR từ chứng từ lập hóa đơn bên ngoài — chứng từ tham chiếu, danh mục chứng từ SD"
keywords:
  - BDR
  - tạo
  - lập hóa đơn
app_component: SD-BIL-BDR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-BDR
  - component:SD-BIL-BDR-2CL
  - lob:Sales & Distribution
---
# D_BDRCRTEFRMEXTBLLBLEDOCP

**D Bdrcrtefrmextbllbledocp**

| Property | Value |
|---|---|
| App Component | `SD-BIL-BDR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ReferenceDocument` | `sdbil_odata_source_document` |
| `ReferenceDocSDDocCategory` | `sdbil_odata_src_doc_cat` |
| `_Item` | *Association* |
| `_Text` | *Association* |
| `_PaymentCard` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Item` | `D_BDRCrteFrmExtBllbleDocItemP` | [1..*] |
| `_Text` | `D_BDRCrteFrmExtTextP` | [0..*] |
| `_PaymentCard` | `D_BDRCrteFrmExtPaytCardP` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Create BDR from Ext Data - Bllble Doc'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define root abstract entity D_BDRCrteFrmExtBllbleDocP
{

      ReferenceDocument : sdbil_odata_source_document; //Mandatory 
      
      ReferenceDocSDDocCategory : sdbil_odata_src_doc_cat; //Mandatory

      _Item            : composition [1..*] of D_BDRCrteFrmExtBllbleDocItemP;
      
      _Text            : association [0..*] to D_BDRCrteFrmExtTextP on 1 = 0;
      
      _PaymentCard     : association [0..*] to D_BDRCrteFrmExtPaytCardP on 1 = 0;
      
}
```
