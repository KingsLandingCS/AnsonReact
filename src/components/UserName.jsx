export default function UserName(props) {
    console.log(props.username);
    return (
        <>
            <b>Username:</b>
            <span>{props.username}</span>
        </>
    );
}
