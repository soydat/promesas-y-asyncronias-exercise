import * as jsonfile from 'jsonfile';

class Product {
    id:number;
    name:string;
}

class ProductCollection {
    getAll(){
        return jsonfile.readFile("./productos.json").then((productos) =>{
            return productos;
        })
    }
    getById(id:number){
    return this.getAll().then((productos) => {
        const resultado = productos.find((prod) =>{
            return prod.id === id
        });
        return resultado;
    })
    }
}

export { Product, ProductCollection }