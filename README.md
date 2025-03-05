# Portfolio REST API - DESIGN

This API manages information for my portfolio, including projects, skills and information about me. It is built using Node.js, Express, TypeScript and MongoDB.

## 1. Object Modeling

Below are the structures for the resources handled by the API.

### Project Model

| Field         | Type          | Description                      |
| ------------- | ------------- | -------------------------------- |
| `id`          | Number        | Project ID                       |
| `title`       | String        | Project title (required)         |
| `description` | String        | Project description (required)   |
| `techStack`   | Array[String] | Technologies used (optional)     |
| `githubLink`  | String        | GitHub repository URL (optional) |
| `liveDemo`    | String        | Deployed project URL (optional)  |
| `image`       | String        | Image URL (optional)             |
| `createdAt`   | Date          | Timestamp (default: now)         |
| `updatedAt`   | Date          | Timestamp (default: now)         |

---

### About Model

| Field          | Type            | Description                 |
| -------------- | --------------- | --------------------------- |
| `id`           | Number          | Primary key                 |
| `firstName`    | String          | My first name               |
| `lastName`     | String          | My last name                |
| `email`        | String          | My email                    |
| `password`     | String (hashed) | My password                 |
| `age`          | Number          | My age                      |
| `bio`          | String          | My biography                |
| `profileImage` | String          | URL to the my profile image |
| `skills`       | Array[String]   | List of my skills           |
| `socials`      | Array[Object]   | My social media links       |

## 2. Recource URIS

The API follows RESTful principles and uses the following URI structure:

| Resource     | URI             | Description                  |
| ------------ | --------------- | ---------------------------- |
| **Projects** | `/api/projects` | Manages portfolio projects   |
| **About**    | `/api/about`    | Manages information about me |

## 3. Resource Representations

These endpoints return JSON representations of the resources.

**Example: Retrieve all projects** (GET /api/projects)

```json
{
  "id": 1,
  "title": "IMBD-CLONE",
  "description": "A website for managing your favourite movies",
  "techStack": ["PHP", "Laravel", "MariaDB"],
  "githubLink": "https://github.com/daviddyberg/imbd-clone",
  "liveDemo": "https://imbd-clone.vercel.app",
  "image": "https://example.com/project-image.jpg",
  "createdAt": "2025-03-04T12:00:00Z",
  "uddatedAt": "2025-03-04T12:00:00Z"
}
```

**Example: Retrieve all information about me** (GET /api/about)

```json
{
  "id": 1,
  "firstName": "David",
  "lastName": "Dyberg",
  "email": "david@example.com",
  "password": "password",
  "age": 23,
  "bio": "Fullstack Developer passionate about web technologies.",
  "profileImage": "https://example.com/profile-image.jpg",
  "skills": ["JavaScript", "React", "Tailwind CSS", "PHP", "Laravel"],
  "socials": {
    "github": "https://github.com/daviddyberg",
    "linkedin": "https://linkedin.com/in/daviddyberg"
  },
  "createdAt": "2025-03-04T12:00:00Z",
  "updatedAt": "2025-03-04T12:00:00Z"
}
```

## 4. Assigning of HTTP Methods

Each resource supports different HTTP methods depending on access permissions:

### Projects:

| Method   | Endpoint Example    | Description               | Access Control |
| -------- | ------------------- | ------------------------- | -------------- |
| `GET`    | `/api/projects`     | Retrieve all projects     | ✅ Public      |
| `GET`    | `/api/projects/:id` | Retrieve a single project | ✅ Public      |
| `POST`   | `/api/projects`     | Add a new project         | ❌ Restricted  |
| `PUT`    | `/api/projects/:id` | Update a project          | ❌ Restricted  |
| `DELETE` | `/api/projects/:id` | Delete a project          | ❌ Restricted  |

### About:

| Method | Endpoint Example | Description                  | Access Control |
| ------ | ---------------- | ---------------------------- | -------------- |
| `GET`  | `/api/about`     | Retrieve my personal details | ✅ Public      |
| `PUT`  | `/api/about`     | Update personal details      | ❌ Restricted  |

---

✅ **Public** → Anyone can access  
❌ **Restricted** → Only the API owner/admin can modify data
