import * as React from "react"
import gql from "graphql-tag"
import { Mutation, Query } from "react-apollo"
import "./card.css"
import IoFork from "react-icons/lib/io/fork.js"
import FaDollar from "react-icons/lib/fa/dollar.js"

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap"

const image = [
  require("./1 copy.png"),
  require("./2 copy.png"),
  require("./3 copy.png"),
  require("./4 copy.png"),
  require("./5 copy.png"),
  require("./6 copy.png")
]

const GET_ALL_RECIPES = gql`
  query myRecipesQuery($where: RecipeWhereInput) {
    recipes(where: $where) {
      id
      name
      description
      price
      likes {
        id
        author {
          name
        }
      }
    }
  }
`

const GET_RECIPE_LIKES = gql`
  query recipeLikes($where: LikeWhereInput) {
    likes(where: $where) {
      id
      recipe {
        id
        name
      }
    }
  }
`

const LIKE = gql`
  mutation likeARecipe($name: String!) {
    likerecipe(name: $name) {
      likes {
        id
        author {
          name
        }
      }
    }
  }
`

const UNLIKE = gql`
  mutation unlikerecipe($name: String!) {
    unlikerecipe(name: $name) {
      name
    }
  }
`

class FoodWindow extends React.Component {
  // const text = this.state.liked ? 'Unlike' : 'Like!';

  state = {
    like: false
  }

  render() {
    const { foodType, selectedRecipe } = this.props

    const hasFoodFilter = foodType && foodType.length > 0

    const hasRecipeFilter = selectedRecipe && selectedRecipe.length !== 0

    const foodTypesIDS =
      foodType &&
      foodType.map(foodType => {
        return foodType.value
      })

    let where = {}

    if (hasFoodFilter) {
      where = {
        ingredients_some: {
          id_in: foodTypesIDS
        }
      }
    }

    if (hasRecipeFilter) {
      where = {
        ...where,
        id: selectedRecipe.value
      }
    }

    return (
      <Query
        query={GET_ALL_RECIPES}
        variables={{
          where: where
        }}
      >
        {({ loading, error, data, refetch }) => {
          const refetchAllRecipes = refetch
          if (loading) {
            return "Loading..."
          }

          if (error) {
            return "Oops, something blew up."
          }

          if (!data.recipes) return "no data yet.."

          const recipe_ids = data.recipes.map(r => r.id)

          return (
            <div className="card_flex">
              {data.recipes.map(recipe => {
                return (
                  <div className="each_card">
                    <Card>
                      <CardImg
                        className="image"
                        top
                        width="100%"
                        src={image[recipe.price - 1]}
                        alt="Card image cap"
                      />
                      <CardBody>
                        <CardTitle className="name_rec">
                          <IoFork className="fork" />
                          {recipe.name}
                          <hr />
                        </CardTitle>
                        {/* <CardSubtitle>{recipe.creator.name}</CardSubtitle> */}
                        <CardText className="descrip_card">
                          {recipe.description}
                        </CardText>
                        <CardText className="descrip_card">
                          <FaDollar className="dollar" />
                          {recipe.price}
                        </CardText>
                        <Query
                          query={GET_RECIPE_LIKES}
                          variables={{
                            where: {
                              recipe: { id_in: recipe_ids },
                              author: {
                                username: localStorage.getItem("username")
                              }
                            }
                          }}
                        >
                          {({ data, loading, error, refetch }) => {
                            if (loading) {
                              return "loading likes..."
                            }

                            if (error) return "error..."

                            const recipe_likes = data.likes.filter(like => {
                              return like.recipe.id === recipe.id
                            })

                            return (
                              <Mutation mutation={LIKE}>
                                {/* <Mutation mutation={UNLIKE}> */}
                                {(
                                  likerecipe,
                                  // unlikerecipe,
                                  { error, loading }
                                ) => {
                                  if (loading) {
                                    return <div>loading...</div>
                                  }

                                  return (
                                    <div className="flex_btn">
                                      <Button
                                        className="move_link"
                                        color="primary"
                                        onClick={() =>
                                          this.props.history.push(
                                            `/${recipe.name}`
                                          )
                                        }
                                      >
                                        {" "}
                                        More{" "}
                                      </Button>
                                      <Button
                                        className="like_btn"
                                        color="danger"
                                        onClick={async () => {
                                          if (
                                            recipe_likes &&
                                            recipe_likes.length
                                          ) {
                                            // here for unlike mutation
                                            // unlikerecipe({
                                            //   variables: {
                                            //     name: recipe.name
                                            //   }
                                            // })
                                            // refetch()
                                            // refetchAllRecipes()
                                            // recipe_likes.length--
                                            // recipe_likes != recipe_likes

                                            alert("unlike mutation")
                                          } else {
                                            await likerecipe({
                                              variables: {
                                                name: recipe.name
                                              }
                                            })
                                          }
                                          refetch()
                                          refetchAllRecipes()
                                        }}
                                      >
                                        {recipe_likes && recipe_likes.length > 0
                                          ? "Unlike"
                                          : "Like!"}
                                      </Button>
                                    </div>
                                  )
                                }}
                              </Mutation>
                              // </Mutation>
                            )
                          }}
                        </Query>
                        <CardText>
                          {recipe.likes && recipe.likes.length}
                        </CardText>
                      </CardBody>
                    </Card>
                  </div>
                )
              })}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default FoodWindow
