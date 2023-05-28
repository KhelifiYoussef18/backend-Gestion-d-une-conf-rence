import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ConferenceDocument = Program & Document;

@Schema()
export class Program {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  speakers: string[];

  @Prop({ required: true })
  topics: string[];
}

export const ConferenceSchema = SchemaFactory.createForClass(Program);
