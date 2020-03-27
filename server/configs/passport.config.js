import passport from "passport";
import { GraphQLLocalStrategy } from "graphql-passport";
// submodules
import validatePassword from "utils/validatePassword";
import UserModel from "models/User";

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

/* local auth strategy */
passport.use(
  new GraphQLLocalStrategy(async (username, password, done) => {
    const matchUser = await UserModel.findOne({ username: username });

    if (matchUser) {
      const { hash: userHash, salt: userSalt } = matchUser;
      const isValidPassword = validatePassword(userHash, password, userSalt);
      if (isValidPassword) done(null, matchUser);
    }
    done(null, false);
  })
);
