/**
 * Express router paths go here.
 */

export default {
  Base: "/api",
  Users: {
    Base: "/users",
    Get: "/all",
    Add: "/add",
    Update: "/update",
    Delete: "/delete/:id",
  },
  Example: {
    Base: "/example",
    Get: "/example/all",
    Add: "/example/add",
    Update: "/example/update",
    Delete: "/example/delete/:id",
  },
} as const;
