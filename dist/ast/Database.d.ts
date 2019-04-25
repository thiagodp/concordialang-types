import { HasItems, HasValue, NamedNode } from './Node';
import { ListItem } from './ListItem';
/**
 * Database node.
 *
 * @author Thiago Delgado Pinto
 */
export interface Database extends NamedNode, HasItems<DatabaseProperty> {
}
/**
 * Database item node.
 *
 * @author Thiago Delgado Pinto
 */
export interface DatabaseProperty extends ListItem, HasValue {
    property: string;
}
/**
 * Database properties.
 *
 * Files could also be represented as a database, using "type", "path", and maybe "options".
 * Example: { type: 'json', path: 'C://path/to/file.json' }
 *
 * @author Thiago Delgado Pinto
 */
export declare enum DatabaseProperties {
    TYPE = "type",
    PATH = "path",
    HOST = "host",
    PORT = "port",
    USERNAME = "username",
    PASSWORD = "password",
    CHARSET = "charset",
    OPTIONS = "options"
}
