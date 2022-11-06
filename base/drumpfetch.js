export const drumpFetch = (url) => {
  const URL = url;

  const customFetch = async (endpoint, options = {}) => {
    options.method = options.method || "GET";
    options.headers = {
      "content-type": "application/json",
    };

    if (options.body) {
      options.body = JSON.stringify(options.body);
    }

    console.log(options);

    return await fetch(`${URL}${endpoint}`, options)
      .then((res) => {
        return res.ok
          ? res.json()
          : Promise.reject({
              error: true,
              status: res.status,
              statusText: res.statusText,
            });
      })
      .catch((error) => error);
  };

  const get = (endpoint) => customFetch(endpoint);

  const post = (endpoint, options) => {
    options.method = "POST";
    return customFetch(endpoint, options);
  };

  const put = (endpoint, options, id) => {
    options.method = "PUT";
    return customFetch(`${endpoint}/${id}`, options);
  };

  const del = (endpoint, id) => {
    const options = {
      method: "DELETE",
    };

    return customFetch(`${endpoint}/${id}`, options);
  };

  const getId = (endpoint, id) => {
    const options = {
      method: "GET",
    };

    return customFetch(`${endpoint}/${id}`, options);
  };

  return { get, post, put, del, getId };
};
