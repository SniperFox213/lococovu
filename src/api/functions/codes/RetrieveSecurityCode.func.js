// Importing modules
import moment from "moment";

import storage from "../../storage";
import { query as q } from "faunadb";

// Exporting function
export default async (token) => {
  // Let's now get this token's information
  // from our internal datastore
  let response = await storage.query(
    q.Get(
      q.Match(q.Index("SearchTokenById"),
      token
      )
    )
  );

  // Let's now check current timestamp
  if (response.data.authorizationDate < moment().unix()) {
    // And now let's delete this token from db
    storage.query(
      q.Delete(
        q.Get(
          q.Match(q.Index("SearchTokenById")),
          token
        )
      )
    );

    throw new Error(JSON.stringify({ status: 404, error: "NotFound" }));
  } else {
    return response.data;
  };
};