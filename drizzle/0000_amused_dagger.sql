DO $$ BEGIN
 CREATE TYPE "public"."status" AS ENUM('ACTIVE', 'INACTIVE');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "insurance_payors" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" varchar,
	"last_name" text,
	"status" "status" DEFAULT 'ACTIVE',
	"dob" date,
	"email" varchar NOT NULL,
	"phone" varchar DEFAULT null,
	"password" text NOT NULL,
	"isPrivate" boolean DEFAULT false NOT NULL,
	"address" varchar DEFAULT null,
	"state" varchar NOT NULL,
	"city" varchar DEFAULT null,
	"country" varchar DEFAULT null,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	CONSTRAINT "insurance_payors_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "status_idx" ON "insurance_payors" USING btree ("status");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "email_idx" ON "insurance_payors" USING btree ("email");