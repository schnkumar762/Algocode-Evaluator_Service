## How to setup a new typescript express project

1. npm init -y

2. npm install -D typescript
   npm install concurrently

3. npx tsc --init

4. Add the following scripts in package.json

{
"scripts": {
"build": "npx tsc",
"watch": "npx tsc --watch",
"prestart": "npm run build",
"start": "npx nodemon dist/index.js",
"dev": "npx concurrently --kill-others \"npm run watch\" \"npm run start\""
},
}

Note : make relevant changes in tsconfig.json
outdir dist
unused import
ts null
any not allow

5. npm run dev
