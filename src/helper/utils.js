import Instance from "./Instance";

export const RequestApi = async (method, route, data = {}) => {
  try {
    const url = `${route}`;

    let response;
    switch (method.toLowerCase()) {
      case "get":
        response = await Instance.get(url, { params: data });
        break;

      case "post":
        response = await Instance.post(url, data);
        break;

      case "put":
        response = await Instance.put(url, data);
        break;

      case "patch":
        response = await Instance.patch(url, data);
        break;

      case "delete":
        response = await Instance.delete(url, { data });
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
