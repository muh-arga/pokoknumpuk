import bcrypt from "bcrypt";

export const hashPassword = {
    hash: async (password: string): Promise<string> =>
        await bcrypt.hash(password, 10),
    compare: async (password: string, hash: string): Promise<boolean> => 
        await bcrypt.compare(password, hash),
};