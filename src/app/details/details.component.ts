import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TodosService } from '../todos.service';
import { TodoItem } from '../types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  item$: Observable<TodoItem>

  constructor(
    private route: ActivatedRoute,
    private todoService: TodosService
  ) {
    route.paramMap.subscribe(
      (paramMap: ParamMap) => {
        this.item$ = this.todoService.getItem(+paramMap.get('id'));
      }
    )
  }

  ngOnInit() {
  }

}
