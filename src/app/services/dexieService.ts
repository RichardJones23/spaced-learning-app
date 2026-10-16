import { Injectable } from "@angular/core";
import { db } from "../database/db";

@Injectable({providedIn: 'root'})
export class dexieService{
    async addTopic(topicObj: any ){
        const result = await db.topics.add(topicObj);
        console.log("EXECUTED SERVICE METHOD SUCCESS", result);
        console.log(await db.topics.toArray());
    }

    async updateTopic(id: number){
        await db.topics.update(id, { last_visited_date: new Date().toISOString()});
        console.log(await db.topics.toArray());
    }
}