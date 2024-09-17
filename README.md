# FAST REACT PIZZA CO.

A simple pizza ordering app built with **ReactJS**, **Redux Toolkit**, **React Router**, **TailwindCSS**, and **Vite**. This application allows users to order pizzas from a dynamic menu, manage their orders, and prioritize them if necessary. Payments are made on delivery, and users can track their orders using a unique order ID.

This project was completed as part of the **Udemy course**: [The Ultimate React Course 2024: React, Next.js, Redux & More by Jonas Schmedtmann](https://www.udemy.com/course/the-ultimate-react-course/?couponCode=ST11MT91624A).

## Features

- **Dynamic Pizza Menu**: The pizza menu is loaded from an API, allowing for easy updates and changes.
- **No User Accounts Required**: Users can simply input their name to place an order without needing to register.
- **Cart Management**: Users can add multiple pizzas to their cart and view them before finalizing their order.
- **Simple Ordering**: Orders require only a name, phone number, and address.
- **GPS Location Support**: If available, the user's GPS location can be included to assist with delivery.
- **Priority Orders**: Users can mark their order as "priority" for an additional 20% of the total cart price, either when placing the order or after it's been placed.
- **Order Tracking**: Each order gets a unique ID, which users can use to look up their order status.
- **No Payment Processing**: Payments are made on delivery, so the app does not handle payment processing.

## Tech Stack

- **React.js**: Component-based UI.
- **Redux Toolkit**: Efficient state management.
- **React Router**: For navigation and routing between pages.
- **TailwindCSS**: For styling and responsive design.
- **Vite**: Fast development environment.

## How to Install and Run the Project

1. **Clone the repository**:

    ```bash
    git clone https://github.com/algndy/fast-react-pizza-website.git
    cd fast-react-pizza-website
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Run the app locally**:

    ```bash
    npm run dev
    ```

4. **Build for production**:

    ```bash
    npm run build
    ```

## Usage

1. Browse the pizza menu loaded from the API.
2. Add pizzas to your cart.
3. Provide your name, phone number, and address for delivery.
4. Optionally, provide your GPS location to make delivery easier.
5. You can mark the order as "priority" to prioritize it for a 20% additional fee.
6. Receive an order ID to track your order later.
7. Mark the order as priority even after it has been placed.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
