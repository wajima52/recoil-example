import {graphql} from "msw";
import {GetUserDocument} from "@/lib/graphql/types/graphql";

const users : {id: string, name: string, email: string}[] = [
  {
    id: "1",
    name: "テストユーザー１",
    email: "test1@example.com"
  },
  {
    id: "2",
    name: "テストユーザー１",
    email: "test1@example.com"
  },
  {
    id: "3",
    name: "テストユーザー１",
    email: "test1@example.com"
  },
]

export const handlers = [
  graphql.query(GetUserDocument, (req, res, ctx) => {
    const {id} = req.variables;
    const user = users.find((user) => user.id === id);
    if (!user) {
      return res(
        ctx.errors([
          {
            message: "User not found",
          },
        ])
      );
    }
    return res(
      ctx.data({
        user: {
          __typename: "User",
          ...user
        },
      })
    );
  })
];
