import { createElement } from "react";

export default function UserFavoriteFoods() {
    return createElement("section", null,
        <span>Favorite Foods:</span>,
        <br />,
        <ul>
            <li>Sushi</li>
            <li>Pizza</li>
            <li>Mediterranean Food</li>
        </ul>
    );
}
