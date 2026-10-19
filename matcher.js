(function (root) {
  // Deterministic rule matching: a provision is flagged only if every required answer is exactly true.
  function match(answers, provisions) {
    const a = answers || {};
    return provisions.filter((p) => p.requires.every((k) => a[k] === true));
  }
  if (typeof module !== 'undefined') module.exports = { match }; else root.TAXMATCH = { match };
})(this);
