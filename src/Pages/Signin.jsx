import NavigationBar from "../Common/Components/NavigationBar";
import "./Signing.css";

const Signin = () => {
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
                        <div className="signing_title">Sign in to Auticash</div>
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
                                        placeholder="Password"
                                        data-errortext="The password must be between 6-20 characters long."
                                        data-type="account"
                                        name="password"
                                        autoComplete="off"
                                        required
                                    />
                                </div>
                            </div>

                            <input
                                className="signing_button"
                                name="signin"
                                type="submit"
                                value="Sign In"
                            />
                        </form>

                        <div className="signing_account">
                            Don't have an account?
                            <a className="signing_signbtn" href="/signup">
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
