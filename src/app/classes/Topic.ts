export class Topic{
    private id: number;
    private topic: string;
    private created_date: string;
    private last_visited_date: string;

    constructor(id: number, name: string, created_date: string, last_visit: string){
        this.id = id;
        this.topic =  name;
        this.created_date = created_date;
        this.last_visited_date = last_visit;
    }

    get_topic(): any {
        return {
            topic: this.topic,
            last_visited: this.last_visited_date
        };
    }

}