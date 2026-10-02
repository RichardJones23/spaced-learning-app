import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Topic } from './classes/Topic';
import { ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
import { dexieService } from './services/dexieService';
import { db, TopicInterface } from './database/db';
import { liveQuery } from 'dexie';
import { toSignal } from '@angular/core/rxjs-interop';
import { from } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('spaced-learning');

  async ngOnInit(){
    await db.open();
    console.log("DB Open Status", db.isOpen());
  }

  constructor(private dexieService: dexieService) {}
  form = new FormGroup({
    topic: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required)
  })

  Topic: any = {};
  TopicDb: Topic[] = [];

  addTopic(){
    console.log(this.form.value);
    const date = ((this.form.value).date? new Date((this.form.value).date): new Date()).toISOString();
    const topic_name = (this.form.value).topic? (this.form.value).topic : " " ;
    const topicObj = new Topic(Array.length+1, topic_name, date, date);
    this.TopicDb.push(topicObj);
    this.dexieService.addTopic(topicObj);
    this.form.reset();
  }

  resultTopics = toSignal(
      from( liveQuery(() => db.topics.toArray())),
      { initialValue: [] as TopicInterface[] }
    );

  getTopic(){
    console.log(this.resultTopics());
  }
}
