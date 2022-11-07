import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { initConfig } from "../configs/init_configs";
import HttpException from "../utils/httpException";

const app = initConfig();
const auth = getAuth(app);

const logInWithEmailAndPassword = async (email: string, password: string) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log(response);

    } catch (err) {
        console.error(err);
        throw new HttpException(500, "Authentication Failure!");
    }
};

const logout = () => {
    signOut(auth);
};

export { auth, logInWithEmailAndPassword, logout };