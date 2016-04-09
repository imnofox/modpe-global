/*
 *	From https://github.com/sliceofcode/flytest/commit/bfa21eaf88cdb223030661f6e11640bb3fc3af9f
 */

var global = Function('return this')() || (42, eval)('this'); // jshint ignore:line

module.exports = global;
