import { Badge } from "react-bootstrap";
import { Stack } from "react-bootstrap";


export const Category = () => {
    return (
        <>
        <h5>Category</h5>
        <Badge pill bg="light" text="dark">
            Restaurant
        </Badge>
        <Badge pill bg="light" text="dark">
            Home Rennovations
        </Badge>
        <Badge pill bg="light" text="dark">
            Rennovations
        </Badge>
        <Badge pill bg="light" text="dark">
            Home
        </Badge>
        <Badge pill bg="light" text="dark">
            Light
        </Badge>
        </>

    )
}

export default Category;