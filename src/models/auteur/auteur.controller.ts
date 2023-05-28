import { Body, Controller, Post, Get,Put, Param, Delete, ParseIntPipe } from '@nestjs/common';

import { Auteur } from './auteur.schema';
import { AuteurService } from './auteur.service';

@Controller('auteurs')
export class AuteurController {
  constructor(private readonly auteurService: AuteurService) {

  }

  @Get("getAuteurs")
  async getAuteurs(){
    return await this.auteurService.getAuteurs();
  }

  @Post("addAuteur")
  async create(@Body() auteur: Auteur): Promise<Auteur> {
    return await this.auteurService.create(auteur);
  }

  @Put("updateAuteur/:id")
  async update(@Body() auteur: Auteur,@Param('id') id: string ): Promise<Auteur> {
    return this.auteurService.update(id,auteur);
  }

  @Delete("deleteAuteur/:id")
  async Delete(@Param('id') id: string ): Promise<Auteur> {
    return this.auteurService.delete(id);
  }
 
  @Get('factureAuteur/:id')
  async factureA(@Param('id' )id: string):Promise<Number>{
    return this.auteurService.factureA(id); 
  }
 
}
