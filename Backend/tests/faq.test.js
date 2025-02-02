//
// import { expect } from 'chai'
const {expect} = require('chai');
const request = require("supertest");
const app = require("../app"); // Your Express app


describe("FAQ API", () => {
    // clear database before tests

    let id;
    // Test POST /api/faqs
    // test for creating a new FAQ
    describe("POST /api/faqs/", () => {
        it("should create a new FAQ", async () => {
            const faq = {
                question: 'New Question',
                answer: 'New Answer'
            };
            const res = await request(app)
            .post('/api/faqs/')
            .send(faq);

            id = res.body._id;

            console.log(id);
            expect(res.status).to.equal(201);
            expect(res.body.question).to.equal(faq.question);
            expect(res.body.answer).to.equal(faq.answer);
        });

        it("should validate required fields", async () => {
            const res = await request(app)
                .post("/api/faqs")
                .send({})
            expect(res.status).to.equal(400);
            expect(res.body).to.have.property("error");
        });
    });

    // Test GET /api/faqs
    // test for getting faqs in english
    describe("GET /api/faqs/", () => {
        it("should get all FAQs in English", async () => {
            const res = await request(app).get("/api/faqs");

            expect(res.status).to.equal(200);
            expect(res.body).to.be.an("array");
            expect(res.body.length).to.be.greaterThan(0); 
        });
    });

    describe("GET /api/faqs/?lang=hi", () => {
        it("should return translated FAQs in Hindi", async () => {
            const res = await request(app).get("/api/faqs?lang=hi");

            expect(res.status).to.equal(200);
            expect(res.body).to.be.an("array");
            expect(res.body.length).to.be.greaterThan(0); 
        });
    });

    describe("GET /api/faqs/?lang=bn", () => {
        it("should return translated FAQs in Bengali", async () => {
            const res = await request(app).get("/api/faqs?lang=bn");

            expect(res.status).to.equal(200);
            expect(res.body).to.be.an("array");
            expect(res.body.length).to.be.greaterThan(0); 
        });
    });


    describe("GET /api/faqs/:id", () => {
        it("should return FAQ in English", async () => {
            const res = await request(app).get(`/api/faqs/${id}`);

            expect(res.status).to.equal(200);
            expect(res.body).to.be.an("object");
            expect(res.body).to.have.property("question");
            expect(res.body).to.have.property("answer");
        });

        it("should return translated FAQ in hindi", async () => {
            const res = await request(app).get(`/api/faqs/${id}?lang=hi`);

            expect(res.status).to.equal(200);
            expect(res.body).to.be.an("object");
            expect(res.body).to.have.property("question_hi");
            expect(res.body).to.have.property("answer_hi");
        });

        it("should return translated FAQ in Bengali", async () => {
            const res = await request(app).get(`/api/faqs/${id}?lang=bn`);

            expect(res.status).to.equal(200);
            expect(res.body).to.be.an("object");
            expect(res.body).to.have.property("question_bn");
            expect(res.body).to.have.property("answer_bn");
        });
    });
    // Test PUT /api/faqs/:id
    // describe("PUT /api/faqs/:id", () => {
    //     it("should update an FAQ", async () => {
    //         const faq = await FAQ.create({
    //             question: "Original Question",
    //             answer: "Original Answer",
    //         });

    //         const res = await request(app)
    //             .put(`/api/faqs/${faq._id}`)
    //             .send({
    //                 question: "Updated Question",
    //                 answer: "Updated Answer",
    //             })
    //             .expect(200);

    //         expect(res.body.question).to.equal("Updated Question");
    //     });

    //     it("should return 404 for non-existent FAQ", async () => {
    //         await request(app)
    //             .put("/api/faqs/nonexistentid")
    //             .send({
    //                 question: "Updated",
    //                 answer: "Updated",
    //             })
    //             .expect(404);
    //     });
    // });

    // Test DELETE /api/faqs/:id
    describe("DELETE /api/faqs/:id", () => {
        it("should delete an FAQ", async () => {
            const res = await request(app).delete(`/api/faqs/${id}`);
            
            expect(res.status).to.equal(200);
            expect(res.body.message).to.equal("user deleted");
        });

        it("should say 'couldnt find FAQ'") , async () => {
            const res = await request(app).delete(`/api/faqs/000`);
            
            expect(res.status).to.equal(404);
            expect(res.body.message).to.equal("couldnt find FAQ");
        }
    });
});

    // Test language translation

