// .use(
//     session({
//         name: process.env.SESSION_NAME,
//         resave: false,
//         saveUninitialized: false,
//         secret: process.env.SESSION_SECRET,
//         cookie: {
//             maxAge: 1000 * 60 * 60 * 24,
//             //!! PROD => secure: true
//             secure: false,
//         },
//         //!! PROD => definir un session-store valid https://www.npmjs.com/package/express-session
//     })
// );
// export default () => {
//     axios.interceptors.request.use(function (requestConfig) {
//         if (requestConfig.url.indexOf(<ALLOWED_DOMAIN>) > -1) {
//             const token = localStorage.token;
//             requestConfig.headers['Authorization'] = `Bearer ${token}`;
//         }

//         return requestConfig;
//     }, function (error) {
//         return Promise.reject(error);
//     });

// }
// export default () => {
//     axios.interceptors.request.use(
//         (requestConfig) => {
//             {
//                 const token = localStorage.token;
//                 requestConfig.headers["Authorization"] = `Bearer ${token}`;
//             }

//             return requestConfig;
//         },
//         (error) => {
//             return Promise.reject(error);
//         }
//     );
// };
