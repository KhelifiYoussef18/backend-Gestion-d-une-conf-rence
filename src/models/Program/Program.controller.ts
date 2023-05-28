import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { Program } from './Program.schema';
import { ProgramService } from './program.service';



@Controller('programs')
export class ProgramController {
  programService: any;
  constructor(private ProgramService: ProgramService) {}

  @Get('getProgram')
  async findAll(): Promise<Program[]> {
    return this.ProgramService.findAll();
  }

  @Post()
  async create(@Body() program: Program): Promise<Program> {
    return this.ProgramService.create(program);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() program:Program): Promise<Program> {
    return this.ProgramService.update(id, program);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Program> {
    return this.ProgramService.delete(id);
  }
}
