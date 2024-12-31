import UserFavoriteFoods from "./UserFavoriteFoods";

export default function UserProfile() {
    return <>
        <p>Username: Bob</p>
        <div>
            <span>Email:</span>
            <span type="text" placeholder="Enter email" />
        </div>
        
        <UserFavoriteFoods />
    </>
}