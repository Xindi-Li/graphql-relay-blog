/**
 * @flow
 */

/* eslint-disable */

"use strict";

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Post_post$ref: FragmentReference;
declare export opaque type Post_post$fragmentType: Post_post$ref;
export type Post_post = {|
  +id: string,
  +title: ?string,
  +content: ?string,
  +author: ?{|
    +fullname: ?string
  |},
  +$refType: Post_post$ref,
|};
export type Post_post$data = Post_post;
export type Post_post$key = {
  +$data?: Post_post$data,
  +$fragmentRefs: Post_post$ref,
  ...
};
*/

const node /*: ReaderFragment*/ = {
  kind: "Fragment",
  name: "Post_post",
  type: "Post",
  metadata: null,
  argumentDefinitions: [],
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
      name: "title",
      args: null,
      storageKey: null
    },
    {
      kind: "ScalarField",
      alias: null,
      name: "content",
      args: null,
      storageKey: null
    },
    {
      kind: "LinkedField",
      alias: null,
      name: "author",
      storageKey: null,
      args: null,
      concreteType: "User",
      plural: false,
      selections: [
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
};
// prettier-ignore
(node/*: any*/).hash = 'ea55a64b6f40cc3dfa5c5a7f409bc195';

module.exports = node;
