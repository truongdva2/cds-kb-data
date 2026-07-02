---
name: I_BLLBLECTRLBILLGCTRLCATASSGMT
description: Bllblectrlbillgctrlcatassgmt
semantic_en: "billable control category assignment — maps billing control categories for fee and charge management."
semantic_vi: "gán danh mục điều khiển có thể tính phí — ánh xạ các danh mục điều khiển thanh toán cho quản lý phí và chi phí."
keywords:
  - điều khiển thanh toán
  - danh mục
  - gán
app_component: PPM-SCL-BIL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-BIL
  - interface-view
  - component:PPM-SCL-BIL
  - lob:Other
---
# I_BLLBLECTRLBILLGCTRLCATASSGMT

**Bllblectrlbillgctrlcatassgmt**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BillableControl` | `bemot` |
| `BillingControlCategory` | `billgctrlcat` |
| `_BillingControlCategoryText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillingControlCategoryText` | `I_BillingControlCategoryText` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'FETCH FROM TABLE TBILLGCTRLCAT'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.viewEnhancementCategory: [#NONE]
@ObjectModel: {  
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
    usageType: {
        sizeCategory: #S,
        dataClass:  #MASTER,
        serviceQuality: #B
    },
    representativeKey: 'BillableControl'
}
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@Analytics.technicalName: 'IBILGCTRLCATASGMNT'

define view entity I_BllbleCtrlBillgCtrlCatAssgmt
  as select from tbillgctrlcat
  association [0..1] to I_BillingControlCategoryText as _BillingControlCategoryText on  _BillingControlCategoryText.BillingControlCategory = $projection.BillingControlCategory
                                                                                    and _BillingControlCategoryText.Language               = $session.system_language


{
  key bemot        as BillableControl,
      billgctrlcat as BillingControlCategory,

      _BillingControlCategoryText
}
```
