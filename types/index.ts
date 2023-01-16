type Living = {
  house: number;
  flat: number;
}

type Main = {
  district: string;
  postal: string;
  street: string;
  living: Living;
}
type Address = {
  city: string;
  main: Main;
}
type Primary = {
  number: number;
  grade: number;
}
type High_addres = {
  street: string;
  orientation: string;
}

type High = {
  number: number;
  address: High_addres;
}

type School = {
  primary: Primary;
  high: High;
}

type Education = {
  school: School;
}
type Hobby = {
  title: string;
  action: Array<string>;
}

type Organizer = {
  name: string;
  from: string;
  born: number;
  hobby: Hobby;
}
type War = {
  title: string;
  year: number;
  organizer: Organizer;
}
type Father = {
  name: string;
  age: number;
  war: War;
}
type Family = {
  father: Father;
}

export interface Person {
  id: number;
  name: string;
  address: Address;
  education: Education;
  family: Family;
}

class Category_class {
  public readonly id: number;
  public readonly title: string;
  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }
}

class Origin {
  public readonly from: string;
  public readonly who: string;

  constructor(from: string, who: string) {
    this.from = from;
    this.who = who;
  }
}

class From_class {
  public readonly country: string;
  public readonly origin: Origin;

  constructor(country: string, origin: Origin) {
    this.country = country;
    this.origin = origin;
  }
}

class Addresss {
  public readonly title: string;
  public readonly orientation: string;

  constructor(title: string, orientation: string) {
    this.title = title;
    this.orientation = orientation;
  }
}

class Open {
  public readonly title: string;
  public readonly address: Addresss;

  constructor(title: string, address: Addresss) {
    this.title = title;
    this.address = address;
  }
}

class Market {
  public readonly open: Open;
  constructor(open: Open) {
    this.open = open;
  }
}

class Where {
  public readonly market: Market;
  constructor(market: Market) {
    this.market = market;
  }
}

export class PersonClass {
  public readonly id: number;
  public readonly name: string;
  public readonly price: string;
  public readonly category: Category_class;
  public readonly from: From_class;
  public readonly where: Where;
  constructor(
    id: number,
    category: Category_class,
    name: string,
    price: string,
    from: From_class,
    where: Where
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.from = from;
    this.where = where;
  }
}
