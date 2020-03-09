import { schemaComposer } from "graphql-compose";
import { composeWithMongoose } from "graphql-compose-mongoose";
import CatModel from "models/Cat";

const CatTC = composeWithMongoose(CatModel, {});

schemaComposer.Query.addFields({
  catById: CatTC.getResolver("findById")
});
