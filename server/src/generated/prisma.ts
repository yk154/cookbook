import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    recipes: <T = Array<Recipe | null>>(args: { where?: RecipeWhereInput | null, orderBy?: RecipeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    likes: <T = Array<Like | null>>(args: { where?: LikeWhereInput | null, orderBy?: LikeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    comments: <T = Array<Comment | null>>(args: { where?: CommentWhereInput | null, orderBy?: CommentOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    equipments: <T = Array<Equipment | null>>(args: { where?: EquipmentWhereInput | null, orderBy?: EquipmentOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    ingredients: <T = Array<Ingredient | null>>(args: { where?: IngredientWhereInput | null, orderBy?: IngredientOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    recipe: <T = Recipe | null>(args: { where: RecipeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    like: <T = Like | null>(args: { where: LikeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    equipment: <T = Equipment | null>(args: { where: EquipmentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    ingredient: <T = Ingredient | null>(args: { where: IngredientWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    recipesConnection: <T = RecipeConnection>(args: { where?: RecipeWhereInput | null, orderBy?: RecipeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    likesConnection: <T = LikeConnection>(args: { where?: LikeWhereInput | null, orderBy?: LikeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    commentsConnection: <T = CommentConnection>(args: { where?: CommentWhereInput | null, orderBy?: CommentOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    equipmentsConnection: <T = EquipmentConnection>(args: { where?: EquipmentWhereInput | null, orderBy?: EquipmentOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    ingredientsConnection: <T = IngredientConnection>(args: { where?: IngredientWhereInput | null, orderBy?: IngredientOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createRecipe: <T = Recipe>(args: { data: RecipeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLike: <T = Like>(args: { data: LikeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createComment: <T = Comment>(args: { data: CommentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createEquipment: <T = Equipment>(args: { data: EquipmentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createIngredient: <T = Ingredient>(args: { data: IngredientCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateRecipe: <T = Recipe | null>(args: { data: RecipeUpdateInput, where: RecipeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateLike: <T = Like | null>(args: { data: LikeUpdateInput, where: LikeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateEquipment: <T = Equipment | null>(args: { data: EquipmentUpdateInput, where: EquipmentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateIngredient: <T = Ingredient | null>(args: { data: IngredientUpdateInput, where: IngredientWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteRecipe: <T = Recipe | null>(args: { where: RecipeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteLike: <T = Like | null>(args: { where: LikeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteEquipment: <T = Equipment | null>(args: { where: EquipmentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteIngredient: <T = Ingredient | null>(args: { where: IngredientWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertRecipe: <T = Recipe>(args: { where: RecipeWhereUniqueInput, create: RecipeCreateInput, update: RecipeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLike: <T = Like>(args: { where: LikeWhereUniqueInput, create: LikeCreateInput, update: LikeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertEquipment: <T = Equipment>(args: { where: EquipmentWhereUniqueInput, create: EquipmentCreateInput, update: EquipmentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertIngredient: <T = Ingredient>(args: { where: IngredientWhereUniqueInput, create: IngredientCreateInput, update: IngredientUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyRecipes: <T = BatchPayload>(args: { data: RecipeUpdateInput, where?: RecipeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLikes: <T = BatchPayload>(args: { data: LikeUpdateInput, where?: LikeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyComments: <T = BatchPayload>(args: { data: CommentUpdateInput, where?: CommentWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyEquipments: <T = BatchPayload>(args: { data: EquipmentUpdateInput, where?: EquipmentWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyIngredients: <T = BatchPayload>(args: { data: IngredientUpdateInput, where?: IngredientWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyRecipes: <T = BatchPayload>(args: { where?: RecipeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLikes: <T = BatchPayload>(args: { where?: LikeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyComments: <T = BatchPayload>(args: { where?: CommentWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyEquipments: <T = BatchPayload>(args: { where?: EquipmentWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyIngredients: <T = BatchPayload>(args: { where?: IngredientWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    recipe: <T = RecipeSubscriptionPayload | null>(args: { where?: RecipeSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    like: <T = LikeSubscriptionPayload | null>(args: { where?: LikeSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    comment: <T = CommentSubscriptionPayload | null>(args: { where?: CommentSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    equipment: <T = EquipmentSubscriptionPayload | null>(args: { where?: EquipmentSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    ingredient: <T = IngredientSubscriptionPayload | null>(args: { where?: IngredientSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Recipe: (where?: RecipeWhereInput) => Promise<boolean>
  Like: (where?: LikeWhereInput) => Promise<boolean>
  Comment: (where?: CommentWhereInput) => Promise<boolean>
  Equipment: (where?: EquipmentWhereInput) => Promise<boolean>
  Ingredient: (where?: IngredientWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateComment {
  count: Int!
}

type AggregateEquipment {
  count: Int!
}

type AggregateIngredient {
  count: Int!
}

type AggregateLike {
  count: Int!
}

type AggregateRecipe {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Comment {
  text: String!
  author(where: UserWhereInput): User!
  recipe(where: RecipeWhereInput): Recipe!
}

"""A connection to a list of items."""
type CommentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CommentEdge]!
  aggregate: AggregateComment!
}

input CommentCreateInput {
  text: String!
  author: UserCreateOneWithoutCommentsInput!
  recipe: RecipeCreateOneWithoutCommentsInput!
}

input CommentCreateManyWithoutAuthorInput {
  create: [CommentCreateWithoutAuthorInput!]
}

input CommentCreateManyWithoutRecipeInput {
  create: [CommentCreateWithoutRecipeInput!]
}

input CommentCreateWithoutAuthorInput {
  text: String!
  recipe: RecipeCreateOneWithoutCommentsInput!
}

input CommentCreateWithoutRecipeInput {
  text: String!
  author: UserCreateOneWithoutCommentsInput!
}

"""An edge in a connection."""
type CommentEdge {
  """The item at the end of the edge."""
  node: Comment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CommentOrderByInput {
  text_ASC
  text_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CommentPreviousValues {
  text: String!
}

type CommentSubscriptionPayload {
  mutation: MutationType!
  node: Comment
  updatedFields: [String!]
  previousValues: CommentPreviousValues
}

input CommentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CommentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CommentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CommentSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CommentWhereInput
}

input CommentUpdateInput {
  text: String
  author: UserUpdateOneWithoutCommentsInput
  recipe: RecipeUpdateOneWithoutCommentsInput
}

input CommentUpdateManyWithoutAuthorInput {
  create: [CommentCreateWithoutAuthorInput!]
}

input CommentUpdateManyWithoutRecipeInput {
  create: [CommentCreateWithoutRecipeInput!]
}

input CommentWhereInput {
  """Logical AND on all given filters."""
  AND: [CommentWhereInput!]

  """Logical OR on all given filters."""
  OR: [CommentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CommentWhereInput!]
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  author: UserWhereInput
  recipe: RecipeWhereInput
}

type Equipment implements Node {
  id: ID!
  name: String!
}

"""A connection to a list of items."""
type EquipmentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [EquipmentEdge]!
  aggregate: AggregateEquipment!
}

input EquipmentCreateInput {
  name: String!
}

input EquipmentCreateManyInput {
  create: [EquipmentCreateInput!]
  connect: [EquipmentWhereUniqueInput!]
}

"""An edge in a connection."""
type EquipmentEdge {
  """The item at the end of the edge."""
  node: Equipment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum EquipmentOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type EquipmentPreviousValues {
  id: ID!
  name: String!
}

type EquipmentSubscriptionPayload {
  mutation: MutationType!
  node: Equipment
  updatedFields: [String!]
  previousValues: EquipmentPreviousValues
}

input EquipmentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [EquipmentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [EquipmentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EquipmentSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: EquipmentWhereInput
}

input EquipmentUpdateDataInput {
  name: String
}

input EquipmentUpdateInput {
  name: String
}

input EquipmentUpdateManyInput {
  create: [EquipmentCreateInput!]
  connect: [EquipmentWhereUniqueInput!]
  disconnect: [EquipmentWhereUniqueInput!]
  delete: [EquipmentWhereUniqueInput!]
  update: [EquipmentUpdateWithWhereUniqueNestedInput!]
  upsert: [EquipmentUpsertWithWhereUniqueNestedInput!]
}

input EquipmentUpdateWithWhereUniqueNestedInput {
  where: EquipmentWhereUniqueInput!
  data: EquipmentUpdateDataInput!
}

input EquipmentUpsertWithWhereUniqueNestedInput {
  where: EquipmentWhereUniqueInput!
  update: EquipmentUpdateDataInput!
  create: EquipmentCreateInput!
}

input EquipmentWhereInput {
  """Logical AND on all given filters."""
  AND: [EquipmentWhereInput!]

  """Logical OR on all given filters."""
  OR: [EquipmentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EquipmentWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  _MagicalBackRelation_EquipmentToRecipe_every: RecipeWhereInput
  _MagicalBackRelation_EquipmentToRecipe_some: RecipeWhereInput
  _MagicalBackRelation_EquipmentToRecipe_none: RecipeWhereInput
}

input EquipmentWhereUniqueInput {
  id: ID
  name: String
}

type Ingredient implements Node {
  id: ID!
  name: String!
  price: Float!
}

"""A connection to a list of items."""
type IngredientConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [IngredientEdge]!
  aggregate: AggregateIngredient!
}

input IngredientCreateInput {
  name: String!
  price: Float!
}

input IngredientCreateManyInput {
  create: [IngredientCreateInput!]
  connect: [IngredientWhereUniqueInput!]
}

"""An edge in a connection."""
type IngredientEdge {
  """The item at the end of the edge."""
  node: Ingredient!

  """A cursor for use in pagination."""
  cursor: String!
}

enum IngredientOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  price_ASC
  price_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type IngredientPreviousValues {
  id: ID!
  name: String!
  price: Float!
}

type IngredientSubscriptionPayload {
  mutation: MutationType!
  node: Ingredient
  updatedFields: [String!]
  previousValues: IngredientPreviousValues
}

input IngredientSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [IngredientSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [IngredientSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [IngredientSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: IngredientWhereInput
}

input IngredientUpdateDataInput {
  name: String
  price: Float
}

input IngredientUpdateInput {
  name: String
  price: Float
}

input IngredientUpdateManyInput {
  create: [IngredientCreateInput!]
  connect: [IngredientWhereUniqueInput!]
  disconnect: [IngredientWhereUniqueInput!]
  delete: [IngredientWhereUniqueInput!]
  update: [IngredientUpdateWithWhereUniqueNestedInput!]
  upsert: [IngredientUpsertWithWhereUniqueNestedInput!]
}

input IngredientUpdateWithWhereUniqueNestedInput {
  where: IngredientWhereUniqueInput!
  data: IngredientUpdateDataInput!
}

input IngredientUpsertWithWhereUniqueNestedInput {
  where: IngredientWhereUniqueInput!
  update: IngredientUpdateDataInput!
  create: IngredientCreateInput!
}

input IngredientWhereInput {
  """Logical AND on all given filters."""
  AND: [IngredientWhereInput!]

  """Logical OR on all given filters."""
  OR: [IngredientWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [IngredientWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  price: Float

  """All values that are not equal to given value."""
  price_not: Float

  """All values that are contained in given list."""
  price_in: [Float!]

  """All values that are not contained in given list."""
  price_not_in: [Float!]

  """All values less than the given value."""
  price_lt: Float

  """All values less than or equal the given value."""
  price_lte: Float

  """All values greater than the given value."""
  price_gt: Float

  """All values greater than or equal the given value."""
  price_gte: Float
  _MagicalBackRelation_IngredientToRecipe_every: RecipeWhereInput
  _MagicalBackRelation_IngredientToRecipe_some: RecipeWhereInput
  _MagicalBackRelation_IngredientToRecipe_none: RecipeWhereInput
}

input IngredientWhereUniqueInput {
  id: ID
  name: String
}

type Like implements Node {
  id: ID!
  author(where: UserWhereInput): User!
  recipe(where: RecipeWhereInput): Recipe!
}

"""A connection to a list of items."""
type LikeConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LikeEdge]!
  aggregate: AggregateLike!
}

input LikeCreateInput {
  author: UserCreateOneWithoutLikesInput!
  recipe: RecipeCreateOneWithoutLikesInput!
}

input LikeCreateManyWithoutAuthorInput {
  create: [LikeCreateWithoutAuthorInput!]
  connect: [LikeWhereUniqueInput!]
}

input LikeCreateManyWithoutRecipeInput {
  create: [LikeCreateWithoutRecipeInput!]
  connect: [LikeWhereUniqueInput!]
}

input LikeCreateWithoutAuthorInput {
  recipe: RecipeCreateOneWithoutLikesInput!
}

input LikeCreateWithoutRecipeInput {
  author: UserCreateOneWithoutLikesInput!
}

"""An edge in a connection."""
type LikeEdge {
  """The item at the end of the edge."""
  node: Like!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LikeOrderByInput {
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type LikePreviousValues {
  id: ID!
}

type LikeSubscriptionPayload {
  mutation: MutationType!
  node: Like
  updatedFields: [String!]
  previousValues: LikePreviousValues
}

input LikeSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LikeSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LikeSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LikeSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LikeWhereInput
}

input LikeUpdateInput {
  author: UserUpdateOneWithoutLikesInput
  recipe: RecipeUpdateOneWithoutLikesInput
}

input LikeUpdateManyWithoutAuthorInput {
  create: [LikeCreateWithoutAuthorInput!]
  connect: [LikeWhereUniqueInput!]
  disconnect: [LikeWhereUniqueInput!]
  delete: [LikeWhereUniqueInput!]
  update: [LikeUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [LikeUpsertWithWhereUniqueWithoutAuthorInput!]
}

input LikeUpdateManyWithoutRecipeInput {
  create: [LikeCreateWithoutRecipeInput!]
  connect: [LikeWhereUniqueInput!]
  disconnect: [LikeWhereUniqueInput!]
  delete: [LikeWhereUniqueInput!]
  update: [LikeUpdateWithWhereUniqueWithoutRecipeInput!]
  upsert: [LikeUpsertWithWhereUniqueWithoutRecipeInput!]
}

input LikeUpdateWithoutAuthorDataInput {
  recipe: RecipeUpdateOneWithoutLikesInput
}

input LikeUpdateWithoutRecipeDataInput {
  author: UserUpdateOneWithoutLikesInput
}

input LikeUpdateWithWhereUniqueWithoutAuthorInput {
  where: LikeWhereUniqueInput!
  data: LikeUpdateWithoutAuthorDataInput!
}

input LikeUpdateWithWhereUniqueWithoutRecipeInput {
  where: LikeWhereUniqueInput!
  data: LikeUpdateWithoutRecipeDataInput!
}

input LikeUpsertWithWhereUniqueWithoutAuthorInput {
  where: LikeWhereUniqueInput!
  update: LikeUpdateWithoutAuthorDataInput!
  create: LikeCreateWithoutAuthorInput!
}

input LikeUpsertWithWhereUniqueWithoutRecipeInput {
  where: LikeWhereUniqueInput!
  update: LikeUpdateWithoutRecipeDataInput!
  create: LikeCreateWithoutRecipeInput!
}

input LikeWhereInput {
  """Logical AND on all given filters."""
  AND: [LikeWhereInput!]

  """Logical OR on all given filters."""
  OR: [LikeWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LikeWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  author: UserWhereInput
  recipe: RecipeWhereInput
}

input LikeWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createRecipe(data: RecipeCreateInput!): Recipe!
  createLike(data: LikeCreateInput!): Like!
  createComment(data: CommentCreateInput!): Comment!
  createEquipment(data: EquipmentCreateInput!): Equipment!
  createIngredient(data: IngredientCreateInput!): Ingredient!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateRecipe(data: RecipeUpdateInput!, where: RecipeWhereUniqueInput!): Recipe
  updateLike(data: LikeUpdateInput!, where: LikeWhereUniqueInput!): Like
  updateEquipment(data: EquipmentUpdateInput!, where: EquipmentWhereUniqueInput!): Equipment
  updateIngredient(data: IngredientUpdateInput!, where: IngredientWhereUniqueInput!): Ingredient
  deleteUser(where: UserWhereUniqueInput!): User
  deleteRecipe(where: RecipeWhereUniqueInput!): Recipe
  deleteLike(where: LikeWhereUniqueInput!): Like
  deleteEquipment(where: EquipmentWhereUniqueInput!): Equipment
  deleteIngredient(where: IngredientWhereUniqueInput!): Ingredient
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertRecipe(where: RecipeWhereUniqueInput!, create: RecipeCreateInput!, update: RecipeUpdateInput!): Recipe!
  upsertLike(where: LikeWhereUniqueInput!, create: LikeCreateInput!, update: LikeUpdateInput!): Like!
  upsertEquipment(where: EquipmentWhereUniqueInput!, create: EquipmentCreateInput!, update: EquipmentUpdateInput!): Equipment!
  upsertIngredient(where: IngredientWhereUniqueInput!, create: IngredientCreateInput!, update: IngredientUpdateInput!): Ingredient!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyRecipes(data: RecipeUpdateInput!, where: RecipeWhereInput): BatchPayload!
  updateManyLikes(data: LikeUpdateInput!, where: LikeWhereInput): BatchPayload!
  updateManyComments(data: CommentUpdateInput!, where: CommentWhereInput): BatchPayload!
  updateManyEquipments(data: EquipmentUpdateInput!, where: EquipmentWhereInput): BatchPayload!
  updateManyIngredients(data: IngredientUpdateInput!, where: IngredientWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyRecipes(where: RecipeWhereInput): BatchPayload!
  deleteManyLikes(where: LikeWhereInput): BatchPayload!
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  deleteManyEquipments(where: EquipmentWhereInput): BatchPayload!
  deleteManyIngredients(where: IngredientWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  recipes(where: RecipeWhereInput, orderBy: RecipeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Recipe]!
  likes(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Like]!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  equipments(where: EquipmentWhereInput, orderBy: EquipmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Equipment]!
  ingredients(where: IngredientWhereInput, orderBy: IngredientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Ingredient]!
  user(where: UserWhereUniqueInput!): User
  recipe(where: RecipeWhereUniqueInput!): Recipe
  like(where: LikeWhereUniqueInput!): Like
  equipment(where: EquipmentWhereUniqueInput!): Equipment
  ingredient(where: IngredientWhereUniqueInput!): Ingredient
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  recipesConnection(where: RecipeWhereInput, orderBy: RecipeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RecipeConnection!
  likesConnection(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LikeConnection!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  equipmentsConnection(where: EquipmentWhereInput, orderBy: EquipmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EquipmentConnection!
  ingredientsConnection(where: IngredientWhereInput, orderBy: IngredientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): IngredientConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Recipe implements Node {
  id: ID!
  name: String!
  description: String!
  ingredients(where: IngredientWhereInput, orderBy: IngredientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Ingredient!]
  creator(where: UserWhereInput): User!
  process: String!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  likes(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Like!]
  pictureUrl: String
  price: Float!
  nutrition: String!
  category: String!
  equipments(where: EquipmentWhereInput, orderBy: EquipmentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Equipment!]
}

"""A connection to a list of items."""
type RecipeConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [RecipeEdge]!
  aggregate: AggregateRecipe!
}

input RecipeCreateInput {
  name: String!
  description: String!
  process: String!
  pictureUrl: String
  price: Float!
  nutrition: String!
  category: String!
  ingredients: IngredientCreateManyInput
  creator: UserCreateOneWithoutRecipesInput!
  comments: CommentCreateManyWithoutRecipeInput
  likes: LikeCreateManyWithoutRecipeInput
  equipments: EquipmentCreateManyInput
}

input RecipeCreateManyWithoutCreatorInput {
  create: [RecipeCreateWithoutCreatorInput!]
  connect: [RecipeWhereUniqueInput!]
}

input RecipeCreateOneWithoutCommentsInput {
  create: RecipeCreateWithoutCommentsInput
  connect: RecipeWhereUniqueInput
}

input RecipeCreateOneWithoutLikesInput {
  create: RecipeCreateWithoutLikesInput
  connect: RecipeWhereUniqueInput
}

input RecipeCreateWithoutCommentsInput {
  name: String!
  description: String!
  process: String!
  pictureUrl: String
  price: Float!
  nutrition: String!
  category: String!
  ingredients: IngredientCreateManyInput
  creator: UserCreateOneWithoutRecipesInput!
  likes: LikeCreateManyWithoutRecipeInput
  equipments: EquipmentCreateManyInput
}

input RecipeCreateWithoutCreatorInput {
  name: String!
  description: String!
  process: String!
  pictureUrl: String
  price: Float!
  nutrition: String!
  category: String!
  ingredients: IngredientCreateManyInput
  comments: CommentCreateManyWithoutRecipeInput
  likes: LikeCreateManyWithoutRecipeInput
  equipments: EquipmentCreateManyInput
}

input RecipeCreateWithoutLikesInput {
  name: String!
  description: String!
  process: String!
  pictureUrl: String
  price: Float!
  nutrition: String!
  category: String!
  ingredients: IngredientCreateManyInput
  creator: UserCreateOneWithoutRecipesInput!
  comments: CommentCreateManyWithoutRecipeInput
  equipments: EquipmentCreateManyInput
}

"""An edge in a connection."""
type RecipeEdge {
  """The item at the end of the edge."""
  node: Recipe!

  """A cursor for use in pagination."""
  cursor: String!
}

enum RecipeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  process_ASC
  process_DESC
  pictureUrl_ASC
  pictureUrl_DESC
  price_ASC
  price_DESC
  nutrition_ASC
  nutrition_DESC
  category_ASC
  category_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type RecipePreviousValues {
  id: ID!
  name: String!
  description: String!
  process: String!
  pictureUrl: String
  price: Float!
  nutrition: String!
  category: String!
}

type RecipeSubscriptionPayload {
  mutation: MutationType!
  node: Recipe
  updatedFields: [String!]
  previousValues: RecipePreviousValues
}

input RecipeSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [RecipeSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RecipeSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RecipeSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: RecipeWhereInput
}

input RecipeUpdateInput {
  name: String
  description: String
  process: String
  pictureUrl: String
  price: Float
  nutrition: String
  category: String
  ingredients: IngredientUpdateManyInput
  creator: UserUpdateOneWithoutRecipesInput
  comments: CommentUpdateManyWithoutRecipeInput
  likes: LikeUpdateManyWithoutRecipeInput
  equipments: EquipmentUpdateManyInput
}

input RecipeUpdateManyWithoutCreatorInput {
  create: [RecipeCreateWithoutCreatorInput!]
  connect: [RecipeWhereUniqueInput!]
  disconnect: [RecipeWhereUniqueInput!]
  delete: [RecipeWhereUniqueInput!]
  update: [RecipeUpdateWithWhereUniqueWithoutCreatorInput!]
  upsert: [RecipeUpsertWithWhereUniqueWithoutCreatorInput!]
}

input RecipeUpdateOneWithoutCommentsInput {
  create: RecipeCreateWithoutCommentsInput
  connect: RecipeWhereUniqueInput
  delete: Boolean
  update: RecipeUpdateWithoutCommentsDataInput
  upsert: RecipeUpsertWithoutCommentsInput
}

input RecipeUpdateOneWithoutLikesInput {
  create: RecipeCreateWithoutLikesInput
  connect: RecipeWhereUniqueInput
  delete: Boolean
  update: RecipeUpdateWithoutLikesDataInput
  upsert: RecipeUpsertWithoutLikesInput
}

input RecipeUpdateWithoutCommentsDataInput {
  name: String
  description: String
  process: String
  pictureUrl: String
  price: Float
  nutrition: String
  category: String
  ingredients: IngredientUpdateManyInput
  creator: UserUpdateOneWithoutRecipesInput
  likes: LikeUpdateManyWithoutRecipeInput
  equipments: EquipmentUpdateManyInput
}

input RecipeUpdateWithoutCreatorDataInput {
  name: String
  description: String
  process: String
  pictureUrl: String
  price: Float
  nutrition: String
  category: String
  ingredients: IngredientUpdateManyInput
  comments: CommentUpdateManyWithoutRecipeInput
  likes: LikeUpdateManyWithoutRecipeInput
  equipments: EquipmentUpdateManyInput
}

input RecipeUpdateWithoutLikesDataInput {
  name: String
  description: String
  process: String
  pictureUrl: String
  price: Float
  nutrition: String
  category: String
  ingredients: IngredientUpdateManyInput
  creator: UserUpdateOneWithoutRecipesInput
  comments: CommentUpdateManyWithoutRecipeInput
  equipments: EquipmentUpdateManyInput
}

input RecipeUpdateWithWhereUniqueWithoutCreatorInput {
  where: RecipeWhereUniqueInput!
  data: RecipeUpdateWithoutCreatorDataInput!
}

input RecipeUpsertWithoutCommentsInput {
  update: RecipeUpdateWithoutCommentsDataInput!
  create: RecipeCreateWithoutCommentsInput!
}

input RecipeUpsertWithoutLikesInput {
  update: RecipeUpdateWithoutLikesDataInput!
  create: RecipeCreateWithoutLikesInput!
}

input RecipeUpsertWithWhereUniqueWithoutCreatorInput {
  where: RecipeWhereUniqueInput!
  update: RecipeUpdateWithoutCreatorDataInput!
  create: RecipeCreateWithoutCreatorInput!
}

input RecipeWhereInput {
  """Logical AND on all given filters."""
  AND: [RecipeWhereInput!]

  """Logical OR on all given filters."""
  OR: [RecipeWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RecipeWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  process: String

  """All values that are not equal to given value."""
  process_not: String

  """All values that are contained in given list."""
  process_in: [String!]

  """All values that are not contained in given list."""
  process_not_in: [String!]

  """All values less than the given value."""
  process_lt: String

  """All values less than or equal the given value."""
  process_lte: String

  """All values greater than the given value."""
  process_gt: String

  """All values greater than or equal the given value."""
  process_gte: String

  """All values containing the given string."""
  process_contains: String

  """All values not containing the given string."""
  process_not_contains: String

  """All values starting with the given string."""
  process_starts_with: String

  """All values not starting with the given string."""
  process_not_starts_with: String

  """All values ending with the given string."""
  process_ends_with: String

  """All values not ending with the given string."""
  process_not_ends_with: String
  pictureUrl: String

  """All values that are not equal to given value."""
  pictureUrl_not: String

  """All values that are contained in given list."""
  pictureUrl_in: [String!]

  """All values that are not contained in given list."""
  pictureUrl_not_in: [String!]

  """All values less than the given value."""
  pictureUrl_lt: String

  """All values less than or equal the given value."""
  pictureUrl_lte: String

  """All values greater than the given value."""
  pictureUrl_gt: String

  """All values greater than or equal the given value."""
  pictureUrl_gte: String

  """All values containing the given string."""
  pictureUrl_contains: String

  """All values not containing the given string."""
  pictureUrl_not_contains: String

  """All values starting with the given string."""
  pictureUrl_starts_with: String

  """All values not starting with the given string."""
  pictureUrl_not_starts_with: String

  """All values ending with the given string."""
  pictureUrl_ends_with: String

  """All values not ending with the given string."""
  pictureUrl_not_ends_with: String
  price: Float

  """All values that are not equal to given value."""
  price_not: Float

  """All values that are contained in given list."""
  price_in: [Float!]

  """All values that are not contained in given list."""
  price_not_in: [Float!]

  """All values less than the given value."""
  price_lt: Float

  """All values less than or equal the given value."""
  price_lte: Float

  """All values greater than the given value."""
  price_gt: Float

  """All values greater than or equal the given value."""
  price_gte: Float
  nutrition: String

  """All values that are not equal to given value."""
  nutrition_not: String

  """All values that are contained in given list."""
  nutrition_in: [String!]

  """All values that are not contained in given list."""
  nutrition_not_in: [String!]

  """All values less than the given value."""
  nutrition_lt: String

  """All values less than or equal the given value."""
  nutrition_lte: String

  """All values greater than the given value."""
  nutrition_gt: String

  """All values greater than or equal the given value."""
  nutrition_gte: String

  """All values containing the given string."""
  nutrition_contains: String

  """All values not containing the given string."""
  nutrition_not_contains: String

  """All values starting with the given string."""
  nutrition_starts_with: String

  """All values not starting with the given string."""
  nutrition_not_starts_with: String

  """All values ending with the given string."""
  nutrition_ends_with: String

  """All values not ending with the given string."""
  nutrition_not_ends_with: String
  category: String

  """All values that are not equal to given value."""
  category_not: String

  """All values that are contained in given list."""
  category_in: [String!]

  """All values that are not contained in given list."""
  category_not_in: [String!]

  """All values less than the given value."""
  category_lt: String

  """All values less than or equal the given value."""
  category_lte: String

  """All values greater than the given value."""
  category_gt: String

  """All values greater than or equal the given value."""
  category_gte: String

  """All values containing the given string."""
  category_contains: String

  """All values not containing the given string."""
  category_not_contains: String

  """All values starting with the given string."""
  category_starts_with: String

  """All values not starting with the given string."""
  category_not_starts_with: String

  """All values ending with the given string."""
  category_ends_with: String

  """All values not ending with the given string."""
  category_not_ends_with: String
  ingredients_every: IngredientWhereInput
  ingredients_some: IngredientWhereInput
  ingredients_none: IngredientWhereInput
  creator: UserWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
  likes_every: LikeWhereInput
  likes_some: LikeWhereInput
  likes_none: LikeWhereInput
  equipments_every: EquipmentWhereInput
  equipments_some: EquipmentWhereInput
  equipments_none: EquipmentWhereInput
}

input RecipeWhereUniqueInput {
  id: ID
  name: String
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  recipe(where: RecipeSubscriptionWhereInput): RecipeSubscriptionPayload
  like(where: LikeSubscriptionWhereInput): LikeSubscriptionPayload
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  equipment(where: EquipmentSubscriptionWhereInput): EquipmentSubscriptionPayload
  ingredient(where: IngredientSubscriptionWhereInput): IngredientSubscriptionPayload
}

type User implements Node {
  id: ID!
  email: String!
  username: String!
  name: String!
  password: String!
  recipes(where: RecipeWhereInput, orderBy: RecipeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Recipe!]
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  likes(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Like!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  username: String!
  name: String!
  password: String!
  recipes: RecipeCreateManyWithoutCreatorInput
  comments: CommentCreateManyWithoutAuthorInput
  likes: LikeCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutCommentsInput {
  create: UserCreateWithoutCommentsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutLikesInput {
  create: UserCreateWithoutLikesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutRecipesInput {
  create: UserCreateWithoutRecipesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutCommentsInput {
  email: String!
  username: String!
  name: String!
  password: String!
  recipes: RecipeCreateManyWithoutCreatorInput
  likes: LikeCreateManyWithoutAuthorInput
}

input UserCreateWithoutLikesInput {
  email: String!
  username: String!
  name: String!
  password: String!
  recipes: RecipeCreateManyWithoutCreatorInput
  comments: CommentCreateManyWithoutAuthorInput
}

input UserCreateWithoutRecipesInput {
  email: String!
  username: String!
  name: String!
  password: String!
  comments: CommentCreateManyWithoutAuthorInput
  likes: LikeCreateManyWithoutAuthorInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  username_ASC
  username_DESC
  name_ASC
  name_DESC
  password_ASC
  password_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  username: String!
  name: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  email: String
  username: String
  name: String
  password: String
  recipes: RecipeUpdateManyWithoutCreatorInput
  comments: CommentUpdateManyWithoutAuthorInput
  likes: LikeUpdateManyWithoutAuthorInput
}

input UserUpdateOneWithoutCommentsInput {
  create: UserCreateWithoutCommentsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutCommentsDataInput
  upsert: UserUpsertWithoutCommentsInput
}

input UserUpdateOneWithoutLikesInput {
  create: UserCreateWithoutLikesInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutLikesDataInput
  upsert: UserUpsertWithoutLikesInput
}

input UserUpdateOneWithoutRecipesInput {
  create: UserCreateWithoutRecipesInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutRecipesDataInput
  upsert: UserUpsertWithoutRecipesInput
}

input UserUpdateWithoutCommentsDataInput {
  email: String
  username: String
  name: String
  password: String
  recipes: RecipeUpdateManyWithoutCreatorInput
  likes: LikeUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutLikesDataInput {
  email: String
  username: String
  name: String
  password: String
  recipes: RecipeUpdateManyWithoutCreatorInput
  comments: CommentUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutRecipesDataInput {
  email: String
  username: String
  name: String
  password: String
  comments: CommentUpdateManyWithoutAuthorInput
  likes: LikeUpdateManyWithoutAuthorInput
}

input UserUpsertWithoutCommentsInput {
  update: UserUpdateWithoutCommentsDataInput!
  create: UserCreateWithoutCommentsInput!
}

input UserUpsertWithoutLikesInput {
  update: UserUpdateWithoutLikesDataInput!
  create: UserCreateWithoutLikesInput!
}

input UserUpsertWithoutRecipesInput {
  update: UserUpdateWithoutRecipesDataInput!
  create: UserCreateWithoutRecipesInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  username: String

  """All values that are not equal to given value."""
  username_not: String

  """All values that are contained in given list."""
  username_in: [String!]

  """All values that are not contained in given list."""
  username_not_in: [String!]

  """All values less than the given value."""
  username_lt: String

  """All values less than or equal the given value."""
  username_lte: String

  """All values greater than the given value."""
  username_gt: String

  """All values greater than or equal the given value."""
  username_gte: String

  """All values containing the given string."""
  username_contains: String

  """All values not containing the given string."""
  username_not_contains: String

  """All values starting with the given string."""
  username_starts_with: String

  """All values not starting with the given string."""
  username_not_starts_with: String

  """All values ending with the given string."""
  username_ends_with: String

  """All values not ending with the given string."""
  username_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  recipes_every: RecipeWhereInput
  recipes_some: RecipeWhereInput
  recipes_none: RecipeWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
  likes_every: LikeWhereInput
  likes_some: LikeWhereInput
  likes_none: LikeWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
  username: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type CommentOrderByInput =   'text_ASC' |
  'text_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type EquipmentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type IngredientOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'price_ASC' |
  'price_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type LikeOrderByInput =   'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type RecipeOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'process_ASC' |
  'process_DESC' |
  'pictureUrl_ASC' |
  'pictureUrl_DESC' |
  'price_ASC' |
  'price_DESC' |
  'nutrition_ASC' |
  'nutrition_DESC' |
  'category_ASC' |
  'category_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'username_ASC' |
  'username_DESC' |
  'name_ASC' |
  'name_DESC' |
  'password_ASC' |
  'password_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export interface CommentCreateInput {
  text: String
  author: UserCreateOneWithoutCommentsInput
  recipe: RecipeCreateOneWithoutCommentsInput
}

export interface CommentCreateManyWithoutAuthorInput {
  create?: CommentCreateWithoutAuthorInput[] | CommentCreateWithoutAuthorInput | null
}

export interface CommentCreateManyWithoutRecipeInput {
  create?: CommentCreateWithoutRecipeInput[] | CommentCreateWithoutRecipeInput | null
}

export interface CommentCreateWithoutAuthorInput {
  text: String
  recipe: RecipeCreateOneWithoutCommentsInput
}

export interface CommentCreateWithoutRecipeInput {
  text: String
  author: UserCreateOneWithoutCommentsInput
}

export interface CommentSubscriptionWhereInput {
  AND?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput | null
  OR?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput | null
  NOT?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: CommentWhereInput | null
}

export interface CommentUpdateInput {
  text?: String | null
  author?: UserUpdateOneWithoutCommentsInput | null
  recipe?: RecipeUpdateOneWithoutCommentsInput | null
}

export interface CommentUpdateManyWithoutAuthorInput {
  create?: CommentCreateWithoutAuthorInput[] | CommentCreateWithoutAuthorInput | null
}

export interface CommentUpdateManyWithoutRecipeInput {
  create?: CommentCreateWithoutRecipeInput[] | CommentCreateWithoutRecipeInput | null
}

export interface CommentWhereInput {
  AND?: CommentWhereInput[] | CommentWhereInput | null
  OR?: CommentWhereInput[] | CommentWhereInput | null
  NOT?: CommentWhereInput[] | CommentWhereInput | null
  text?: String | null
  text_not?: String | null
  text_in?: String[] | String | null
  text_not_in?: String[] | String | null
  text_lt?: String | null
  text_lte?: String | null
  text_gt?: String | null
  text_gte?: String | null
  text_contains?: String | null
  text_not_contains?: String | null
  text_starts_with?: String | null
  text_not_starts_with?: String | null
  text_ends_with?: String | null
  text_not_ends_with?: String | null
  author?: UserWhereInput | null
  recipe?: RecipeWhereInput | null
}

export interface EquipmentCreateInput {
  name: String
}

export interface EquipmentCreateManyInput {
  create?: EquipmentCreateInput[] | EquipmentCreateInput | null
  connect?: EquipmentWhereUniqueInput[] | EquipmentWhereUniqueInput | null
}

export interface EquipmentSubscriptionWhereInput {
  AND?: EquipmentSubscriptionWhereInput[] | EquipmentSubscriptionWhereInput | null
  OR?: EquipmentSubscriptionWhereInput[] | EquipmentSubscriptionWhereInput | null
  NOT?: EquipmentSubscriptionWhereInput[] | EquipmentSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: EquipmentWhereInput | null
}

export interface EquipmentUpdateDataInput {
  name?: String | null
}

export interface EquipmentUpdateInput {
  name?: String | null
}

export interface EquipmentUpdateManyInput {
  create?: EquipmentCreateInput[] | EquipmentCreateInput | null
  connect?: EquipmentWhereUniqueInput[] | EquipmentWhereUniqueInput | null
  disconnect?: EquipmentWhereUniqueInput[] | EquipmentWhereUniqueInput | null
  delete?: EquipmentWhereUniqueInput[] | EquipmentWhereUniqueInput | null
  update?: EquipmentUpdateWithWhereUniqueNestedInput[] | EquipmentUpdateWithWhereUniqueNestedInput | null
  upsert?: EquipmentUpsertWithWhereUniqueNestedInput[] | EquipmentUpsertWithWhereUniqueNestedInput | null
}

export interface EquipmentUpdateWithWhereUniqueNestedInput {
  where: EquipmentWhereUniqueInput
  data: EquipmentUpdateDataInput
}

export interface EquipmentUpsertWithWhereUniqueNestedInput {
  where: EquipmentWhereUniqueInput
  update: EquipmentUpdateDataInput
  create: EquipmentCreateInput
}

export interface EquipmentWhereInput {
  AND?: EquipmentWhereInput[] | EquipmentWhereInput | null
  OR?: EquipmentWhereInput[] | EquipmentWhereInput | null
  NOT?: EquipmentWhereInput[] | EquipmentWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  _MagicalBackRelation_EquipmentToRecipe_every?: RecipeWhereInput | null
  _MagicalBackRelation_EquipmentToRecipe_some?: RecipeWhereInput | null
  _MagicalBackRelation_EquipmentToRecipe_none?: RecipeWhereInput | null
}

export interface EquipmentWhereUniqueInput {
  id?: ID_Input | null
  name?: String | null
}

export interface IngredientCreateInput {
  name: String
  price: Float
}

export interface IngredientCreateManyInput {
  create?: IngredientCreateInput[] | IngredientCreateInput | null
  connect?: IngredientWhereUniqueInput[] | IngredientWhereUniqueInput | null
}

export interface IngredientSubscriptionWhereInput {
  AND?: IngredientSubscriptionWhereInput[] | IngredientSubscriptionWhereInput | null
  OR?: IngredientSubscriptionWhereInput[] | IngredientSubscriptionWhereInput | null
  NOT?: IngredientSubscriptionWhereInput[] | IngredientSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: IngredientWhereInput | null
}

export interface IngredientUpdateDataInput {
  name?: String | null
  price?: Float | null
}

export interface IngredientUpdateInput {
  name?: String | null
  price?: Float | null
}

export interface IngredientUpdateManyInput {
  create?: IngredientCreateInput[] | IngredientCreateInput | null
  connect?: IngredientWhereUniqueInput[] | IngredientWhereUniqueInput | null
  disconnect?: IngredientWhereUniqueInput[] | IngredientWhereUniqueInput | null
  delete?: IngredientWhereUniqueInput[] | IngredientWhereUniqueInput | null
  update?: IngredientUpdateWithWhereUniqueNestedInput[] | IngredientUpdateWithWhereUniqueNestedInput | null
  upsert?: IngredientUpsertWithWhereUniqueNestedInput[] | IngredientUpsertWithWhereUniqueNestedInput | null
}

export interface IngredientUpdateWithWhereUniqueNestedInput {
  where: IngredientWhereUniqueInput
  data: IngredientUpdateDataInput
}

export interface IngredientUpsertWithWhereUniqueNestedInput {
  where: IngredientWhereUniqueInput
  update: IngredientUpdateDataInput
  create: IngredientCreateInput
}

export interface IngredientWhereInput {
  AND?: IngredientWhereInput[] | IngredientWhereInput | null
  OR?: IngredientWhereInput[] | IngredientWhereInput | null
  NOT?: IngredientWhereInput[] | IngredientWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  price?: Float | null
  price_not?: Float | null
  price_in?: Float[] | Float | null
  price_not_in?: Float[] | Float | null
  price_lt?: Float | null
  price_lte?: Float | null
  price_gt?: Float | null
  price_gte?: Float | null
  _MagicalBackRelation_IngredientToRecipe_every?: RecipeWhereInput | null
  _MagicalBackRelation_IngredientToRecipe_some?: RecipeWhereInput | null
  _MagicalBackRelation_IngredientToRecipe_none?: RecipeWhereInput | null
}

export interface IngredientWhereUniqueInput {
  id?: ID_Input | null
  name?: String | null
}

export interface LikeCreateInput {
  author: UserCreateOneWithoutLikesInput
  recipe: RecipeCreateOneWithoutLikesInput
}

export interface LikeCreateManyWithoutAuthorInput {
  create?: LikeCreateWithoutAuthorInput[] | LikeCreateWithoutAuthorInput | null
  connect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
}

export interface LikeCreateManyWithoutRecipeInput {
  create?: LikeCreateWithoutRecipeInput[] | LikeCreateWithoutRecipeInput | null
  connect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
}

export interface LikeCreateWithoutAuthorInput {
  recipe: RecipeCreateOneWithoutLikesInput
}

export interface LikeCreateWithoutRecipeInput {
  author: UserCreateOneWithoutLikesInput
}

export interface LikeSubscriptionWhereInput {
  AND?: LikeSubscriptionWhereInput[] | LikeSubscriptionWhereInput | null
  OR?: LikeSubscriptionWhereInput[] | LikeSubscriptionWhereInput | null
  NOT?: LikeSubscriptionWhereInput[] | LikeSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: LikeWhereInput | null
}

export interface LikeUpdateInput {
  author?: UserUpdateOneWithoutLikesInput | null
  recipe?: RecipeUpdateOneWithoutLikesInput | null
}

export interface LikeUpdateManyWithoutAuthorInput {
  create?: LikeCreateWithoutAuthorInput[] | LikeCreateWithoutAuthorInput | null
  connect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
  disconnect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
  delete?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
  update?: LikeUpdateWithWhereUniqueWithoutAuthorInput[] | LikeUpdateWithWhereUniqueWithoutAuthorInput | null
  upsert?: LikeUpsertWithWhereUniqueWithoutAuthorInput[] | LikeUpsertWithWhereUniqueWithoutAuthorInput | null
}

export interface LikeUpdateManyWithoutRecipeInput {
  create?: LikeCreateWithoutRecipeInput[] | LikeCreateWithoutRecipeInput | null
  connect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
  disconnect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
  delete?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
  update?: LikeUpdateWithWhereUniqueWithoutRecipeInput[] | LikeUpdateWithWhereUniqueWithoutRecipeInput | null
  upsert?: LikeUpsertWithWhereUniqueWithoutRecipeInput[] | LikeUpsertWithWhereUniqueWithoutRecipeInput | null
}

export interface LikeUpdateWithoutAuthorDataInput {
  recipe?: RecipeUpdateOneWithoutLikesInput | null
}

export interface LikeUpdateWithoutRecipeDataInput {
  author?: UserUpdateOneWithoutLikesInput | null
}

export interface LikeUpdateWithWhereUniqueWithoutAuthorInput {
  where: LikeWhereUniqueInput
  data: LikeUpdateWithoutAuthorDataInput
}

export interface LikeUpdateWithWhereUniqueWithoutRecipeInput {
  where: LikeWhereUniqueInput
  data: LikeUpdateWithoutRecipeDataInput
}

export interface LikeUpsertWithWhereUniqueWithoutAuthorInput {
  where: LikeWhereUniqueInput
  update: LikeUpdateWithoutAuthorDataInput
  create: LikeCreateWithoutAuthorInput
}

export interface LikeUpsertWithWhereUniqueWithoutRecipeInput {
  where: LikeWhereUniqueInput
  update: LikeUpdateWithoutRecipeDataInput
  create: LikeCreateWithoutRecipeInput
}

export interface LikeWhereInput {
  AND?: LikeWhereInput[] | LikeWhereInput | null
  OR?: LikeWhereInput[] | LikeWhereInput | null
  NOT?: LikeWhereInput[] | LikeWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  author?: UserWhereInput | null
  recipe?: RecipeWhereInput | null
}

export interface LikeWhereUniqueInput {
  id?: ID_Input | null
}

export interface RecipeCreateInput {
  name: String
  description: String
  process: String
  pictureUrl?: String | null
  price: Float
  nutrition: String
  category: String
  ingredients?: IngredientCreateManyInput | null
  creator: UserCreateOneWithoutRecipesInput
  comments?: CommentCreateManyWithoutRecipeInput | null
  likes?: LikeCreateManyWithoutRecipeInput | null
  equipments?: EquipmentCreateManyInput | null
}

export interface RecipeCreateManyWithoutCreatorInput {
  create?: RecipeCreateWithoutCreatorInput[] | RecipeCreateWithoutCreatorInput | null
  connect?: RecipeWhereUniqueInput[] | RecipeWhereUniqueInput | null
}

export interface RecipeCreateOneWithoutCommentsInput {
  create?: RecipeCreateWithoutCommentsInput | null
  connect?: RecipeWhereUniqueInput | null
}

export interface RecipeCreateOneWithoutLikesInput {
  create?: RecipeCreateWithoutLikesInput | null
  connect?: RecipeWhereUniqueInput | null
}

export interface RecipeCreateWithoutCommentsInput {
  name: String
  description: String
  process: String
  pictureUrl?: String | null
  price: Float
  nutrition: String
  category: String
  ingredients?: IngredientCreateManyInput | null
  creator: UserCreateOneWithoutRecipesInput
  likes?: LikeCreateManyWithoutRecipeInput | null
  equipments?: EquipmentCreateManyInput | null
}

export interface RecipeCreateWithoutCreatorInput {
  name: String
  description: String
  process: String
  pictureUrl?: String | null
  price: Float
  nutrition: String
  category: String
  ingredients?: IngredientCreateManyInput | null
  comments?: CommentCreateManyWithoutRecipeInput | null
  likes?: LikeCreateManyWithoutRecipeInput | null
  equipments?: EquipmentCreateManyInput | null
}

export interface RecipeCreateWithoutLikesInput {
  name: String
  description: String
  process: String
  pictureUrl?: String | null
  price: Float
  nutrition: String
  category: String
  ingredients?: IngredientCreateManyInput | null
  creator: UserCreateOneWithoutRecipesInput
  comments?: CommentCreateManyWithoutRecipeInput | null
  equipments?: EquipmentCreateManyInput | null
}

export interface RecipeSubscriptionWhereInput {
  AND?: RecipeSubscriptionWhereInput[] | RecipeSubscriptionWhereInput | null
  OR?: RecipeSubscriptionWhereInput[] | RecipeSubscriptionWhereInput | null
  NOT?: RecipeSubscriptionWhereInput[] | RecipeSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: RecipeWhereInput | null
}

export interface RecipeUpdateInput {
  name?: String | null
  description?: String | null
  process?: String | null
  pictureUrl?: String | null
  price?: Float | null
  nutrition?: String | null
  category?: String | null
  ingredients?: IngredientUpdateManyInput | null
  creator?: UserUpdateOneWithoutRecipesInput | null
  comments?: CommentUpdateManyWithoutRecipeInput | null
  likes?: LikeUpdateManyWithoutRecipeInput | null
  equipments?: EquipmentUpdateManyInput | null
}

export interface RecipeUpdateManyWithoutCreatorInput {
  create?: RecipeCreateWithoutCreatorInput[] | RecipeCreateWithoutCreatorInput | null
  connect?: RecipeWhereUniqueInput[] | RecipeWhereUniqueInput | null
  disconnect?: RecipeWhereUniqueInput[] | RecipeWhereUniqueInput | null
  delete?: RecipeWhereUniqueInput[] | RecipeWhereUniqueInput | null
  update?: RecipeUpdateWithWhereUniqueWithoutCreatorInput[] | RecipeUpdateWithWhereUniqueWithoutCreatorInput | null
  upsert?: RecipeUpsertWithWhereUniqueWithoutCreatorInput[] | RecipeUpsertWithWhereUniqueWithoutCreatorInput | null
}

export interface RecipeUpdateOneWithoutCommentsInput {
  create?: RecipeCreateWithoutCommentsInput | null
  connect?: RecipeWhereUniqueInput | null
  delete?: Boolean | null
  update?: RecipeUpdateWithoutCommentsDataInput | null
  upsert?: RecipeUpsertWithoutCommentsInput | null
}

export interface RecipeUpdateOneWithoutLikesInput {
  create?: RecipeCreateWithoutLikesInput | null
  connect?: RecipeWhereUniqueInput | null
  delete?: Boolean | null
  update?: RecipeUpdateWithoutLikesDataInput | null
  upsert?: RecipeUpsertWithoutLikesInput | null
}

export interface RecipeUpdateWithoutCommentsDataInput {
  name?: String | null
  description?: String | null
  process?: String | null
  pictureUrl?: String | null
  price?: Float | null
  nutrition?: String | null
  category?: String | null
  ingredients?: IngredientUpdateManyInput | null
  creator?: UserUpdateOneWithoutRecipesInput | null
  likes?: LikeUpdateManyWithoutRecipeInput | null
  equipments?: EquipmentUpdateManyInput | null
}

export interface RecipeUpdateWithoutCreatorDataInput {
  name?: String | null
  description?: String | null
  process?: String | null
  pictureUrl?: String | null
  price?: Float | null
  nutrition?: String | null
  category?: String | null
  ingredients?: IngredientUpdateManyInput | null
  comments?: CommentUpdateManyWithoutRecipeInput | null
  likes?: LikeUpdateManyWithoutRecipeInput | null
  equipments?: EquipmentUpdateManyInput | null
}

export interface RecipeUpdateWithoutLikesDataInput {
  name?: String | null
  description?: String | null
  process?: String | null
  pictureUrl?: String | null
  price?: Float | null
  nutrition?: String | null
  category?: String | null
  ingredients?: IngredientUpdateManyInput | null
  creator?: UserUpdateOneWithoutRecipesInput | null
  comments?: CommentUpdateManyWithoutRecipeInput | null
  equipments?: EquipmentUpdateManyInput | null
}

export interface RecipeUpdateWithWhereUniqueWithoutCreatorInput {
  where: RecipeWhereUniqueInput
  data: RecipeUpdateWithoutCreatorDataInput
}

export interface RecipeUpsertWithoutCommentsInput {
  update: RecipeUpdateWithoutCommentsDataInput
  create: RecipeCreateWithoutCommentsInput
}

export interface RecipeUpsertWithoutLikesInput {
  update: RecipeUpdateWithoutLikesDataInput
  create: RecipeCreateWithoutLikesInput
}

export interface RecipeUpsertWithWhereUniqueWithoutCreatorInput {
  where: RecipeWhereUniqueInput
  update: RecipeUpdateWithoutCreatorDataInput
  create: RecipeCreateWithoutCreatorInput
}

export interface RecipeWhereInput {
  AND?: RecipeWhereInput[] | RecipeWhereInput | null
  OR?: RecipeWhereInput[] | RecipeWhereInput | null
  NOT?: RecipeWhereInput[] | RecipeWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  process?: String | null
  process_not?: String | null
  process_in?: String[] | String | null
  process_not_in?: String[] | String | null
  process_lt?: String | null
  process_lte?: String | null
  process_gt?: String | null
  process_gte?: String | null
  process_contains?: String | null
  process_not_contains?: String | null
  process_starts_with?: String | null
  process_not_starts_with?: String | null
  process_ends_with?: String | null
  process_not_ends_with?: String | null
  pictureUrl?: String | null
  pictureUrl_not?: String | null
  pictureUrl_in?: String[] | String | null
  pictureUrl_not_in?: String[] | String | null
  pictureUrl_lt?: String | null
  pictureUrl_lte?: String | null
  pictureUrl_gt?: String | null
  pictureUrl_gte?: String | null
  pictureUrl_contains?: String | null
  pictureUrl_not_contains?: String | null
  pictureUrl_starts_with?: String | null
  pictureUrl_not_starts_with?: String | null
  pictureUrl_ends_with?: String | null
  pictureUrl_not_ends_with?: String | null
  price?: Float | null
  price_not?: Float | null
  price_in?: Float[] | Float | null
  price_not_in?: Float[] | Float | null
  price_lt?: Float | null
  price_lte?: Float | null
  price_gt?: Float | null
  price_gte?: Float | null
  nutrition?: String | null
  nutrition_not?: String | null
  nutrition_in?: String[] | String | null
  nutrition_not_in?: String[] | String | null
  nutrition_lt?: String | null
  nutrition_lte?: String | null
  nutrition_gt?: String | null
  nutrition_gte?: String | null
  nutrition_contains?: String | null
  nutrition_not_contains?: String | null
  nutrition_starts_with?: String | null
  nutrition_not_starts_with?: String | null
  nutrition_ends_with?: String | null
  nutrition_not_ends_with?: String | null
  category?: String | null
  category_not?: String | null
  category_in?: String[] | String | null
  category_not_in?: String[] | String | null
  category_lt?: String | null
  category_lte?: String | null
  category_gt?: String | null
  category_gte?: String | null
  category_contains?: String | null
  category_not_contains?: String | null
  category_starts_with?: String | null
  category_not_starts_with?: String | null
  category_ends_with?: String | null
  category_not_ends_with?: String | null
  ingredients_every?: IngredientWhereInput | null
  ingredients_some?: IngredientWhereInput | null
  ingredients_none?: IngredientWhereInput | null
  creator?: UserWhereInput | null
  comments_every?: CommentWhereInput | null
  comments_some?: CommentWhereInput | null
  comments_none?: CommentWhereInput | null
  likes_every?: LikeWhereInput | null
  likes_some?: LikeWhereInput | null
  likes_none?: LikeWhereInput | null
  equipments_every?: EquipmentWhereInput | null
  equipments_some?: EquipmentWhereInput | null
  equipments_none?: EquipmentWhereInput | null
}

export interface RecipeWhereUniqueInput {
  id?: ID_Input | null
  name?: String | null
}

export interface UserCreateInput {
  email: String
  username: String
  name: String
  password: String
  recipes?: RecipeCreateManyWithoutCreatorInput | null
  comments?: CommentCreateManyWithoutAuthorInput | null
  likes?: LikeCreateManyWithoutAuthorInput | null
}

export interface UserCreateOneWithoutCommentsInput {
  create?: UserCreateWithoutCommentsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutLikesInput {
  create?: UserCreateWithoutLikesInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutRecipesInput {
  create?: UserCreateWithoutRecipesInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutCommentsInput {
  email: String
  username: String
  name: String
  password: String
  recipes?: RecipeCreateManyWithoutCreatorInput | null
  likes?: LikeCreateManyWithoutAuthorInput | null
}

export interface UserCreateWithoutLikesInput {
  email: String
  username: String
  name: String
  password: String
  recipes?: RecipeCreateManyWithoutCreatorInput | null
  comments?: CommentCreateManyWithoutAuthorInput | null
}

export interface UserCreateWithoutRecipesInput {
  email: String
  username: String
  name: String
  password: String
  comments?: CommentCreateManyWithoutAuthorInput | null
  likes?: LikeCreateManyWithoutAuthorInput | null
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
}

export interface UserUpdateInput {
  email?: String | null
  username?: String | null
  name?: String | null
  password?: String | null
  recipes?: RecipeUpdateManyWithoutCreatorInput | null
  comments?: CommentUpdateManyWithoutAuthorInput | null
  likes?: LikeUpdateManyWithoutAuthorInput | null
}

export interface UserUpdateOneWithoutCommentsInput {
  create?: UserCreateWithoutCommentsInput | null
  connect?: UserWhereUniqueInput | null
  delete?: Boolean | null
  update?: UserUpdateWithoutCommentsDataInput | null
  upsert?: UserUpsertWithoutCommentsInput | null
}

export interface UserUpdateOneWithoutLikesInput {
  create?: UserCreateWithoutLikesInput | null
  connect?: UserWhereUniqueInput | null
  delete?: Boolean | null
  update?: UserUpdateWithoutLikesDataInput | null
  upsert?: UserUpsertWithoutLikesInput | null
}

export interface UserUpdateOneWithoutRecipesInput {
  create?: UserCreateWithoutRecipesInput | null
  connect?: UserWhereUniqueInput | null
  delete?: Boolean | null
  update?: UserUpdateWithoutRecipesDataInput | null
  upsert?: UserUpsertWithoutRecipesInput | null
}

export interface UserUpdateWithoutCommentsDataInput {
  email?: String | null
  username?: String | null
  name?: String | null
  password?: String | null
  recipes?: RecipeUpdateManyWithoutCreatorInput | null
  likes?: LikeUpdateManyWithoutAuthorInput | null
}

export interface UserUpdateWithoutLikesDataInput {
  email?: String | null
  username?: String | null
  name?: String | null
  password?: String | null
  recipes?: RecipeUpdateManyWithoutCreatorInput | null
  comments?: CommentUpdateManyWithoutAuthorInput | null
}

export interface UserUpdateWithoutRecipesDataInput {
  email?: String | null
  username?: String | null
  name?: String | null
  password?: String | null
  comments?: CommentUpdateManyWithoutAuthorInput | null
  likes?: LikeUpdateManyWithoutAuthorInput | null
}

export interface UserUpsertWithoutCommentsInput {
  update: UserUpdateWithoutCommentsDataInput
  create: UserCreateWithoutCommentsInput
}

export interface UserUpsertWithoutLikesInput {
  update: UserUpdateWithoutLikesDataInput
  create: UserCreateWithoutLikesInput
}

export interface UserUpsertWithoutRecipesInput {
  update: UserUpdateWithoutRecipesDataInput
  create: UserCreateWithoutRecipesInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput | null
  OR?: UserWhereInput[] | UserWhereInput | null
  NOT?: UserWhereInput[] | UserWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  username?: String | null
  username_not?: String | null
  username_in?: String[] | String | null
  username_not_in?: String[] | String | null
  username_lt?: String | null
  username_lte?: String | null
  username_gt?: String | null
  username_gte?: String | null
  username_contains?: String | null
  username_not_contains?: String | null
  username_starts_with?: String | null
  username_not_starts_with?: String | null
  username_ends_with?: String | null
  username_not_ends_with?: String | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  password?: String | null
  password_not?: String | null
  password_in?: String[] | String | null
  password_not_in?: String[] | String | null
  password_lt?: String | null
  password_lte?: String | null
  password_gt?: String | null
  password_gte?: String | null
  password_contains?: String | null
  password_not_contains?: String | null
  password_starts_with?: String | null
  password_not_starts_with?: String | null
  password_ends_with?: String | null
  password_not_ends_with?: String | null
  recipes_every?: RecipeWhereInput | null
  recipes_some?: RecipeWhereInput | null
  recipes_none?: RecipeWhereInput | null
  comments_every?: CommentWhereInput | null
  comments_some?: CommentWhereInput | null
  comments_none?: CommentWhereInput | null
  likes_every?: LikeWhereInput | null
  likes_some?: LikeWhereInput | null
  likes_none?: LikeWhereInput | null
}

export interface UserWhereUniqueInput {
  id?: ID_Input | null
  email?: String | null
  username?: String | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateComment {
  count: Int
}

export interface AggregateEquipment {
  count: Int
}

export interface AggregateIngredient {
  count: Int
}

export interface AggregateLike {
  count: Int
}

export interface AggregateRecipe {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface Comment {
  text: String
  author: User
  recipe: Recipe
}

/*
 * A connection to a list of items.

 */
export interface CommentConnection {
  pageInfo: PageInfo
  edges: Array<CommentEdge | null>
  aggregate: AggregateComment
}

/*
 * An edge in a connection.

 */
export interface CommentEdge {
  node: Comment
  cursor: String
}

export interface CommentPreviousValues {
  text: String
}

export interface CommentSubscriptionPayload {
  mutation: MutationType
  node?: Comment | null
  updatedFields?: Array<String> | null
  previousValues?: CommentPreviousValues | null
}

export interface Equipment extends Node {
  id: ID_Output
  name: String
}

/*
 * A connection to a list of items.

 */
export interface EquipmentConnection {
  pageInfo: PageInfo
  edges: Array<EquipmentEdge | null>
  aggregate: AggregateEquipment
}

/*
 * An edge in a connection.

 */
export interface EquipmentEdge {
  node: Equipment
  cursor: String
}

export interface EquipmentPreviousValues {
  id: ID_Output
  name: String
}

export interface EquipmentSubscriptionPayload {
  mutation: MutationType
  node?: Equipment | null
  updatedFields?: Array<String> | null
  previousValues?: EquipmentPreviousValues | null
}

export interface Ingredient extends Node {
  id: ID_Output
  name: String
  price: Float
}

/*
 * A connection to a list of items.

 */
export interface IngredientConnection {
  pageInfo: PageInfo
  edges: Array<IngredientEdge | null>
  aggregate: AggregateIngredient
}

/*
 * An edge in a connection.

 */
export interface IngredientEdge {
  node: Ingredient
  cursor: String
}

export interface IngredientPreviousValues {
  id: ID_Output
  name: String
  price: Float
}

export interface IngredientSubscriptionPayload {
  mutation: MutationType
  node?: Ingredient | null
  updatedFields?: Array<String> | null
  previousValues?: IngredientPreviousValues | null
}

export interface Like extends Node {
  id: ID_Output
  author: User
  recipe: Recipe
}

/*
 * A connection to a list of items.

 */
export interface LikeConnection {
  pageInfo: PageInfo
  edges: Array<LikeEdge | null>
  aggregate: AggregateLike
}

/*
 * An edge in a connection.

 */
export interface LikeEdge {
  node: Like
  cursor: String
}

export interface LikePreviousValues {
  id: ID_Output
}

export interface LikeSubscriptionPayload {
  mutation: MutationType
  node?: Like | null
  updatedFields?: Array<String> | null
  previousValues?: LikePreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface Recipe extends Node {
  id: ID_Output
  name: String
  description: String
  ingredients?: Array<Ingredient> | null
  creator: User
  process: String
  comments?: Array<Comment> | null
  likes?: Array<Like> | null
  pictureUrl?: String | null
  price: Float
  nutrition: String
  category: String
  equipments?: Array<Equipment> | null
}

/*
 * A connection to a list of items.

 */
export interface RecipeConnection {
  pageInfo: PageInfo
  edges: Array<RecipeEdge | null>
  aggregate: AggregateRecipe
}

/*
 * An edge in a connection.

 */
export interface RecipeEdge {
  node: Recipe
  cursor: String
}

export interface RecipePreviousValues {
  id: ID_Output
  name: String
  description: String
  process: String
  pictureUrl?: String | null
  price: Float
  nutrition: String
  category: String
}

export interface RecipeSubscriptionPayload {
  mutation: MutationType
  node?: Recipe | null
  updatedFields?: Array<String> | null
  previousValues?: RecipePreviousValues | null
}

export interface User extends Node {
  id: ID_Output
  email: String
  username: String
  name: String
  password: String
  recipes?: Array<Recipe> | null
  comments?: Array<Comment> | null
  likes?: Array<Like> | null
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  username: String
  name: String
  password: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User | null
  updatedFields?: Array<String> | null
  previousValues?: UserPreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string