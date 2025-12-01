## Session
Backend URL:
- GET session by ID: http://localhost:8080/session/{id}
- POST create session: http://localhost:8080/session
- PUT update session: http://localhost:8080/session/{id}

## Notes for me
- API URL: http://localhost:8080/OpenTrainer/session
- UI URL: http://localhost:4200/

- services/ → talks to backend
- session/ → list and dashboard
- session-detail/ → one session card
- session-form/ → form for creating sessions

## **Create New Session**
- After creating new sessions, RELOAD the page to see it listed under the sessions

## **Delete Session**
- Had to add DELETE to the API repo Session controller and service
- Delete works instantly -- it removes sessions from frontend from the sessions list being displayed an also confirmed that it removes from the backend data as well. 