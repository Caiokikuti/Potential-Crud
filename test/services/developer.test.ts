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

    it("Autentica usuario e cria o accessToken", async () => {
      const { user, accessToken } = await app.service("authentication").create(
        {
          strategy: "local",
          ...userInfo,
        },
        {}
      );

      assert.ok(accessToken, "acess token criada para o usuário!");
      assert.ok(user, "inclui as informações do usuário!");
    });

    it("Autentica e cria um desenvolvedor", async () => {
      const { user, accessToken } = await app.service("authentication").create(
        {
          strategy: "local",
          ...userInfo,
        },
        {}
      );
      const newUser = await app
        .service("developers")
        .create(credentialsNewUser);

      assert.equal(newUser.nome, credentialsNewUser.nome);
      assert.equal(newUser.sexo, credentialsNewUser.sexo);
      assert.equal(newUser.idade, credentialsNewUser.idade);
      assert.equal(newUser.dataNascimento, credentialsNewUser.dataNascimento);
      assert.equal(newUser.hobby, credentialsNewUser.hobby);
    });
  });
});
