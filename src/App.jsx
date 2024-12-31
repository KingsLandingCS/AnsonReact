import UserProfile from "./components/UserProfile";

export default function App() {
    const callMe = () => {
        console.log("hello");
    };
    return <>
        <h1>Root Component</h1>
        <UserProfile
            username="bob"
            age={25}
            isLoggedIn={true}
            favoriteFoods={[
                {
                    name: "Sushi",
                    id: "sushi",
                },
                {
                    name: "Pizza",
                    id: "pizza",
                },
            ]}
            callMe={callMe} />
    </>
}