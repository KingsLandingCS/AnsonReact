import { createElement } from "react";

export function UserFavoriteFoods() {

    return createElement("div", null, <section>
        <span>Favorite Foods:</span>
        <br />
        <ul>
            <li>Sushi</li>
            <li>Pizza</li>
            <li>Mediterranean Food</li>
        </ul>
    </section>)
}