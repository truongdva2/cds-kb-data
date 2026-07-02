---
name: I_SRVCORDTMPLUSERSTATUSTP
description: Srvcordtmpluserstatustp
semantic_en: "user-defined status for service order templates — applies workflow status profiles at template level"
semantic_vi: "trạng thái do người dùng xác định cho mẫu đơn hàng dịch vụ — áp dụng hồ sơ trạng thái quy trình làm việc ở cấp mẫu"
keywords:
  - trạng thái
  - mẫu
  - quy trình
app_component: CRM-S4-SRV-SVT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - status
  - component:CRM-S4-SRV-SVT-2CL
  - lob:Other
---
# I_SRVCORDTMPLUSERSTATUSTP

**Srvcordtmpluserstatustp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ServiceOrderTemplate` | `ServiceOrderTemplate` |
| `UserStatus` | `UserStatus` |
| `StatusProfile` | `StatusProfile` |
| `_StatusCode` | *Association* |
| `_StatusProfile` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@EndUserText.label: 'Service Order Template User Status - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
//   representativeKey: 'ServiceOrder',
   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #B,
                sizeCategory:   #L}
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_SrvcOrdTmplUserStatusTP 
as projection on R_SrvcOrdTmplUserStatusTP
{

  key ServiceOrderTemplate,
  key UserStatus,
      StatusProfile,

  /* Associations */
    _StatusCode,
    _StatusProfile,
    
    _ServiceOrderTemplateTP : redirected to parent I_ServiceOrderTemplateTP

}
```
