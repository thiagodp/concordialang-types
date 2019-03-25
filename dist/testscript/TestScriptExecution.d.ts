import { Location } from "../ast/Location";
/**
 * Test script execution options.
 *
 * @author Thiago Delgado Pinto
 */
export declare class TestScriptExecutionOptions {
    sourceCodeDir: string;
    executionResultDir: string;
    filter: TestScriptExecutionFilter;
    /**
     * Constructor
     *
     * @param sourceCodeDir Directory for script files
     * @param executionResultDir Directory for execution result files
     * @param filter Filter
     */
    constructor(sourceCodeDir?: string, executionResultDir?: string, // where to place the file with the execution results
    filter?: TestScriptExecutionFilter);
}
/**
 * Test script execution filter.
 *
 * @author Thiago Delgado Pinto
 */
export declare class TestScriptExecutionFilter {
    minFeatureImportance: number;
    maxFeatureImportance: number;
    minScenarioImportance: number;
    maxScenarioImportance: number;
    featureName: string;
    scenarioName: string;
}
/**
 * Test script execution result.
 *
 * @author Thiago Delgado Pinto
 */
export declare class TestScriptExecutionResult {
    schemaVersion: string;
    sourceFile: string;
    plugin: {
        name: string;
        description: string;
        version: string;
        targets: string[];
    };
    started: string;
    finished: string;
    durationMs: number;
    total: TotalExecutionResult;
    results: TestSuiteResult[];
}
/**
 * Total execution result
 *
 * @author Thiago Delgado Pinto
 */
export declare class TotalExecutionResult {
    tests: number;
    passed: number;
    skipped: number;
    failed: number;
    adjusted?: number;
    error: number;
    unknown: number;
}
/**
 * Test suite result.
 *
 * @author Thiago Delgado Pinto
 */
export declare class TestSuiteResult {
    suite: string;
    methods: TestMethodResult[];
}
/**
 * Test script method result.
 *
 * @author Thiago Delgado Pinto
 */
export declare class TestMethodResult {
    name: string;
    status: 'passed' | 'adjusted' | 'failed' | 'skipped' | 'error' | 'unknown';
    durationMs: number;
    isForSetup?: boolean;
    exception?: TestMethodException;
}
/**
 * Test method exception.
 *
 * @author Thiago Delgado Pinto
 */
export declare class TestMethodException {
    type: string;
    message: string;
    stackTrace: string;
    scriptLocation: Location;
    specLocation?: Location;
}
