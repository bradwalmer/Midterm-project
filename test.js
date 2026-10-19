const assert = require('assert');
const { questions, provisions } = require('./provisions');
const { match } = require('./matcher');
const ids = (a) => match(a, provisions).map((p) => p.id);
const tests = [
  ['T1 freelance + spare room flags home office, QBI, SE tax', () => { const r = ids({ selfEmployed: true, homeSpace: true }); ['home-office', 'qbi', 'se-tax-half'].forEach((i) => assert(r.includes(i))); }],
  ['T2 no answers returns nothing', () => assert.deepStrictEqual(ids({}), [])],
  ['T3 teacher only flags educator expense only', () => assert.deepStrictEqual(ids({ teacher: true }), ['educator'])],
  ['T4 EDGE: spare room without self-employment must NOT flag home office', () => assert(!ids({ homeSpace: true }).includes('home-office'))],
  ['T5 FAILURE: bad input (null, unknown keys, truthy strings) does not crash or over-match', () => { assert.deepStrictEqual(ids(null), []); assert.deepStrictEqual(ids({ bogus: true, selfEmployed: 'yes' }), []); }],
  ['T6 data integrity: every provision has https IRS + US Code links and valid question keys', () => provisions.forEach((p) => { assert(p.irs.startsWith('https://www.irs.gov/')); assert(p.usc.startsWith('https://uscode.house.gov/')); p.requires.forEach((k) => assert(questions.some((q) => q.key === k), p.id + ' bad key ' + k)); })]
];
let fail = 0;
tests.forEach(([n, f]) => { try { f(); console.log('PASS', n); } catch (e) { fail++; console.log('FAIL', n, '-', e.message); } });
process.exit(fail ? 1 : 0);
