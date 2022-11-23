class User {
  email: string;
  name: string;
  city: string = "xi'an";

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const dp = new User("d.p@gmail.com", "dpan");
dp.city = "sian";
