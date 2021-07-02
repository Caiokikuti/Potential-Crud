import assert from "assert";
import app from "../../src/app";

describe("'developers' service", () => {
  it("registered the service", () => {
    const service = app.service("developers");

    assert.ok(service, "Registered the service");
  });

  describe("Autenticação e manipulação dos desenvolvedores", () => {
    const userInfo = {
      email: "someone@example.com",
      password: "supersecret",
    };

    const credentialsNewUser = {
      nome: "Caio",
      idade: 20,
      hobby: "Programar",
      sexo: "M",
      dataNascimento: "1943-01-17",
    };

    before(async () => {
      try {
        await app.service("users").create(userInfo);
      } catch (error) {
        // Do nothing, it just means the user already exists and can be tested
      }
    });
  });

  it("'messages' service is working as expected", () => {
    const service = app.service("developers");

    assert.ok(service, "Registered the service");
  });
});
