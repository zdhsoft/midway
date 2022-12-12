import { Utils } from '../../../src';

describe('test/util/camelCase.test.ts', () => {
  it('camelCase', () => {
    expect(Utils.camelCase('foo-BAR')).toEqual('fooBar');
    expect(Utils.camelCase('Foo-BAR')).toEqual('fooBar');
    expect(Utils.camelCase('fooBAR')).toEqual('fooBar');
    expect(Utils.camelCase('fooBaR')).toEqual('fooBaR');
    expect(Utils.camelCase('FOÈ-BAR')).toEqual('foèBar');
    expect(Utils.camelCase('--')).toEqual('');
    expect(Utils.camelCase('')).toEqual('');
    expect(Utils.camelCase('--__--_--_')).toEqual('');
    expect(Utils.camelCase('foo BAR?')).toEqual('fooBar?');
    expect(Utils.camelCase('foo BAR!')).toEqual('fooBar!');
    expect(Utils.camelCase('foo BAR$')).toEqual('fooBar$');
    expect(Utils.camelCase('foo-BAR#')).toEqual('fooBar#');
    expect(Utils.camelCase('XMLHttpRequest')).toEqual('xmlHttpRequest');
    expect(Utils.camelCase('AjaxXMLHttpRequest')).toEqual('ajaxXmlHttpRequest');
    expect(Utils.camelCase('Ajax-XMLHttpRequest')).toEqual('ajaxXmlHttpRequest');
    expect(Utils.camelCase('mGridCOl6@md')).toEqual('mGridCOl6@md');
    expect(Utils.camelCase('A::a')).toEqual('a::a');
    expect(Utils.camelCase('Hello1WORLD')).toEqual('hello1World');
    expect(Utils.camelCase('Hello11WORLD')).toEqual('hello11World');
    expect(Utils.camelCase('РозовыйПушистыйFOOдинорогиf')).toEqual(
      'розовыйПушистыйFoOдинорогиf'
    );
    expect(Utils.camelCase('桑德在这里。')).toEqual('桑德在这里。');
    expect(Utils.camelCase('桑德_在这里。')).toEqual('桑德在这里。');
    expect(Utils.camelCase('foo-bar')).toEqual('fooBar');
    expect(Utils.camelCase('foo-bar-baz')).toEqual('fooBarBaz');
    expect(Utils.camelCase('foo--bar')).toEqual('fooBar');
    expect(Utils.camelCase('--foo-bar')).toEqual('fooBar');
    expect(Utils.camelCase('--foo--bar')).toEqual('fooBar');
    expect(Utils.camelCase('FOO-BAR')).toEqual('fooBar');
    expect(Utils.camelCase('FOÈ-BAR')).toEqual('foèBar');
    expect(Utils.camelCase('-foo-bar-')).toEqual('fooBar');
    expect(Utils.camelCase('--foo--bar--')).toEqual('fooBar');
    expect(Utils.camelCase('foo-1')).toEqual('foo1');
    expect(Utils.camelCase('foo.bar')).toEqual('fooBar');
    expect(Utils.camelCase('foo..bar')).toEqual('fooBar');
    expect(Utils.camelCase('..foo..bar..')).toEqual('fooBar');
    expect(Utils.camelCase('foo_bar')).toEqual('fooBar');
    expect(Utils.camelCase('__foo__bar__')).toEqual('fooBar');
    expect(Utils.camelCase('foo bar')).toEqual('fooBar');
    expect(Utils.camelCase('  foo  bar  ')).toEqual('fooBar');
    expect(Utils.camelCase('-')).toEqual('');
    expect(Utils.camelCase(' - ')).toEqual('');
    expect(Utils.camelCase('fooBarBaz-bazzy')).toEqual('fooBarBazBazzy');
    expect(Utils.camelCase('FBBazzy')).toEqual('fbBazzy');
    expect(Utils.camelCase('F')).toEqual('f');
    expect(Utils.camelCase('FooBar')).toEqual('fooBar');
    expect(Utils.camelCase('Foo')).toEqual('foo');
    expect(Utils.camelCase('FOO')).toEqual('foo');
    expect(Utils.camelCase('--')).toEqual('');
    expect(Utils.camelCase('')).toEqual('');
    expect(Utils.camelCase('_')).toEqual('');
    expect(Utils.camelCase(' ')).toEqual('');
    expect(Utils.camelCase('.')).toEqual('');
    expect(Utils.camelCase('..')).toEqual('');
    expect(Utils.camelCase('--')).toEqual('');
    expect(Utils.camelCase('  ')).toEqual('');
    expect(Utils.camelCase('__')).toEqual('');
    expect(Utils.camelCase('--__--_--_')).toEqual('');
    expect(Utils.camelCase('foo bar?')).toEqual('fooBar?');
    expect(Utils.camelCase('foo bar!')).toEqual('fooBar!');
    expect(Utils.camelCase('foo bar$')).toEqual('fooBar$');
    expect(Utils.camelCase('foo-bar#')).toEqual('fooBar#');
  });

  it('pascalCase case', () => {
    expect(Utils.pascalCase('foo-BAR')).toEqual('FooBar');
    expect(Utils.pascalCase('fooBAR')).toEqual('FooBar');
    expect(Utils.pascalCase('fooBaR')).toEqual('FooBaR');
    expect(Utils.pascalCase('fOÈ-BAR')).toEqual('FOèBar');
    expect(Utils.pascalCase('--foo.BAR')).toEqual('FooBar');
    expect(Utils.pascalCase('--')).toEqual('');
    expect(Utils.pascalCase('')).toEqual('');
    expect(Utils.pascalCase('--__--_--_')).toEqual('');
    expect(Utils.pascalCase('foo BAR?')).toEqual('FooBar?');
    expect(Utils.pascalCase('foo BAR!')).toEqual('FooBar!');
    expect(Utils.pascalCase('Foo BAR$')).toEqual('FooBar$');
    expect(Utils.pascalCase('foo-BAR#')).toEqual('FooBar#');
    expect(Utils.pascalCase('xMLHttpRequest')).toEqual('XMlHttpRequest');
    expect(Utils.pascalCase('ajaxXMLHttpRequest')).toEqual('AjaxXmlHttpRequest');
    expect(Utils.pascalCase('Ajax-XMLHttpRequest')).toEqual('AjaxXmlHttpRequest');
    expect(Utils.pascalCase('mGridCOl6@md')).toEqual('MGridCOl6@md');
    expect(Utils.pascalCase('A::a')).toEqual('A::a');
    expect(Utils.pascalCase('Hello1WORLD')).toEqual('Hello1World');
    expect(Utils.pascalCase('Hello11WORLD')).toEqual('Hello11World');
    expect(Utils.pascalCase('pозовыйПушистыйFOOдинорогиf')).toEqual(
      'PозовыйПушистыйFoOдинорогиf'
    );
    expect(Utils.pascalCase('桑德在这里。')).toEqual('桑德在这里。');
    expect(Utils.pascalCase('桑德_在这里。')).toEqual('桑德在这里。');


    expect(Utils.pascalCase('foo')).toEqual('Foo');
    expect(Utils.pascalCase('foo-bar')).toEqual('FooBar');
    expect(Utils.pascalCase('foo-bar-baz')).toEqual('FooBarBaz');
    expect(Utils.pascalCase('foo--bar')).toEqual('FooBar');
    expect(Utils.pascalCase('--foo-bar')).toEqual('FooBar');
    expect(Utils.pascalCase('--foo--bar')).toEqual('FooBar');
    expect(Utils.pascalCase('FOO-BAR')).toEqual('FooBar');
    expect(Utils.pascalCase('FOÈ-BAR')).toEqual('FoèBar');
    expect(Utils.pascalCase('-foo-bar-')).toEqual('FooBar');
    expect(Utils.pascalCase('--foo--bar--')).toEqual('FooBar');
    expect(Utils.pascalCase('foo-1')).toEqual('Foo1');
    expect(Utils.pascalCase('foo.bar')).toEqual('FooBar');
    expect(Utils.pascalCase('foo..bar')).toEqual('FooBar');
    expect(Utils.pascalCase('..foo..bar..')).toEqual('FooBar');
    expect(Utils.pascalCase('foo_bar')).toEqual('FooBar');
    expect(Utils.pascalCase('__foo__bar__')).toEqual('FooBar');
    expect(Utils.pascalCase('__foo__bar__')).toEqual('FooBar');
    expect(Utils.pascalCase('foo bar')).toEqual('FooBar');
    expect(Utils.pascalCase('  foo  bar  ')).toEqual('FooBar');
    expect(Utils.pascalCase('-')).toEqual('');
    expect(Utils.pascalCase(' - ')).toEqual('');
    expect(Utils.pascalCase('fooBar')).toEqual('FooBar');
    expect(Utils.pascalCase('fooBar-baz')).toEqual('FooBarBaz');
    expect(Utils.pascalCase('foìBar-baz')).toEqual('FoìBarBaz');
  });
});
