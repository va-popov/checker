import { RequestState } from "../types/RequestState";
export interface IUser {
    id: number;
    email: string;
    grant: number;
    name: string;
    token: string;
    avatar_url: string | null;
}
declare class UserStore {
    user: IUser;
    state: RequestState;
    loginVk: (code: string) => Promise<void>;
    getProfile: () => Promise<void>;
    logout: () => void;
    setUser: (user: IUser) => void;
    setError: () => void;
    constructor();
}
declare const _default: UserStore;
export default _default;
