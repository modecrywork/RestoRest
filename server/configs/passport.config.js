import passport from "passport";
import { GraphQLLocalStrategy } from 'graphql-passport';

passport.use(
    new GraphQLLocalStrategy((login,password,done)=>{

    })
)
