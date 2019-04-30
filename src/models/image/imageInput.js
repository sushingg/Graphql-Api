import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
  GraphQLBoolean
} from "graphql";
import { GraphQLDateTime } from "graphql-iso-date";
// Define our user type, with two string fields; `id` and `name`
export default new GraphQLInputObjectType({
  name: "ImageInput",
  description: "images object",
  fields: () => ({
    altText: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    }
  })
});
