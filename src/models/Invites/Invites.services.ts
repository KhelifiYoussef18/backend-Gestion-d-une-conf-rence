import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


import { Invites, InvitesDocument } from './Invites.schema';
import { from } from 'rxjs';

@Injectable()
export class InvitesService {
  constructor(
    @InjectModel(Invites.name) private readonly invitesModel: Model<InvitesDocument>,
  ) {}

  async create(auteur: Invites): Promise<Invites> {
    const createdAuteur = new this.invitesModel(auteur);
    return createdAuteur.save();
  }

  async getinvites(): Promise<Invites[]> {
    return await this.invitesModel.find().exec();
  }

  async update(id: string, updateData: Partial<Invites>): Promise<Invites> {
    const updatedAuteur = await this.invitesModel.findByIdAndUpdate(
      id,
      updateData,
      { new: true },
    );
    return updatedAuteur;  // update auteur
  }

  async delete(id: string): Promise<Invites> {
    const deletedAuteur = await this.invitesModel.findByIdAndDelete(id).exec();
    if (!deletedAuteur) {
      throw new NotFoundException(`invite with ID ${id} not found`);
    }
    return deletedAuteur.toObject({ getters: true });
  }




async factureA(id: string): Promise<number> {
  // prix d'un auteur : 50 dt
  const auteur = await this.invitesModel.findById(id);
 // console.log(  auteur)
  let prixAcc: number;
  const accs = auteur.acc; // Array of accompaniments
  console.log(auteur.Nights)
  let totalAccPrice = 0; // Total price of all accompaniments
 // console.log(accs)
  
  // Iterate through each accompaniment and calculate its price based on age
  for (const acc of accs) {
   
    if(acc['1'] === auteur.numberOfRooms )
    {
      if (acc['0'] < 4) {
        prixAcc = 20;
        } else {
        prixAcc = 40;
        }
    }
    else{
      if (acc['0'] < 4) {
        prixAcc = 30;
        } else {
        prixAcc = 50;
        }
    }
 
  totalAccPrice += prixAcc;
  }
  
  // calcul du prix total en fonction du nombre d'accompagnants
  
  return totalAccPrice + 50 * auteur.Nights;
  }


}

