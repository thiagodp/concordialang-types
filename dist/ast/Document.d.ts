import { TestCase } from './TestCase';
import { Database } from './Database';
import { Table } from './Table';
import { ConstantBlock } from './ConstantBlock';
import { FileInfo } from './FileInfo';
import { Feature } from './Feature';
import { UIElement } from "./UIElement";
import { Import } from "./Import";
import { Language } from "./Language";
import { RegexBlock } from "./RegexBlock";
import { BeforeAll, AfterAll, BeforeFeature, AfterFeature, BeforeEachScenario, AfterEachScenario } from './TestEvent';
/**
 * Document
 *
 * @author Thiago Delgado Pinto
 */
export interface Document {
    fileInfo?: FileInfo;
    fileErrors?: Error[];
    fileWarnings?: Error[];
    language?: Language;
    imports?: Import[];
    feature?: Feature;
    testCases?: TestCase[];
    regexBlock?: RegexBlock;
    constantBlock?: ConstantBlock;
    uiElements?: UIElement[];
    tables?: Table[];
    databases?: Database[];
    beforeAll?: BeforeAll;
    afterAll?: AfterAll;
    beforeFeature?: BeforeFeature;
    afterFeature?: AfterFeature;
    beforeEachScenario?: BeforeEachScenario;
    afterEachScenario?: AfterEachScenario;
}
