// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var image$service_image_service_v1_pb = require('../image-service/image_service_v1_pb.js');

function serialize_image_ResizeRequest(arg) {
  if (!(arg instanceof image$service_image_service_v1_pb.ResizeRequest)) {
    throw new Error('Expected argument of type image.ResizeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_image_ResizeRequest(buffer_arg) {
  return image$service_image_service_v1_pb.ResizeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_image_ResizeResponse(arg) {
  if (!(arg instanceof image$service_image_service_v1_pb.ResizeResponse)) {
    throw new Error('Expected argument of type image.ResizeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_image_ResizeResponse(buffer_arg) {
  return image$service_image_service_v1_pb.ResizeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_image_WatermarkedResizeRequest(arg) {
  if (!(arg instanceof image$service_image_service_v1_pb.WatermarkedResizeRequest)) {
    throw new Error('Expected argument of type image.WatermarkedResizeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_image_WatermarkedResizeRequest(buffer_arg) {
  return image$service_image_service_v1_pb.WatermarkedResizeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ImageService = exports.ImageService = {
  createThumbnails: {
    path: '/image.Image/createThumbnails',
    requestStream: false,
    responseStream: false,
    requestType: image$service_image_service_v1_pb.ResizeRequest,
    responseType: image$service_image_service_v1_pb.ResizeResponse,
    requestSerialize: serialize_image_ResizeRequest,
    requestDeserialize: deserialize_image_ResizeRequest,
    responseSerialize: serialize_image_ResizeResponse,
    responseDeserialize: deserialize_image_ResizeResponse,
  },
  createWatermarkedThumbnails: {
    path: '/image.Image/createWatermarkedThumbnails',
    requestStream: false,
    responseStream: false,
    requestType: image$service_image_service_v1_pb.WatermarkedResizeRequest,
    responseType: image$service_image_service_v1_pb.ResizeResponse,
    requestSerialize: serialize_image_WatermarkedResizeRequest,
    requestDeserialize: deserialize_image_WatermarkedResizeRequest,
    responseSerialize: serialize_image_ResizeResponse,
    responseDeserialize: deserialize_image_ResizeResponse,
  },
};

exports.ImageClient = grpc.makeGenericClientConstructor(ImageService, 'Image');
