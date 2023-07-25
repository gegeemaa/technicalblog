---
title: React deer bichigdsen code-iin tailbar
date: '2023-07-25'
---

### Destructuring object:

```
const person = {
firstName: "Lindsay",
lastName: "Criswell",
city: "NYC"
}

const { firstName, lastName, city } = person;

```


```
props = {
    attraction: {
        address1: "350 5th Ave",
        address2: "",
        average_rating: 4,
        city: "New York",
        country: "US",
        display_address: ["350 5th Ave", "New York, NY 10118"],
        id: 9,
        latitude_coordinate: "40.748442285082",
        location: {
        created_at: "2018–03–07T03:56:20.717Z",
        id: 1,
        latitude_coordinate: 40.712775,
        longitude_coordinate: -74.005973,
        ...
        }
    },
    auth: {
        loggedIn: true,
        loggingIn: false,
    ...
    } ...
}

const Attraction = ({ auth, attraction }) => {
    return (
        <div auth={auth} key={attraction.id}>
            <Link
                token={auth.token}
                to={`/attractions/${attraction.url_name}`}
                key={attraction.id}
                >
                <img alt={attraction.name} src={attraction.image_url} />
                <h1>{attraction.name}</h1>
            </Link>
            <StarRatings rating={attraction.average_rating} />
        </div>
    );
};

```

React deer herhen hereglesniig haray:

Door baigaa Promise <RestaurantCardType[] ni fetchRestaurants function ni
RestaurantCardType toroltei array butsaana gej zaaj ogch bna. Promise gdeeg ni iim
turul butsaaj avna gej amlaj bna.

```
interface Props {
    restaurant: RestaurantCardType;
}


export default function RestaurantCard({restaurant}: Props){
    const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
        const restaurants = await prisma.restaurant.findMany({
        select: {
        id: true,
        name: true,
        main_image: true,
        cuisine: true,
        location: true,
        price: true,
        slug:true,
        }
    })
    return restaurants
}


```