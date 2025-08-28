// package: 
// file: api-service/api_service_v1.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class CartItem extends jspb.Message { 
    clearByopselectionList(): void;
    getByopselectionList(): Array<string>;
    setByopselectionList(value: Array<string>): CartItem;
    addByopselection(value: string, index?: number): string;
    getComment(): string;
    setComment(value: string): CartItem;
    clearPhotosList(): void;
    getPhotosList(): Array<string>;
    setPhotosList(value: Array<string>): CartItem;
    addPhotos(value: string, index?: number): string;
    getProductid(): number;
    setProductid(value: number): CartItem;
    getQuantity(): number;
    setQuantity(value: number): CartItem;
    getProductname(): string;
    setProductname(value: string): CartItem;

    hasProductphoto(): boolean;
    clearProductphoto(): void;
    getProductphoto(): ProductPhoto | undefined;
    setProductphoto(value?: ProductPhoto): CartItem;
    getSubtotal(): number;
    setSubtotal(value: number): CartItem;
    getProductprice(): number;
    setProductprice(value: number): CartItem;
    getTheme(): string;
    setTheme(value: string): CartItem;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CartItem.AsObject;
    static toObject(includeInstance: boolean, msg: CartItem): CartItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CartItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CartItem;
    static deserializeBinaryFromReader(message: CartItem, reader: jspb.BinaryReader): CartItem;
}

export namespace CartItem {
    export type AsObject = {
        byopselectionList: Array<string>,
        comment: string,
        photosList: Array<string>,
        productid: number,
        quantity: number,
        productname: string,
        productphoto?: ProductPhoto.AsObject,
        subtotal: number,
        productprice: number,
        theme: string,
    }
}

export class ProductPhoto extends jspb.Message { 
    getTheme(): string;
    setTheme(value: string): ProductPhoto;
    getUrl(): string;
    setUrl(value: string): ProductPhoto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProductPhoto.AsObject;
    static toObject(includeInstance: boolean, msg: ProductPhoto): ProductPhoto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProductPhoto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProductPhoto;
    static deserializeBinaryFromReader(message: ProductPhoto, reader: jspb.BinaryReader): ProductPhoto;
}

export namespace ProductPhoto {
    export type AsObject = {
        theme: string,
        url: string,
    }
}

export class ContactInfo extends jspb.Message { 
    getApartment(): string;
    setApartment(value: string): ContactInfo;
    getCity(): string;
    setCity(value: string): ContactInfo;
    getCivicNumber(): string;
    setCivicNumber(value: string): ContactInfo;
    getName(): string;
    setName(value: string): ContactInfo;
    getEmail(): string;
    setEmail(value: string): ContactInfo;
    getPhone(): string;
    setPhone(value: string): ContactInfo;
    getPostalCode(): string;
    setPostalCode(value: string): ContactInfo;
    getState(): string;
    setState(value: string): ContactInfo;
    getStreet(): string;
    setStreet(value: string): ContactInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContactInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ContactInfo): ContactInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContactInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContactInfo;
    static deserializeBinaryFromReader(message: ContactInfo, reader: jspb.BinaryReader): ContactInfo;
}

export namespace ContactInfo {
    export type AsObject = {
        apartment: string,
        city: string,
        civicNumber: string,
        name: string,
        email: string,
        phone: string,
        postalCode: string,
        state: string,
        street: string,
    }
}

export class PhotoSelection extends jspb.Message { 
    getBackgroundnumber(): string;
    setBackgroundnumber(value: string): PhotoSelection;
    getBackgroundurl(): string;
    setBackgroundurl(value: string): PhotoSelection;
    getPictureid(): number;
    setPictureid(value: number): PhotoSelection;
    getPhotoid(): string;
    setPhotoid(value: string): PhotoSelection;
    getPhotourl(): string;
    setPhotourl(value: string): PhotoSelection;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PhotoSelection.AsObject;
    static toObject(includeInstance: boolean, msg: PhotoSelection): PhotoSelection.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PhotoSelection, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PhotoSelection;
    static deserializeBinaryFromReader(message: PhotoSelection, reader: jspb.BinaryReader): PhotoSelection;
}

export namespace PhotoSelection {
    export type AsObject = {
        backgroundnumber: string,
        backgroundurl: string,
        pictureid: number,
        photoid: string,
        photourl: string,
    }
}

export class PictureVersion extends jspb.Message { 
    getOriginal(): string;
    setOriginal(value: string): PictureVersion;
    getVersion(): string;
    setVersion(value: string): PictureVersion;

    hasCreatedat(): boolean;
    clearCreatedat(): void;
    getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): PictureVersion;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PictureVersion.AsObject;
    static toObject(includeInstance: boolean, msg: PictureVersion): PictureVersion.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PictureVersion, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PictureVersion;
    static deserializeBinaryFromReader(message: PictureVersion, reader: jspb.BinaryReader): PictureVersion;
}

export namespace PictureVersion {
    export type AsObject = {
        original: string,
        version: string,
        createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class PictureVersions extends jspb.Message { 

    getVersionsMap(): jspb.Map<string, PictureVersion>;
    clearVersionsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PictureVersions.AsObject;
    static toObject(includeInstance: boolean, msg: PictureVersions): PictureVersions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PictureVersions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PictureVersions;
    static deserializeBinaryFromReader(message: PictureVersions, reader: jspb.BinaryReader): PictureVersions;
}

export namespace PictureVersions {
    export type AsObject = {

        versionsMap: Array<[string, PictureVersion.AsObject]>,
    }
}

export class PictureVersionCollection extends jspb.Message { 

    getCollectionMap(): jspb.Map<number, PictureVersions>;
    clearCollectionMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PictureVersionCollection.AsObject;
    static toObject(includeInstance: boolean, msg: PictureVersionCollection): PictureVersionCollection.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PictureVersionCollection, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PictureVersionCollection;
    static deserializeBinaryFromReader(message: PictureVersionCollection, reader: jspb.BinaryReader): PictureVersionCollection;
}

export namespace PictureVersionCollection {
    export type AsObject = {

        collectionMap: Array<[number, PictureVersions.AsObject]>,
    }
}

export class Shipping extends jspb.Message { 
    getId(): number;
    setId(value: number): Shipping;

    hasName(): boolean;
    clearName(): void;
    getName(): LocalizedString | undefined;
    setName(value?: LocalizedString): Shipping;
    getComment(): string;
    setComment(value: string): Shipping;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Shipping.AsObject;
    static toObject(includeInstance: boolean, msg: Shipping): Shipping.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Shipping, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Shipping;
    static deserializeBinaryFromReader(message: Shipping, reader: jspb.BinaryReader): Shipping;
}

export namespace Shipping {
    export type AsObject = {
        id: number,
        name?: LocalizedString.AsObject,
        comment: string,
    }
}

export class LocalizedString extends jspb.Message { 

    getValuesMap(): jspb.Map<string, string>;
    clearValuesMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LocalizedString.AsObject;
    static toObject(includeInstance: boolean, msg: LocalizedString): LocalizedString.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LocalizedString, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LocalizedString;
    static deserializeBinaryFromReader(message: LocalizedString, reader: jspb.BinaryReader): LocalizedString;
}

export namespace LocalizedString {
    export type AsObject = {

        valuesMap: Array<[string, string]>,
    }
}

export class CanadianTaxLocality extends jspb.Message { 
    getGst(): number;
    setGst(value: number): CanadianTaxLocality;
    getHst(): number;
    setHst(value: number): CanadianTaxLocality;
    getPst(): number;
    setPst(value: number): CanadianTaxLocality;
    getQst(): number;
    setQst(value: number): CanadianTaxLocality;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CanadianTaxLocality.AsObject;
    static toObject(includeInstance: boolean, msg: CanadianTaxLocality): CanadianTaxLocality.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CanadianTaxLocality, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CanadianTaxLocality;
    static deserializeBinaryFromReader(message: CanadianTaxLocality, reader: jspb.BinaryReader): CanadianTaxLocality;
}

export namespace CanadianTaxLocality {
    export type AsObject = {
        gst: number,
        hst: number,
        pst: number,
        qst: number,
    }
}

export class TransactionInfo extends jspb.Message { 
    getCode(): string;
    setCode(value: string): TransactionInfo;
    getSuccess(): boolean;
    setSuccess(value: boolean): TransactionInfo;
    getType(): string;
    setType(value: string): TransactionInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionInfo.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionInfo): TransactionInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TransactionInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionInfo;
    static deserializeBinaryFromReader(message: TransactionInfo, reader: jspb.BinaryReader): TransactionInfo;
}

export namespace TransactionInfo {
    export type AsObject = {
        code: string,
        success: boolean,
        type: string,
    }
}

export class Transaction extends jspb.Message { 
    getSubtotal(): number;
    setSubtotal(value: number): Transaction;
    getPromo(): number;
    setPromo(value: number): Transaction;
    getShipping(): number;
    setShipping(value: number): Transaction;

    hasTaxes(): boolean;
    clearTaxes(): void;
    getTaxes(): CanadianTaxLocality | undefined;
    setTaxes(value?: CanadianTaxLocality): Transaction;
    getTotal(): number;
    setTotal(value: number): Transaction;
    clearTransactionsList(): void;
    getTransactionsList(): Array<TransactionInfo>;
    setTransactionsList(value: Array<TransactionInfo>): Transaction;
    addTransactions(value?: TransactionInfo, index?: number): TransactionInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Transaction.AsObject;
    static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Transaction;
    static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
    export type AsObject = {
        subtotal: number,
        promo: number,
        shipping: number,
        taxes?: CanadianTaxLocality.AsObject,
        total: number,
        transactionsList: Array<TransactionInfo.AsObject>,
    }
}

export class Subject extends jspb.Message { 
    getCode(): string;
    setCode(value: string): Subject;
    clearPicturesList(): void;
    getPicturesList(): Array<string>;
    setPicturesList(value: Array<string>): Subject;
    addPictures(value: string, index?: number): string;
    getUniqueid(): string;
    setUniqueid(value: string): Subject;
    getName(): string;
    setName(value: string): Subject;
    getGroup(): string;
    setGroup(value: string): Subject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Subject.AsObject;
    static toObject(includeInstance: boolean, msg: Subject): Subject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Subject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Subject;
    static deserializeBinaryFromReader(message: Subject, reader: jspb.BinaryReader): Subject;
}

export namespace Subject {
    export type AsObject = {
        code: string,
        picturesList: Array<string>,
        uniqueid: string,
        name: string,
        group: string,
    }
}

export class OrderDescriptor extends jspb.Message { 
    getSessionid(): number;
    setSessionid(value: number): OrderDescriptor;
    clearCartitemsList(): void;
    getCartitemsList(): Array<CartItem>;
    setCartitemsList(value: Array<CartItem>): OrderDescriptor;
    addCartitems(value?: CartItem, index?: number): CartItem;
    getComment(): string;
    setComment(value: string): OrderDescriptor;

    hasContact(): boolean;
    clearContact(): void;
    getContact(): ContactInfo | undefined;
    setContact(value?: ContactInfo): OrderDescriptor;
    getId(): number;
    setId(value: number): OrderDescriptor;
    clearPhotosList(): void;
    getPhotosList(): Array<PhotoSelection>;
    setPhotosList(value: Array<PhotoSelection>): OrderDescriptor;
    addPhotos(value?: PhotoSelection, index?: number): PhotoSelection;

    hasPhotoversions(): boolean;
    clearPhotoversions(): void;
    getPhotoversions(): PictureVersionCollection | undefined;
    setPhotoversions(value?: PictureVersionCollection): OrderDescriptor;

    hasShipping(): boolean;
    clearShipping(): void;
    getShipping(): Shipping | undefined;
    setShipping(value?: Shipping): OrderDescriptor;
    clearSubjectsList(): void;
    getSubjectsList(): Array<Subject>;
    setSubjectsList(value: Array<Subject>): OrderDescriptor;
    addSubjects(value?: Subject, index?: number): Subject;

    hasTransaction(): boolean;
    clearTransaction(): void;
    getTransaction(): Transaction | undefined;
    setTransaction(value?: Transaction): OrderDescriptor;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDate(value?: google_protobuf_timestamp_pb.Timestamp): OrderDescriptor;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderDescriptor.AsObject;
    static toObject(includeInstance: boolean, msg: OrderDescriptor): OrderDescriptor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderDescriptor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderDescriptor;
    static deserializeBinaryFromReader(message: OrderDescriptor, reader: jspb.BinaryReader): OrderDescriptor;
}

export namespace OrderDescriptor {
    export type AsObject = {
        sessionid: number,
        cartitemsList: Array<CartItem.AsObject>,
        comment: string,
        contact?: ContactInfo.AsObject,
        id: number,
        photosList: Array<PhotoSelection.AsObject>,
        photoversions?: PictureVersionCollection.AsObject,
        shipping?: Shipping.AsObject,
        subjectsList: Array<Subject.AsObject>,
        transaction?: Transaction.AsObject,
        date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class OrderDescriptors extends jspb.Message { 
    clearOrdersList(): void;
    getOrdersList(): Array<OrderDescriptor>;
    setOrdersList(value: Array<OrderDescriptor>): OrderDescriptors;
    addOrders(value?: OrderDescriptor, index?: number): OrderDescriptor;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderDescriptors.AsObject;
    static toObject(includeInstance: boolean, msg: OrderDescriptors): OrderDescriptors.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderDescriptors, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderDescriptors;
    static deserializeBinaryFromReader(message: OrderDescriptors, reader: jspb.BinaryReader): OrderDescriptors;
}

export namespace OrderDescriptors {
    export type AsObject = {
        ordersList: Array<OrderDescriptor.AsObject>,
    }
}

export class OrderRequest extends jspb.Message { 
    clearOrderidsList(): void;
    getOrderidsList(): Array<number>;
    setOrderidsList(value: Array<number>): OrderRequest;
    addOrderids(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: OrderRequest): OrderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderRequest;
    static deserializeBinaryFromReader(message: OrderRequest, reader: jspb.BinaryReader): OrderRequest;
}

export namespace OrderRequest {
    export type AsObject = {
        orderidsList: Array<number>,
    }
}

export class OrderResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): OrderResponse;

    hasOrders(): boolean;
    clearOrders(): void;
    getOrders(): OrderDescriptors | undefined;
    setOrders(value?: OrderDescriptors): OrderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: OrderResponse): OrderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrderResponse;
    static deserializeBinaryFromReader(message: OrderResponse, reader: jspb.BinaryReader): OrderResponse;
}

export namespace OrderResponse {
    export type AsObject = {
        success: boolean,
        orders?: OrderDescriptors.AsObject,
    }
}
