import { ErrorMessage, Formik, Field } from "formik";
import axios from "axios";
import Swal from "sweetalert2";



export function Register() {
    const initialState = {
        name: "",
        email: "",
        password: "",
        jenisKelamin: "",
        status: ""

    }
    return (

        <div className="background "  >
            <Formik
                initialValues={initialState}
                enableReinitialize
                onSubmit={values => {
                    axios({
                        method: 'post',
                        url: 'http://localhost:1701/register',
                        data: values
                    })
                    .then(function (response) {
                        console.log(response);
                        Swal.fire(
                            'Selamat',
                            'Anda berhasil Terdaftar',
                            'success'
                          )
                    })
                    .catch(function (error) {
                        console.log(error);
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!',
                            footer: '<a href="">Why do I have this issue?</a>'
                          })
                    });
                    // same shape as initial values
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
                                <h1 class="title-font font-medium text-3xl text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti qui, repudiandae non quo at omnis placeat molestias animi esse est temporibus magnam obcaecati nam iusto suscipit ab cum nihil ullam!</h1>
                                <p class="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
                            </div>
                            <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                                <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Register</h2>
                                <div class="relative mb-4">
                                    <label htmlFor="name" class="leading-7 text-sm text-gray-600"> Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                        error={errors.name && touched.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                        disabled={isSubmitting}
                                        class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    {errors.name && touched.name && (<ErrorMessage>{errors.name}</ErrorMessage>)}
                                </div>
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
                                <div className="flex flex-row">
                                    <div class="relative mb-4 mr-4">
                                        <Field component="select" name="jenisKelamin" placeholder="select option">
                                            <option id="jenisKelamin" name="jenisKelamin" value="laki-laki">Male</option>
                                            <option id="jenisKelamin" name="jenisKelamin" value="perempuan">Female</option>
                                        </Field>

                                    </div>
                                    <div class="relative mb-4" >
                                        <Field component="select" name="status" placeholder="select option">
                                            <option id="status" name="status" value="active">active</option>
                                            <option id="status" name="status" value="nonActive">Non-active</option>

                                        </Field>
                                    </div>

                                </div>

                                <button Type="submit" class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href="/Login">Sign Up</a> </button>
                                <p class="relative mt-4 hover:text-indigo-600 rounded  "><a href="/login">Sudah punya Akun</a></p>

                            </div>
                            {/* <Button  htmlType="submit" block variant="solid" color="red">
                klik
              </Button> */}
                        </div>
                    </form>
                )}
            </Formik></div>

    )

}

export default Register
