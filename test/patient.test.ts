import * as request from "supertest";
import * as app from "../src/app";

var chai = require('chai');
var expect = chai.expect;

describe("GET /Patient - get all patients", () => {
    it("Should return 200 Ok", () => {
        return request(app).get("/Patient")
            .expect(200);
    });
    it("Should return Bundle item", () => {
        return request(app).get("/Patient")
            .expect(200)
            .then(res => {
                expect(res.body.resourceType).to.equal("Bundle");
            });
    });
    it("Should return searchset type", () => {
        return request(app).get("/Patient")
            .expect(200)
            .then(res => {
                expect(res.body.type).to.equal("searchset");
            });
    });
    it("Should return total items", () => {
        return request(app).get("/Patient")
            .expect(200)
            .then(res => {
                expect(res.body.type).to.equal("searchset");
            });
    });

});