Ссылка на живую страничку проекта: https://annadorosheva.github.io/react-routing/

ROUTING - Приложение пример навигации между разными не связанными страницами приложения и вложенными вглубь маршрутами, с возможностью возвращаться на предыдущие страницы. Приложение написано на react(https://github.com/facebook/create-react-app) с использованием пакета react-router-dom. Так-же использована функция lazy из пакета react для разделения загрузки кода, с целью уменьшить количество загружаемого кода при первой загрузке, код загржается асинхронно. В приложении при певой загрузке, по умолчанию маршрут рендерит страницу sales, в которой можно перейти на страницу invoices и нажав на любой линк из списка посмотреть детали каждого. Так же на странице customers рендерится список клиетов, можно найти пользователя по имени или части имени с помощью фильтра и перейти в его карточку. Карточка рендерится при помощи useParams, из которого мы извлекаем id пользователя и по нему можно делать запрос на backend за информацией о пользователе под таким id. На карточке есть кнопка, при нажатии на которую происходит возврат на предыдущий список отфильтрованых клиентов и значение введенного ранее фильтра сохраняется, благодаря прокидыванию обьекта location из useLocation через state и получая в useLocation на карточке клиента, где данные прокидываются к путь кнопки возврата. Так же есть дефолтная страница, которая рендерится при не правильном пути, где написано, что такой страницы не найдено и с кнопкой, которая предлагает перейти на страницу распродаж.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
