# Pathfinder

Pathfinder is a web application designed to help users find training centers. It leverages Angular for the front end and PHP for the back end.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- Search for training centers based on various criteria.
- View detailed information about each training center.
- User authentication and profile management.
- Reviews and ratings for training centers.
- Interactive map to locate training centers.

## Technologies Used

### Front End

- [Angular](https://angular.io/)
- [Angular Material](https://material.angular.io/) for UI components
- [RxJS](https://rxjs.dev/) for reactive programming

### Back End

- [PHP](https://www.php.net/)
- [MySQL](https://www.mysql.com/) for the database
- [Composer](https://getcomposer.org/) for dependency management

### Other Tools

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) for package management
- [Git](https://git-scm.com/) for version control

## Installation

### Prerequisites

- Node.js and npm
- PHP
- MySQL
- Composer

### Front End

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/pathfinder.git
    cd pathfinder/frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the Angular development server:
    ```bash
    ng serve
    ```

### Back End

1. Navigate to the backend directory:
    ```bash
    cd pathfinder/backend
    ```

2. Install Composer dependencies:
    ```bash
    composer install
    ```

3. Set up the database:
    - Create a MySQL database.
    - Import the provided SQL file into the database.

4. Configure the database connection in `config.php`:
    ```php
    <?php
    define('DB_SERVER', 'localhost');
    define('DB_USERNAME', 'your_username');
    define('DB_PASSWORD', 'your_password');
    define('DB_NAME', 'pathfinder');
    ?>
    ```

5. Start the PHP server:
    ```bash
    php -S localhost:8000
    ```

## Usage

- Access the application at `http://localhost:4200` for the Angular front end.
- Ensure the back end server is running at `http://localhost:8000`.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeature`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, please contact:

- **Your Name**
- Email: elarebai@gmail.com
- LinkedIn: [Ela Rebai](https://www.linkedin.com/in/ela-rebai-466b77226/)
