import * as async from "async";
import * as uuid from "uuid/v1";
import * as crypto from "crypto";
import { default as PatientResource, PatientResourceModel } from "../models/PatientResource";
import { Request, Response, NextFunction } from "express";
import { WriteError } from "mongodb";

/**
 * GET /read/patient/:id
 * @param req 
 * @param res 
 */
export let Patient = (req: Request, res: Response) => {
    console.log("Patient request");
    var bundle: fhir.Bundle = {
        "resourceType": "Bundle",
        "id": uuid(),
        "meta": {
            "lastUpdated": "2018-02-09T21:56:30Z"
        },
        "type": "searchset",
        "total": 3
    };
    res.json(bundle);
};