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
    const formdate = ((this.form.value).date? new Date((this.form.value).date): new Date());
    const topic_name = (this.form.value).topic? (this.form.value).topic : " " ;
    const now = new Date();
    formdate.setHours(now.getHours(), now.getMinutes(), now.getSeconds());
    const date = formdate.toISOString();
    const topicObj = new Topic(Array.length+1, topic_name, date);
    this.dexieService.addTopic(topicObj);
    this.form.reset();
  }
}
