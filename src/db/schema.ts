import {
  date,
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const departmentTable = pgTable("department", {
  id: serial("id").primaryKey(),
  name: text("department_name").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const designationTable = pgTable("designation", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull().unique(),
  description: text("description"),
});

export const instituteTable = pgTable("institute", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  country: text("country").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const facultyTable = pgTable("faculties", {
  id: varchar("id", { length: 10 }).primaryKey(),
  facultyName: text("faculty_name").notNull(),
  department: text("department")
    .notNull()
    .references(() => departmentTable.name),
  designation: text("designation")
    .notNull()
    .references(() => designationTable.name),
  email: text("email").notNull().unique(),
  instituteID: integer("institute_id")
    .notNull()
    .references(() => instituteTable.id),
  createdAt: timestamp("created_at").defaultNow(),
});

export const conferenceTable = pgTable("conferences", {
  id: serial("id").primaryKey(),
  facultyID: varchar("faculty_id", { length: 10 }).notNull(),
  eventName: text("event_name").notNull(),
  eventVenue: text("event_venue").notNull(),
  dateOfEvent: date("date_of_event").notNull(),
  link: text("event_link").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const courseTable = pgTable("courses", {
  courseID: serial("id").primaryKey(),
  facultyID: varchar("faculty_id", { length: 10 })
    .notNull()
    .references(() => facultyTable.id),
  courseName: text("course_name").notNull(),
  courseProvider: text("course_provider").notNull(),
  dateOfCompletion: date("date_of_completion").notNull(),
  certificateLink: text("certificate_link").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const grantStatus = pgEnum("grant_status", [
  "Accepted",
  "Waiting",
  "Rejected",
]);

export const grantTable = pgTable("grants", {
  id: serial("id").primaryKey(),
  proposedBy: varchar("faculty_id", { length: 10 })
    .notNull()
    .references(() => facultyTable.id),
  title: text("title").notNull(),
  appliedOn: date("applied_on").notNull(),
  grantAmount: integer("grant_amount").notNull(),
  status: grantStatus("status").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const journalType = pgEnum("journal_types", [
  "Wos",
  "Scopus",
  "UGC care",
]);

export const journalTable = pgTable("journals", {
  id: serial("id").primaryKey(),
  facultyID: varchar("faculty_id", { length: 10 })
    .notNull()
    .references(() => facultyTable.id),
  publisher: text("publisher").notNull(),
  nameOfJournal: text("name_of_journal").notNull(),
  journalType: journalType("journal_type").notNull(),
  dateOfPublication: date("date_of_publication").notNull(),
  DOI: text("doi").notNull(),
  issueNumber: integer("issue_number").notNull(),
  volumeNumber: integer("volume_number").notNull(),
  paperLink: text("paper_link").notNull(),
  journalLink: text("journal_link").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const patentTable = pgTable("patents", {
  id: serial("id").primaryKey(),
  publisher: text("publisher").notNull(),
  title: text("title").notNull(),
  dateOfPublication: date("date_of_publication").notNull(),
  facultyID: varchar("faculty_id", { length: 10 })
    .notNull()
    .references(() => facultyTable.id),
  journalLink: text("journal_link").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
