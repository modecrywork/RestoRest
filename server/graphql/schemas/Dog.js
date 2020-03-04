import DogTC from "models/Dog";
import { schemaComposer } from "graphql-compose";

schemaComposer.Query.addFields({
  dogById: DogTC.getResolver("findById")
});
