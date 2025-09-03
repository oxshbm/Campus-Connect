Here’s a **refined, structured, and concise version** of your prompt — without redundancies and with clear formatting:

---

## ✅ **Prompt: Build a Functional Frontend for “Campus Connect”**

### 🎯 **Goal**

Develop a **responsive, multipage frontend** for **Campus Connect**, a platform that helps students, alumni, and mentors connect for collaboration, learning, and career growth. Focus on **clean UI/UX, reusable components, and smooth navigation**.

---

### 🧩 **Tech Stack (Frontend Only)**

* React.js with React Router
* TailwindCSS (or Bootstrap)
* Axios (for mock API calls)
* Optional: Redux for state management

---

### 🗂️ **Website Structure & Routes**

| Page Name        | Route Path       | Description                                          |
| ---------------- | ---------------- | ---------------------------------------------------- |
| Landing          | `/`              | Hero section with login/register buttons             |
| Login            | `/login`         | User login with role selection                       |
| Register         | `/register`      | User registration with role-based fields             |
| Dashboard        | `/dashboard`     | Cards linking to modules: groups, Q\&A, alumni, etc. |
| Study Groups     | `/groups`        | Browse, filter, join, or create groups               |
| Group Details    | `/groups/:id`    | Info, members, discussions                           |
| Questions List   | `/questions`     | Browse questions with filters                        |
| Ask Question     | `/questions/ask` | Post a new question                                  |
| Question Details | `/questions/:id` | View Q\&A with comments                              |
| Alumni Directory | `/alumni`        | Search & connect with alumni                         |
| Alumni Profile   | `/alumni/:id`    | Alumni profile + connect option                      |
| Projects         | `/projects`      | Browse/join projects                                 |
| Post Project     | `/projects/new`  | Submit new project                                   |
| Project Details  | `/projects/:id`  | View project details & members                       |
| Mentorship       | `/mentorship`    | Browse/request mentorship                            |
| Events Calendar  | `/events`        | Interactive campus event calendar                    |
| Workshops        | `/workshops`     | List of paid workshops                               |
| Workshop Details | `/workshops/:id` | Details + registration                               |
| Profile          | `/profile`       | User bio, projects, groups, workshops                |
| Admin Panel\*    | `/admin`         | Manage events/workshops (optional)                   |

---

### 🧭 **Navigation Bar**

Visible after login with links to:
Dashboard | Groups | Q\&A | Alumni | Projects | Mentorship | Events | Workshops | Profile | Logout

---

### 📦 **Core Components**

* **Navbar + Sidebar**
* **Cards** (Groups, Projects, Workshops, Events)
* **Forms** (Login/Register, Post Question, Post Project, Mentorship Request)
* **Calendar** (Events page)
* **Modal/Dialog** (Join group, project interest, workshop payment)

---

### 📱 **Page Details**

1. **Landing (`/`)** → Hero section + Login/Register buttons
2. **Dashboard (`/dashboard`)** → Grid of cards for quick navigation
3. **Study Groups (`/groups`)** → Search, filter, join/create groups
4. **Q\&A (`/questions`)** → Post and answer questions
5. **Alumni Connect (`/alumni`)** → Search alumni, view profiles, request guidance
6. **Projects (`/projects`)** → Post/join projects, show interest
7. **Mentorship (`/mentorship`)** → Browse mentors, request mentorship
8. **Events (`/events`)** → Calendar view with event details & registration
9. **Workshops (`/workshops`)** → Paid workshops with registration flow
10. **Profile (`/profile`)** → User bio, groups, projects, mentorships, workshops

---

### 🔐 **Roles & Permissions**

* **Student** → All features
* **Alumni** → Alumni connect, mentorship
* **Admin** → Manage workshops, events, approvals

---

### ✅ **Functionality Summary**

* Route-based navigation with clean UI
* Reusable card, form, modal, and calendar components
* Filters/search for groups, alumni, questions, and projects
* Payment simulation for workshops
* Fully responsive design

---

👉 Would you like me to **convert this into a React component folder structure** (like `pages/`, `components/`, `routes/`) so you can directly start coding?
