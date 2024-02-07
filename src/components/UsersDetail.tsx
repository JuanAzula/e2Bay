import { Link, useParams } from 'react-router-dom'

export default function UserDetail({ users }) {
    console.log(users)
    const { userId } = useParams()
    console.log(userId)
    const foundUser = users.find((user) =>
        user.id == userId
    );
    console.log(foundUser)

    // users.forEach((user) => {


    // console.log(user)
    // console.log(user.id)
    // if (user.id == userId) {
    //     foundUser = user
    // }
    // })


    if (!foundUser) {
        return (
            <div>
                <h1>User Not Found</h1>
            </div>
        )
    } else {

        return (
            <div>
                <h1>Wishlist</h1>
                {/* <h3>{foundUser.name}</h3>
                <p>{foundUser.email}</p>
                <p>{foundUser.cart}</p> */}
                {/* <p>User wishlist</p> */}
                <ul>

                    {foundUser.wishlist.map((product) => {
                        return (
                            <li key={product.id}>
                                <Link to={`/products/${product.id}`}>
                                    <img style={{ width: '100px' }} src={product.image[0]}
                                        alt={product.name}
                                    />
                                    <div>
                                        <strong>{product.name}</strong> - <span>${product.price}</span>
                                    </div>
                                    <p>{product.description}</p>
                                    <span>Stock:{product.stock}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                {/* <p>{foundUser.wishlist}</p> */}
            </div>
        )
    }
}
