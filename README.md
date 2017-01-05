# Et_vrm

# VRM
Visitor Registration Manager For Small Business

```
This is a Visitor Registration Manager that allows small business's to keep track of their check-in/check-out process.
The VRM provides notifications to admins on check in process via email/text/etc.

The check-in includes a form that asks for Name, Appointment Time, Arrival Time.
There are two types of check-in. Adult and Child. The Child needs a separate form that proves the existence of a legal guardian.
There might be photograph and signature options.
Other things coming soon!
```
// ┌───────────────────────────────────────────────────────────────┐
// │                            users                              │
// ├─────────────┬─────────────────────────┬───────────────────────┤
// │id           │serial                   │not null               │
// |name         |varchar                  |not null               |
// |appointment t|time                     |not null               |
// │created_at   │timestamp with time zone │not null default now() │
// │updated_at   │timestamp with time zone │not null default now() │
// └─────────────┴─────────────────────────┴───────────────────────┘

// ┌───────────────────────────────────────────────────────────────┐
// │                            admin                              │
// ├─────────────┬─────────────────────────┬───────────────────────┤
// │id           │serial                   │not null               │
// |name         |varchar                  |not null               |
// |password     |hashed_password, char60  |not null               |
// │created_at   │timestamp with time zone │not null default now() │
// │updated_at   │timestamp with time zone │not null default now() │
// └─────────────┴─────────────────────────┴───────────────────────┘
