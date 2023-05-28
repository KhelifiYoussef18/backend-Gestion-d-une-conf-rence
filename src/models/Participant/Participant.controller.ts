import { Body, Controller, Post, Get,Put, Param, Delete } from '@nestjs/common';

import { Participant } from './Participant.schema';
import { ParticipantSchema } from './Participant.schema';
import { ParticipantService } from './Participant.service';

@Controller('Participant')
export class ParticipantController {
  constructor(private readonly  participantService:ParticipantService) {

  }

  @Get('factureParticipant/:id')
  async getF(@Param('id') id: string){
    return await this.participantService.factureA(id);
  }

  @Get("getParticipant")
  async getParticipant(){
    return await this.participantService.Participant();
  }

  @Post("addParticipant ")
  async create(@Body()  Participant :  Participant ): Promise< Participant > {
    return await this.participantService.create( Participant );
  }

  @Put("updateParticipant /:id")
  async update(@Body() auteur:  Participant ,@Param('id') id: string ): Promise< Participant > {
    return this.participantService.update(id,auteur);
  }

  @Delete("deleteParticipant /:id")
  async Delete(@Param('id') id: string ): Promise< Participant > {
    return this.participantService.delete(id);
  }
 
 
}
