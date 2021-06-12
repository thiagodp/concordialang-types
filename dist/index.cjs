/**
 * Test script execution result.
 *
 * @author Thiago Delgado Pinto
 */
class TestScriptExecutionResult {
  constructor() {
    this.schemaVersion = void 0;
    this.sourceFile = void 0;
    this.plugin = void 0;
    this.started = void 0;
    this.finished = void 0;
    this.durationMs = void 0;
    this.total = new TotalExecutionResult();
    this.results = [];
  }

}
/**
 * Total execution result
 *
 * @author Thiago Delgado Pinto
 */

class TotalExecutionResult {
  constructor() {
    this.tests = 0;
    this.passed = 0;
    this.skipped = 0;
    this.failed = 0;
    this.adjusted = 0;
    this.error = 0;
    this.unknown = 0;
  }

}
/**
 * Test suite result.
 *
 * @author Thiago Delgado Pinto
 */

class TestSuiteResult {
  constructor() {
    this.suite = void 0;
    this.methods = void 0;
  }

}
/**
 * Test script method result.
 *
 * @author Thiago Delgado Pinto
 */

class TestMethodResult {
  constructor() {
    this.name = void 0;
    this.status = void 0;
    this.durationMs = void 0;
    this.isForSetup = void 0;
    this.exception = void 0;
  }

}
/**
 * Test method exception.
 *
 * @author Thiago Delgado Pinto
 */

class TestMethodException {
  constructor() {
    this.type = void 0;
    this.message = void 0;
    this.stackTrace = void 0;
    this.scriptLocation = void 0;
    this.specLocation = void 0;
  }

}

exports.TestMethodException = TestMethodException;
exports.TestMethodResult = TestMethodResult;
exports.TestScriptExecutionResult = TestScriptExecutionResult;
exports.TestSuiteResult = TestSuiteResult;
exports.TotalExecutionResult = TotalExecutionResult;
