import { Controller, Get, Post, Put, Delete, Body } from "@nestjs/common";
import { retry } from "rxjs";


@Controller('report/:type')
export class AppController{
  @Get('id')
  getReportById() {
    return [];

  }
  @Get('hello')
  getAllIncomeReports() {
    return {}

  }
  @Post()
  CreateReport() {
    return'Created' ;
  }

  @Put(':id')
  UpdateReport() {
    return'Updated' ;
  }

  @Delete(':id')
  DeleteReport(){
    return'Delete' ;
  }
}