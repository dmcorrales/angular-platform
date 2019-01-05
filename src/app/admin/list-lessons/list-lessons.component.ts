import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report.service'

@Component({
  selector: 'app-list-lessons',
  templateUrl: './list-lessons.component.html',
  styleUrls: ['./list-lessons.component.css']
})
export class ListLessonsComponent implements OnInit {
  public p
  public reportList
  constructor(private reportService: ReportService) { }

  ngOnInit() {

    this.reportService.getListReports().subscribe(data =>{
      this.reportList = data
    })

  }

}
