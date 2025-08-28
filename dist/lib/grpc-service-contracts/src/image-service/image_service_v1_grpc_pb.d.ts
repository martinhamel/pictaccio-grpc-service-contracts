// package: image
// file: image-service/image_service_v1.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as image_service_image_service_v1_pb from "../image-service/image_service_v1_pb";

interface IImageService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createThumbnails: IImageService_IcreateThumbnails;
    createWatermarkedThumbnails: IImageService_IcreateWatermarkedThumbnails;
}

interface IImageService_IcreateThumbnails extends grpc.MethodDefinition<image_service_image_service_v1_pb.ResizeRequest, image_service_image_service_v1_pb.ResizeResponse> {
    path: "/image.Image/createThumbnails";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<image_service_image_service_v1_pb.ResizeRequest>;
    requestDeserialize: grpc.deserialize<image_service_image_service_v1_pb.ResizeRequest>;
    responseSerialize: grpc.serialize<image_service_image_service_v1_pb.ResizeResponse>;
    responseDeserialize: grpc.deserialize<image_service_image_service_v1_pb.ResizeResponse>;
}
interface IImageService_IcreateWatermarkedThumbnails extends grpc.MethodDefinition<image_service_image_service_v1_pb.WatermarkedResizeRequest, image_service_image_service_v1_pb.ResizeResponse> {
    path: "/image.Image/createWatermarkedThumbnails";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<image_service_image_service_v1_pb.WatermarkedResizeRequest>;
    requestDeserialize: grpc.deserialize<image_service_image_service_v1_pb.WatermarkedResizeRequest>;
    responseSerialize: grpc.serialize<image_service_image_service_v1_pb.ResizeResponse>;
    responseDeserialize: grpc.deserialize<image_service_image_service_v1_pb.ResizeResponse>;
}

export const ImageService: IImageService;

export interface IImageServer extends grpc.UntypedServiceImplementation {
    createThumbnails: grpc.handleUnaryCall<image_service_image_service_v1_pb.ResizeRequest, image_service_image_service_v1_pb.ResizeResponse>;
    createWatermarkedThumbnails: grpc.handleUnaryCall<image_service_image_service_v1_pb.WatermarkedResizeRequest, image_service_image_service_v1_pb.ResizeResponse>;
}

export interface IImageClient {
    createThumbnails(request: image_service_image_service_v1_pb.ResizeRequest, callback: (error: grpc.ServiceError | null, response: image_service_image_service_v1_pb.ResizeResponse) => void): grpc.ClientUnaryCall;
    createThumbnails(request: image_service_image_service_v1_pb.ResizeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: image_service_image_service_v1_pb.ResizeResponse) => void): grpc.ClientUnaryCall;
    createThumbnails(request: image_service_image_service_v1_pb.ResizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: image_service_image_service_v1_pb.ResizeResponse) => void): grpc.ClientUnaryCall;
    createWatermarkedThumbnails(request: image_service_image_service_v1_pb.WatermarkedResizeRequest, callback: (error: grpc.ServiceError | null, response: image_service_image_service_v1_pb.ResizeResponse) => void): grpc.ClientUnaryCall;
    createWatermarkedThumbnails(request: image_service_image_service_v1_pb.WatermarkedResizeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: image_service_image_service_v1_pb.ResizeResponse) => void): grpc.ClientUnaryCall;
    createWatermarkedThumbnails(request: image_service_image_service_v1_pb.WatermarkedResizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: image_service_image_service_v1_pb.ResizeResponse) => void): grpc.ClientUnaryCall;
}

export class ImageClient extends grpc.Client implements IImageClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createThumbnails(request: image_service_image_service_v1_pb.ResizeRequest, callback: (error: grpc.ServiceError | null, response: image_service_image_service_v1_pb.ResizeResponse) => void): grpc.ClientUnaryCall;
    public createThumbnails(request: image_service_image_service_v1_pb.ResizeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: image_service_image_service_v1_pb.ResizeResponse) => void): grpc.ClientUnaryCall;
    public createThumbnails(request: image_service_image_service_v1_pb.ResizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: image_service_image_service_v1_pb.ResizeResponse) => void): grpc.ClientUnaryCall;
    public createWatermarkedThumbnails(request: image_service_image_service_v1_pb.WatermarkedResizeRequest, callback: (error: grpc.ServiceError | null, response: image_service_image_service_v1_pb.ResizeResponse) => void): grpc.ClientUnaryCall;
    public createWatermarkedThumbnails(request: image_service_image_service_v1_pb.WatermarkedResizeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: image_service_image_service_v1_pb.ResizeResponse) => void): grpc.ClientUnaryCall;
    public createWatermarkedThumbnails(request: image_service_image_service_v1_pb.WatermarkedResizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: image_service_image_service_v1_pb.ResizeResponse) => void): grpc.ClientUnaryCall;
}
