/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
var DI = function (dependency) {
  this.dependency = dependency;
};

// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {
  // Your code goes here
  let args = /^[^(]+\(([^)]+)/.exec(func.toString())
  let deps = args ? args[1].split(/\s*,\s*/).map(d => this.dependency[d]) : []
  return function () {
    return func.apply(this, deps)
  }
}