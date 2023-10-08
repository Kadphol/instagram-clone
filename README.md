## Instagram clone

![Screenshot 2566-10-08 at 20 41 41](https://github.com/Kadphol/instagram-clone/assets/46192417/1dcbbfe2-5880-4d80-9a52-2d4d9cec8ab4)

This is Instagram clone project using Next.js, React, Material-UI, Tailwind CSS and React-icons. Come with responsive design and following features:

- login page (without any authentication/guest login)
- home page
- reponsive menu
- mocked feed data

### Built With

- [Next][Next-url]
- [React][React-url]
- [Material-UI][Material-UI-url]
- [Tailwind][Tailwind-url]
- [React-icons][React-icons]

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- yarn

  ```sh
  npm install --global yarn
  ```

### Installation

1. Clone the repo or extract the zip file

   ```sh
   SSH
   git clone git@github.com:Kadphol/instagram-clone.git
   ```

   ```sh
   HTTPS
   git clone https://github.com/Kadphol/instagram-clone.git
   ```

2. Install packages

   ```sh
   yarn
   ```

3. Use this command to run project

   ```sh
    yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

### Login page

![Screenshot 2566-10-08 at 20 41 56](https://github.com/Kadphol/instagram-clone/assets/46192417/485d4d49-5a70-4ba5-a113-2de181138339)

- Enter home page without any login/authentication will direct to [login page](http://localhost:3000/login)
- Can login with any valid email (email format) and valid password (one uppercase, one lowercase, one number and at least 8 characters) or using guest login
- After login, will redirect to [home page](http://localhost:3000)

### Home page

![Screenshot 2566-10-08 at 20 41 32](https://github.com/Kadphol/instagram-clone/assets/46192417/1a26396f-dc63-4cbc-812a-667967692251)

- Can see feed list
- Can like/unlike post
- Can comment post
- Can see comment list
- Can logout to go back to [login page](http://localhost:3000/login) by click on the menu and click `Log out`

### Unit test

- Run unit test by using this command

  ```sh
  yarn test
  ```

- Run unit test with coverage by using this command

  ```sh
  yarn test:cov
  ```

  and see the coverage report in `/coverage/lcov-report/index.html` on root directory of project after run this command

## Roadmap

- [ ] Refactor post component extract to smaller one.
- [ ] Add modal for comments when click view all comments instead of display it all.
- [ ] Add mock story feed.
- [ ] Manage data to state management.

[Next-url]: https://nextjs.org/
[React-url]: https://reactjs.org/
[Material-UI-url]: https://material-ui.com/ 
[Tailwind-url]: https://tailwindcss.com/
[React-icons]: https://react-icons.github.io/react-icons/
