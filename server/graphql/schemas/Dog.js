import { schemaComposer } from "graphql-compose";
import DogTC from "models/Dog";

schemaComposer.Query.addFields({
    dogById: DogTC.getResolver("findById")
});

