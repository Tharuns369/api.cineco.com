ALTER TABLE "insurance_payors" RENAME TO "users";--> statement-breakpoint
ALTER TABLE "users" DROP CONSTRAINT "insurance_payors_email_unique";--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");