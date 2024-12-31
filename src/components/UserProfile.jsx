export default function UserProfile() {
    return <>
        <p>Username: Bob</p>
        <div>
            <span>Email:</span>
            <span type="text" placeholder="Enter email" />
        </div>
        <section>
            <span>Favorite Foods:</span>
            <br />
            <ul>
                <li>Sushi</li>
                <li>Pizza</li>
                <li>Mediterranean Food</li>
            </ul>
        </section>
    </>
}