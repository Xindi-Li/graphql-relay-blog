/**
 * @flow
 * @relayHash 2ce36920508de478e7986b9823f74ed7
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LoginUserInput = {|
  username: string,
  password: string,
  clientMutationId?: ?string,
|};
export type LoginUserMutationVariables = {|
  input: LoginUserInput
|};
export type LoginUserMutationResponse = {|
  +loginUser: ?{|
    +user: ?{|
      +id: string,
      +username: ?string,
      +password: ?string,
      +fullname: ?string,
    |}
  |}
|};
export type LoginUserMutation = {|
  variables: LoginUserMutationVariables,
  response: LoginUserMutationResponse,
|};
*/

/*
mutation LoginUserMutation(
  $input: LoginUserInput!
) {
  loginUser(input: $input) {
    user {
      id
      username
      password
      fullname
    }
  }
}
*/

const node /*: ConcreteRequest*/ = (function() {
  var v0 = [
      {
        kind: "LocalArgument",
        name: "input",
        type: "LoginUserInput!",
        defaultValue: null
      }
    ],
    v1 = [
      {
        kind: "LinkedField",
        alias: null,
        name: "loginUser",
        storageKey: null,
        args: [
          {
            kind: "Variable",
            name: "input",
            variableName: "input"
          }
        ],
        concreteType: "LoginUserPayload",
        plural: false,
        selections: [
          {
            kind: "LinkedField",
            alias: null,
            name: "user",
            storageKey: null,
            args: null,
            concreteType: "User",
            plural: false,
            selections: [
              {
                kind: "ScalarField",
                alias: null,
                name: "id",
                args: null,
                storageKey: null
              },
              {
                kind: "ScalarField",
                alias: null,
                name: "username",
                args: null,
                storageKey: null
              },
              {
                kind: "ScalarField",
                alias: null,
                name: "password",
                args: null,
                storageKey: null
              },
              {
                kind: "ScalarField",
                alias: null,
                name: "fullname",
                args: null,
                storageKey: null
              }
            ]
          }
        ]
      }
    ];
  return {
    kind: "Request",
    fragment: {
      kind: "Fragment",
      name: "LoginUserMutation",
      type: "Mutation",
      metadata: null,
      argumentDefinitions: (v0 /*: any*/),
      selections: (v1 /*: any*/)
    },
    operation: {
      kind: "Operation",
      name: "LoginUserMutation",
      argumentDefinitions: (v0 /*: any*/),
      selections: (v1 /*: any*/)
    },
    params: {
      operationKind: "mutation",
      name: "LoginUserMutation",
      id: null,
      text:
        "mutation LoginUserMutation(\n  $input: LoginUserInput!\n) {\n  loginUser(input: $input) {\n    user {\n      id\n      username\n      password\n      fullname\n    }\n  }\n}\n",
      metadata: {}
    }
  };
})();
// prettier-ignore
(node/*: any*/).hash = '834e79342dfa6f54f93ee43970097b74';

module.exports = node;
