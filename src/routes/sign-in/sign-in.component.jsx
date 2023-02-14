import { signInWithGooglepopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

function SignIn() {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglepopup();
        createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign In with Google</button>
        </div>
    );
}

export default SignIn;