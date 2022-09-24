export enum Categories{
    NO="no",
    BIG="big",
    MEDIUM="medium",
    SMALL="small"
}

export class Product{
    id: number;
    name: string;
    price: number;
    description: string;
    image_url: string;
    category:Categories
    constructor(){
        this.id=Date.now();
        this.name="";
        this.price=0;
        this.description="";
        this.image_url="https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/05/Samsung-Galaxy-S22.png?w=660&ssl=1";
        this.category=Categories.NO;
    }
}

export const products:Product[] =[
    {
        id: 1,
        name: "Phone 1",
        price: 799,
        description: "big",
        image_url: "https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/05/Samsung-Galaxy-S22.png?w=660&ssl=1",
        category:Categories.BIG
    },
    {
        id: 2,
        name: "Phone 2",
        price: 12312,
        description: "big",
        image_url: "https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/05/Samsung-Galaxy-S22.png?w=660&ssl=1",
        category:Categories.BIG
    },
    {
        id: 3,
        name: "Phone 3",
        price: 444,
        description: "big",
        image_url: "https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/05/Samsung-Galaxy-S22.png?w=660&ssl=1",
        category:Categories.BIG
    },
    {
        id: 4,
        name: "Phone 4",
        price: 799,
        description: "medium",
        image_url: "https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/05/Samsung-Galaxy-S22.png?w=660&ssl=1",
        category:Categories.MEDIUM
    },
    {
        id: 5,
        name: "Phone 5",
        price: 555,
        description: "medium",
        image_url: "https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/05/Samsung-Galaxy-S22.png?w=660&ssl=1",
        category:Categories.MEDIUM
    },
    {
        id: 6,
        name: "Phone 6",
        price: 333,
        description: "medium",
        image_url: "https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/05/Samsung-Galaxy-S22.png?w=660&ssl=1",
        category:Categories.MEDIUM
    },
    {
        id: 7,
        name: "Phone 7",
        price: 666,
        description: "small",
        image_url: "https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/05/Samsung-Galaxy-S22.png?w=660&ssl=1",
        category:Categories.SMALL
    },
    {
        id: 8,
        name: "Phone 8",
        price: 333,
        description: "small",
        image_url: "https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/05/Samsung-Galaxy-S22.png?w=660&ssl=1",
        category:Categories.SMALL
    },
    {
        id: 9,
        name: "Phone 9",
        price: 333,
        description: "small",
        image_url: "https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/05/Samsung-Galaxy-S22.png?w=660&ssl=1",
        category:Categories.SMALL
    }
]
