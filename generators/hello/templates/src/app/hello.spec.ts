/// <reference path="../../typings/main.d.ts" />

<% if (modules !== 'inject') { -%>
import * as angular from 'angular';
import 'angular-mocks';
import {hello} from './hello';
<% } -%>

describe('hello component', function() {
<% if (modules !== 'inject') { -%>
  beforeEach(function() {
    angular
      .module('fountainHello', ['<%- templateUrl %>'])
      .component('fountainHello', hello);
    <%- modules !== 'systemjs' ? 'angular.mock.' : 'angular.' %>module('fountainHello');
  });
<% } else { -%>
  beforeEach(angular.mock.module('app'));
  beforeEach(angular.mock.module('<%- templateUrl %>'));
<% } -%>
  it('should render hello world', <%- modules !== 'systemjs' ? 'angular.mock.' : '' %>inject(function($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) {
    const element = $compile('<fountain-hello>Loading...</fountain-hello>')($rootScope);
    $rootScope.$digest();
    const h1 = element.find('h1');
    expect(h1.html()).toEqual('Hello World!');
  }));
});
