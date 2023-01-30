import {
  CreateParams,
  DataProvider,
  DeleteManyParams,
  UpdateParams,
  fetchUtils,
} from "react-admin";
import restProvider from "ra-data-json-server";

const servicesHost = "http://localhost:3000";

function createForm(params: {
  data: {
    [key: string]: any;
  };
}) {
  var formData = new FormData();
  try {
    Object.keys(params.data).forEach((key) => {
      if (key === "images") {
        params.data.images.forEach((img: { rawFile: File; path: string }) => {
          try {
            if (img && Object.keys(img).includes("rawFile")) {
              formData.append(key, img.rawFile, img.rawFile.name);
            } else if (Array.isArray(img)) {
              img.forEach((nestedImage) => {
                if (
                  nestedImage &&
                  Object.keys(nestedImage).includes("rawFile")
                ) {
                  formData.append(
                    key,
                    nestedImage.rawFile,
                    nestedImage.rawFile.name
                  );
                } else {
                  formData.append(key, nestedImage.path);
                }
              });
            } else {
              formData.append(key, img.path);
            }
          } catch (err) {
            console.log(err);
          }
        });
      } else if (key === "video") {
        if (
          params.data.video &&
          Object.keys(params.data.video).includes("rawFile")
        )
          formData.append(
            key,
            params.data.video.rawFile,
            params.data.video.rawFile.name
          );
        else formData.append(key, JSON.stringify(params.data.video));
      } else {
        formData.append(key, params.data[key]);
      }
    });
  } catch (err) {
    console.log(err);
  }
  return formData;
}

const httpClient = (url: string, options: fetchUtils.Options = {}) => {
  options.credentials = "include";
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = restProvider(servicesHost, httpClient);

const myDataProvider: DataProvider = {
  ...dataProvider,
  getOne: (resource: string, params: any) => {
    return httpClient(`${servicesHost}/${resource}/${params.id}`, {
      method: "GET",
    }).then(({ json }) => {
      return {
        data: { ...json, id: json._id },
      };
    });
  },
  getList: (resource: string, params: any) => {
    return httpClient(`${servicesHost}/${resource}`, {
      method: "GET",
    }).then(({ json }) => {
      return {
        data: json.map((item: any) => ({ ...item, id: item._id })),
        total: json.length,
      };
    });
  },
  delete: (resource: string, params: any) => {
    return httpClient(`${servicesHost}/${resource}/${params.id}`, {
      method: "DELETE",
    }).then(({ json }) => {
      return {
        data: json.map((item: any) => ({ ...item, id: item._id })),
        total: json.length,
      };
    });
  },
  deleteMany: (resource: string, params: DeleteManyParams) =>
    Promise.all(
      params.ids.map((id: string) =>
        httpClient(`${servicesHost}/${resource}/${id}`, {
          method: "DELETE",
        })
      )
    ).then((data) => {
      return {
        data: data.map((item: any) => ({ ...item, id: item._id })),
        total: data.length,
      };
    }),
  create: (resource: string, params: CreateParams<any>) => {
    let formData = createForm(params);

    if (
      resource !== "properties" ||
      (!formData.has("images") && !formData.has("video"))
    ) {
      // fallback to the default implementation
      return dataProvider.create(resource, params);
    }

    return httpClient(`${servicesHost}/${resource}`, {
      method: "POST",
      body: formData,
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id },
    }));
  },
  update: (resource: string, params: UpdateParams<any>) => {
    let formData = createForm(params);

    if (
      resource !== "properties" ||
      (!formData.has("images") && !formData.has("video"))
    ) {
      // fallback to the default implementation
      return dataProvider.update(resource, params);
    }

    return httpClient(`${servicesHost}/${resource}/${params.data.id}`, {
      method: "PUT",
      body: formData,
    }).then(({ json }) => ({
      data: { ...json, id: json._id },
    }));
  },
};

export default myDataProvider;
