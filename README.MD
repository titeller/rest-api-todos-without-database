
# Rest API for todo list from JSON file

## API get all todo
method `GET`
`/api/todo`

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