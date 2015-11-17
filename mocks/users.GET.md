# Get User List

### request
```js
//<request>
[{
  "id": 1,
  "name": "xx", // hello
  "email": "foo@gmail.com"
}, {
  "id": 2,
  "name": "bar",
  "email": "bar@gmail.com"
}]
```

### response with 200
```javascript
//<response=200>
[
  {
    id: 1,
    name: "xx", // hello
    email: "foo@gmail.com",
  },
  {
    "id": 2,
    "name": "bar",
    "email": "bar@gmail.com"
  }
]
```

### response with 400
```javascript
//<response=400>
[
  {
    id: 1,
    name: "xx", // hello
    email: "foo@gmail.com",
  },
  {
    "id": 2,
    "name": "bar",
    "email": "bar@gmail.com"
  }
]
```
