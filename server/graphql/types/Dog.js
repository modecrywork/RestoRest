import { schemaComposer } from "graphql-compose";
import { composeWithMongoose } from "graphql-compose-mongoose";

import DogModel from "models/Dog";

const DogTC = composeWithMongoose(DogModel, {});

schemaComposer.Query.addFields({
  dogById: DogTC.getResolver("findById")
});
