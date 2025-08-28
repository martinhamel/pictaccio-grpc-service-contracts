// package: image
// file: image-service/image_service_v1.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ImageResizeItem extends jspb.Message { 
    getFile(): string;
    setFile(value: string): ImageResizeItem;
    getProfile(): SizeProfile;
    setProfile(value: SizeProfile): ImageResizeItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImageResizeItem.AsObject;
    static toObject(includeInstance: boolean, msg: ImageResizeItem): ImageResizeItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImageResizeItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImageResizeItem;
    static deserializeBinaryFromReader(message: ImageResizeItem, reader: jspb.BinaryReader): ImageResizeItem;
}

export namespace ImageResizeItem {
    export type AsObject = {
        file: string,
        profile: SizeProfile,
    }
}

export class ResizeRequest extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<ImageResizeItem>;
    setItemsList(value: Array<ImageResizeItem>): ResizeRequest;
    addItems(value?: ImageResizeItem, index?: number): ImageResizeItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResizeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ResizeRequest): ResizeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResizeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResizeRequest;
    static deserializeBinaryFromReader(message: ResizeRequest, reader: jspb.BinaryReader): ResizeRequest;
}

export namespace ResizeRequest {
    export type AsObject = {
        itemsList: Array<ImageResizeItem.AsObject>,
    }
}

export class WatermarkedResizeRequest extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<ImageResizeItem>;
    setItemsList(value: Array<ImageResizeItem>): WatermarkedResizeRequest;
    addItems(value?: ImageResizeItem, index?: number): ImageResizeItem;
    getWatermarkimagepath(): string;
    setWatermarkimagepath(value: string): WatermarkedResizeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WatermarkedResizeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WatermarkedResizeRequest): WatermarkedResizeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WatermarkedResizeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WatermarkedResizeRequest;
    static deserializeBinaryFromReader(message: WatermarkedResizeRequest, reader: jspb.BinaryReader): WatermarkedResizeRequest;
}

export namespace WatermarkedResizeRequest {
    export type AsObject = {
        itemsList: Array<ImageResizeItem.AsObject>,
        watermarkimagepath: string,
    }
}

export class ResizeResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): ResizeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResizeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ResizeResponse): ResizeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResizeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResizeResponse;
    static deserializeBinaryFromReader(message: ResizeResponse, reader: jspb.BinaryReader): ResizeResponse;
}

export namespace ResizeResponse {
    export type AsObject = {
        success: boolean,
    }
}

export enum SizeProfile {
    SMALL = 0,
    NORMAL = 1,
}
