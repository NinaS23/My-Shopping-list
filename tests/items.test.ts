import app from "../src/app";
import supertest from "supertest";
import * as factory from "./factory/itemsFactory";
import { array } from "joi";

describe('Testa POST /items ', () => {

  //passando
  it('Deve retornar 201, se cadastrado um item no formato correto', async ()=>{
      const item = factory.createItem(true);
     
      const result = await supertest(app).post("/items").send(item);
      console.log(result)
      expect(result.statusCode).toBe(201);
  });
//passando
  it('Deve retornar 409, ao tentar cadastrar um item que exista', async () =>{
    const item = factory.createItem(false);
    const result = await supertest(app).post("/items").send(item);
    expect(result.statusCode).toBe(409);
  });
});
//passando
describe('Testa GET /items ', () => {
  it('Deve retornar status 200 e o body no formato de Array',async () =>{
    const result = await supertest(app).get("/items");
    expect(result.body).toBeInstanceOf(Array);
    expect(result.statusCode).toBe(200);
  });
});

//passando
describe('Testa GET /items/:id ', () => {
  it('Deve retornar status 200 e um objeto igual a o item cadastrado', async () => {
    const item = factory.createItem(true);
    const itemResult = await supertest(app).post("/items").send(item);
    expect(itemResult.statusCode).toBe(201);
    const id = itemResult.body.id;

    const result = await supertest(app).get(`/items/${id}`);
    expect(result.body).toBeInstanceOf(Object);
    expect(result.statusCode).toBe(200);
    
  });
  //passando
  it('Deve retornar status 404 caso não exista um item com esse id',async()=>{
    const id = factory.fakerId().id
    const result = await supertest(app).get(`/items/${id}`);
    expect(result.statusCode).toBe(404);
  });
});
