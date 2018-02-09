import * as bcrypt from "bcrypt-nodejs";
import * as crypto from "crypto";
import * as mongoose from "mongoose";


export type PatientResourceModel = mongoose.Document & {
    _has: string,
    _language: string,
    active: boolean,
    address: string,
    address_city: string,
    address_country: string,
    address_postalcode: string,
    address_state: string,
    address_use: string,
    animal_breed: string,
    animal_species: string,
    birthdate: string,
    careprovider: string,
    deathdate: string,
    deceased: string,
    email: string,
    family: string,
    gender: string,
    given: string,
    identifier: string,
    language: string,
    link: string,
    name: string,
    organization: string,
    phone: string,
    phonetic: string,
    telecom: string
};

const patientResourceSchema = new mongoose.Schema({
    _has: String,
    _language: String,
    active: Boolean,
    address: String,
    address_city: String,
    address_country: String,
    address_postalcode: String,
    address_state: String,
    address_use: String,
    animal_breed: String,
    animal_species: String,
    birthdate: String,
    careprovider: String,
    deathdate: String,
    deceased: String,
    email: String,
    family: String,
    gender: String,
    given: String,
    identifier: String,
    language: String,
    link: String,
    name: String,
    organization: String,
    phone: String,
    phonetic: String,
    telecom: String
}, {timestamps: true});

const PatientResource = mongoose.model("PatientResource",
                        patientResourceSchema);

export default PatientResource;
