# Expense Tracker

A full-stack expense tracking application built for the Bettrsw Software Engineer assessment.

## Stack
- **Backend:** Python + Flask (REST API)
- **Frontend:** React (Vite, SPA)
- **Database:** SQLite (can be swapped for Postgres/MySQL)
- **AI Usage:** GitHub Copilot, ChatGPT, and other LLMs for code generation, review, and documentation

---

## Features
- User authentication (JWT, secure password hashing)
- Add, view, and delete expenses
- CSV import/export for transactions
- Dashboard with charts and insights
- Responsive, modern UI (dark mode)
- Automated tests (unit/integration)

---

## Architecture & Structure
- **backend/**: Flask app, API routes, domain models, services, migrations
- **frontend/**: React SPA, routing, API client, dashboard, auth, styles
- **AI Guidance Files:** See `EXTENSION.md`, `ARCHITECTURE.md`, `TECHNICAL_DECISIONS.md`, `agents.md` for AI usage and constraints

---

## Key Technical Decisions
- **Separation of Concerns:** Clear split between API, domain, and infrastructure
- **Validation:** Pydantic schemas (backend), PropTypes (frontend)
- **Observability:** Error handling, logging, and user feedback
- **Change Resilience:** Modular code, easy to extend (add new features with minimal impact)
- **Interface Safety:** API schemas, input validation, and type hints
- **AI Usage:** All AI-generated code was reviewed and tested before inclusion

---

## Setup & Run

### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
flask db upgrade  # run migrations
flask run
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

---

## Testing
- Backend: `pytest` (see `backend/tests/`)
- Frontend: `npm test` (if tests are present)

---

## Risks & Tradeoffs
- **SQLite** is used for simplicity; production should use Postgres/MySQL
- **AI-generated code** may require extra review for edge cases
- **SPA routing**: Deep links require 404.html fallback for static hosting

---

## Extension Approach
- Add new features by creating new API endpoints and React components
- Use service/repository pattern for backend logic
- Add new AI guidance files as needed for future agents

---

## AI Guidance & Observability
- See `EXTENSION.md`, `ARCHITECTURE.md`, and `agents.md` for AI prompting rules, coding standards, and constraints
- Failures are logged and surfaced to the user for easy diagnosis

---

## Contact
For questions, contact: assessments@bettrsw.com

---

**Note:** This project was built for the Bettrsw assessment. All code, documentation, and AI guidance files are included for review.
