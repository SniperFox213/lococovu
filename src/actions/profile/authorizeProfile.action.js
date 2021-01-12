// Importing modules
import axios from "axios";
import config from "../../config/api/default.json";

import profile from "../../stores/profile";
import accounts from "../../stores/accounts";

import moment from "moment";

import storage from "local-storage";
import Cookie from "cookie-universal";
const cookies = Cookie();

import { goto } from "@sapper/app";

// Importing actions
import authorizePincode from "../profile/security/authorizePincode.action";

// Exporting default function
export default async (token, pincode) => {
  let query = new URLSearchParams(window.location.search);
  const originalCallback = {
    url: query.get('return'),
    query: query.get('query')
  };

  // Function, that'll save account token to cookies
  // storage
  function saveToken(token, cookies) {
    // And now let's update current token
    cookies.set('token', token, { path: "/", expires: moment().add('1', 'year').toDate() });

    // Let's firstly get all tokens
    let tokens = cookies.get('tokens', { path: "/" });
    if (tokens == null) {
      tokens = [];
    } else {
      tokens = tokens.split(',');
    };

    // Let's now check if we already have
    // this token or no.
    if (!tokens.includes(token)) {
      tokens.push(token);
      cookies.set('tokens', tokens.join(','), { path: "/", expires: moment().add('1', 'year').toDate() });
    };

    // And now let's load profiles;
    accounts.loadTokens(tokens)
  };

  // Function, that'll save our callback information
  // into some place.
  function storeCallback(url, query) {
    // Storing callback information (if exists)
    let callback = {
      url: url,
      query: query
    };

    // And now let's save it
    // TODO: 
    if (callback.url != null) storage.set('auth.callback', JSON.stringify(callback));
  };

  // Function, that will be called after all authorization
  // processes
  function done(token) {
    // Let's firstly cehck if we have any callbacks
    let callback = storage.get('auth.callback');

    if (callback == null) {
      callback = originalCallback 
    } else {
      callback = JSON.parse(callback);
    };

    if (callback.url != null) {
      // Deleting this callback's information
      storage.remove('auth.callback');

      let params = new URLSearchParams(callback.query);

      // Updating our query string
      if (params.has('token')) params.delete('token')
      // Let's firstly check for size
      // of our parameters

      // Just don't touch anything here
      let size = 0;
      for (let value of params.values()) {
        size++;
      };

      // And now let's just redirect our user
      // to this uri
      goto(`${callback.url}${ size > 0 ? `?${params.toString()}&token=${token}` : `?token=${token}` }`);
    } else {
      // TODO
      // Redirect user to
      // tutorial or to Profile Setup
      // if needed
      goto('/app');
    };
  };

  // Let's firstly authorize our user.
  profile.loadProfile(token)
  .then(() => {
    // Let's firstly save this token
    saveToken(token, cookies);

    // And now let's finish this authorization process
    done(token);
  }).catch(async (error) => {
    // Let's now check if we have
    // pincode (and then let's try to
    // authorize)

    if (pincode != null) {
      try {
        let response = await authorizePincode(error.id, pincode);
        storage.set(`AT-${error.id}`, response.token);
      
        // And now let's load this profile and
        // let's save this token.
        profile.loadProfile(response.token)
        .then((response) => {
          saveToken(response.token, cookies);
          done(response.token);
        });

        return;
      } catch {};
    };

    // Checking error information

    // @error authorizePincode
    if (error.error == "authorizePincode") {  
      // Let's firstly store our callback
      // information
      storeCallback(originalCallback.url, originalCallback.query);

      goto(`/authorize/pincode?token=${token}`);
    } else {
      console.log("ERROR");
      console.log(error);
      throw new Error();
    }
  });
};