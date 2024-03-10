import brand from "../assets/image/brand.png";
import FormGroup from "../component/Form/FormGroup";
export default function Login() {
  return (
    <section className="bg-body-color">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-text-color"
        >
          <img className="w-8 h-8 mr-2 object-cover" src={brand} alt="logo" />
          Free Jobs
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-text-color">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <FormGroup
                target="email"
                labelText={"Your email"}
                type={"email"}
                name={"email"}
                placeholder={"name@company.com"}
                required={true}
              />
              <FormGroup
                target={"password"}
                labelText={"Password"}
                type={"password"}
                name={"password"}
                placeholder={"••••••••"}
                required={true}
              />
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50  accent-blue-500"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-secondary-text-color"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium hover:underline text-secondary-text-color"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-theme-color hover:bg-primary-700 outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
              <p className="text-sm font-medium text-secondary-text-color">
                Already have an account?{" "}
                <a
                  href="#"
                  className="font-medium hover:underline text-secondary-text-color"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
