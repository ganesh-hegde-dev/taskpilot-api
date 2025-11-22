import * as bcrypt from 'bcrypt';

export async function hashPassword(password: string, saltRound: number = 10) {
    return await bcrypt.hash(password, saltRound);
}

export async function comparePassword(password: string, hash: string) {
    return await bcrypt.compare(password, hash);
}