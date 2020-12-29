export class UserInfo {
    firstName: string;
    lastName:string
    email: string;
    phone: string;
    city: string;
    admin:boolean;
    investor:boolean;

    constructor(firstName:string, lastName:string, email:string, phone:string, city:string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.city = city;
        this.admin = false;
        this.investor = false;
    }
}
