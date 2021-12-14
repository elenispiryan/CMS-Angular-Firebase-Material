export interface User {
    uid: string;
    email: string | null;
    displayName?: string | null;
    photoURL?: string | null;
    roles?: Roles;
}

export interface Roles {
    subscriber?: boolean;
    admin?: boolean;
}

