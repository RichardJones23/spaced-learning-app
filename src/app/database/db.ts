import Dexie, { type EntityTable } from 'dexie';

export interface TopicInterface{
    id: number;
    topic: string;
    created_date: string;
    last_visited_date: string;
}

const db = new Dexie('SpacedLearningDB') as Dexie & {
  topics: EntityTable<TopicInterface, 'id'>;
};

db.version(1).stores({ topics: '++id, topic, created_date, last_visited_date' });

export {db};