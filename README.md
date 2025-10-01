

Fill this in later, describe project

## Tech Stack

| **Component**      | **Tool**                |
| ------------------ | ----------------------- |
| Backend            | Python, FastAPI         |
| Frontend           | ???                |
| Reverse Proxy      | NGINX                   |
| Containerization   | Docker + Docker Compose |



<pre>
                  ┌────────────┐
                  │   Client   │
                  └─────┬──────┘
                        │
   ┌────────────────────+─────────────────────┐
   │                    |             Host    │
   │                    |                     │
   │            ┌───────▼───────┐             │
   │            │ Reverse Proxy │             │
   │            └────┬──┬───────┘             │
   │                 │  │                     │
   │      ┌──────────┘  └──────────┐          │
   │ ┌────▼────────┐       ┌───────▼──────┐   │
   │ │   Backend   │       │   Frontend   │   │
   │ └─────────────┘       └──────────────┘   │
   │                                          │
   └──────────────────────────────────────────┘ 
</pre>





