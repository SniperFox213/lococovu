// Importing modules
import storage from "../../../storage";
import { query as q } from "faunadb";

// Exporting default function
export default async (code) => {
  try {
    let response = await storage.query(q.Get(q.Match(q.Index("SearchCallbackCodeById"), code)))

    return response.data;
  } catch {
    throw new Error(JSON.stringify({ status: 404, error: "NotFound" }));
  };
};