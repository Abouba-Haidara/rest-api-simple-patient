module.exports =  mongoose => {
    const Schema = mongoose.Schema;
    PatientSchema = new Schema({
        uniqcode: {type: String, required: true, unique: true},
        firstname: {type: String, required: true},
        lastname: {type: String, required: true},
        telephone: {type: String, required: true},
        address: {type: String}
    }, 
    { timestamps: true });

    PatientSchema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Patient = mongoose.model("Patients", PatientSchema);
    return Patient; 
}