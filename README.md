
#  **Quick Start**

Make sure you have the following installed on your machine:

* Git
* Node.js
* npm (Node Package Manager)

Installation:

Install the project dependencies using npm:

```python
npm install
```
and
```python
npm install convex@1.3.1
```

# **Setting up Environment Variables**

Create a new file named ```.env.local``` in the root of your project and add the following content:

```python
CONVEX_DEPLOYMENT=

NEXT_PUBLIC_CONVEX_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=
```

Replace the placeholder values with your actual credentials. You can obtain these by signing up
on these specific websites:

[convex login](https://dashboard.convex.dev/login)

[edgestore login](https://dashboard.edgestore.dev/sign-in?redirect_url=https%3A%2F%2Fdashboard.edgestore.dev%2Fprojects%2Fdsj45r0e52unfrmg)

[clerk login](https://dashboard.clerk.com/sign-in?redirect_url=https%3A%2F%2Fdashboard.clerk.com%2Fapps%2Fapp_2UwpBzVu6aB23m5qDRLX21w9NM1%2Finstances%2Fins_2UwpC2cnoHZx32lbrNqjKi9HUl3)

Running the project:
```python
npm run dev
```
(in a separate terminal)
```python
npx convex dev
```
