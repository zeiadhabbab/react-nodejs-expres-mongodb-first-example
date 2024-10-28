import mongoose, {Schema, Document}  from "mongoose";

interface IStudent extends Document{
    fullName: string;
    email: string;
    age: string;
    class: string;
}

const studentSchema: Schema = new Schema({
    fullName: {type: String, require: true},
    email: {type: String},
    age: {type: String},
    class: {type: String}
});

export const studentModal = mongoose.model<IStudent>('students', studentSchema);