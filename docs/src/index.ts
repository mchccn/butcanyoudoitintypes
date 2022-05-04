/** @format */

import { getData } from "./getData.js";

(async () => {
    const data = await getData();

    console.log(data);
})();
