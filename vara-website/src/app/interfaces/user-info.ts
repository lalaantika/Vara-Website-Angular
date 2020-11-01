export class UserInfo {
    firstname: string;
    lastname:string
    email: string;
    phone: string;
    city: string;

    constructor(firstname:string, lastname:string, email:string, phone:string, city:string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.city = city;
    }
}
