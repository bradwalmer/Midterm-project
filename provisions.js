(function (root) {
  // Student TODO: verify every summary, URL and lastVerified date against IRS.gov / uscode.house.gov.
  const usc = (s) => `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title26-section${s}&num=0&edition=prelim`;
  const questions = [
    { key: 'selfEmployed', label: 'I earn freelance or self-employment income' },
    { key: 'homeSpace', label: 'I have a spare room or space used regularly and only for work' },
    { key: 'selfPaysHealth', label: 'I pay my own health insurance premiums' },
    { key: 'savesRetirement', label: 'I contributed to an IRA or workplace retirement plan' },
    { key: 'studentLoan', label: 'I paid interest on a student loan' },
    { key: 'paysTuition', label: 'I paid college or job-training tuition' },
    { key: 'dependentCare', label: 'I paid for child or dependent care so I could work' },
    { key: 'teacher', label: 'I am a K-12 teacher or educator who buys classroom supplies' }
  ];
  const provisions = [
    { id: 'home-office', name: 'Home office deduction', requires: ['selfEmployed', 'homeSpace'], category: 'Business',
      why: 'Self-employed people who use part of their home regularly and exclusively for business may be able to deduct related costs.',
      irs: 'https://www.irs.gov/businesses/small-businesses-self-employed/home-office-deduction', usc: usc('280A'), lastVerified: null },
    { id: 'qbi', name: 'Qualified business income deduction', requires: ['selfEmployed'], category: 'Business',
      why: 'Many sole proprietors can deduct a share of qualified business income, and people often miss it.',
      irs: 'https://www.irs.gov/newsroom/qualified-business-income-deduction', usc: usc('199A'), lastVerified: null },
    { id: 'se-tax-half', name: 'Deduction for half of self-employment tax', requires: ['selfEmployed'], category: 'Business',
      why: 'You pay both halves of Social Security and Medicare tax on self-employment income, and part of it is deductible.',
      irs: 'https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes', usc: usc('164'), lastVerified: null },
    { id: 'se-health', name: 'Self-employed health insurance deduction', requires: ['selfEmployed', 'selfPaysHealth'], category: 'Business',
      why: 'Self-employed people who pay their own premiums may be able to deduct them.',
      irs: 'https://www.irs.gov/publications/p535', usc: usc('162'), lastVerified: null },
    { id: 'savers', name: "Saver's Credit", requires: ['savesRetirement'], category: 'Retirement',
      why: 'Lower- and moderate-income savers may get a credit for retirement contributions, on top of any other tax benefit.',
      irs: 'https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-savings-contributions-savers-credit', usc: usc('25B'), lastVerified: null },
    { id: 'student-loan', name: 'Student loan interest deduction', requires: ['studentLoan'], category: 'Education',
      why: 'You may be able to deduct interest paid on qualified student loans, even without itemizing.',
      irs: 'https://www.irs.gov/taxtopics/tc456', usc: usc('221'), lastVerified: null },
    { id: 'lifetime-learning', name: 'Lifetime Learning Credit', requires: ['paysTuition'], category: 'Education',
      why: 'Tuition for college or job-skills courses may qualify for a credit, with no limit on the number of years.',
      irs: 'https://www.irs.gov/credits-deductions/individuals/lifetime-learning-credit', usc: usc('25A'), lastVerified: null },
    { id: 'dependent-care', name: 'Child and dependent care credit', requires: ['dependentCare'], category: 'Family',
      why: 'Care costs that let you (and a spouse) work or look for work may qualify for a credit.',
      irs: 'https://www.irs.gov/taxtopics/tc602', usc: usc('21'), lastVerified: null },
    { id: 'educator', name: 'Educator expense deduction', requires: ['teacher'], category: 'Education',
      why: 'Eligible educators may deduct some unreimbursed classroom expenses.',
      irs: 'https://www.irs.gov/taxtopics/tc458', usc: usc('62'), lastVerified: null }
  ];
  const data = { questions, provisions };
  if (typeof module !== 'undefined') module.exports = data; else root.TAXDATA = data;
})(this);
