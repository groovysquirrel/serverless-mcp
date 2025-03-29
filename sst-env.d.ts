/* This file is auto-generated by SST. Do not edit. */
/* tslint:disable */
/* eslint-disable */
/* deno-fmt-ignore-file */

declare module "sst" {
  export interface Resource {
    "EmailBucket": {
      "name": string
      "type": "sst.aws.Bucket"
    }
    "LoadDefault": {
      "type": "sst.sst.Linkable"
      "value": {
        "LoadDefaults": boolean
        "baseDomain": string
        "cors": {
          "additionalDev": any
        }
        "domains": {
          "api": {
            "latest": {
              "demo": string
              "dev": string
              "prod": string
            }
          }
          "frontend": {
            "latest": {
              "demo": string
              "dev": string
              "prod": string
            }
          }
        }
        "emails": {
          "demo": string
          "dev": string
          "prod": string
        }
        "getCorsOrigins": {
        }
        "getDomainName": {
        }
        "getEmail": {
        }
        "getStageMap": {
        }
        "getVersion": {
        }
        "version": {
          "latest": string
        }
      }
    }
    "PostConfirmationFunction": {
      "name": string
      "type": "sst.aws.Function"
    }
    "UserApprovalEmail": {
      "configSet": string
      "sender": string
      "type": "sst.aws.Email"
    }
    "brainsOS_identityPool": {
      "id": string
      "type": "sst.aws.CognitoIdentityPool"
    }
    "brainsOS_userPool": {
      "id": string
      "type": "sst.aws.CognitoUserPool"
    }
    "brainsOS_userPoolClient": {
      "id": string
      "secret": string
      "type": "sst.aws.CognitoUserPoolClient"
    }
    "brains_api_latest": {
      "type": "sst.aws.ApiGatewayV2"
      "url": string
    }
    "brains_latest": {
      "type": "sst.aws.StaticSite"
      "url": string
    }
    "systemData": {
      "name": string
      "type": "sst.aws.Dynamo"
    }
    "userData": {
      "name": string
      "type": "sst.aws.Dynamo"
    }
  }
}
/// <reference path="sst-env.d.ts" />

import "sst"
export {}