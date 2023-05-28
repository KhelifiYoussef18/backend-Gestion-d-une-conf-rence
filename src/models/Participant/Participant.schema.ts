import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
interface Accompaniment {
  age: number;
  accNumber: number;
}
@Schema()
export class Participant {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true }) 
  job : string;

  @Prop({ required: true, unique : true })
  phoneNumber : Number;

  @Prop({ required: true, unique : true })
  email : String;

  @Prop({ required: true })
  numberOfRooms : Number;

  @Prop({ required: true })
  accNumber : number;

  @Prop({ required: true })
  Nights: number;

  @Prop([{ 0: Number, 1: Number }]) // Array of accompaniments with age and accNumber properties
  acc: Accompaniment[];
}

export type ParticipantDocument = Participant & Document;

export const ParticipantSchema = SchemaFactory.createForClass(Participant);
