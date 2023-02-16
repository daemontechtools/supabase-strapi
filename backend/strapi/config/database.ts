export default ({ env }) => ({
  connection: {
    client: env('DATABASE_CLIENT', 'postgres'),
    connection: {
      host: env('DATABASE_HOST', "127.0.0.1"),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'postgres'),
      user: "supabase_admin",
      password: env('DATABASE_PASSWORD', 'postgres'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});

// client: "postgres",
// connection: {
//   host: "db",
//   port: 5432,
//   database: "postgres",
//   user: "supabase_admin",
//   password: "nkkBgrN9pZdznihMFRWZoKzCRCNC3HKKw83xfxTcoKs6gg8Y2e5VTyxgBF4pnwMR",
//   ssl: env.bool('DATABASE_SSL', false),