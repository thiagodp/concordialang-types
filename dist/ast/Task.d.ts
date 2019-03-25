import { Node } from './Node';
export interface TaskContent extends Node {
    action: 'script' | 'command';
    name?: string;
    content?: string;
}
export interface Task extends Node {
    when: 'BAT' | 'BET' | 'AAT' | 'AET';
    content: Array<TaskContent>;
}
