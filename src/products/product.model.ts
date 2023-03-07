export class Product {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public price: number,
  ) {}
}

/** Normal ES6 way of defining class */
// export class Product {
//   id: string;
//   title: string;
//   description: string;
//   price: number;
//   qtySold: number;

//   constructor(id: string, title: string, desc: string, price: number) {
//     this.id = id;
//     this.title = title;
//     this.description = desc;
//     this.price = price;
//   }
// }
