/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "mutation Register($user: RegisterUserInput!) {\n  register(user: $user) {\n    user {\n      id\n      login\n    }\n  }\n}\n\nquery getUser {\n  getUserData {\n    id\n    login\n  }\n}": types.RegisterDocument,
};

export function graphql(source: "mutation Register($user: RegisterUserInput!) {\n  register(user: $user) {\n    user {\n      id\n      login\n    }\n  }\n}\n\nquery getUser {\n  getUserData {\n    id\n    login\n  }\n}"): (typeof documents)["mutation Register($user: RegisterUserInput!) {\n  register(user: $user) {\n    user {\n      id\n      login\n    }\n  }\n}\n\nquery getUser {\n  getUserData {\n    id\n    login\n  }\n}"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;