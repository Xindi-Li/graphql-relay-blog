/**
 * @flow
 * @relayHash 0ff95699d8b0aecb1e67c8bdeaf7416f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateUserInput = {|
  username: string,
  password: string,
  fullname: string,
  clientMutationId?: ?string,
|};
export type CreateUserMutationVariables = {|
  input: CreateUserInput
|};
export type CreateUserMutationResponse = {|
  +createUser: ?{|
    +user: ?{|
      +id: string
    |}
  |}
|};
export type CreateUserMutation = {|
  variables: CreateUserMutationVariables,
  response: CreateUserMutationResponse,
|};
*/

/*
mutation CreateUserMutation(
  $input: CreateUserInput!
) {
  createUser(input: $input) {
    user {
      id
    }
  }
}
*/

const node /*: ConcreteRequest*/ = (function() {
    var v0 = [
            {
                kind: 'LocalArgument',
                name: 'input',
                type: 'CreateUserInput!',
                defaultValue: null,
            },
        ],
        v1 = [
            {
                kind: 'LinkedField',
                alias: null,
                name: 'createUser',
                storageKey: null,
                args: [
                    {
                        kind: 'Variable',
                        name: 'input',
                        variableName: 'input',
                    },
                ],
                concreteType: 'CreateUserPayload',
                plural: false,
                selections: [
                    {
                        kind: 'LinkedField',
                        alias: null,
                        name: 'user',
                        storageKey: null,
                        args: null,
                        concreteType: 'User',
                        plural: false,
                        selections: [
                            {
                                kind: 'ScalarField',
                                alias: null,
                                name: 'id',
                                args: null,
                                storageKey: null,
                            },
                        ],
                    },
                ],
            },
        ];
    return {
        kind: 'Request',
        fragment: {
            kind: 'Fragment',
            name: 'CreateUserMutation',
            type: 'Mutation',
            metadata: null,
            argumentDefinitions: (v0 /*: any*/),
            selections: (v1 /*: any*/),
        },
        operation: {
            kind: 'Operation',
            name: 'CreateUserMutation',
            argumentDefinitions: (v0 /*: any*/),
            selections: (v1 /*: any*/),
        },
        params: {
            operationKind: 'mutation',
            name: 'CreateUserMutation',
            id: null,
            text:
                'mutation CreateUserMutation(\n  $input: CreateUserInput!\n) {\n  createUser(input: $input) {\n    user {\n      id\n    }\n  }\n}\n',
            metadata: {},
        },
    };
})();
// prettier-ignore
(node/*: any*/).hash = 'e10e0a2a6b930a44cda50e71a629c8f3';

module.exports = node;
