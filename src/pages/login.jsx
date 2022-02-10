import { ErrorMessage, Formik,Field } from "formik";
import axios from "axios";
import Swal from "sweetalert2";




export function Login() {
    const initialState = {
        email: "",
        password: ""
    }
    return (
        <div class="background" >
            <Formik
                initialValues={initialState}
                enableReinitialize
                onSubmit={values => {
                    axios({
                        method: 'post',
                        url: 'http://localhost:1701/login',
                        data: values
                    })
                    .then(function (response) {
                        console.log(response);
                        Swal.fire(
                            'Selamat',
                            'Anda berhasil Login',
                            'success'
                          )
                    })
                    .catch(function (error) {
                        console.log(error);
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Email atau Password anda salah',
                       
                          })
                    });
                    console.log(values);
                  }}
            >
                
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    setFieldValue,
                    isSubmitting,
                }) => (
                    <form
                        className="space-y-4 py-32 h-screen"
                        onSubmit={handleSubmit}
                        action=""
                    >
                        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
                            <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                                <h1 class="title-font font-medium text-3xl text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti qui, repudiandae non quo at omnis placeat molestias animi esse est temporibus magnam obcaecati nam iusto suscipit ab cum nihil ullam!</h1>
                                <p class="leading-relaxed mt-4 text-white">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
                            </div>
                            <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                                <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>
                                <div class="relative mb-4">
                                    <label htmlFor="email" class="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        error={errors.email && touched.email}
                                        onChange={(e) => { setFieldValue("email", e.target.value); }}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        disabled={isSubmitting}
                                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    {errors.email && touched.email && (<ErrorMessage>{errors.email}</ErrorMessage>)}
                                </div>
                                <div class="relative mb-4">
                                    <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        error={errors.password && touched.password}
                                        onChange={(e) => {
                                            setFieldValue("password", e.target.value);
                                        }}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        disabled={isSubmitting}
                                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    {errors.password && touched.password && (<ErrorMessage>{errors.password}</ErrorMessage>)}
                                </div>
                              
                               
                                <button Type="submit" class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href="">Sign In</a></button>
                                <p class="relative mt-4 hover:text-indigo-600 rounded  "><a href="/register">Buat akun</a></p>
                            </div>
                  
                        </div>
                    </form>
                )}
            </Formik>
            </div>
            

            

    )

    

}

export default Login

{/* <section class="relative py-20">
  <div class="absolute top-0 left-0 lg:bottom-0 h-96 lg:h-auto w-full lg:w-8/12 bg-indigo-500"></div>
  <div class="relative container px-4 mx-auto">
    <div class="flex flex-wrap items-center -mx-4">
      <div class="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
        <div class="max-w-lg">
          <h2 class="mb-6 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading text-white">Lorem ipsum dolor sit amet consectutar domor at elis</h2>
          <p class="text-base leading-relaxed lg:text-xl lg:leading-relaxed text-indigo-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan aliquet orci.</p>
        </div>
      </div>
      <div class="w-full lg:w-1/2 px-4">
        <div class="lg:max-w-md p-6 bg-gray-50 text-center rounded-lg">
          <form action="#">
            <span class="text-sm text-gray-500 font-semibold uppercase">Sign In</span>
            <h3 class="mb-8 text-2xl font-bold font-heading">Join our community</h3>
            <input class="w-full py-3 pl-3 mb-4 bg-white rounded-lg" type="email" placeholder="E-mail address">
            <input class="w-full py-3 pl-3 mb-4 bg-white rounded-lg" type="password" placeholder="Password">
            <button class="block w-full mb-4 px-5 py-3 text-sm bg-indigo-500 hover:bg-indigo-600 text-white font-semibold border border-indigo-500 hover:border-indigo-600 rounded transition duration-200">Get Started</button>
            <a class="text-sm text-gray-500 hover:underline" href="#">Forgot password?</a>
            <a class="flex items-center justify-center mt-4 mb-4 w-full px-5 py-3 text-sm bg-white hover:bg-indigo-50 font-semibold border border-white hover:border-indigo-50 rounded transition duration-200" href="#">
              <img class="w-5 h-5 mr-2" src="plain-assets/socials/facebook.svg" alt="">
              <span class="text-sm font-semibold">Sign in with Facebook</span>
            </a>
            <a class="flex items-center justify-center px-5 py-3 text-sm bg-white hover:bg-indigo-50 font-semibold border border-white hover:border-indigo-50 rounded transition duration-200" href="#">
              <img class="w-5 h-5 mr-2" src="plain-assets/socials/twitter.svg" alt="">
              <span class="text-sm font-semibold">Sign in with Twitter</span>
            </a>
          </form>
        </div>
      </div>
    </div>
  </div>
</section> */}
