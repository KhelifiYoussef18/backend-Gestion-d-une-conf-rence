import { Body, Controller, Post, Get,Put, Param, Delete } from '@nestjs/common';

import { Invites } from './Invites.schema';
import { InvitesService } from './Invites.services';

@Controller("invites")
export class InvitesController {
  constructor(private readonly invitesService: InvitesService) {

  }
  @Get('factureInvite/:id')
  async getF(@Param('id') id: string){
    return await this.invitesService.factureA(id);
  }
  @Get("getInvites")
  async getInvites() {
    return await this.invitesService.getinvites ();
  }

  @Post("addInvites ")
  async create(@Body() Invites : Invites ): Promise<Invites > {
    return await this.invitesService.create(Invites );
  }

  @Put("updateInvites /:id")
  async update(@Body() Invites : Invites ,@Param('id') id: string ): Promise<Invites > {
    return this.invitesService.update(id,Invites );
  }

  @Delete("deleteInvites /:id")
  async Delete(@Param('id') id: string ): Promise<Invites > {
    return this.invitesService.delete(id);
  }
 
 
}
