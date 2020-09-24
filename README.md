# electron-devias-redux
Electron app with template page from Devias and Redux structure implemented, Devias is a free MIT MaterialUI template based on create-react-app

## Resources
This distribution make available by default
- [Electron application](https://www.electronjs.org/docs)
- [Redux store](https://react-redux.js.org/)
- [Material-UI library](https://material-ui.com/pt/)
- [React-Bootstrap](https://react-bootstrap.github.io/components/alerts)


## Quick start

- [Download from Github](https://github.com/pelagaggi/electron-devias-redux/archive/master.zip) or [Download from Devias](https://github.com/pelagaggi/electron-devias-redux) or clone the repo: `git clone https://github.com/pelagaggi/electron-devias-redux`

- Make sure your NodeJS and npm versions are up to date for `React 16.8.6`

### Run in development mode 
```
	yarn electron-dev
```
That will start development server from create-react-app and electron development app.

### Compile into a binary
```
	yarn electron-pack
```
That will generate a app file under /dist folder. The Windows app installation uses the following directory by default:
```
	C:\Users\${YOUR_USER}\AppData\Local\Programs
```
The app name and version are controlled via package.json

## Main Workflow File Structure

Within the download you'll find the following Main workflow directories and files:

```
material-react-dashboard

├── .eslintrc
├── package.json
├── README.md
├── public
│	└── electron.js
└── src
	├── assets
	├── common
	├── components
	├── helpers
	├── icons
	├── layouts
	├── theme
	├── views
	│	├── Account
	│	├── Dashboard
	│	├── Icons
	│	├── NotFound
	│	├── ProductList
	│	├── Settings
	│	├── SignIn
	│	├── SignUp
	│	├── Typography
	│	└── UserList
	├── reducers
	│	├── index.js
	│	├── reducers.js
	│	└── constants
	│		└── index.js
	├── actions.js
	├── App.jsx
	├── index.jsx
	└── Routes.jsx
```

## Reporting Issues:

- [Github Issues Page](https://github.com/pelagaggi/electron-devias-redux/issues?ref=electron-devias-redux)

## License
- Licensed under MIT (https://github.com/pelagaggialex/electron/blob/master/LICENSE.md)

## Contact Us
- Email Us: pelagaggialex@gmail.com

