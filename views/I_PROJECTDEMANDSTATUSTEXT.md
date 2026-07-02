---
name: I_PROJECTDEMANDSTATUSTEXT
description: Projectdemandstatustext
semantic_en: "translated text — demand status descriptions in multiple languages for projects."
semantic_vi: "văn bản dịch — mô tả trạng thái nhu cầu cho dự án theo ngôn ngữ."
keywords:
  - mô tả trạng thái
  - dịch ngôn ngữ
  - nhu cầu
app_component: PPM-SCL-DMN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-DMN
  - interface-view
  - text-view
  - project
  - text
  - status
  - component:PPM-SCL-DMN
  - lob:Other
  - bo:Project
---
# I_PROJECTDEMANDSTATUSTEXT

**Projectdemandstatustext**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ProjectDemandStatus` | `status` |
| `Language` | `langu` |
| `ProjectDemandStatusText` | `description` |
| `_Status` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Status` | `I_ProjectDemandStatus` | — |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Project Demand Status - Text'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type:  #PUBLIC_LOCAL_API
}

@AbapCatalog: {
    compiler.compareFilter: true,
    dataMaintenance: #RESTRICTED,
    sqlViewName: 'IPRJDMNDSTATTXT'
}

@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataExtraction.enabled: true

@ObjectModel: {
   sapObjectNodeType.name: 'ProjectDemandStatusText',
   modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
   semanticKey:       [ 'ProjectDemandStatusText' ],
   representativeKey: 'ProjectDemandStatus',
   dataCategory: #TEXT,
   usageType: {
     serviceQuality:  #A,
     dataClass:       #CUSTOMIZING,
     sizeCategory:    #M
   },
   resultSet.sizeCategory: #XS
}

@ClientHandling: { algorithm: #SESSION_VARIABLE }
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_ProjectDemandStatusText
  as select from dmnd_proj_stat_t
  association to parent I_ProjectDemandStatus as _Status   on $projection.ProjectDemandStatus = _Status.ProjectDemandStatus
  association [0..1] to I_Language            as _Language on $projection.Language = _Language.Language
{
         @ObjectModel.foreignKey.association: '_Status'
  key    status      as ProjectDemandStatus,

         @Semantics.language
         @ObjectModel.foreignKey.association: '_Language'
  key    langu       as Language,
         @Search: {
           defaultSearchElement: true,
           ranking: #HIGH
         }
         @Semantics.text
         description as ProjectDemandStatusText,

         _Status,
         _Language
};
```
