---
name: D_BILLGDOCCRTEFRMEXTPARTNERIP
description: D Billgdoccrtefrmextpartnerip
semantic_en: "Action parameter for creating billing document from external data with partner details — PartnerFunction, Customer, BusinessPartnerAddressUUID, ContactPerson, Personnel, Supplier"
semantic_vi: "Tham số thao tác để tạo chứng từ lập hóa đơn từ dữ liệu bên ngoài với chi tiết đối tác — chức năng đối tác, khách hàng, mã định danh địa chỉ đối tác, người liên hệ, nhân sự, nhà cung cấp"
keywords:
  - lập hóa đơn
  - đối tác
  - bên ngoài
app_component: SD-BIL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - partner
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
---
# D_BILLGDOCCRTEFRMEXTPARTNERIP

**D Billgdoccrtefrmextpartnerip**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PartnerFunction` | `parvw_unv` |
| `Customer` | `kunnr` |
| `BusinessPartnerAddressUUID` | `bu_address_guid` |
| `ContactPerson` | `parnr` |
| `Personnel` | `pernr_d` |
| `Supplier` | `lifnr` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Bill Doc Create From Ext Data Partner - Parameter'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define root abstract entity D_BillgDocCrteFrmExtPartnerIP
{
  PartnerFunction            : parvw_unv;

  Customer                   : kunnr;

  BusinessPartnerAddressUUID : bu_address_guid;

  ContactPerson              : parnr;

  Personnel                  : pernr_d;

  Supplier                   : lifnr;

}
```
