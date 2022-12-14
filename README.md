# Cognizant FE React.js / Node.js Developer Interview

##### Demo App Access: [AWS CloudFront](https://cognizant.cheahang.dev/) | https://cognizant.cheahang.dev/
## Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Demo App](#demo)
- [Dev Assumptions](#assumptions)

## About <a name = "about"></a>

This project was built on [Vite.js](https://vitejs.dev/) with React.js + Speedy Web Compiler (SWC) for a technical interview solution by [Cognizant](https://www.cognizant.com/sg/en). I chose to use Vite.js as an experimentation for this solution as it was something new, and I wanted to test how rapid a solution could be deployed using Vite.js.

#### Observations
Vite.js, being the 'Next Generation Frontend Tooling' allows developers to rapidly spin up a Node.js application with various customizable frameworks and templates to choose from. Currently, these are the supported template presets offered by Vite.js:

| Javascript | Typescript |
|------------|------------|
| vanilla    | vanilla-ts |
| vue        | vue-ts     |
| react      | react-ts   |
| preact     | preact-ts  |
| lit        | lit-ts     |
| svelte     | svelte-ts  |

From this experience, I've observed that Vite could potentially increase efficiency of developing Single Page Applications (SPA) by offering rapid `Instant Server Start` and `Lightning Fast Hot Module Replacement (HMR)`. 

As majority of time spent by current SPA developers are waiting for their application to finish `Hot Reloading` especially with bigger application sizes, the HMR would allow developers to be more focused and efficient in delivering quality codes.

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the solution up and running on your local machine. See [Deployment](#deployment) for notes on how to deploy the project on a live system.

## Installation

### Prerequisites

This solution requires Node.js version 14.18+ or 16+. It is highly recommended to use Node Version Manager as the installation method for Linux/Mac machines.

#### Linux
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
nvm install 16.15.1
```
#### Mac
Use Homebrew to install NVM
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install nvm
mkdir ~/.nvm
nano ~/.zshrc
```
Fill out .zshrc (Ctrl + X to quit)
```
export NVM_DIR=~/.nvm
source $(brew --prefix nvm)/nvm.sh
```
In a new terminal:
```
nvm install 16.15.1
```
#### Windows
Install [Node.js](https://nodejs.org/tr/blog/release/v16.15.1/) from the official website
```
https://nodejs.org/tr/blog/release/v16.15.1/
```
## Deployment <a name = "deployment"></a>
Before running the application, ensure all package dependencies are installed
```
npm install
```
### Running locally
The default start command for a local dev environment on Vite's default port `5173`:
```
npm run dev
```
Use the following command to configure custom port number and expose the app on LAN/WAN.
```
npm run dev -- --port 8000 --host
```

For more customization options, refer to [Vite's Server Options](https://vitejs.dev/config/server-options.html) documentation.

### Running prod
To build for production and produce the application bundle, simply run:
```
npm run build
```
Check the generated `dist` folder. By default, Vite uses `index.html` as entry point to the app. This can also be changed with exposed multiple entry points supported. For more information, refer to [Vite's Building for Production](https://vitejs.dev/guide/build.html) documentation.

## Demo App <a name = "demo"></a>
The demo app access was deployed using the following cloud architectures, and can be accessed [here](https://cognizant.cheahang.dev/):
- AWS CloudFront
- AWS S3 Bucket
- AWS Route 53
- AWS Certificate Manager

## Dev Assumptions <a name = "assumptions"></a>
- Zoom is fixed at 100%.
  - Although zooming functionality is disabled on mobile devices using the `viewport meta tags`, users are still allowed to zoom on desktop browsers. As such, scenarios where users zoom > 150% is unhandled in this solution. 

