import rule, {
  messages,
  ruleName
} from '../index';

testRule(rule, {
  ruleName,
  config: [true],

  accept: [{
      code: '.foo { text-align: inherit; }',
    },
    {
      code: '.foo { text-align: start; }',
    },
    {
      code: '.foo { text-align: end; }',
    },
    {
      code: '.foo { text-align: center; }',
    },
  ],

  reject: [{
    code: '.foo { text-align: left; }',
    message: messages.expected('.foo'),
    line: 1,
    column: 4,
  }, {
    code: '.foo { text-align: right; }',
    message: messages.expected('.foo'),
    line: 1,
    column: 4,
  }, {
    code: '.foo { text-align: justify; }',
    message: messages.expected('.foo'),
    line: 1,
    column: 4,
  }, ],
});