import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import { db, TopicInterface } from './database/db';
import { liveQuery } from 'dexie';
import { toSignal } from '@angular/core/rxjs-interop';
import { from } from 'rxjs';
import { DatePipe } from '@angular/common';
import { FormTopic } from './form-topic/form-topic';
import { dexieService } from './services/dexieService';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, DatePipe, FormTopic],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('spaced-learning');
  constructor(private dexieService: dexieService) {}

  async ngOnInit(){
    await db.open();
    console.log("DB Open Status", db.isOpen());
  }

  resultTopics = toSignal(
      from( liveQuery(() => db.topics.toArray())),
      { initialValue: [] as TopicInterface[] }
    );

  getTopic(){
    console.log(this.resultTopics());
  }

  selectedId = signal<number | null>(null);
  toggleButton(id: number){
    this.selectedId.update(current => current === id ? null : id);
  }

  visited(item: TopicInterface){
    if(item.id!=null)
    this.dexieService.updateTopic(item.id);
    this.toggleButton(item.id);
  }
}
