---
name: DDCDS_TYPE_ENUMVAL_INT4_T_SCP
description: Ddcds Type Enumval Int 4 T Scp
semantic_en: "Enumeration Value INT4 with Text — integer INT4 enumeration values with translated text labels."
semantic_vi: "Giá trị liệt kê INT4 có văn bản — giá trị liệt kê số nguyên INT4 với nhãn văn bản được dịch."
keywords:
  - liệt kê
  - bản dịch
  - INT4
  - nhãn
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
  - component:BC-DWB-DIC
  - lob:Basis Components
---
# DDCDS_TYPE_ENUMVAL_INT4_T_SCP

**Ddcds Type Enumval Int 4 T Scp**

| Property | Value |
|---|---|
| App Component | `BC-DWB-DIC` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `simpleType` | `cast( enum_t.simpleType as abap.char(30) )` |
| `enumIdentifier` | `cast( enum_t.enumIdentifier as abap.char(30) )` |
| `enumValue` | `cast( enum_t.enumValue as abap.int4 )` |
| `language` | `enum_t.language` |
| `enumTextName` | `cast( enum_t.enumTextName as abap.char(240) )` |
| `enumText` | `cast( enum_t.enumText as abap.char(255) )` |
| `_EnumValue` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EnumValue` | `ddcds_type_enumval_int4_scp` | — |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'CDS Simple Type: Enum Values INT4 Texts'
define view entity ddcds_type_enumval_int4_t_scp 
  as select from dd_drty_st_enum_value_t_int4 as enum_t
    inner join   ARS_OBJECTS_ALL_SW_COMP_SCP on  ARS_OBJECTS_ALL_SW_COMP_SCP.program_id  = 'R3TR'
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_type = 'DRTY'
                                             and ARS_OBJECTS_ALL_SW_COMP_SCP.object_name = enum_t.simpleType
  association to parent ddcds_type_enumval_int4_scp as _EnumValue on  $projection.simpleType     = _EnumValue.simpleType
                                                                     and $projection.enumIdentifier = _EnumValue.enumIdentifier
                                                                     and $projection.enumValue      = _EnumValue.enumValue
{
      @EndUserText.label: 'CDS Type Name'
  key cast( enum_t.simpleType as abap.char(30) )     as simpleType,
      @EndUserText.label: 'Enum of CDS Type'
  key cast( enum_t.enumIdentifier as abap.char(30) ) as enumIdentifier,
      @EndUserText.label: 'Enum Value INT4'
  key cast( enum_t.enumValue as abap.int4 )       as enumValue,
  key enum_t.language,
  key cast( enum_t.enumTextName as abap.char(240) )  as enumTextName,
      cast( enum_t.enumText as abap.char(255) )      as enumText,
      _EnumValue,
      enum_t._Language
}
```
