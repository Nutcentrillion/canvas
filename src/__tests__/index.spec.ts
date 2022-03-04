const request = require("supertest");

import { app } from "../index";

describe("GET /api/user", () => {
  it("should respond with status 200", async () => {
    const response = await request(app).get("/api/generate").expect(200);
    expect(response.status).toEqual(200);
  });
});
