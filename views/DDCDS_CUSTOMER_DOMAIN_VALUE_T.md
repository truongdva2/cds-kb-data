---
name: DDCDS_CUSTOMER_DOMAIN_VALUE_T
description: Ddcds Customer Domain Value T
semantic_en: "Customer ABAP domain fixed value texts — parameterized text view returning language-dependent descriptions (ddtext) for fixed values of a given customer-owned ABAP domain."
semantic_vi: "Text giá trị cố định domain ABAP của khách hàng — view text có tham số trả về mô tả phụ thuộc ngôn ngữ (ddtext) cho các giá trị cố định của một domain ABAP do khách hàng sở hữu."
keywords:
  - text domain ABAP
  - mô tả giá trị cố định
  - domain value text
  - đa ngôn ngữ domain
  - nhãn domain khách hàng
app_component: BC-DWB-DIC
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-DWB
  - BC-DWB-DIC
  - text-view
  - customer
  - component:BC-DWB-DIC
  - lob:Basis Components
  - bo:Customer
---
# DDCDS_CUSTOMER_DOMAIN_VALUE_T

**Ddcds Customer Domain Value T**

| Property | Value |
|---|---|
| App Component | `BC-DWB-DIC` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `domain_name` | `cast(dd07t.domname as abap.char(30))` |
| `value_position` | `cast(dd07t.valpos as abap.numc(4))` |
| `language` | `dd07t.ddlanguage` |
| `value_low` | `dd07t.domvalue_l` |
| `text` | `dd07t.ddtext` |

## Associations

> No associations found.

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'DDCDS_CUSTDFVT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
define view entity DDCDS_CUSTOMER_DOMAIN_VALUE_T
  with parameters
    p_domain_name : sxco_ad_object_name --abap.char(30)
  as select from dd07t
    inner join   ARS_OBJECTS_ALL_SW_COMP_SCP on  ARS_OBJECTS_ALL_SW_COMP_SCP.program_id  = 'R3TR'
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_type = 'DOMA'
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_name = dd07t.domname
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_name = $parameters.p_domain_name

{
  key cast(dd07t.domname as abap.char(30)) as domain_name,
  key cast(dd07t.valpos  as abap.numc(4))  as value_position,
  key dd07t.ddlanguage                     as language,
      dd07t.domvalue_l                     as value_low,
      dd07t.ddtext                         as text
}
where
  dd07t.as4local = 'A'
```
