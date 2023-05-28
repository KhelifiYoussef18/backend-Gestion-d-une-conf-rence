import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuteurController } from './auteur.controller';
import { Auteur, AuteurDocument } from './auteur.schema';

@Injectable()
export class AuteurService {
  constructor(
    @InjectModel(Auteur.name) private readonly auteurModel: Model<AuteurDocument>,
  ) {}

  async create(auteur: Auteur): Promise<Auteur> {
    const createdAuteur = new this.auteurModel(auteur);
    return createdAuteur.save();
  }

  async getAuteurs(): Promise<Auteur[]> {
    return await this.auteurModel.find().exec();
  }

  async update(id: string, updateData: Partial<Auteur>): Promise<Auteur> {
    const updatedAuteur = await this.auteurModel.findByIdAndUpdate(
      id,
      updateData,
      { new: true },
    );
    return updatedAuteur;  // update auteur
  }

  async delete(id: string): Promise<Auteur> {
    const deletedAuteur = await this.auteurModel.findByIdAndDelete(id).exec();
    if (!deletedAuteur) {
      throw new NotFoundException(`Auteur with ID ${id} not found`);
    }
    return deletedAuteur.toObject({ getters: true });
  }

  async factureA(id: string): Promise<number> {
    // prix d'un auteur : 50 dt
    const auteur = await this.auteurModel.findById(id);
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
