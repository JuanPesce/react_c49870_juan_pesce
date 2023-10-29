import { CartWidget } from "../CartWidget/CartWidget";

export function Navbar() {
  return (
    <div>
        <h6>Ecommerce</h6>
        <ul>
            <li>
                <p>Yerba</p>
            </li>
            <li>
                <p>Mates</p>
            </li>
        </ul>
        <CartWidget />
    </div>

  )
}

