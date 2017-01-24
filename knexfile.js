// module.exports = {
//     development: {
//         client: 'pg',
//         connection: 'postgres://localhost/vrm_dev'
//     },
//     production: {
//         client: 'pg',
//         connection: process.env.DATABASE
//     }
// }
module.exports = {

 development: {
   client: 'pg',
   connection: {
     database: 'vrm_dev',
     host: 'localhost'
   }
 },

 test: {
   client: 'pg',
   connection: {
     database: 'vrm_test',
     host: 'localhost',
   }
 },

 production: {
   client: 'pg',
   connection: process.env.DATABASE_URL,
 }
 }
