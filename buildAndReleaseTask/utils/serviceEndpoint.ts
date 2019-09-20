import * as tl from 'azure-pipelines-task-lib/task';
import { IServiceEndpoint } from 'models/IServiceEndpoint';

export function getServiceEndpoint(connectedServiceName: string): IServiceEndpoint {
    return {
        clientId: tl.getEndpointAuthorizationParameter(connectedServiceName, "serviceprincipalid", false),
        servicePrincipalKey: tl.getEndpointAuthorizationParameter(connectedServiceName, "serviceprincipalkey", false),
        subscriptionId: tl.getEndpointDataParameter(connectedServiceName, "subscriptionid", false),
        tenantId: tl.getEndpointAuthorizationParameter(connectedServiceName, "tenantid", false),
    };
}