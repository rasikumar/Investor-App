import Instance from "./Instance";

export const RequestApi = async (method, route, data = {}, headers = {}) => {
  try {
    const url = `${route}`;

    let response;
    const config = { headers };

    switch (method.toLowerCase()) {
      case "get":
        response = await Instance.get(url, { ...config, params: data });
        break;

      case "post":
        response = await Instance.post(url, data, config);
        break;

      case "put":
        response = await Instance.put(url, data, config);
        break;

      case "patch":
        response = await Instance.patch(url, data, config);
        break;

      case "delete":
        response = await Instance.delete(url, { ...config, data });
        break;

      default:
        throw new Error(`Unsupported method: ${method}`);
    }

    return response.data;
  } catch (error) {
    console.error("API Error:", error?.response || error);
    throw error?.response?.data || error;
  }
};
