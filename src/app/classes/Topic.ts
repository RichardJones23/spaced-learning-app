export class Topic{
    private topic: string;
    private created_date: string;
    private last_visited_date: string;
    private completed_upto: number;
    private completed: false;
    

    constructor(id: number, name: string, created_date: string){
        this.topic =  name;
        this.created_date = created_date;
        this.last_visited_date = created_date;    
        this.completed_upto = 0;
        this.completed = false;
    }

    get_topic(): any {
        return {
            topic: this.topic,
            last_visited: this.last_visited_date
        };
    }

    

}