import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuteurController } from './models/auteur/auteur.controller';
import { AuteurDocument, AuteurSchema } from './models/auteur/auteur.schema';
import { AuteurService } from './models/auteur/auteur.service';
import { Auteur } from './models/auteur/auteur.schema';
import { ParticipantController } from './models/Participant/Participant.controller';
import { ParticipantService } from './models/Participant/Participant.service';
import { Participant, ParticipantSchema } from './models/Participant/Participant.schema';
import { ProgramService } from './models/Program/program.service';
import { ProgramController } from './models/Program/Program.controller';
import { ConferenceSchema, Program } from './models/Program/Program.schema';
import { InvitesService } from './models/Invites/Invites.services';
import { InvitesController } from './models/Invites/Invites.controllers';
import { InvitesSchema } from './models/Invites/Invites.schema';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/conference'), MongooseModule.forFeature([{ name: 'Auteur', schema: AuteurSchema }]),MongooseModule.forFeature([{ name: 'Participant', schema: ParticipantSchema }]),MongooseModule.forFeature([{ name: 'Invites', schema: InvitesSchema }]),MongooseModule.forFeature([{ name: 'Program', schema: ConferenceSchema }])],
  controllers: [AuteurController,ParticipantController,ProgramController, InvitesController],
  providers: [AuteurService,ParticipantService,ProgramService, InvitesService],
  exports: [AuteurService,ParticipantService,ProgramService, InvitesService]
})
export class AppModule {}
