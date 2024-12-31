import PropTypes from "prop-types";
import UserFavoriteFoods from "./UserFavoriteFoods";
import UserName from "./UserName";



export default function UserProfile(props) {
    props.callMe;

    return <>
        <UserName username={props.username} />
        <b>Age:</b><span>{props.age}</span>
        <UserFavoriteFoods />

    </>
}

UserProfile.propTypes = {
    username: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    callme: PropTypes.func.isRequired,
    isLogged: PropTypes.bool.isRequired,
    favoriteFoods: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    ),
};