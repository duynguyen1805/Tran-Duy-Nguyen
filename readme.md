# Hướng dẫn cài đặt và thực thi

# Cài đặt

Clone dự án từ GitHub về máy tính:

```
   git clone https://github.com/duynguyen1805/Tran-Duy-Nguyen.git
   cd Tran-Duy-Nguyen
```

# Thực thi

## Môi trường phát triển

- NodeJS version 20.11
- npm version 10.4
- IDE: Visual Studio Code
- Tool: Postman

## PROBLEM 4: Sum to N

Tại thư mục gốc dự án.

- Khởi chạy problem4 (đã biên dịch từ Typescript), thực hiện lệnh:

```
   node .\src\problem4\sumtoN.js
```

## PROBLEM 5: A Crude Server

# Todo API

## Nội dung

- [Installation](#installation)
- [Endpoints](#endpoints)
  - [Create a Todo](#create-a-todo)
  - [Get All Todos](#get-all-todos)
  - [Get Todo by ID](#get-todo-by-id)
  - [Update Todo by ID](#update-todo-by-id)
  - [Delete Todo by ID](#delete-todo-by-id)

## Installation

Cài đặt, tạo biến môi trường, khởi chạy theo các bước sau:

1. Cài đặt thư viện cần thiết:

   ```sh
   cd .\src\problem5\
   npm install
   ```

2. Cài đặt biến môi trường:
   Tạo file `.env` trong thư mục gốc `problem5`, sao chép nội dung bên dưới:

   ```sh
   PORT=4000
   DEV_DB_NAME=for_99tech
   PASSWORD_MONGODB_ATLAS=duynguyenqwert
   ```

3. Khởi chạy Server:
   ```sh
   npm run dev
   ```

Server khởi chạy theo đường dẫn `http://localhost:4000`.

## Endpoints

_Đặt giả định tất cả tham số truyền vào (body, params) đều hợp lệ._
_Sử dụng Postman hoặc phần mềm chức năng tương tự để gọi API_

### Create a Todo

- **URL:** `/v1/api/todo/create`
- **Method:** `POST`
- **Headers:**
  - `Content-Type: application/json`
- **Body:**
  ```json
  {
    "title": "Sample Todo",
    "description": "This is a sample todo description",
    "completed": false
  }
  ```
- **Success Response example**
  ```json
  {
    "message": "Todo created successfully",
    "status": 201,
    "metadata": {
      "title": "Sample Todo",
      "description": "This is a sample todo description",
      "completed": false,
      "_id": "6695eff93a4459832cad2f62",
      "createdAt": "2024-07-16T03:58:49.949Z",
      "updatedAt": "2024-07-16T03:58:49.949Z"
    }
  }
  ```
- **Error Response example**

  ```json
  {
    "status": "error",
    "status": 400,
    "message": "Todo already exists"
  }
  ```

  ### Get All Todos

- **URL:** `/v1/api/todo/get-list`
- **Method:** `GET`
- **Success Response example**
  ```json
  {
    "message": "Get Todo list successfully",
    "status": 200,
    "metadata": [
      {
        "title": "Sample Todo",
        "description": "This is a sample todo description",
        "completed": false,
        "_id": "6695eff93a4459832cad2f62",
        "createdAt": "2024-07-16T03:58:49.949Z",
        "updatedAt": "2024-07-16T03:58:49.949Z"
      },
      {
        "title": "Sample Todo 1",
        "description": "This is a sample todo 1 description",
        "completed": false,
        "_id": "6695ed72ca18d2fbd9ca07fc",
        "createdAt": "2024-07-16T03:58:49.949Z",
        "updatedAt": "2024-07-16T03:58:49.949Z"
      }
    ]
  }
  ```

### Get Todo by ID

- **URL:** `/v1/api/todo/get-by-id/:id`
- **Method:** `GET`
- **Success Response example**
  ```json
  {
    "message": "Get Todo by id successfully",
    "status": 200,
    "metadata": {
      "title": "Sample Todo",
      "description": "This is a sample todo description",
      "completed": false,
      "_id": "6695eff93a4459832cad2f62",
      "createdAt": "2024-07-16T03:58:49.949Z",
      "updatedAt": "2024-07-16T03:58:49.949Z"
    }
  }
  ```
  - **Error Response example**
  ```json
  {
    "status": "error",
    "status": 404,
    "message": "Todo not found"
  }
  ```

### Update Todo by ID

- **URL:** `/v1/api/todo/update/:id`
- **Method:** `PUT`
- **Headers:**
  - `Content-Type: application/json`
- **Body:**
  ```json
  {
    "title": "Sample Todo [update new]",
    "description": "This is a sample todo description [update new]",
    "completed": true
  }
  ```
- **Success Response example**
  ```json
  {
    "message": "Todo updated successfully",
    "status": 200,
    "metadata": {
      "title": "Sample Todo [update new]",
      "description": "This is a sample todo description [update new]",
      "completed": true,
      "_id": "6695eff93a4459832cad2f62",
      "createdAt": "2024-07-16T03:58:49.949Z",
      "updatedAt": "2024-07-16T03:58:49.949Z"
    }
  }
  ```
  - **Error Response example**
  ```json
  {
    "status": "error",
    "status": 404,
    "message": "Todo not found"
  }
  ```

### Delete Todo by ID

- **URL:** `/v1/api/todo/delete/:id`
- **Method:** `DELETE`
- **Headers:**
  - `Content-Type: application/json`
- **Body:**
  ```json
  {
    "title": "Sample Todo [update new]",
    "description": "This is a sample todo description [update new]",
    "completed": true
  }
  ```
- **Success Response example**
  ```json
  {
    "message": "Todo deleted successfully",
    "status": 200,
    "metadata": 1
  }
  ```
  - **Error Response example**
  ```json
  {
    "status": "error",
    "status": 404,
    "message": "Todo not found"
  }
  ```
  ```json
  {
    "status": "error",
    "status": 404,
    "message": "Something wrong - To do not found or already deleted"
  }
  ```
