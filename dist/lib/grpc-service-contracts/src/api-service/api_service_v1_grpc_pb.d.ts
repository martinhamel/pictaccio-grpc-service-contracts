// package: 
// file: api-service/api_service_v1.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as api_service_api_service_v1_pb from "../api-service/api_service_v1_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface IApiService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getOrders: IApiService_IgetOrders;
}

interface IApiService_IgetOrders extends grpc.MethodDefinition<api_service_api_service_v1_pb.OrderRequest, api_service_api_service_v1_pb.OrderResponse> {
    path: "/Api/getOrders";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<api_service_api_service_v1_pb.OrderRequest>;
    requestDeserialize: grpc.deserialize<api_service_api_service_v1_pb.OrderRequest>;
    responseSerialize: grpc.serialize<api_service_api_service_v1_pb.OrderResponse>;
    responseDeserialize: grpc.deserialize<api_service_api_service_v1_pb.OrderResponse>;
}

export const ApiService: IApiService;

export interface IApiServer extends grpc.UntypedServiceImplementation {
    getOrders: grpc.handleUnaryCall<api_service_api_service_v1_pb.OrderRequest, api_service_api_service_v1_pb.OrderResponse>;
}

export interface IApiClient {
    getOrders(request: api_service_api_service_v1_pb.OrderRequest, callback: (error: grpc.ServiceError | null, response: api_service_api_service_v1_pb.OrderResponse) => void): grpc.ClientUnaryCall;
    getOrders(request: api_service_api_service_v1_pb.OrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_service_api_service_v1_pb.OrderResponse) => void): grpc.ClientUnaryCall;
    getOrders(request: api_service_api_service_v1_pb.OrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_service_api_service_v1_pb.OrderResponse) => void): grpc.ClientUnaryCall;
}

export class ApiClient extends grpc.Client implements IApiClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getOrders(request: api_service_api_service_v1_pb.OrderRequest, callback: (error: grpc.ServiceError | null, response: api_service_api_service_v1_pb.OrderResponse) => void): grpc.ClientUnaryCall;
    public getOrders(request: api_service_api_service_v1_pb.OrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: api_service_api_service_v1_pb.OrderResponse) => void): grpc.ClientUnaryCall;
    public getOrders(request: api_service_api_service_v1_pb.OrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: api_service_api_service_v1_pb.OrderResponse) => void): grpc.ClientUnaryCall;
}
