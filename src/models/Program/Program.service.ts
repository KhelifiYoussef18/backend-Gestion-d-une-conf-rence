import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Program } from './Program.schema';

@Injectable()
export class ProgramService {
 
  constructor(@InjectModel(Program.name) private conferenceModel: Model<Program>) {}

  async findAll(): Promise<Program[]> {
    return this.conferenceModel.find().exec();
  }
  async create(auteur: Program): Promise<Program> {
    const createdParticipant = new this.conferenceModel(auteur);
    return await createdParticipant.save();
  }
  async update(id: string, updateData: Partial<Program>): Promise<Program> {
    const updatedAuteur = await this.conferenceModel.findByIdAndUpdate(
      id,
      updateData,
      { new: true },
    );
    return updatedAuteur;  // update auteur
  }

  async delete(id: string): Promise<Program> {
    const deletedAuteur = await this.conferenceModel.findByIdAndDelete(id).exec();
    if (!deletedAuteur) {
      throw new NotFoundException(`Auteur with ID ${id} not found`);
    }
    return deletedAuteur.toObject({ getters: true });
  }
}
