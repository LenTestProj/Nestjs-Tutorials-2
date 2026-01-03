export declare class UsersController {
    findAll(role?: "INTERN" | "ENGINEER" | "ADMIN"): any[] | {
        role: "INTERN" | "ENGINEER" | "ADMIN";
    };
    findAllInterns(): any[];
    findOne(id: string): {
        id: string;
    };
    create(user: {}): {};
    update(id: string, userUpdate: {}): {};
    delete(id: string): {
        id: string;
    };
}
