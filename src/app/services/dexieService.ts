import { Injectable } from "@angular/core";
import { db } from "../database/db";

@Injectable({providedIn: 'root'})
export class dexieService{
    async addTopic(topicObj: any ){
        const topic = topicObj.topic;
        const created = topicObj.created_date;
        const last_visited = topicObj.last_visited_date;
        const result = await db.topics.add({ topic:topic, created_date: created, 
            last_visited_date: last_visited});
        console.log("EXECUTED SERVICE METHOD SUCCESS", result);
        console.log(await db.topics.toArray());
    }
}