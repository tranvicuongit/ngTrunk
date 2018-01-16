import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { ApiService } from "../../_core/_services/api.service";
import "rxjs/add/operator/map";

@Injectable()
export class AuthenticationService {
    constructor(private http: ApiService) { }

    login(email: string, password: string) {
        return this.http.postData("/api/authenticate", {
            email: email,
            password: password
        });
    }

    logout() {
        localStorage.removeItem("currentUser");
    }
}
