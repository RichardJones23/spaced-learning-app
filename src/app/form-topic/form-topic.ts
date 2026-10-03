import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Topic } from '../classes/Topic';
import { dexieService } from '../services/dexieService';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-form-topic',
  styleUrl: './form-topic.css',
  templateUrl: './form-topic.html',
})
export class FormTopic {

  constructor(private dexieService: dexieService) {}

  form = new FormGroup({
    topic: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required)
  })

  Topic: any = {};

  addTopic(){
    console.log(this.form.value);
    const date = ((this.form.value).date? new Date((this.form.value).date): new Date()).toISOString();
    const topic_name = (this.form.value).topic? (this.form.value).topic : " " ;
    const topicObj = new Topic(Array.length+1, topic_name, date, date);
    this.dexieService.addTopic(topicObj);
    this.form.reset();
  }
}
