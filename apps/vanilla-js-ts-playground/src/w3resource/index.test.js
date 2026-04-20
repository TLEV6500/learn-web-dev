import { items } from "./items";

for (const item of items) {
  let [fn, test] = item();
  test();
}
