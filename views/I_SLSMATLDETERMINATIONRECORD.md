---
name: I_SLSMATLDETERMINATIONRECORD
description: Slsmatldeterminationrecord
semantic_en: "material determination condition records — stores material substitution rules and reasons for sales and distribution scenarios."
semantic_vi: "bản ghi điều kiện xác định vật liệu — lưu trữ các quy tắc thay thế vật liệu và lý do cho các kịch bản bán hàng và phân phối."
keywords:
  - xác định vật liệu
  - thay thế vật liệu
  - điều kiện giá
app_component: SD-MD-MM-DET-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-MM
  - interface-view
  - component:SD-MD-MM-DET-2CL
  - lob:Sales & Distribution
  - bo:SlsMatlDeterminationRecord
---
# I_SLSMATLDETERMINATIONRECORD

**Slsmatldeterminationrecord**

| Property | Value |
|---|---|
| App Component | `SD-MD-MM-DET-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ConditionRecord` | `kondd.knumh` |
| `ConditionApplication` | `kondd.kappl` |
| `ConditionType` | `kondd.kschl` |
| `ConditionTable` | `kondd.conditiontable` |
| `SalesOrganization` | `kondd.vkorg` |
| `DistributionChannel` | `kondd.vtweg` |
| `Division` | `kondd.spart` |
| `SlsMatlDetnSubstituteMaterial` | `kondd.smatn` |
| `SlsMatlDetnSubstitMaterialUoM` | `kondd.meins` |
| `MaterialSubstitutionReason` | `kondd.sugrd` |
| `ConditionValidityEndDate` | `kondd.datbi` |
| `ConditionValidityStartDate` | `kondd.datab` |
| `LastChangeDateTime` | `kondd.upd_tmstmp` |
| `SDDocumentCategory` | `kondd.vbtyp` |
| `SalesDocumentType` | `kondd.auart` |
| `Customer` | `kondd.kunnr` |
| `CustomerGroup` | `kondd.kdgrp` |
| `SoldToParty` | `kondd.kunag` |
| `ShipToParty` | `kondd.kunwe` |
| `PayerParty` | `kondd.knrze` |
| `SalesEmployee` | `kondd.vrtnr` |
| `ForwardingAgent` | `kondd.spdnr` |
| `Product` | `cast( kondd.matnr as productnumber preserving type )` |
| `ProductType` | `cast (kondd.mtart as producttype preserving type )` |
| `ProductGroup` | `cast( kondd.matkl as productgroup preserving type )` |
| `MaterialPricingGroup` | `kondd.kondm` |
| `OriginallyRequestedMaterial` | `kondd.matwa` |
| `PricingReferenceMaterial` | `kondd.pmatn` |
| `Plant` | `kondd.werks` |
| `PlantCounty` | `kondd.wkcou` |
| `PlantRegion` | `kondd.wkreg` |
| `PlantCity` | `kondd.wkcty` |
| `IncotermsClassification` | `kondd.inco1` |
| `IncotermsTransferLocation` | `kondd.inco2` |
| `County` | `kondd.counc` |
| `DepartureCountry` | `kondd.aland` |
| `DestinationCountry` | `kondd.land1` |
| `Region` | `kondd.regio` |
| `CityCode` | `kondd.cityc` |
| `Batch` | `kondd.charg` |
| `CompanyCode` | `kondd.bukrs` |
| `PurchasingInfoRecord` | `kondd.infnr` |
| `_SlsMatlDetnRecdAddlSubstit` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SlsMatlDetnRecdAddlSubstit` | `I_SlsMatlDetnRecdAddlSubstit` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Material Determination Condition Record'

@VDM.viewType: #BASIC

@AccessControl:
{
  authorizationCheck: #MANDATORY,
  personalData.blocking: #REQUIRED
}

@ObjectModel.representativeKey: 'ConditionRecord'

@ObjectModel.usageType:
{
  dataClass: #MASTER,
  sizeCategory: #M,
  serviceQuality: #A
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE ] 
@Analytics.dataExtraction:
{
  enabled: true,
  delta.changeDataCapture.automatic: true
}

@ObjectModel.sapObjectNodeType.name: 'SlsMatlDeterminationRecord'

define view entity I_SlsMatlDeterminationRecord
  as select from kondd as kondd
  association [0..*] to I_SlsMatlDetnRecdAddlSubstit as _SlsMatlDetnRecdAddlSubstit
    on $projection.ConditionRecord = _SlsMatlDetnRecdAddlSubstit.ConditionRecord
{
  key kondd.knumh as ConditionRecord,

  // *** Authorization Check Fields  ***
  kondd.kappl as ConditionApplication,
  kondd.kschl as ConditionType,
  kondd.conditiontable as ConditionTable,
  
  kondd.vkorg as SalesOrganization,
  kondd.vtweg as DistributionChannel,
  kondd.spart as Division,
  
  // *** Data Fields ***
  
  kondd.smatn as SlsMatlDetnSubstituteMaterial,
  kondd.meins as SlsMatlDetnSubstitMaterialUoM,
  kondd.sugrd as MaterialSubstitutionReason,
  kondd.datbi as ConditionValidityEndDate,
  kondd.datab as ConditionValidityStartDate,
  kondd.upd_tmstmp as LastChangeDateTime,
  
  // *** Condition Fields ***
  
  kondd.vbtyp as SDDocumentCategory,
  kondd.auart as SalesDocumentType,
  
  kondd.kunnr as Customer,
  kondd.kdgrp as CustomerGroup,
  
  kondd.kunag as SoldToParty,
  kondd.kunwe as ShipToParty,
  kondd.knrze as PayerParty,
  kondd.vrtnr as SalesEmployee,
  kondd.spdnr as ForwardingAgent,
  
  cast( kondd.matnr as productnumber preserving type ) as Product,
  cast (kondd.mtart as producttype preserving type ) as ProductType,
  cast( kondd.matkl as productgroup preserving type ) as ProductGroup,
  kondd.kondm as MaterialPricingGroup,
  kondd.matwa as OriginallyRequestedMaterial,
  kondd.pmatn as PricingReferenceMaterial,

  kondd.werks as Plant,
  kondd.wkcou as PlantCounty,
  kondd.wkreg as PlantRegion,
  kondd.wkcty as PlantCity,
  
  kondd.inco1 as IncotermsClassification,
  kondd.inco2 as IncotermsTransferLocation,
  
  kondd.counc as County,
  kondd.aland as DepartureCountry,
  kondd.land1 as DestinationCountry,
  kondd.regio as Region,
  kondd.cityc as CityCode,
  
  kondd.charg as Batch,
  kondd.bukrs as CompanyCode,
  kondd.infnr as PurchasingInfoRecord,
  
  _SlsMatlDetnRecdAddlSubstit
}
where kondd.kappl = 'V'
```
