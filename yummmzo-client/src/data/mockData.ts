export interface Restaurant {
    id: string;
    name: string;
    cuisine: string;
    rating: number;
    deliveryTime: string;
    priceRange: string;
    image: string;
    isOpen: boolean;
    address: string;
    description?: string;
}

export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    rating: number;
    image: string;
    isVeg: boolean;
    restaurantId: string;
    calories?: number;
}

export interface CartItem extends MenuItem {
    quantity: number;
}

export interface Order {
    id: string;
    items: CartItem[];
    total: number;
    status: 'preparing' | 'on_the_way' | 'delivered' | 'cancelled';
    date: string;
    restaurantName: string;
    restaurantImage: string;
    deliveryAddress: string;
    estimatedTime?: string;
}

export interface Address {
    id: string;
    type: 'home' | 'work' | 'other';
    address: string;
    city: string;
    state: string;
    pincode: string;
    isDefault: boolean;
}

export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    avatar: string;
}

export const restaurants: Restaurant[] = [
    {
        id: "1",
        name: "Sakura Sushi",
        cuisine: "Japanese",
        rating: 4.8,
        deliveryTime: "25-35 min",
        priceRange: "$$",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800",
        isOpen: true,
        address: "123 Sushi Lane, Downtown",
        description: "Authentic Japanese cuisine with fresh ingredients flown in daily from Tokyo's famous Tsukiji market."
    },
    {
        id: "2",
        name: "Burger Palace",
        cuisine: "American",
        rating: 4.6,
        deliveryTime: "20-30 min",
        priceRange: "$",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
        isOpen: true,
        address: "456 Burger Street, Midtown",
        description: "Gourmet burgers made with 100% Angus beef and fresh, locally sourced ingredients."
    },
    {
        id: "3",
        name: "Pizza Paradiso",
        cuisine: "Italian",
        rating: 4.7,
        deliveryTime: "30-40 min",
        priceRange: "$$",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800",
        isOpen: true,
        address: "789 Pizza Plaza, Little Italy",
        description: "Wood-fired pizzas crafted with imported Italian ingredients and secret family recipes."
    },
    {
        id: "4",
        name: "Spice Garden",
        cuisine: "Indian",
        rating: 4.5,
        deliveryTime: "35-45 min",
        priceRange: "$$",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800",
        isOpen: true,
        address: "321 Spice Road, Curry District",
        description: "Traditional Indian recipes with a modern twist, featuring fresh spices and authentic flavors."
    },
    {
        id: "5",
        name: "Dragon Wok",
        cuisine: "Chinese",
        rating: 4.4,
        deliveryTime: "25-35 min",
        priceRange: "$",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800",
        isOpen: true,
        address: "654 Dragon Avenue, Chinatown",
        description: "Authentic Szechuan and Cantonese cuisine with bold flavors and fresh ingredients."
    },
    {
        id: "6",
        name: "Taco Fiesta",
        cuisine: "Mexican",
        rating: 4.3,
        deliveryTime: "20-30 min",
        priceRange: "$",
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800",
        isOpen: true,
        address: "987 Fiesta Street, El Barrio",
        description: "Vibrant Mexican street food with house-made tortillas and authentic salsas."
    },
    {
        id: "7",
        name: "Mediterranean Delight",
        cuisine: "Mediterranean",
        rating: 4.6,
        deliveryTime: "30-40 min",
        priceRange: "$$",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
        isOpen: true,
        address: "159 Olive Grove, Harbor District",
        description: "Fresh Mediterranean flavors featuring grilled meats, hummus, and colorful salads."
    },
    {
        id: "8",
        name: "Thai Orchid",
        cuisine: "Thai",
        rating: 4.7,
        deliveryTime: "25-35 min",
        priceRange: "$$",
        image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=800",
        isOpen: true,
        address: "753 Orchid Lane, East Side",
        description: "Aromatic Thai dishes with the perfect balance of sweet, sour, spicy, and savory."
    },
    {
        id: "9",
        name: "Soul Kitchen",
        cuisine: "Southern",
        rating: 4.5,
        deliveryTime: "35-45 min",
        priceRange: "$$",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
        isOpen: false,
        address: "852 Soul Street, Uptown",
        description: "Comfort food classics made with love, featuring fried chicken, mac & cheese, and more."
    },
    {
        id: "10",
        name: "Green Garden",
        cuisine: "Vegetarian",
        rating: 4.4,
        deliveryTime: "20-30 min",
        priceRange: "$",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
        isOpen: true,
        address: "246 Garden Path, Green District",
        description: "Plant-based cuisine that's as delicious as it is nutritious."
    },
    {
        id: "11",
        name: "Kebab King",
        cuisine: "Middle Eastern",
        rating: 4.6,
        deliveryTime: "25-35 min",
        priceRange: "$",
        image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800",
        isOpen: true,
        address: "135 Kebab Corner, Eastside",
        description: "Juicy kebabs and shawarmas with authentic Middle Eastern spices."
    },
    {
        id: "12",
        name: "Pho Paradise",
        cuisine: "Vietnamese",
        rating: 4.5,
        deliveryTime: "30-40 min",
        priceRange: "$",
        image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800",
        isOpen: true,
        address: "468 Pho Street, Little Saigon",
        description: "Soul-warming Vietnamese soups and fresh spring rolls."
    },
];

export const menuItems: MenuItem[] = [
    // Sakura Sushi items
    {
        id: "m1",
        name: "Dragon Roll",
        description: "Shrimp tempura, eel, avocado, cucumber with special sauce",
        price: 16.99,
        category: "Sashimi",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800",
        isVeg: false,
        restaurantId: "1",
        calories: 380
    },
    {
        id: "m2",
        name: "Salmon Nigiri",
        description: "Fresh Atlantic salmon on seasoned rice",
        price: 8.99,
        category: "Nigiri",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=800",
        isVeg: false,
        restaurantId: "1",
        calories: 180
    },
    {
        id: "m3",
        name: "Spicy Tuna Roll",
        description: "Fresh tuna with spicy mayo and tempura crunch",
        price: 14.99,
        category: "Sashimi",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=800",
        isVeg: false,
        restaurantId: "1",
        calories: 290
    },
    {
        id: "m4",
        name: "Rainbow Roll",
        description: "California roll topped with assorted fish",
        price: 18.99,
        category: "Sashimi",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800",
        isVeg: false,
        restaurantId: "1",
        calories: 420
    },
    // Burger Palace items
    {
        id: "m5",
        name: "Classic Smash Burger",
        description: "Double patty, American cheese, pickles, special sauce",
        price: 12.99,
        category: "Burgers",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
        isVeg: false,
        restaurantId: "2",
        calories: 650
    },
    {
        id: "m6",
        name: "Bacon Avocado Burger",
        description: "Angus beef, crispy bacon, fresh avocado, swiss cheese",
        price: 15.99,
        category: "Burgers",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800",
        isVeg: false,
        restaurantId: "2",
        calories: 780
    },
    {
        id: "m7",
        name: "Truffle Fries",
        description: "Crispy fries with truffle oil and parmesan",
        price: 7.99,
        category: "Appetizers",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800",
        isVeg: true,
        restaurantId: "2",
        calories: 380
    },
    // Pizza Paradiso items
    {
        id: "m8",
        name: "Margherita Pizza",
        description: "San Marzano tomatoes, fresh mozzarella, basil",
        price: 14.99,
        category: "Pizza",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800",
        isVeg: true,
        restaurantId: "3",
        calories: 1200
    },
    {
        id: "m9",
        name: "Pepperoni Supreme",
        description: "Double pepperoni, mozzarella, oregano",
        price: 17.99,
        category: "Pizza",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800",
        isVeg: false,
        restaurantId: "3",
        calories: 1450
    },
    {
        id: "m10",
        name: "Four Cheese",
        description: "Mozzarella, gorgonzola, parmesan, ricotta",
        price: 16.99,
        category: "Pizza",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
        isVeg: true,
        restaurantId: "3",
        calories: 1350
    },
    // Spice Garden items
    {
        id: "m11",
        name: "Butter Chicken",
        description: "Tender chicken in creamy tomato curry sauce",
        price: 16.99,
        category: "Main Course",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800",
        isVeg: false,
        restaurantId: "4",
        calories: 520
    },
    {
        id: "m12",
        name: "Paneer Tikka Masala",
        description: "Grilled cottage cheese in spiced gravy",
        price: 14.99,
        category: "Main Course",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800",
        isVeg: true,
        restaurantId: "4",
        calories: 450
    },
    {
        id: "m13",
        name: "Garlic Naan",
        description: "Freshly baked bread with garlic butter",
        price: 3.99,
        category: "Appetizers",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
        isVeg: true,
        restaurantId: "4",
        calories: 180
    },
    {
        id: "m14",
        name: "Biryani Royale",
        description: "Aromatic basmati rice with spiced meat and saffron",
        price: 18.99,
        category: "Main Course",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800",
        isVeg: false,
        restaurantId: "4",
        calories: 680
    },
    // More items
    {
        id: "m15",
        name: "Kung Pao Chicken",
        description: "Wok-tossed chicken with peanuts and chili peppers",
        price: 13.99,
        category: "Main Course",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800",
        isVeg: false,
        restaurantId: "5",
        calories: 420
    },
    {
        id: "m16",
        name: "Beef Tacos",
        description: "Three soft tacos with seasoned beef and fresh salsa",
        price: 11.99,
        category: "Tacos",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800",
        isVeg: false,
        restaurantId: "6",
        calories: 380
    },
    {
        id: "m17",
        name: "Grilled Lamb Kebab",
        description: "Tender lamb skewers with Mediterranean spices",
        price: 19.99,
        category: "Main Course",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800",
        isVeg: false,
        restaurantId: "7",
        calories: 340
    },
    {
        id: "m18",
        name: "Pad Thai",
        description: "Stir-fried rice noodles with shrimp and peanuts",
        price: 14.99,
        category: "Main Course",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800",
        isVeg: false,
        restaurantId: "8",
        calories: 480
    },
    {
        id: "m19",
        name: "Green Curry",
        description: "Thai green curry with vegetables and coconut milk",
        price: 13.99,
        category: "Main Course",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800",
        isVeg: true,
        restaurantId: "8",
        calories: 390
    },
    {
        id: "m20",
        name: "Tiramisu",
        description: "Classic Italian dessert with espresso and mascarpone",
        price: 8.99,
        category: "Desserts",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800",
        isVeg: true,
        restaurantId: "3",
        calories: 280
    },
    {
        id: "m21",
        name: "Mochi Ice Cream",
        description: "Japanese rice cake with ice cream filling",
        price: 6.99,
        category: "Desserts",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800",
        isVeg: true,
        restaurantId: "1",
        calories: 120
    },
    {
        id: "m22",
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with molten center",
        price: 9.99,
        category: "Desserts",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800",
        isVeg: true,
        restaurantId: "2",
        calories: 450
    },
    {
        id: "m23",
        name: "Fresh Lemonade",
        description: "House-made lemonade with mint",
        price: 4.99,
        category: "Drinks",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=800",
        isVeg: true,
        restaurantId: "6",
        calories: 120
    },
    {
        id: "m24",
        name: "Mango Lassi",
        description: "Sweet yogurt drink with fresh mangoes",
        price: 5.99,
        category: "Drinks",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=800",
        isVeg: true,
        restaurantId: "4",
        calories: 180
    },
];

export const sampleOrders: Order[] = [
    {
        id: "ORD-001",
        items: [
            { ...menuItems[0], quantity: 2 },
            { ...menuItems[1], quantity: 1 },
        ],
        total: 42.97,
        status: "on_the_way",
        date: "2024-01-15",
        restaurantName: "Sakura Sushi",
        restaurantImage: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800",
        deliveryAddress: "123 Main Street, Apt 4B",
        estimatedTime: "15 min"
    },
    {
        id: "ORD-002",
        items: [
            { ...menuItems[4], quantity: 1 },
            { ...menuItems[6], quantity: 1 },
        ],
        total: 20.98,
        status: "preparing",
        date: "2024-01-15",
        restaurantName: "Burger Palace",
        restaurantImage: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
        deliveryAddress: "123 Main Street, Apt 4B",
        estimatedTime: "25 min"
    },
    {
        id: "ORD-003",
        items: [
            { ...menuItems[7], quantity: 1 },
            { ...menuItems[19], quantity: 1 },
        ],
        total: 23.98,
        status: "delivered",
        date: "2024-01-14",
        restaurantName: "Pizza Paradiso",
        restaurantImage: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800",
        deliveryAddress: "456 Oak Avenue"
    },
    {
        id: "ORD-004",
        items: [
            { ...menuItems[10], quantity: 1 },
            { ...menuItems[12], quantity: 2 },
        ],
        total: 24.97,
        status: "delivered",
        date: "2024-01-13",
        restaurantName: "Spice Garden",
        restaurantImage: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800",
        deliveryAddress: "789 Pine Street"
    },
    {
        id: "ORD-005",
        items: [
            { ...menuItems[17], quantity: 2 },
        ],
        total: 29.98,
        status: "delivered",
        date: "2024-01-12",
        restaurantName: "Thai Orchid",
        restaurantImage: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=800",
        deliveryAddress: "321 Elm Street"
    },
];

export const sampleAddresses: Address[] = [
    {
        id: "addr-1",
        type: "home",
        address: "123 Main Street, Apt 4B",
        city: "Naperville",
        state: "Illinois",
        pincode: "60540",
        isDefault: true
    },
    {
        id: "addr-2",
        type: "work",
        address: "456 Corporate Drive, Suite 200",
        city: "Chicago",
        state: "Illinois",
        pincode: "60601",
        isDefault: false
    },
    {
        id: "addr-3",
        type: "other",
        address: "789 Park Avenue",
        city: "Aurora",
        state: "Illinois",
        pincode: "60505",
        isDefault: false
    }
];

export const sampleUser: User = {
    id: "user-1",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200"
};

export const categories = [
    "All Type",
    "Sashimi",
    "Nigiri",
    "Temaki",
    "Burgers",
    "Pizza",
    "Indian",
    "Chinese",
    "Mexican",
    "Desserts"
];

export const faqs = [
    {
        category: "Orders",
        question: "How do I track my order?",
        answer: "You can track your order in real-time from the 'Active Orders' section. Click on any order to see its current status and estimated delivery time."
    },
    {
        category: "Orders",
        question: "Can I cancel my order?",
        answer: "Orders can be cancelled within 5 minutes of placing them. After that, please contact our support team for assistance."
    },
    {
        category: "Orders",
        question: "What if my order is late?",
        answer: "If your order exceeds the estimated delivery time, you may be eligible for a discount on your next order. Please contact support."
    },
    {
        category: "Payments",
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, debit cards, UPI, and cash on delivery."
    },
    {
        category: "Payments",
        question: "Is my payment information secure?",
        answer: "Yes, all payments are processed through secure, encrypted channels. We never store your full card details."
    },
    {
        category: "Delivery",
        question: "What are your delivery hours?",
        answer: "Delivery hours vary by restaurant. Most restaurants deliver from 10 AM to 11 PM."
    },
    {
        category: "Delivery",
        question: "Do you deliver to my area?",
        answer: "Enter your address in the search bar to see restaurants that deliver to your location."
    },
    {
        category: "Account",
        question: "How do I reset my password?",
        answer: "Click 'Forgot Password' on the login page and follow the instructions sent to your email."
    },
    {
        category: "Account",
        question: "Can I change my email address?",
        answer: "Yes, you can update your email address in your Profile settings."
    }
];

// Alias exports for convenience
export const orders = sampleOrders;
export const addresses = sampleAddresses;
export const user = sampleUser;
