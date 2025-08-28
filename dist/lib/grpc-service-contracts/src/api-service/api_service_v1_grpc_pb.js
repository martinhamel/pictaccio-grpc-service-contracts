// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var api$service_api_service_v1_pb = require('../api-service/api_service_v1_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_OrderRequest(arg) {
  if (!(arg instanceof api$service_api_service_v1_pb.OrderRequest)) {
    throw new Error('Expected argument of type OrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_OrderRequest(buffer_arg) {
  return api$service_api_service_v1_pb.OrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_OrderResponse(arg) {
  if (!(arg instanceof api$service_api_service_v1_pb.OrderResponse)) {
    throw new Error('Expected argument of type OrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_OrderResponse(buffer_arg) {
  return api$service_api_service_v1_pb.OrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ApiService = exports.ApiService = {
  getOrders: {
    path: '/Api/getOrders',
    requestStream: false,
    responseStream: false,
    requestType: api$service_api_service_v1_pb.OrderRequest,
    responseType: api$service_api_service_v1_pb.OrderResponse,
    requestSerialize: serialize_OrderRequest,
    requestDeserialize: deserialize_OrderRequest,
    responseSerialize: serialize_OrderResponse,
    responseDeserialize: deserialize_OrderResponse,
  },
};

exports.ApiClient = grpc.makeGenericClientConstructor(ApiService, 'Api');
