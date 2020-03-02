/**
 * @flow
 * @relayHash ab7ca6521becc66a472a201ebd7e8d2f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreatePostInput = {|
  title: string,
  content: string,
  userId: string,
  clientMutationId?: ?string,
|};
export type CreatePostMutationVariables = {|
  input: CreatePostInput
|};
export type CreatePostMutationResponse = {|
  +createPost: ?{|
    +post: ?{|
      +id: string,
      +title: ?string,
      +content: ?string,
      +author: ?{|
        +fullname: ?string
      |},
    |}
  |}
|};
export type CreatePostMutation = {|
  variables: CreatePostMutationVariables,
  response: CreatePostMutationResponse,
|};
*/

/*
mutation CreatePostMutation(
  $input: CreatePostInput!
) {
  createPost(input: $input) {
    post {
      id
      title
      content
      author {
        fullname
        id
      }
    }
  }
}
*/

const node /*: ConcreteRequest*/ = (function() {
    var v0 = [
            {
                kind: 'LocalArgument',
                name: 'input',
                type: 'CreatePostInput!',
                defaultValue: null,
            },
        ],
        v1 = [
            {
                kind: 'Variable',
                name: 'input',
                variableName: 'input',
            },
        ],
        v2 = {
            kind: 'ScalarField',
            alias: null,
            name: 'id',
            args: null,
            storageKey: null,
        },
        v3 = {
            kind: 'ScalarField',
            alias: null,
            name: 'title',
            args: null,
            storageKey: null,
        },
        v4 = {
            kind: 'ScalarField',
            alias: null,
            name: 'content',
            args: null,
            storageKey: null,
        },
        v5 = {
            kind: 'ScalarField',
            alias: null,
            name: 'fullname',
            args: null,
            storageKey: null,
        };
    return {
        kind: 'Request',
        fragment: {
            kind: 'Fragment',
            name: 'CreatePostMutation',
            type: 'Mutation',
            metadata: null,
            argumentDefinitions: (v0 /*: any*/),
            selections: [
                {
                    kind: 'LinkedField',
                    alias: null,
                    name: 'createPost',
                    storageKey: null,
                    args: (v1 /*: any*/),
                    concreteType: 'CreatePostPayload',
                    plural: false,
                    selections: [
                        {
                            kind: 'LinkedField',
                            alias: null,
                            name: 'post',
                            storageKey: null,
                            args: null,
                            concreteType: 'Post',
                            plural: false,
                            selections: [
                                (v2 /*: any*/),
                                (v3 /*: any*/),
                                (v4 /*: any*/),
                                {
                                    kind: 'LinkedField',
                                    alias: null,
                                    name: 'author',
                                    storageKey: null,
                                    args: null,
                                    concreteType: 'User',
                                    plural: false,
                                    selections: [(v5 /*: any*/)],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        operation: {
            kind: 'Operation',
            name: 'CreatePostMutation',
            argumentDefinitions: (v0 /*: any*/),
            selections: [
                {
                    kind: 'LinkedField',
                    alias: null,
                    name: 'createPost',
                    storageKey: null,
                    args: (v1 /*: any*/),
                    concreteType: 'CreatePostPayload',
                    plural: false,
                    selections: [
                        {
                            kind: 'LinkedField',
                            alias: null,
                            name: 'post',
                            storageKey: null,
                            args: null,
                            concreteType: 'Post',
                            plural: false,
                            selections: [
                                (v2 /*: any*/),
                                (v3 /*: any*/),
                                (v4 /*: any*/),
                                {
                                    kind: 'LinkedField',
                                    alias: null,
                                    name: 'author',
                                    storageKey: null,
                                    args: null,
                                    concreteType: 'User',
                                    plural: false,
                                    selections: [
                                        (v5 /*: any*/),
                                        (v2 /*: any*/),
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        params: {
            operationKind: 'mutation',
            name: 'CreatePostMutation',
            id: null,
            text:
                'mutation CreatePostMutation(\n  $input: CreatePostInput!\n) {\n  createPost(input: $input) {\n    post {\n      id\n      title\n      content\n      author {\n        fullname\n        id\n      }\n    }\n  }\n}\n',
            metadata: {},
        },
    };
})();
// prettier-ignore
(node/*: any*/).hash = 'fbb700455360e65bfdd95ccadb40de00';

module.exports = node;
