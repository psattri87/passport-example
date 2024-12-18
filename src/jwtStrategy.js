// const {Strategy: JwtStrategy, ExtractJwt} = require('passport-jwt')

// const JWT_SECRET = "PASSPORT_JWT_SECRET_AUTH"

// const options = {
//     secretOrKey: JWT_SECRET,
//     jwtFromRequest: ExtractJwt.fromBodyField('x-access-token')
// }

// const strategy = new JwtStrategy(options, (jwt_payload, done)=>{
//     console.log("JWT data is ", jwt_payload);
//     done(null, jwt_payload)
// })

// module.exports = strategy;

const {Strategy: JwtStrategy, ExtractJwt} = require('passport-jwt');
const JWT_SECRET = "PASSPORT_JWT_SECRET_AUTH"

const options = {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

const strategy = new JwtStrategy(options, (jwt_payload, done)=>{
    console.log("JWT Data is: ", jwt_payload);
    done(null, jwt_payload);
})

module.exports = strategy;