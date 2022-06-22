export class Person{
    name: string = ''
    phoneNum: string = ''
    email: string = ''
    address: string = ''
    age: number = 0
    fact: string = ''
    constructor(name: string, phoneNum: string, email: string, address: string, age: number, fact: string){
        this.name = name
        this.email = email
        this.phoneNum = phoneNum
        this.address = address
        this.age = age
        this.fact = fact
    }
}
