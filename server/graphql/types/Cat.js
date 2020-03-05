import { schemaComposer } from "graphql-compose";
import CatTC from "models/Cat";

schemaComposer.Query.addFields({
  catById: CatTC.getResolver("findById")
});
