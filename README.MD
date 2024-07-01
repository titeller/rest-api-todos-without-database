
# Rest API for todo list from JSON file

## API get all todo
method `GET`
`/api/todo`

response
```
{
    "count": 3,
    "data": {
        "todos": [
            {
                "id": "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
                "title": "Todo Rest API without database connection",
                "content": "Todo Rest API without database connection",
                "status": "pending",
                "tags": [
                    "work",
                    "assignment",
                    "api"
                ],
                "createdAt": "2024-06-29T08:14:47.294Z",
                "updatedAt": "2024-06-29T08:14:47.294Z"
            },
            {
                "id": "110ec58a-a0f2-4ac4-8393-c866d813b8d1",
                "title": "20 Question for mobile application",
                "content": "20 Question for mobile application",
                "status": "completed",
                "tags": [
                    "work",
                    "assignment",
                    "react-native"
                ],
                "createdAt": "2024-06-29T08:15:47.294Z",
                "updatedAt": "2024-06-29T08:15:47.294Z"
            },
            {
                "id": "1ef35f39-d181-6160-88e0-f035b868deac",
                "title": "Technical Test",
                "status": "cancelled",
                "content": "Write a function to find the longest common prefix string amongst an array of strings.",
                "tags": [
                    "work",
                    "assignment",
                    "function",
                    "logic"
                ],
                "createdAt": "2024-06-29T08:16:52.294Z",
                "updatedAt": "2024-06-29T08:16:52.294Z"
            }
        ]
    }
}
```

## API create new todo
method `POST`
path `/api/todo`
request body
```
{
	"title": "ggwp",
	"content": "abcd",
	"tags": ["a", "b"]
}
```

## API get todo description
method `GET`
path `/api/todo/:todoId`

## API update todo description
method `PUT`
path `/api/todo/:todoId`
request body
```
{
	"title": "ggwp",
	"content": "abcd",
	"tags": ["a", "b"]
}
```

## API update todo status
method `PUT`
path `/api/todo/:todoId`
request body
```
{
	"status": "completed"
}
```

## API update todo status
method `DELETE`
path `/api/todo/:todoId`