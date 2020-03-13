import UserModel from "models/User";

import { schemaComposer } from "graphql-compose";
import { composeWithMongoose } from "graphql-compose-mongoose";

import loginResolver from "./loginResolver";

const UserTc = composeWithMongoose(UserModel, {});
UserTc.removeField(["salt", "token"]);

schemaComposer.createObjectTC({
  name: "AuthPayload",
  fields: { user: UserTc.getType() }
});

UserTc.addResolver(loginResolver);

schemaComposer.Mutation.addFields({
  signIn: UserTc.getResolver("signIn")
});
