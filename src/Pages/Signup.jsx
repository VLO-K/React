import NavigationBar from "../Common/Components/NavigationBar";
import "./Signing.css";

const Signup = () => {
    return (
        <div className="content">
            <NavigationBar />

            <div className="content-container">
                <div className="signing-wrapper">
                    <div className="signing_left_container">
                        <p className="signing_topic">Auticash.</p>
                        <br />
                        <p className="signing_paragraph">
                            Built on the latest technology and featuring an
                            intuitive,
                            <br />
                            user-friendly interface.
                        </p>
                    </div>

                    <div className="signing_right_container">
                        <div className="signing_title">Create Your Account</div>
                        <form className="signing_form" action="" method="POST">
                            <div className="signing_section">
                                <div className="signing_container">
                                    <input
                                        type="text"
                                        className="signing_input"
                                        placeholder="Email"
                                        data-errortext="Please enter a valid email address."
                                        data-type="account"
                                        name="email"
                                        autoComplete="off"
                                        required
                                    />
                                </div>

                                <div className="signing_container">
                                    <input
                                        type="password"
                                        className="signing_input"
                                        placeholder="Password (6-20 characters)"
                                        data-errortext="The password must be between 6-20 characters long."
                                        data-type="account"
                                        name="password"
                                        autoComplete="off"
                                        required
                                    />
                                </div>

                                <div className="signing_container">
                                    <input
                                        type="password"
                                        className="signing_input"
                                        placeholder="Confirm Password"
                                        data-errortext="The password must be between 6-20 characters long."
                                        data-type="account"
                                        name="cpassword"
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                            </div>

                            <input
                                className="signing_button"
                                name="signup"
                                type="submit"
                                value="Create account"
                            />
                        </form>

                        <div className="signing_account">
                            Already have an account?
                            <a className="signing_signbtn" href="/signin">
                                Sign In
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
