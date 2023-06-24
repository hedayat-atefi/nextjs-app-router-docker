import mongoose, { Document, Schema } from 'mongoose'

// تعریف مدل داده برای داکیومنت رسپی
export interface IRecipe extends Document {
  name: string;
  description: string;
  ingredients?: Ingredients[];
  photo: File | null;
  steps: string;
}

// تعریف نوع داده برای آرایه مواد اولیه
export interface Ingredients {
  id: number;
  name: string;
}

// تعریف نوع داده برای ایجاد رسپی جدید
export type IRecipCreate = Pick<IRecipe, "name" | "description" | "ingredients" | "photo" | "steps">

// تعریف طرح مدل رسپی
const RecipeSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  ingredients: [
    new Schema({
      id: Number,
      name: String
    },
    { _id: false }
    )
  ],
  photo: {
    type: String
  },
  steps: {
    type: String
  }
})

// تعریف مدل رسپی با استفاده از طرح مدل
export const Recipe = mongoose.models.Recipe || mongoose.model<IRecipe>('Recipe', RecipeSchema)
