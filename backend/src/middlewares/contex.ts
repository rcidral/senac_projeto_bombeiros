import { Organization  } from "../entities/Organization";
import { User  } from "../entities/User";

export interface Context {
    user: User;
    organization: Organization;
}