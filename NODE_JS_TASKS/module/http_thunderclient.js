const http = require("http");
let users = [
    {id:1,name:"Srinidhi"},
    {id:2,name:"Lahari"},
    {id:3,name:"Ravali"}
];
const server = http.createServer((req, res) => {
    // GET all users
    if (req.method === "GET" && req.url === "/users") {
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(users));
    }
    // GET single user by id
    if (req.method === "GET" && req.url.startsWith("/users/")) {
        const id = parseInt(req.url.split("/")[2]);
        const user = users.find(u => u.id === id);
        if (!user) {
            res.writeHead(404, { "Content-Type": "application/json" });
            return res.end(JSON.stringify({ message: "User not found" }));
        }
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(user));
    }
    // POST - Add new user
    if (req.method === "POST" && req.url === "/users") {
        let body = "";
        req.on("data", chunk => {
            body += chunk.toString();
        });
        req.on("end", () => {
            const newUser = JSON.parse(body);
            newUser.id = users.length + 1;
            users.push(newUser);
            res.writeHead(201, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                message: "User added successfully",
                user: newUser
            }));
        });
        return;
    }
    // PUT - Update user
    if (req.method === "PUT" && req.url.startsWith("/users/")) {
        const id = parseInt(req.url.split("/")[2]);
        let body = "";
        req.on("data", chunk => {
            body += chunk.toString();
        });
        req.on("end", () => {
            const updatedData = JSON.parse(body);
            const userIndex = users.findIndex(u => u.id === id);
            if (userIndex === -1) {
                res.writeHead(404, { "Content-Type": "application/json" });
                return res.end(JSON.stringify({
                    message: "User not found"
                }));
            }
            users[userIndex] = {
                ...users[userIndex],
                ...updatedData
            };
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                message: "User updated successfully",
                user: users[userIndex]
            }));
        });
        return;
    }
    // DELETE - Remove user
    if (req.method === "DELETE" && req.url.startsWith("/users/")) {
        const id = parseInt(req.url.split("/")[2]);
        const userIndex = users.findIndex(u => u.id === id);
        if (userIndex === -1) {
            res.writeHead(404, { "Content-Type": "application/json" });
            return res.end(JSON.stringify({
                message: "User not found"
            }));
        }
        const deletedUser = users.splice(userIndex, 1);
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({
            message: "User deleted successfully",
            user: deletedUser[0]
        }));
    }
    // Route not found
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
        message: "Route not found"
    }));
});
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

/*output:

GET:http://localhost:3000/users

[
  {
    "id": 1,
    "name": "Srinidhi"
  },
  {
    "id": 2,
    "name": "Lahari"
  },
  {
    "id": 3,
    "name": "Ravali"
  }
]

GET:http://localhost:3000/users/1

{
  "id": 1,
  "name": "Srinidhi"
}

POST:http://localhost:3000/users
Body -> JSON
{
    "name": "Ram"
}

Response
{
  "message": "User added successfully",
  "user": {
    "name": "Ram",
    "id": 4
  }
}


PUT:http://localhost:3000/users/3

Body ->
{
    "name": "Sita"
}

Response
{
  "message": "User updated successfully",
  "user": {
    "id": 3,
    "name": "Sita"
  }
}


DELETE:http://localhost:3000/users/3
Response
{
  "message": "User deleted successfully",
  "user": {
    "id": 3,
    "name": "Sita"
  }
}
*/