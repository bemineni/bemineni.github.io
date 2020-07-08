//Components
import React from "react";
import IndexHTML from "./IndexHTML";
import LotusImageCrop from "./LotusImageCrop";
import LotusNaga from "./LotusNaga";
import LotusSelect from "./LotusSelect";
import Eldam from "./Eldam";
import ReadMe from "./ReadMe";

//Images
import ElasticPNG from "./assets/elasticsearch.png";
import HTML5PNG from "./assets/html5.png";
import JavascriptPNG from "./assets/java_script.png";

import { useHistory } from "react-router-dom";

export const titlebarHeight = "32px";

export const statusbarHeight = "20px";

export const LeftbarWidth = "20%";

export const tabbarHeight = "55px";

export const structure = {
  public: {
    name: "public",
    default: 1,
    component: null,
    items: [{ name: "index.html", type: "HTML", url: "index", icon: HTML5PNG, component: IndexHTML }],
  },
  src: {
    name: "src",
    default: 1,
    component: null,
    items: [
      { name: "Eldam", type: "ES", url: "eldam", icon: ElasticPNG, component: Eldam },
      { name: "Lotus Image Crop", type: "JS", url: "lotus-image-crop", icon: JavascriptPNG, component: LotusImageCrop },
      { name: "Lotus Naga", type: "JS", url: "lotus-naga", icon: JavascriptPNG, component: LotusNaga },
      { name: "Lotus Select", type: "JS", url: "lotus-select", icon: JavascriptPNG, component: LotusSelect },
    ],
  },
  readme: {
    name: "README.md",
    default: 0,
    component: ReadMe,
    items: [],
  },
};

export function getComponent(url) {
  const res = url.split("/").filter(String);
  if (res.length > 0 && res.length <= 2) {
    const keys = Object.keys(structure);
    for (const i of keys) {
      if (i === res[0].trim()) {
        if (res.length == 1) {
          if (structure[i].component) {
            return structure[i].component;
          } else {
            const history = useHistory();
            history.push("/" + i + "/" + structure[i].items[0].url);
            return () => <div>Loading....</div>;
          }
        }
        for (const j of structure[i].items) {
          if (j.url === res[1].trim()) {
            return j.component;
          }
        }
      }
    }
  } else {
    return structure["public"].items[0].component;
  }
}

export function getItem(url) {
  const res = url.split("/").filter(String);
  if (res.length > 0 && res.length <= 2) {
    const keys = Object.keys(structure);
    for (const i of keys) {
      if (i === res[0].trim()) {
        if (res.length == 1) {
          return structure[i];
        }
        for (const j of structure[i].items) {
          if (j.url === res[1].trim()) {
            return j;
          }
        }
      }
    }
  } else {
    return structure["public"].items[0];
  }
}
