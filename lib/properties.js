/**!
 * gitlab - lib/properties.js
 *
 * Copyright(c) repo-utils and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <m@fengmk2.com> (http://fengmk2.com)
 */

'use strict';

/**
 * Module dependencies.
 */

var defaultMethods = ['get', 'list', 'create', 'update', 'remove'];

var properties = {
  milestones: [
    'listIssues',
  ],
  members: [],
  hooks: [],
  globalHooks: [],
  users: [],
  mergeRequests: [],
  repositoryFiles: [],
  repositoryBranches: [
    'protect',
    'unprotect',
  ],
  repository: [
    'getBranches',
    'protectBranch',
    'unprotectBranch',
    'getBranch',
    'getTags',
    'getCommits',
    'getTree',
    'getBlob'
  ],
  issues: [
    'listNotes',
    'createNote',
    'getNote',
    'updateNote',
  ],
  projects: [
    'getByPath',
    'listEvents',
    'fork',
    'search',
  ],
  projectMembers: [],
  groups: [
    'transferProject'
  ],
  groupMembers: [],
};

for (var key in properties) {
  var methods = properties[key];
  properties[key] = defaultMethods.concat(methods);
}

module.exports = properties;
